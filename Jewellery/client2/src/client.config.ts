// Central brand configuration for client2 — edit this file to re-theme the template.
// Layout/effects components read only from here; no brand content lives in component files.

export const clientConfig = {
  brand: {
    name: "Lumiere",
    legalName: "Lumière Fine Jewellery",
    tagline: "Light, captured in gold",
    logoText: "LUMIÈRE",
    description:
      "Lumière is a Bangalore fine-jewellery atelier crafting one-of-a-kind gold and diamond pieces for modern heirlooms.",
  },

  theme: {
    // Dark, dramatic base with a warm gold accent.
    colors: {
      obsidian: "#0E0C0A",
      charcoal: "#1B1815",
      taupe: "#2C2822",
      ivory: "#F4EFE6",
      gold: "#C9A24B",
      goldSoft: "#E4C878",
    },
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Collections", href: "#collections" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  heroSlides: [
    {
      id: "s1",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=80",
      alt: "Gold necklace draped over dark velvet",
    },
    {
      id: "s2",
      image:
        "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&w=1920&q=80",
      alt: "Diamond ring macro shot on dark background",
    },
    {
      id: "s3",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=80",
      alt: "Model wearing statement gold earrings",
    },
  ],

  hero: {
    heading: "Lumière",
    tagline: "Fine jewellery, handcrafted in Bangalore.",
    ctaLabel: "Explore Collections",
    ctaHref: "#collections",
    secondaryCtaLabel: "Book a Private Viewing",
    secondaryCtaHref: "#contact",
    slideIntervalMs: 5000,
  },

  collections: {
    heading: "Signature Pieces",
    subheading: "New Arrivals",
    viewAllLabel: "View Full Collection",
    viewAllHref: "#",
    products: [
      {
        id: "p1",
        name: "Aurelia Necklace",
        price: "₹1,85,000",
        image:
          "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
        alt: "Gold statement necklace on display",
      },
      {
        id: "p2",
        name: "Solstice Ring",
        price: "₹92,000",
        image:
          "https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=800&q=80",
        alt: "Diamond solitaire ring close-up",
      },
      {
        id: "p3",
        name: "Meridian Earrings",
        price: "₹64,500",
        image:
          "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
        alt: "Gold drop earrings on velvet",
      },
      {
        id: "p4",
        name: "Celeste Bangle",
        price: "₹1,12,000",
        image:
          "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
        alt: "Gold bangle stack on wrist",
      },
      {
        id: "p5",
        name: "Vesper Pendant",
        price: "₹58,000",
        image:
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
        alt: "Delicate gold pendant necklace",
      },
      {
        id: "p6",
        name: "Orion Cufflinks",
        price: "₹47,500",
        image:
          "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=800&q=80",
        alt: "Gold cufflinks on dark fabric",
      },
    ],
  },

  story: {
    heading: "Our Craft",
    body: "Lumière was founded in 2018 by a third-generation goldsmith family in Bangalore. Each piece is cast, set, and polished by hand in our Indiranagar atelier, using ethically sourced gold and conflict-free diamonds. We work almost entirely on commission — every Lumière piece is designed once, for one person, and never repeated.",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Goldsmith hand-finishing a jewellery piece in the atelier",
  },

  highlights: [
    { title: "Certified Diamonds", description: "GIA-certified stones, conflict-free sourcing." },
    { title: "Handcrafted in Bangalore", description: "Cast and set in our Indiranagar atelier." },
    { title: "Bespoke Commissions", description: "One-of-a-kind pieces, designed with you." },
    { title: "Lifetime Resizing", description: "Complimentary resizing and polishing, always." },
  ],

  testimonials: [
    {
      quote: "Lumière designed my engagement ring from a single sketch. The result was beyond anything I imagined.",
      author: "Divya N.",
    },
    {
      quote: "The craftsmanship and attention to detail is extraordinary — this is heirloom-quality work.",
      author: "Rohan M.",
    },
    {
      quote: "A private, unhurried experience. They took the time to understand exactly what I wanted.",
      author: "Kavya S.",
    },
  ],

  contact: {
    heading: "Visit the Atelier",
    addressLines: [
      "Lumière Fine Jewellery",
      "7, 100 Feet Road, Indiranagar",
      "Bangalore, Karnataka 560038",
      "India",
    ],
    // Indiranagar, Bangalore
    lat: 12.9719,
    lng: 77.6412,
    mapZoom: 16,
    hours: [
      { day: "Tuesday – Saturday", time: "11:00 AM – 7:30 PM" },
      { day: "Sunday – Monday", time: "By appointment only" },
    ],
    phone: "+91 86601 51961",
    phoneHref: "tel:+918660151961",
    email: "atelier@lumierejewels.in",
    emailHref: "mailto:atelier@lumierejewels.in",
  },

  whatsapp: {
    number: "918660151961",
    message: "Hi, I'd like to get a landing page built",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  social: {
    instagram: "https://instagram.com/lumiere.jewels",
    facebook: "https://facebook.com/lumiere.jewels",
  },

  seo: {
    title: "Lumière Fine Jewellery — Handcrafted in Indiranagar, Bangalore",
    description:
      "Lumière is a Bangalore fine-jewellery atelier crafting bespoke gold and diamond pieces, handcrafted in Indiranagar. Book a private viewing.",
    url: "https://lumiere-jewels.example.com",
  },
} as const;

export type ClientConfig = typeof clientConfig;
