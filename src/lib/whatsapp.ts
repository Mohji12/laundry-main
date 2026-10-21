import { ADMIN_WHATSAPP_NUMBER, SITE_DOMAIN } from "./orchids";

export type QuoteDraft = {
  services: string[];
  load: string;
  name: string;
  postcode: string;
  day: string;
  time: string;
};

function waLink(message: string) {
  return `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(waLink(message), "_blank", "noopener,noreferrer");
}

export function quoteMessage(draft: QuoteDraft) {
  return [
    "Hi Orchid Dry Cleaners! I'd like a quote.",
    "",
    `Services: ${draft.services.join(", ") || "Not specified"}`,
    `Estimated load: ${draft.load || "Not sure"}`,
    `Name: ${draft.name || "-"}`,
    `Postcode: ${draft.postcode.toUpperCase() || "-"}`,
    `Preferred pickup: ${draft.day || "-"}${draft.time ? `, ${draft.time}` : ""}`,
    "",
    `Sent from ${SITE_DOMAIN}`,
  ].join("\n");
}

export function greetingMessage(topic?: string) {
  return [
    topic
      ? `Hi Orchid Dry Cleaners! I'd like a quote for ${topic}.`
      : "Hi Orchid Dry Cleaners! I'd like a quote for a collection.",
    "",
    `Sent from ${SITE_DOMAIN}`,
  ].join("\n");
}

export function openGreeting(topic?: string) {
  openWhatsApp(greetingMessage(topic));
}
