import React from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Layout from "../components/Layout/Layout";
import LoginForm from "../components/Auth/LoginForm";
import { UserFormData } from "../types/user";

function LoginPage () {
  const router = useRouter();

  const handleLogin = async (data: UserFormData) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </Layout>
  );
};

export default LoginPage;
