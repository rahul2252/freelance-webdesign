// Central brand configuration for Boutique/client2 — edit this file to re-theme the template.
// Layout/effects components read only from here; no brand content lives in component files.

export const clientConfig = {
  brand: {
    name: "Ives",
    legalName: "Ives Studio",
    tagline: "Warm-weather staples, made to last",
    logoText: "IVES",
    description:
      "Ives is a Bangalore studio designing linen and cotton resortwear for warm days, sourced and stitched in Koramangala.",
  },

  theme: {
    // Warm sand base with an olive accent — resortwear, not dark-luxury.
    colors: {
      cream: "#F5F0E4",
      sand: "#EAE0C8",
      stone: "#D8CBAE",
      ink: "#2B2A22",
      moss: "#5C6B4A",
      mossSoft: "#7C8B63",
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
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1920&q=80",
      alt: "Linen clothing draped in warm natural light",
    },
    {
      id: "s2",
      image:
        "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1920&q=80",
      alt: "Model wearing a relaxed linen resort set",
    },
    {
      id: "s3",
      image:
        "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1920&q=80",
      alt: "Woven textures and natural fabric detail",
    },
  ],

  hero: {
    heading: "Ives",
    tagline: "Linen and cotton, cut for slow mornings.",
    ctaLabel: "Shop the Collection",
    ctaHref: "#collections",
    secondaryCtaLabel: "Visit the Studio",
    secondaryCtaHref: "#contact",
    slideIntervalMs: 5000,
  },

  collections: {
    heading: "New Season",
    subheading: "Just Landed",
    viewAllLabel: "View Full Collection",
    viewAllHref: "#",
    products: [
      {
        id: "p1",
        name: "Relaxed Linen Shirt",
        price: "₹3,200",
        image:
          "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
        alt: "Relaxed-fit linen shirt in natural beige",
      },
      {
        id: "p2",
        name: "Wide-Leg Cotton Trouser",
        price: "₹2,800",
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        alt: "Wide-leg cotton trousers on a hanger",
      },
      {
        id: "p3",
        name: "Woven Resort Dress",
        price: "₹4,600",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        alt: "Woven resort dress on a clothing rack",
      },
      {
        id: "p4",
        name: "Textured Knit Top",
        price: "₹2,400",
        image:
          "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&w=800&q=80",
        alt: "Textured knit top folded on a table",
      },
      {
        id: "p5",
        name: "Cotton Wrap Skirt",
        price: "₹2,950",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        alt: "Cotton wrap skirt on a model",
      },
      {
        id: "p6",
        name: "Linen Overshirt",
        price: "₹3,600",
        image:
          "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=800&q=80",
        alt: "Linen overshirt draped over a chair",
      },
    ],
  },

  story: {
    heading: "Our Craft",
    body: "Ives started in 2019 above a fabric shop in Koramangala, cutting sample sets from deadstock linen. Today every piece is still cut and finished in the same neighbourhood, using natural fibres and small production runs. We design for warm weather and for wear — pieces that soften with every wash and outlast the season they were bought for.",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Studio table with folded linen fabric and shears",
  },

  highlights: [
    { title: "Natural Fibres Only", description: "Linen, cotton, and hemp, undyed where possible." },
    { title: "Made in Koramangala", description: "Cut and stitched a few streets from the studio." },
    { title: "Small Batches", description: "Limited runs, restocked only when fabric allows." },
    { title: "Easy Returns", description: "30-day exchange on all full-price pieces." },
  ],

  testimonials: [
    {
      quote: "The linen holds up to actual wear and gets better with every wash. Nothing else fits like this.",
      author: "Nikhil R.",
    },
    {
      quote: "Ives is the only place I trust for resortwear that doesn't look like everyone else's.",
      author: "Sana K.",
    },
    {
      quote: "Understated, well-made, and the studio visit was worth the trip on its own.",
      author: "Arjun V.",
    },
  ],

  contact: {
    heading: "Visit the Studio",
    addressLines: [
      "Ives Studio",
      "80 Feet Road, Koramangala 4th Block",
      "Bangalore, Karnataka 560034",
      "India",
    ],
    // Koramangala, Bangalore
    lat: 12.9352,
    lng: 77.6245,
    mapZoom: 16,
    hours: [
      { day: "Monday – Saturday", time: "11:00 AM – 8:00 PM" },
      { day: "Sunday", time: "12:00 PM – 6:00 PM" },
    ],
    phone: "+91 86601 51961",
    phoneHref: "tel:+918660151961",
    email: "hello@ivesstudio.in",
    emailHref: "mailto:hello@ivesstudio.in",
  },

  whatsapp: {
    number: "918660151961",
    message: "Hi, I'd like to get a landing page built",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  social: {
    instagram: "https://instagram.com/ives.studio",
    facebook: "https://facebook.com/ives.studio",
  },

  seo: {
    title: "Ives Studio — Linen & Cotton Resortwear in Koramangala, Bangalore",
    description:
      "Ives is a Bangalore studio designing linen and cotton resortwear in small batches, cut and stitched in Koramangala. Shop the new season or visit the studio.",
    url: "https://ives-studio.example.com",
  },
} as const;

export type ClientConfig = typeof clientConfig;
