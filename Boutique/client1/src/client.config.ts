// Central brand configuration — swap this file to re-theme the template for a new client.
// Every brand-specific value (copy, colors, images, contact details) lives here so
// layout/components stay generic and reusable across boutiques.

export const clientConfig = {
  brand: {
    name: "Aura",
    legalName: "Aura Boutique",
    tagline: "Quiet luxury, handcrafted in Bangalore",
    logoText: "AURA",
    description:
      "Aura is a Bangalore-based boutique crafting timeless, hand-finished clothing and accessories rooted in Indian textile heritage.",
  },

  theme: {
    // Muted neutral base + a single dusty-rose accent drawn from the brand.
    colors: {
      cream: "#F7F3EC",
      beige: "#EDE4D6",
      stone: "#DCD2C2",
      charcoal: "#2A2622",
      ink: "#1C1A17",
      accent: "#A9564F", // dusty terracotta / rose
      accentDark: "#82403B",
    },
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Collections", href: "#collections" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Draped linen and cotton garments hanging in the Aura boutique",
    heading: "Aura",
    tagline: "Timeless pieces, made slow, worn for life.",
    ctaLabel: "Shop the Collection",
    ctaHref: "#collections",
    secondaryCtaLabel: "Book a Visit",
    secondaryCtaHref: "#contact",
  },

  collections: {
    heading: "Featured Collection",
    subheading: "New arrivals, handpicked",
    viewAllLabel: "View All",
    viewAllHref: "#",
    products: [
      {
        id: "p1",
        name: "Linen Wrap Dress",
        price: "₹6,800",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        alt: "Model wearing a cream linen wrap dress",
      },
      {
        id: "p2",
        name: "Handloom Silk Saree",
        price: "₹14,500",
        image:
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
        alt: "Handwoven silk saree in terracotta tones",
      },
      {
        id: "p3",
        name: "Gold Kundan Earrings",
        price: "₹4,200",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        alt: "Handcrafted gold kundan earrings on display",
      },
      {
        id: "p4",
        name: "Tailored Cotton Kurta",
        price: "₹3,600",
        image:
          "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
        alt: "Tailored cotton kurta in natural beige",
      },
      {
        id: "p5",
        name: "Embroidered Stole",
        price: "₹2,900",
        image:
          "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
        alt: "Hand-embroidered stole draped over a chair",
      },
      {
        id: "p6",
        name: "Block-Print Cotton Set",
        price: "₹5,400",
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        alt: "Hand block-printed cotton co-ord set",
      },
    ],
  },

  story: {
    heading: "Our Story",
    body: "Aura began in a small Jaynagar workshop in 2015, born from a desire to slow fashion down. Every piece is cut, dyed, and finished by hand with artisans across Karnataka and Kerala, using certified natural fibres and heritage weaving techniques. We work in small batches, sourcing responsibly and building pieces meant to be kept, not discarded — quiet luxury with a story behind every seam.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Founder examining handwoven fabric in the Aura workshop",
  },

  highlights: [
    { title: "Certified Materials", description: "GOTS-certified natural fibres, ethically sourced." },
    { title: "Handcrafted in Bangalore", description: "Every piece finished by local artisans." },
    { title: "Custom Orders Welcome", description: "Bespoke fittings and made-to-order pieces." },
    { title: "5-Star Rated", description: "Loved by 500+ customers across India." },
  ],

  testimonials: [
    {
      quote: "The craftsmanship is unlike anything I've found elsewhere in the city. Every visit feels personal.",
      author: "Ananya R.",
    },
    {
      quote: "My saree arrived exactly as promised — the detailing and finish are exquisite.",
      author: "Meera K.",
    },
    {
      quote: "Aura's custom fitting service is worth every rupee. I recommend them to everyone.",
      author: "Priya S.",
    },
  ],

  contact: {
    heading: "Visit Us",
    addressLines: [
      "Aura Boutique",
      "42, 11th Main Road, Jaynagar 4th Block",
      "Bangalore, Karnataka 560011",
      "India",
    ],
    // Jaynagar 4th Block, Bangalore
    lat: 12.9254,
    lng: 77.5931,
    mapZoom: 16,
    hours: [
      { day: "Monday – Saturday", time: "10:30 AM – 8:00 PM" },
      { day: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    phone: "+91 86601 51961",
    phoneHref: "tel:+918660151961",
    email: "hello@auraboutique.in",
    emailHref: "mailto:hello@auraboutique.in",
  },

  whatsapp: {
    number: "918660151961",
    message: "Hi, I'd like to get a landing page built",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  social: {
    instagram: "https://instagram.com/aura.boutique",
    facebook: "https://facebook.com/aura.boutique",
  },

  seo: {
    title: "Aura Boutique — Handcrafted Fashion in Jaynagar, Bangalore",
    description:
      "Aura is a Bangalore boutique offering handcrafted clothing, sarees, and accessories rooted in Indian textile heritage. Visit us in Jaynagar or shop the collection.",
    url: "https://aura-boutique.example.com",
  },
} as const;

export type ClientConfig = typeof clientConfig;
