// Central config for Bloom Salon & Studio — edit this file to re-theme the template.

export const clientConfig = {
  brand: {
    name: "Bloom",
    legalName: "Bloom Salon & Studio",
    tagline: "Hair · Skin · Nails · HSR Layout, Bengaluru",
    logoText: "Bloom",
    description:
      "Bloom is a premium hair, skin, and nail studio in HSR Layout, Bengaluru — expert stylists, a clean space, and real results.",
  },

  theme: {
    colors: {
      blush: "#F2E8E1",
      rose: "#E8CFC4",
      mauve: "#C9A49A",
      deep: "#7A4F47",
      ink: "#1E1412",
      muted: "#9A7F7A",
      cream: "#FAF6F3",
      border: "#ECDDD8",
    },
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Results", href: "#results" },
    { label: "Visit", href: "#location" },
  ],

  hero: {
    eyebrow: "Hair · Skin · Nails · HSR Layout, Bengaluru",
    headingLines: ["Your best", "look starts", "here."],
    headingAccent: "look starts",
    body: "Bloom is a premium salon studio in HSR Layout. Expert stylists, clean space, real results — no upselling, just care.",
    ctaLabel: "Book Appointment",
    secondaryCtaLabel: "Call Us",
    visuals: [
      {
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        alt: "Hair styling at Bloom Salon",
        tag: "Hair Styling",
      },
      {
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
        alt: "Nail art at Bloom Salon",
        tag: "Skin & Nails",
      },
    ],
  },

  tagStrip: [
    "Hair Color",
    "Keratin",
    "Facial",
    "Manicure",
    "Pedicure",
    "Waxing",
    "Bridal Packages",
    "Head Spa",
    "Lash Extensions",
  ],

  about: {
    label: "About Bloom",
    heading: "A studio that ",
    headingAccent: "listens",
    headingRest: " before it cuts",
    body: "Every visit starts with a consultation, not a chair. Our stylists at HSR Layout take time to understand your hair, skin, and lifestyle — so results actually last between appointments.",
  },

  services: {
    label: "Services & Pricing",
    heading: "What we ",
    headingAccent: "offer",
    tabs: [
      {
        id: "hair",
        label: "Hair",
        items: [
          { name: "Haircut & Blowdry", desc: "Wash, cut, and style", price: "₹600+", time: "45 min" },
          { name: "Global Hair Color", desc: "Single-process full color", price: "₹1,800+", time: "90 min" },
          { name: "Balayage / Highlights", desc: "Hand-painted color technique", price: "₹3,500+", time: "2–3 hrs" },
          { name: "Keratin Smoothing", desc: "Frizz control, lasts 3–4 months", price: "₹4,000+", time: "3 hrs" },
          { name: "Head Spa Treatment", desc: "Scalp detox + deep conditioning", price: "₹1,200+", time: "60 min" },
        ],
      },
      {
        id: "skin",
        label: "Skin",
        items: [
          { name: "Classic Facial", desc: "Deep cleanse, exfoliation, mask", price: "₹1,000+", time: "60 min" },
          { name: "Hydra Facial", desc: "Multi-step hydration therapy", price: "₹2,500+", time: "75 min" },
          { name: "Full Body Waxing", desc: "Rica / Chocolate wax", price: "₹1,800+", time: "90 min" },
          { name: "Lash Extensions", desc: "Classic set, lasts 3–4 weeks", price: "₹2,200+", time: "90 min" },
          { name: "Eyebrow Shaping + Tint", desc: "Threading + tinting combo", price: "₹450+", time: "30 min" },
        ],
      },
      {
        id: "nails",
        label: "Nails",
        items: [
          { name: "Classic Manicure", desc: "Shape, buff, regular polish", price: "₹400+", time: "30 min" },
          { name: "Gel Manicure", desc: "Long-lasting gel finish", price: "₹800+", time: "45 min" },
          { name: "Nail Art (per nail)", desc: "Custom designs, chrome, foils", price: "₹80+", time: "Varies" },
          { name: "Spa Pedicure", desc: "Soak, scrub, massage, polish", price: "₹700+", time: "60 min" },
          { name: "Nail Extensions (full set)", desc: "Acrylic or gel extensions", price: "₹1,500+", time: "90 min" },
        ],
      },
      {
        id: "bridal",
        label: "Bridal",
        items: [
          { name: "Bridal Makeup (day of)", desc: "HD makeup + setting + touch-up kit", price: "₹12,000+", time: "3 hrs" },
          { name: "Pre-Bridal Package (3 sessions)", desc: "Facial, waxing, manicure-pedicure", price: "₹8,500+", time: "Multiple" },
          { name: "Bridal Hair Styling", desc: "Trial + final day styling", price: "₹5,000+", time: "2 hrs" },
          { name: "Complete Bridal Bundle", desc: "All-inclusive: makeup, hair, nails, pre-bridal", price: "₹25,000+", time: "Package" },
        ],
      },
    ],
  },

  team: {
    label: "Our Team",
    heading: "Meet your ",
    headingAccent: "stylists",
    body: "Each member of our team is trained, certified, and passionate about your results.",
    members: [
      {
        name: "Priya Nair",
        role: "Senior Hair Stylist",
        exp: "8 years experience",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Sneha Reddy",
        role: "Skin & Lash Expert",
        exp: "5 years experience",
        image:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Kavitha M.",
        role: "Nail Artist",
        exp: "4 years experience",
        image:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  beforeAfter: {
    label: "Transformations",
    heading: "Before & ",
    headingAccent: "After",
    body: "Real results from our clients.",
    items: [
      {
        service: "Hair Styling",
        image:
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=600&q=80",
        alt: "Hair color result",
      },
      {
        service: "Facial Treatment",
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
        alt: "Facial glow treatment",
      },
      {
        service: "Nail Art",
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
        alt: "Nail art design",
      },
    ],
  },

  testimonials: {
    label: "Client Love",
    heading: "What they ",
    headingAccent: "say",
    items: [
      {
        quote:
          "Priya is a genius with color. I came in with a vague idea and left with exactly the balayage I'd been dreaming of. Zero damage, beautiful tone.",
        author: "Ananya S.",
        tag: "Hair color client",
        initials: "AS",
      },
      {
        quote:
          "Booked the bridal package 2 months before my wedding. Sneha did my skin prep through 3 sessions — the glow on my wedding day was unreal.",
        author: "Meghna R.",
        tag: "Bridal client",
        initials: "MR",
      },
      {
        quote:
          "Kavitha's nail art is so detailed and long-lasting. I've been coming for 6 months and my nails have never broken. Booking on WhatsApp is super easy.",
        author: "Divya K.",
        tag: "Nails regular",
        initials: "DK",
      },
    ],
  },

  location: {
    label: "Find Us",
    heading: "The Studio, ",
    headingAccent: "HSR Layout",
    addressLines: ["No. 8, 27th Main, Sector 2, HSR Layout", "Near BDA Complex, Bengaluru – 560102"],
    lat: 12.9121,
    lng: 77.6446,
    mapZoom: 15,
    phone: "+91 86601 51961",
    phoneHref: "tel:+918660151961",
    hours: [
      { day: "Mon – Sat", time: "9:30 AM – 8:30 PM", status: "Open" },
      { day: "Sunday", time: "10:00 AM – 6:00 PM", status: "Open" },
      { day: "Public holidays", time: "10:00 AM – 4:00 PM", status: "Limited" },
    ],
    directionsHref: "https://maps.google.com/?q=HSR+Layout,Bengaluru",
  },

  booking: {
    label: "Ready?",
    heading: "Book your ",
    headingAccent: "appointment",
    body: "Send us a WhatsApp message with your preferred date, time, and service. We'll confirm within 30 minutes.",
    ctaLabel: "Book on WhatsApp",
    note: "Replies within 30 minutes · Walk-ins welcome based on availability",
  },

  whatsapp: {
    number: "918660151961",
    message: "Hi, I'd like to get a landing page built",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  social: {
    instagram: "https://instagram.com/bloom.salon",
  },

  seo: {
    title: "Bloom Salon & Studio — HSR Layout, Bengaluru",
    description:
      "Premium hair, skin, and nail studio in HSR Layout, Bengaluru. Book your appointment on WhatsApp.",
    url: "https://bloom-salon.example.com",
  },
} as const;

export type ClientConfig = typeof clientConfig;
