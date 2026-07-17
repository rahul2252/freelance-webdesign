// Central config for the Webdesign Studio portfolio/agency landing page.
// Real business content lives here — keep it accurate, not placeholder.

export const clientConfig = {
  brand: {
    name: "Webdesign Studio",
    logoText: "WEBDESIGN STUDIO",
    tagline: "Landing pages that launch in days, not months",
    description:
      "Webdesign Studio designs and ships high-converting landing pages, hosted on Netlify, for a fixed launch price.",
  },

  theme: {
    // Dark neo-brutalist base with an acid-green primary accent and a magenta secondary pop.
    colors: {
      ink: "#0A0A0A",
      panel: "#141414",
      line: "#F5F5F0",
      paper: "#F5F5F0",
      acid: "#D6FF3F",
      magenta: "#FF3DBB",
    },
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Design + Build + Host — One Fixed Price",
    heading: "WE BUILD LANDING PAGES THAT WORK",
    tagline:
      "Custom-designed, fully responsive landing pages — designed, built, and hosted on Netlify. Live in days.",
    ctaLabel: "Start Your Project",
    ctaHref: "#contact",
    secondaryCtaLabel: "View Our Work",
    secondaryCtaHref: "#work",
    priceBadge: "₹4,999 Launch Price",
  },

  marquee: [
    "LANDING PAGE DESIGN",
    "NETLIFY HOSTING",
    "WHATSAPP INTEGRATION",
    "MOBILE-FIRST BUILDS",
    "FAST TURNAROUND",
    "SEO-READY",
  ],

  work: {
    heading: "Selected Work",
    subheading: "Live Projects",
    description:
      "Seven live demo builds across three verticals, each in a different design tier — click through to browse the real, deployed sites.",
    projects: [
      {
        id: "aura",
        name: "Aura",
        category: "Boutique",
        tier: "Minimalist",
        description: "Warm, editorial clothing boutique with quiet scroll-in reveals.",
        url: "https://aura-boutique-demo.netlify.app",
        image: "/work/aura.png",
      },
      {
        id: "ives",
        name: "Ives Studio",
        category: "Boutique",
        tier: "Animated",
        description: "Resortwear studio with an auto-playing hero slideshow and marquee.",
        url: "https://ives-studio-demo.netlify.app",
        image: "/work/ives.png",
      },
      {
        id: "nomad",
        name: "Nomad Studio",
        category: "Boutique",
        tier: "Advanced Animation",
        description: "Streetwear drop site with a drag gallery, counters, and magnetic buttons.",
        url: "https://nomad-studio-demo.netlify.app",
        image: "/work/nomad.png",
      },
      {
        id: "ora",
        name: "Ora",
        category: "Jewellery",
        tier: "Minimalist",
        description: "Soft rose-gold jewellery brand, clean and quiet by design.",
        url: "https://ora-jewellery-demo.netlify.app",
        image: "/work/ora.png",
      },
      {
        id: "lumiere",
        name: "Lumière",
        category: "Jewellery",
        tier: "Animated",
        description: "Fine jewellery atelier with a crossfade hero and parallax story.",
        url: "https://lumiere-jewels-demo.netlify.app",
        image: "/work/lumiere.png",
      },
      {
        id: "ember",
        name: "Ember",
        category: "Jewellery",
        tier: "Advanced Animation",
        description: "Bold statement jewellery house with a full advanced-animation build.",
        url: "https://ember-jewels-demo.netlify.app",
        image: "/work/ember.png",
      },
      {
        id: "bloom",
        name: "Bloom Salon & Studio",
        category: "Salon",
        tier: "Animated",
        description: "Hair, skin & nail studio with tabbed pricing menus and a live scroll progress bar.",
        url: "https://bloom-salon-demo-cebeb058.netlify.app",
        image: "/work/bloom.png",
      },
    ],
  },

  process: {
    heading: "How It Works",
    subheading: "The Process",
    steps: [
      {
        number: "01",
        title: "Brief",
        description: "Send your brand, content, and references over WhatsApp — no long forms.",
      },
      {
        number: "02",
        title: "Design",
        description: "A custom landing page designed around your brand, not a generic template.",
      },
      {
        number: "03",
        title: "Build & Deploy",
        description: "Built responsive, fast, and deployed live on Netlify hosting.",
      },
      {
        number: "04",
        title: "Launch & Support",
        description: "Your page goes live, with direct WhatsApp support after launch.",
      },
    ],
  },

  pricing: {
    heading: "Simple, Fixed Pricing",
    subheading: "Launch Offer",
    price: "₹4,999",
    priceNote: "one-time launch price",
    features: [
      "Custom landing page design",
      "Fully responsive, mobile-first build",
      "Hosted live on Netlify",
      "WhatsApp click-to-chat integration",
      "SEO-ready structure",
      "Direct WhatsApp support",
    ],
    domainNote:
      "Hosting on a Netlify subdomain is included. If you'd like a custom domain, you're welcome to bring your own — domain purchase and yearly renewal are billed separately, at cost.",
    ctaLabel: "Get Started on WhatsApp",
  },

  highlights: [
    { title: "Fixed Price", description: "₹4,999, no surprise costs. What you see is what you pay." },
    { title: "Netlify Hosting Included", description: "Your site goes live on fast, reliable hosting from day one." },
    { title: "Direct Support", description: "Talk straight to the person building your site — no ticket queues." },
    { title: "Fast Turnaround", description: "Most builds go from brief to live in a matter of days." },
  ],

  contact: {
    heading: "Let's Build Your Page",
    body: "Tell me about your brand and what you need — I'll reply on WhatsApp with next steps.",
    ctaLabel: "Message on WhatsApp",
  },

  whatsapp: {
    number: "918660151961",
    message: "Hi, I'd like to get a landing page built",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  seo: {
    title: "Webdesign Studio — Landing Pages, Designed & Hosted for ₹4,999",
    description:
      "Webdesign Studio designs and ships custom landing pages hosted on Netlify for a fixed ₹4,999 launch price. Browse live work and get started on WhatsApp.",
    url: "https://webdesign-studio.example.com",
  },
} as const;

export type ClientConfig = typeof clientConfig;
