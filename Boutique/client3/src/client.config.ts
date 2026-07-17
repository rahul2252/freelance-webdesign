// Central brand configuration for Boutique/client3 — edit this file to re-theme the template.
// Layout/effects components read only from here; no brand content lives in component files.

export const clientConfig = {
  brand: {
    name: "Nomad",
    legalName: "Nomad Studio",
    tagline: "Built for the street, worn everywhere",
    logoText: "NOMAD",
    description:
      "Nomad is a Bangalore streetwear studio designing bold, technical-fabric pieces out of HSR Layout — made for the city, not the runway.",
  },

  theme: {
    // Near-black base with a vivid cobalt accent — bold, contemporary streetwear.
    colors: {
      void: "#111214",
      concrete: "#1D1F23",
      steel: "#2C2F36",
      frost: "#F2F3F5",
      cobalt: "#3D63F5",
      cobaltSoft: "#6E8AFA",
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
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1920&q=80",
      alt: "Model wearing bold streetwear silhouette",
    },
    {
      id: "s2",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1920&q=80",
      alt: "Close-up of technical fabric jacket detail",
    },
    {
      id: "s3",
      image:
        "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1920&q=80",
      alt: "Streetwear model against an urban backdrop",
    },
  ],

  hero: {
    heading: "Nomad",
    tagline: "Technical fabrics, cut for the city.",
    ctaLabel: "Shop the Drop",
    ctaHref: "#collections",
    secondaryCtaLabel: "Our Story",
    secondaryCtaHref: "#about",
    slideIntervalMs: 5000,
  },

  collections: {
    heading: "Latest Drop",
    subheading: "No. 014",
    viewAllLabel: "View Full Collection",
    viewAllHref: "#",
    products: [
      {
        id: "p1",
        name: "Shell Utility Jacket",
        price: "₹6,400",
        image:
          "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80",
        alt: "Shell utility jacket on a model",
      },
      {
        id: "p2",
        name: "Cargo Tech Pant",
        price: "₹4,200",
        image:
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
        alt: "Cargo technical trousers detail",
      },
      {
        id: "p3",
        name: "Oversized Graphic Tee",
        price: "₹1,800",
        image:
          "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=800&q=80",
        alt: "Oversized graphic t-shirt on a rack",
      },
      {
        id: "p4",
        name: "Reflective Windbreaker",
        price: "₹5,600",
        image:
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
        alt: "Reflective windbreaker jacket",
      },
      {
        id: "p5",
        name: "Structured Bomber",
        price: "₹7,200",
        image:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
        alt: "Structured bomber jacket on display",
      },
      {
        id: "p6",
        name: "Track Pant 2.0",
        price: "₹3,400",
        image:
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
        alt: "Technical track pants folded",
      },
    ],
  },

  story: {
    heading: "No Rules, Just Fit",
    body: "Nomad launched in 2021 out of a shared studio in HSR Layout, built by three friends tired of choosing between comfort and design. Every piece runs through three prototypes before it ships, cut in technical fabrics sourced for movement, not just looks. We drop small, sell out fast, and never restock the same design twice.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Studio rack of streetwear samples in progress",
  },

  highlights: [
    { value: 12, suffix: "K+", label: "Pieces Shipped" },
    { value: 40, suffix: "+", label: "Cities Reached" },
    { value: 3, suffix: "", label: "Prototypes Per Drop" },
    { value: 98, suffix: "%", label: "Sold Out Within a Week" },
  ],

  testimonials: [
    {
      quote: "Nomad drops sell out for a reason — the fit and fabric are on another level.",
      author: "Kabir S.",
    },
    {
      quote: "First streetwear brand from Bangalore that actually feels considered, not copied.",
      author: "Rhea M.",
    },
    {
      quote: "I've never returned a single piece. Sizing and quality are consistent every drop.",
      author: "Aditya P.",
    },
  ],

  contact: {
    heading: "Visit the Studio",
    addressLines: [
      "Nomad Studio",
      "27th Main Road, HSR Layout Sector 2",
      "Bangalore, Karnataka 560102",
      "India",
    ],
    // HSR Layout, Bangalore
    lat: 12.9121,
    lng: 77.6446,
    mapZoom: 16,
    hours: [
      { day: "Monday – Saturday", time: "12:00 PM – 9:00 PM" },
      { day: "Sunday", time: "1:00 PM – 6:00 PM" },
    ],
    phone: "+91 86601 51961",
    phoneHref: "tel:+918660151961",
    email: "studio@nomadwear.in",
    emailHref: "mailto:studio@nomadwear.in",
  },

  whatsapp: {
    number: "918660151961",
    message: "Hi, I'd like to get a landing page built",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  social: {
    instagram: "https://instagram.com/nomad.studio",
    facebook: "https://facebook.com/nomad.studio",
  },

  seo: {
    title: "Nomad Studio — Streetwear Designed in HSR Layout, Bangalore",
    description:
      "Nomad is a Bangalore streetwear studio dropping small-batch technical-fabric collections from HSR Layout. Shop the latest drop or visit the studio.",
    url: "https://nomad-studio.example.com",
  },
} as const;

export type ClientConfig = typeof clientConfig;
