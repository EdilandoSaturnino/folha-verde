import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";

function ProfilePage () {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Perfil do Usuário</h1>
      <div>
        <p>Nome: {session?.user?.name}</p>
        <p>Email: {session?.user?.email}</p>
      </div>
    </Layout>
  );
};

export default ProfilePage;
