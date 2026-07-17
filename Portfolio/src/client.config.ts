// Central config for the BLR Webdesigner portfolio/agency landing page.
// Real business content lives here — keep it accurate, not placeholder.

export const clientConfig = {
  brand: {
    name: "BLR Webdesigner",
    logoText: "BLR WEBDESIGNER",
    tagline: "Landing pages that launch in days, not months",
    description:
      "BLR Webdesigner designs and ships high-converting landing pages, hosted on your own domain, on a simple monthly or yearly plan.",
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
    { label: "Work", href: "/#work" },
    { label: "Process", href: "/#process" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Policy", href: "/policy" },
    { label: "Contact", href: "/#contact" },
  ],

  hero: {
    eyebrow: "Design + Build + Host — Monthly or Yearly",
    heading: "WE BUILD LANDING PAGES THAT WORK",
    tagline:
      "Custom-designed, fully responsive landing pages — built and hosted on your own domain. Live in days.",
    ctaLabel: "Start Your Project",
    ctaHref: "#contact",
    secondaryCtaLabel: "View Our Work",
    secondaryCtaHref: "#work",
    priceBadge: "Plans From ₹799/Month",
  },

  marquee: [
    "LANDING PAGE DESIGN",
    "HOSTING INCLUDED",
    "WHATSAPP INTEGRATION",
    "MOBILE-FIRST BUILDS",
    "FAST TURNAROUND",
    "SEO-READY",
  ],

  work: {
    heading: "Selected Work",
    subheading: "Live Projects",
    description:
      "Eight live demo builds across three verticals, each in a different design tier — click through to browse the real, deployed sites.",
    projects: [
      {
        id: "aura",
        name: "Aura",
        category: "Boutique",
        tier: "Minimalist",
        description: "Warm, editorial clothing boutique with quiet scroll-in reveals.",
        url: "https://aura-boutique.pages.dev",
        image: "/work/aura.png",
      },
      {
        id: "ives",
        name: "Ives Studio",
        category: "Boutique",
        tier: "Animated",
        description: "Resortwear studio with an auto-playing hero slideshow and marquee.",
        url: "https://ives-studio.pages.dev",
        image: "/work/ives.png",
      },
      {
        id: "nomad",
        name: "Nomad Studio",
        category: "Boutique",
        tier: "Advanced Animation",
        description: "Streetwear drop site with a drag gallery, counters, and magnetic buttons.",
        url: "https://nomad-studio.pages.dev",
        image: "/work/nomad.png",
      },
      {
        id: "ora",
        name: "Ora",
        category: "Jewellery",
        tier: "Minimalist",
        description: "Soft rose-gold jewellery brand, clean and quiet by design.",
        url: "https://ora-jewellery.pages.dev",
        image: "/work/ora.png",
      },
      {
        id: "lumiere",
        name: "Lumière",
        category: "Jewellery",
        tier: "Animated",
        description: "Fine jewellery atelier with a crossfade hero and parallax story.",
        url: "https://lumiere-jewels-786.pages.dev",
        image: "/work/lumiere.png",
      },
      {
        id: "ember",
        name: "Ember",
        category: "Jewellery",
        tier: "Advanced Animation",
        description: "Bold statement jewellery house with a full advanced-animation build.",
        url: "https://ember-jewels.pages.dev",
        image: "/work/ember.png",
      },
      {
        id: "bloom",
        name: "Bloom Salon & Studio",
        category: "Salon",
        tier: "Animated",
        description: "Hair, skin & nail studio with tabbed pricing menus and a live scroll progress bar.",
        url: "https://bloom-salon-5un.pages.dev",
        image: "/work/bloom.png",
      },
      {
        id: "allure",
        name: "Allure Salon & Spa",
        category: "Salon",
        tier: "Animated",
        description: "Editorial-style salon & spa with a full-bleed hero and circular portrait grid.",
        url: "https://allure-salon.pages.dev",
        image: "/work/allure.png",
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
        description: "Built responsive, fast, and deployed live on your own domain.",
      },
      {
        number: "04",
        title: "Launch & Support",
        description: "Your page goes live, with direct WhatsApp support after launch.",
      },
    ],
  },

  pricing: {
    heading: "Simple Monthly & Yearly Plans",
    subheading: "Pricing",
    policyNote:
      "Every plan includes a custom landing page, contact form, WhatsApp button, and hosting on your own domain — up to 10 images. Design changes after your site is live are billed separately.",
    policyHref: "/policy",
    plans: [
      {
        id: "monthly",
        label: "Monthly",
        price: "₹799",
        period: "/month",
        billingNote: "Billed monthly, cancel anytime",
      },
      {
        id: "yearly",
        label: "Yearly",
        price: "₹8,499",
        period: "/year",
        billingNote: "Billed once a year",
        badge: "Save ₹1,089 (11%)",
        effectiveNote: "Works out to about ₹708/month",
      },
    ],
    features: [
      "Custom-designed landing page",
      "Contact form included",
      "WhatsApp click-to-chat button",
      "Hosting on your own domain",
      "Up to 10 images",
      "Mobile-responsive, fast-loading build",
    ],
    ctaLabel: "Get Started on WhatsApp",
  },

  highlights: [
    { title: "Monthly & Yearly Plans", description: "From ₹799/month, no hidden setup fees." },
    { title: "Hosting On Your Domain", description: "Your site goes live on your own domain, fully managed for you." },
    { title: "Direct Support", description: "Talk straight to the person building your site — no ticket queues." },
    { title: "Fast Turnaround", description: "Most builds go from brief to live in a matter of days." },
  ],

  policy: {
    subheading: "Terms",
    heading: "Hosting & Design Policy",
    intro:
      "A quick, transparent look at what's included in your plan and what counts as extra work — please read before subscribing.",
    included: [
      "1 custom-designed landing page (up to 8 sections)",
      "Up to 10 images across the page",
      "1 contact form",
      "WhatsApp click-to-chat button",
      "Hosting on your own domain",
      "Mobile-responsive, fast-loading build",
    ],
    additional: [
      "Design or content changes requested after your site is finalized and live",
      "Images beyond the 10 included",
      "Extra sections or additional pages",
      "Rebrands, redesigns, or structural changes",
    ],
    additionalNote:
      "Extra work is quoted and billed separately — message us on WhatsApp and we'll confirm the cost before starting anything.",
    terms: [
      "Billed monthly (₹799) or yearly (₹8,499) — yearly saves you ₹1,089 (11%).",
      "3 rounds of revisions are included free before your site is finalized and launched.",
      "If you'd like to provide your own domain instead, pricing may be adjusted — this is confirmed with you directly before we start.",
      "If your subscription lapses or is cancelled, your site stays live for a 30-day grace period before it's taken offline.",
      "Payments are accepted via UPI or bank transfer — details are shared directly on WhatsApp.",
      "Information submitted through your contact form is used only to respond to your enquiry and is never sold or shared with third parties.",
    ],
    acceptClause: "By subscribing to a Monthly or Yearly plan, you automatically agree to this policy.",
  },

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
    title: "BLR Webdesigner — Landing Pages From ₹799/Month",
    description:
      "BLR Webdesigner designs and ships custom landing pages hosted on your own domain, from ₹799/month or ₹8,499/year. Browse live work and get started on WhatsApp.",
    url: "https://blr-webdesigner.example.com",
  },
} as const;

export type ClientConfig = typeof clientConfig;
