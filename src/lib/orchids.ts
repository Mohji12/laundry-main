/**
 * Orchid Dry Cleaners & Launderette — single source of truth for business data.
 * Update the WhatsApp number, services, pricing and areas here.
 */

// UK format with country code, no leading zero, no spaces or symbols.
export const ADMIN_WHATSAPP_NUMBER = "447868776360";
export const PHONE_DISPLAY = "+44 7868 776360";
/** Direct WhatsApp chat — use for all phone number click targets. */
export const WHATSAPP_URL = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}`;
export const ADDRESS_LINES = [
  "Orchid Dry Cleaners & Launderette",
  "Ladbroke Grove, North Kensington",
  "London W10 5NE",
];
export const SITE_DOMAIN = "orchiddrycleaners.co.uk";

export const SERVICE_AREAS = [
  "Ladbroke Grove",
  "North Kensington",
  "Notting Hill",
  "Kensal Rise",
  "Holland Park",
  "Westbourne Park",
  "Queen's Park",
];

export const SERVED_POSTCODES = ["W10", "W11", "W2", "W9", "NW10", "NW6", "W14"];

export const OPENING_HOURS = [
  { day: "Monday – Friday", hours: "8:00 – 19:00" },
  { day: "Saturday", hours: "9:00 – 18:00" },
  { day: "Sunday", hours: "Collections by request" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  from: string;
};

export const SERVICES: Service[] = [
  {
    slug: "dry-cleaning",
    title: "Dry Cleaning",
    description: "Garment-specific solvents and hand-finished pressing for suits, dresses and coats.",
    from: "£4.50",
  },
  {
    slug: "wash-dry-fold",
    title: "Wash, Dry & Fold",
    description: "Everyday laundry washed separately, folded beautifully, back within 24 hours.",
    from: "£18.00 / bag",
  },
  {
    slug: "ironing",
    title: "Ironing & Pressing",
    description: "Crisp collars and sharp creases — pressed by hand, never rushed by machine.",
    from: "£2.20 / item",
  },
  {
    slug: "household",
    title: "Household Textiles & Bedding",
    description: "Duvets, throws, pillows and bed linen returned fresh and neatly wrapped.",
    from: "£14.00",
  },
  {
    slug: "curtains",
    title: "Curtain Cleaning",
    description: "Take-down, clean and re-hang available across North Kensington.",
    from: "£28.00 / m²",
  },
  {
    slug: "wedding-dress",
    title: "Wedding Dress Care",
    description: "Specialist cleaning, restoration and acid-free boxing for keepsake gowns.",
    from: "£145.00",
  },
  {
    slug: "leather-suede",
    title: "Leather, Fur & Suede",
    description: "Conditioning and re-colouring by specialist finishers for delicate hides.",
    from: "£55.00",
  },
  {
    slug: "repairs",
    title: "Repairs & Alterations",
    description: "In-house tailoring: hems, zips, resizing and invisible mending.",
    from: "£12.00",
  },
  {
    slug: "commercial",
    title: "Commercial / Trade Laundry",
    description: "Restaurants, salons and short-lets — scheduled collections, trade pricing.",
    from: "On request",
  },
];

export const QUOTE_SERVICE_OPTIONS = [
  "Dry Cleaning",
  "Wash & Fold",
  "Ironing",
  "Household Items",
  "Curtains",
  "Wedding Dress",
  "Leather & Suede",
  "Repairs & Alterations",
];

export const PRICING = [
  {
    title: "Clothes",
    items: [
      { name: "Shirt / blouse (cleaned & pressed)", price: "£4.50" },
      { name: "Two-piece suit", price: "£16.50" },
      { name: "Dress (day)", price: "£12.00" },
      { name: "Wool coat", price: "£19.50" },
      { name: "Wash & fold bag (up to 6kg)", price: "£18.00" },
    ],
  },
  {
    title: "Household & Bedding",
    items: [
      { name: "Double duvet (4.5 tog)", price: "£24.00" },
      { name: "Bed linen set", price: "£16.00" },
      { name: "Throw / blanket", price: "£18.00" },
      { name: "Cushion cover", price: "£6.50" },
      { name: "Curtains (lined, per m²)", price: "£28.00" },
    ],
  },
  {
    title: "Wedding & Specialist",
    items: [
      { name: "Wedding dress clean", price: "£145.00" },
      { name: "Dress clean & keepsake box", price: "£195.00" },
      { name: "Christening gown", price: "£65.00" },
      { name: "Leather jacket", price: "£55.00" },
      { name: "Suede coat", price: "£72.00" },
    ],
  },
  {
    title: "Repairs & Alterations",
    items: [
      { name: "Trouser hem", price: "£12.00" },
      { name: "Zip replacement", price: "£22.00" },
      { name: "Dress taken in", price: "£28.00" },
      { name: "Invisible mending", price: "from £18.00" },
      { name: "Button / press-stud", price: "£4.00" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    area: "Notting Hill, W11",
    quote:
      "They collected my husband's suits at 8am and returned them the next evening pressed better than the shop they came from. Genuinely faultless.",
  },
  {
    name: "Daniel O.",
    area: "Ladbroke Grove, W10",
    quote:
      "One WhatsApp message and it's done — no apps, no accounts. It feels like having a concierge for laundry day.",
  },
  {
    name: "Priya S.",
    area: "Kensal Rise, NW10",
    quote:
      "My mother's silk saree had a stain everyone else refused to touch. Orchid took their time and it came back perfect.",
  },
  {
    name: "Charlotte B.",
    area: "Holland Park, W11",
    quote:
      "They cleaned and boxed my wedding dress with real care, and kept me updated the whole way. Worth every penny.",
  },
  {
    name: "Tom H.",
    area: "Westbourne Park, W2",
    quote:
      "Weekly wash and fold for our family of five. Always on time, always neatly wrapped. A proper local business.",
  },
];

export const FAQS = [
  {
    q: "How quickly will I get my items back?",
    a: "Standard turnaround is 24–48 hours from collection. A same-day pickup with next-day delivery is available across W10 and W11, and express 24hr service can be arranged on request.",
  },
  {
    q: "Which areas do you collect from?",
    a: "We collect free of charge across Ladbroke Grove, North Kensington, Notting Hill, Kensal Rise, Holland Park, Westbourne Park and Queen's Park. If you're just outside, message us — we often can still help.",
  },
  {
    q: "How does the WhatsApp quote work?",
    a: "Answer three short questions here on the site and we build a pre-filled WhatsApp message for you. Send it, and a real person at our Ladbroke Grove shop confirms your price and collection slot — usually within minutes during opening hours.",
  },
  {
    q: "How do I pay?",
    a: "Card, Apple Pay, Google Pay or bank transfer. We send a payment link over WhatsApp once your items are checked in, so you always know the final price before delivery.",
  },
  {
    q: "What if I'm not happy with an item?",
    a: "We re-clean free of charge. Every garment is quality-checked by hand before it leaves us, and if anything isn't right we'll put it right.",
  },
  {
    q: "Can I cancel or reschedule a collection?",
    a: "Of course — just reply to your WhatsApp thread up to two hours before your slot and we'll move it, no charge.",
  },
];
