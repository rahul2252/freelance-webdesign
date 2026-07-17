// Central brand configuration — swap this file to re-theme the template for a new client.
// Every brand-specific value (copy, colors, images, contact details) lives here so
// layout/components stay generic and reusable across jewellery boutiques.

export const clientConfig = {
  brand: {
    name: "Ora",
    legalName: "Ora Fine Jewellery",
    tagline: "Quiet radiance, handcrafted in Bangalore",
    logoText: "ORA",
    description:
      "Ora is a Bangalore-based jewellery atelier crafting understated gold and gemstone pieces meant to be worn every day.",
  },

  theme: {
    // Soft ivory base with a single rose-gold accent — quiet, minimal jewellery.
    colors: {
      cream: "#FBF7F2",
      beige: "#F1E7DD",
      stone: "#E3D3C4",
      charcoal: "#332A24",
      ink: "#241C17",
      accent: "#B76E79", // rose gold
      accentDark: "#8F5560",
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
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Delicate gold jewellery laid out on a soft neutral surface",
    heading: "Ora",
    tagline: "Fine pieces, worn quietly, kept forever.",
    ctaLabel: "Shop the Collection",
    ctaHref: "#collections",
    secondaryCtaLabel: "Book a Visit",
    secondaryCtaHref: "#contact",
  },

  collections: {
    heading: "Featured Pieces",
    subheading: "New arrivals, handpicked",
    viewAllLabel: "View All",
    viewAllHref: "#",
    products: [
      {
        id: "p1",
        name: "Petite Gold Hoops",
        price: "₹18,500",
        image:
          "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&w=800&q=80",
        alt: "Petite gold hoop earrings on display",
      },
      {
        id: "p2",
        name: "Layered Chain Necklace",
        price: "₹32,000",
        image:
          "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=800&q=80",
        alt: "Layered thin gold chain necklaces",
      },
      {
        id: "p3",
        name: "Stacking Rings Set",
        price: "₹24,600",
        image:
          "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        alt: "Set of thin stacking gold rings",
      },
      {
        id: "p4",
        name: "Baguette Stud Earrings",
        price: "₹21,200",
        image:
          "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?auto=format&fit=crop&w=800&q=80",
        alt: "Baguette-cut stone stud earrings",
      },
      {
        id: "p5",
        name: "Signet Pinky Ring",
        price: "₹16,800",
        image:
          "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
        alt: "Gold signet ring close-up",
      },
      {
        id: "p6",
        name: "Fine Chain Bracelet",
        price: "₹14,400",
        image:
          "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=800&q=80",
        alt: "Fine gold chain bracelet on wrist",
      },
    ],
  },

  story: {
    heading: "Our Story",
    body: "Ora began in a small Malleshwaram workshop in 2020, built on the idea that fine jewellery should be worn daily, not saved for occasions. Every piece is cast in-house and finished by hand, using recycled gold and traceable gemstones. We keep collections small and considered — pieces meant to be layered, mixed, and lived in.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Jewellery laid out on velvet in the Ora workshop",
  },

  highlights: [
    { title: "Recycled Gold", description: "18k and 22k gold, fully traceable and recycled." },
    { title: "Handcrafted in Bangalore", description: "Cast and finished in our Malleshwaram studio." },
    { title: "Custom Sizing", description: "Complimentary resizing on every piece." },
    { title: "5-Star Rated", description: "Loved by 400+ customers across India." },
  ],

  testimonials: [
    {
      quote: "Everyday jewellery that still feels special. I haven't taken my hoops off in months.",
      author: "Riya M.",
    },
    {
      quote: "The stacking rings are exactly as delicate and well-made as the photos promised.",
      author: "Anjali T.",
    },
    {
      quote: "Ora's resizing service was quick and the fit is perfect now. Wonderful experience.",
      author: "Sneha K.",
    },
  ],

  contact: {
    heading: "Visit Us",
    addressLines: [
      "Ora Fine Jewellery",
      "14, Sampige Road, Malleshwaram",
      "Bangalore, Karnataka 560003",
      "India",
    ],
    // Malleshwaram, Bangalore
    lat: 13.0035,
    lng: 77.5709,
    mapZoom: 16,
    hours: [
      { day: "Monday – Saturday", time: "10:30 AM – 7:30 PM" },
      { day: "Sunday", time: "11:00 AM – 5:00 PM" },
    ],
    phone: "+91 86601 51961",
    phoneHref: "tel:+918660151961",
    email: "hello@orajewellery.in",
    emailHref: "mailto:hello@orajewellery.in",
  },

  whatsapp: {
    number: "918660151961",
    message: "Hi, I'd like to get a landing page built",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  social: {
    instagram: "https://instagram.com/ora.jewellery",
    facebook: "https://facebook.com/ora.jewellery",
  },

  seo: {
    title: "Ora Fine Jewellery — Handcrafted in Malleshwaram, Bangalore",
    description:
      "Ora is a Bangalore jewellery atelier crafting understated gold and gemstone pieces for everyday wear. Shop the collection or visit the studio in Malleshwaram.",
    url: "https://ora-jewellery.example.com",
  },
} as const;

export type ClientConfig = typeof clientConfig;
