// Central brand configuration for Jewellery/client3 — edit this file to re-theme the template.
// Layout/effects components read only from here; no brand content lives in component files.

export const clientConfig = {
  brand: {
    name: "Ember",
    legalName: "Ember Fine Jewellery",
    tagline: "Warmth, set in gold",
    logoText: "EMBER",
    description:
      "Ember is a Bangalore fine-jewellery house crafting bold, statement gold and gemstone pieces from our Lavelle Road atelier.",
  },

  theme: {
    // Deep emerald-black base with a rose-gold accent — bolder and more saturated than a classic gold-on-black jewellery palette.
    colors: {
      onyx: "#0D1210",
      pine: "#16211C",
      sage: "#28362E",
      pearl: "#F3EFE9",
      rosegold: "#C97B63",
      rosegoldSoft: "#E0A48F",
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
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1920&q=80",
      alt: "Statement gold jewellery on dark background",
    },
    {
      id: "s2",
      image:
        "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1920&q=80",
      alt: "Gold bangles stacked on a model's wrist",
    },
    {
      id: "s3",
      image:
        "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=1920&q=80",
      alt: "Gold cufflinks on dark fabric",
    },
  ],

  hero: {
    heading: "Ember",
    tagline: "Bold gold, set for those who don't blend in.",
    ctaLabel: "Explore Collections",
    ctaHref: "#collections",
    secondaryCtaLabel: "Book a Private Viewing",
    secondaryCtaHref: "#contact",
    slideIntervalMs: 5000,
  },

  collections: {
    heading: "Statement Pieces",
    subheading: "No. 07 Collection",
    viewAllLabel: "View Full Collection",
    viewAllHref: "#",
    products: [
      {
        id: "p1",
        name: "Sculpted Cuff",
        price: "₹2,45,000",
        image:
          "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&w=800&q=80",
        alt: "Sculpted gold cuff bracelet",
      },
      {
        id: "p2",
        name: "Emerald Cocktail Ring",
        price: "₹3,10,000",
        image:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
        alt: "Emerald cocktail ring close-up",
      },
      {
        id: "p3",
        name: "Chandelier Earrings",
        price: "₹1,85,000",
        image:
          "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
        alt: "Statement chandelier earrings on display",
      },
      {
        id: "p4",
        name: "Serpent Bangle",
        price: "₹2,20,000",
        image:
          "https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=800&q=80",
        alt: "Serpent-motif gold bangle",
      },
      {
        id: "p5",
        name: "Statement Choker",
        price: "₹4,50,000",
        image:
          "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
        alt: "Gold statement choker necklace",
      },
      {
        id: "p6",
        name: "Signature Cufflinks",
        price: "₹95,000",
        image:
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
        alt: "Signature gold cufflinks",
      },
    ],
  },

  story: {
    heading: "Made to Be Noticed",
    body: "Ember was founded in 2017 by a Bangalore goldsmith who believed jewellery should announce itself. Every piece is sculpted in wax before casting, set by hand in our Lavelle Road atelier, and finished with gemstones chosen for depth of colour over convention. We work in bold silhouettes and saturated stones — pieces built for the moments you want to be seen.",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Goldsmith sculpting a wax jewellery model in the Ember atelier",
  },

  highlights: [
    { value: 500, suffix: "+", label: "Bespoke Pieces Crafted" },
    { value: 7, suffix: "", label: "Years on Lavelle Road" },
    { value: 100, suffix: "%", label: "Traceable Gemstones" },
    { value: 24, suffix: "K", label: "Gold on Every Piece" },
  ],

  testimonials: [
    {
      quote: "Ember doesn't do subtle, and that's exactly why I keep going back. Every piece is a moment.",
      author: "Naina R.",
    },
    {
      quote: "The cocktail ring stops conversations. Worth every rupee for the craftsmanship alone.",
      author: "Vikram D.",
    },
    {
      quote: "I commissioned a custom cuff and it exceeded every reference photo I brought them.",
      author: "Leela P.",
    },
  ],

  contact: {
    heading: "Visit the Atelier",
    addressLines: [
      "Ember Fine Jewellery",
      "22 Lavelle Road",
      "Bangalore, Karnataka 560001",
      "India",
    ],
    // Lavelle Road, Bangalore
    lat: 12.9718,
    lng: 77.5988,
    mapZoom: 16,
    hours: [
      { day: "Tuesday – Saturday", time: "11:00 AM – 8:00 PM" },
      { day: "Sunday – Monday", time: "By appointment only" },
    ],
    phone: "+91 86601 51961",
    phoneHref: "tel:+918660151961",
    email: "atelier@emberjewels.in",
    emailHref: "mailto:atelier@emberjewels.in",
  },

  whatsapp: {
    number: "918660151961",
    message: "Hi, I'd like to get a landing page built",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  social: {
    instagram: "https://instagram.com/ember.jewels",
    facebook: "https://facebook.com/ember.jewels",
  },

  seo: {
    title: "Ember Fine Jewellery — Bold Gold Crafted on Lavelle Road, Bangalore",
    description:
      "Ember is a Bangalore fine-jewellery house crafting bold statement gold and gemstone pieces from our Lavelle Road atelier. Book a private viewing.",
    url: "https://ember-jewels.example.com",
  },
} as const;

export type ClientConfig = typeof clientConfig;
