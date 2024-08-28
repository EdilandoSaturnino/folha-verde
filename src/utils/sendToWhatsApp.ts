import { Product } from '../types/product'
import { formatCurrency } from './formatCurrency'

export const sendToWhatsApp = (items: Product[], formData: any) => {
  const phoneNumber = '5511967067508'
  const message = `Olá! Gostaria de fazer o seguinte pedido:

Itens:
${items.map((item) => `${item.name} - ${formatCurrency(item.price)}`).join('\n')}

Total: ${formatCurrency(items.reduce((total, item) => total + item.price, 0))}

Dados de entrega:
Nome: ${formData.name}
Endereço: ${formData.address}
Cidade: ${formData.city}
Estado: ${formData.state}
CEP: ${formData.zipCode}
`

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
