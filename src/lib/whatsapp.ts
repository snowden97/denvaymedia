/** WhatsApp number in international format, digits only (no +, spaces or dashes). */
export const WHATSAPP_NUMBER = "13862057359";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
