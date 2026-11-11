export const personal = {
  fullName: "Jorge Hernández",
  givenName: "Jorge",
  roleShort: "Creative dev · Ecommerce · A11y",
  tagline: "SHOPIFY / FRONTEND / FULL STACK",
  email: "jlhc1996@gmail.com",
  links: {
    github: "https://github.com/LLORCO",
    linkedin: "https://linkedin.com/in/jorge-luis-hc",
    pytalavera: "https://pytalavera.github.io/comunidad/",
  },
};

export const marqueeTokens = [
  "ECOMMERCE",
  "SHOPIFY",
  "A11Y",
  "CREATIVE DEV",
  "FULL STACK",
  "SEO",
  "PYTALAVERA",
  "COMMUNITY",
];

const skillGroupsEs = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Tailwind", "JavaScript", "Responsive", "Fidelidad al diseño"],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    items: ["Shopify", "Liquid", "Metafields", "PDP", "Integraciones"],
  },
  {
    id: "quality",
    label: "Calidad",
    items: ["WCAG/ADA", "SEO", "Semantic HTML", "ARIA", "Auditorías"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Java", "Spring Boot", "Python", "REST", "SQL"],
  },
  {
    id: "plus",
    label: "Plus",
    items: ["Git", "PM web", "Community building"],
  },
];

const skillGroupsEn = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Tailwind", "JavaScript", "Responsive", "Design fidelity"],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    items: ["Shopify", "Liquid", "Metafields", "PDP", "Integrations"],
  },
  {
    id: "quality",
    label: "Quality",
    items: ["WCAG/ADA", "SEO", "Semantic HTML", "ARIA", "Audits"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Java", "Spring Boot", "Python", "REST", "SQL"],
  },
  {
    id: "plus",
    label: "Plus",
    items: ["Git", "Web PM", "Community building"],
  },
];

const servicesColumnsEs = [
  {
    id: "digital",
    title: "Negocio digital",
    items: [
      "Desarrollo y customización de themes Shopify",
      "Landings y storefronts fieles al diseño",
      "Metafields, metaobjects y migración de catálogos a escala",
      "Integraciones con apps, CRMs y APIs third-party",
      "SEO técnico y optimización de performance",
    ],
  },
  {
    id: "quality",
    title: "Calidad & confianza",
    items: [
      "Auditorías y remediación WCAG / ADA",
      "Semantic HTML, ARIA y live regions en producción",
      "QA de accesibilidad y criterios de aceptación",
      "Design systems e implementación desde Figma",
      "Microinteracciones con propósito funcional",
    ],
  },
  {
    id: "scale",
    title: "Escala & operaciones",
    items: [
      "REST APIs (Java/Spring Boot, Python)",
      "Conectividad CRM / ERP con web y ecommerce",
      "Automatización de datos y scripts de migración",
      "Ownership de proyectos y PM de entregas web",
    ],
  },
];

const servicesColumnsEn = [
  {
    id: "digital",
    title: "Digital business",
    items: [
      "Shopify theme development & customization",
      "Landings & storefronts faithful to the design",
      "Metafields, metaobjects & catalog migration at scale",
      "App, CRM & third-party API integrations",
      "Technical SEO & performance optimization",
    ],
  },
  {
    id: "quality",
    title: "Quality & trust",
    items: [
      "WCAG / ADA audits & remediation",
      "Semantic HTML, ARIA & live regions in production",
      "Accessibility QA & acceptance criteria",
      "Design systems & Figma-to-code implementation",
      "Microinteractions with functional purpose",
    ],
  },
  {
    id: "scale",
    title: "Scale & operations",
    items: [
      "REST APIs (Java/Spring Boot, Python)",
      "CRM / ERP connectivity with web & ecommerce",
      "Data automation & migration scripts",
      "Project ownership & web delivery PM",
    ],
  },
];

const communityCardsEs = [
  {
    title: "PyTalavera",
    description:
      "Co-organizador. Meetups, onboarding, ponentes, charlas y conexión con el ecosistema tech de Puebla.",
    href: personal.links.pytalavera,
    hrefLabel: "Ver comunidad",
    accent: false,
  },
  {
    title: "PyDay México",
    description:
      "PM del sitio del circuito nacional; Puebla como primera sede. Call for speakers, revisión, testing y propuestas de producto.",
    accent: true,
  },
  {
    title: "Charlas y mentoría",
    description: "Pláticas técnicas (Python, retro games), espacios inclusivos para todos los niveles.",
    accent: false,
  },
];

const communityCardsEn = [
  {
    title: "PyTalavera",
    description:
      "Co-organizer. Meetups, onboarding, speakers, talks, and connection with Puebla's tech ecosystem.",
    href: personal.links.pytalavera,
    hrefLabel: "View community",
    accent: false,
  },
  {
    title: "PyDay Mexico",
    description:
      "PM for the national event circuit website; Puebla as the first venue. Call for speakers, review, testing, and product proposals.",
    accent: true,
  },
  {
    title: "Talks & mentoring",
    description: "Technical talks (Python, retro games), inclusive spaces for all experience levels.",
    accent: false,
  },
];

const roleChipsEs = ["Frontend", "Full Stack", "Design-Dev", "Shopify Developer"];
const roleChipsEn = ["Frontend", "Full Stack", "Design-Dev", "Shopify Developer"];

export const content = {
  es: {
    skipLink: "Saltar al contenido principal",
    header: { contact: "Contacto" },
    availability: "Abierto a nuevas oportunidades",
    hero: {
      eyebrow: "Developer with design DNA",
      headline: "Desarrollo creativo. Ejecución optimizada.",
      subheadline: "Ecommerce e interfaces que tu marca puede presumir.",
      intro:
        "Soy Jorge, desarrollador full stack con mentalidad de diseño y enfoque en quien usa lo que construyo. Trabajo ecommerce en Shopify, landings de alto detalle y soluciones donde la estética, la accesibilidad y la optimización técnica van de la mano.",
      valueTitle: "Valor para equipos y clientes",
      valueItems: [
        "Traduzco necesidades de negocio en interfaces de alta calidad en Shopify y web.",
        "Cierro la brecha entre diseño y desarrollo con criterio de accesibilidad (WCAG/ADA).",
        "Automatizo y optimizo procesos técnicos — metafields, integraciones, SEO e IA aplicada.",
      ],
      stats: [
        { label: "Enfoque", value: "UI + A11y" },
        { label: "Alcance", value: "Ecommerce" },
        { label: "Detalle", value: "Pixel" },
      ],
    },
    cv: {
      label: "Descargar CV",
      ariaLabel: "Descargar CV en español (PDF)",
      altLabel: "También en inglés",
      altAriaLabel: "También en inglés: descargar CV en inglés (PDF)",
    },
    about: {
      eyebrow: "About",
      title: "Diseño, código y criterio para quien lo usa",
      text: "No encajo en una sola etiqueta: soy full stack con tendencia a frontend, creative dev en lo visual y community builder en Puebla. Antes de escribir código me pregunto quién lo va a usar, cómo se puede ver mejor y cómo sorprender sin sacrificar lo funcional.",
      pillars: [
        { text: "Calidad visual consistente — fiel al diseño y responsivo en producción", variant: "default" },
        { text: "Accesibilidad que importa — WCAG/ADA en ecommerce real, no solo en teoría", variant: "accent" },
        { text: "Procesos que escalan — metafields, integraciones y optimización continua", variant: "default" },
      ],
      mantra: "Hacerlo bien. Hacerlo bonito. Hacerlo rápido. Hacerlo óptimo.",
    },
    services: {
      eyebrow: "Services",
      title: "Propuestas que puedes encontrar en mí",
      text: "Como colaborador o como partner en proyecto — desde ecommerce y accesibilidad hasta integraciones, automatización e IA aplicada al negocio.",
      columns: servicesColumnsEs,
      footer: "Proyectos puntuales o colaboraciones a largo plazo — remoto, presencial o híbrido.",
      rolesLabel: "Roles",
      roles: roleChipsEs,
    },
    projects: {
      title: "Proyectos seleccionados",
      text: "Temas Shopify y landings que construí y puedo mostrar.",
      featured: {
        kicker: "Caso destacado",
        title: "Memory Air",
        role: "Shopify Front-End",
        lede: "Tema Online Store 2.0 a medida, partiendo de wireframes de baja fidelidad.",
        case: "Los wireframes originales eran poco claros. Propuse el video con scroll, las tarjetas flip y los contadores animados, y el cliente los aprobó.",
        seeCase: "Ver caso",
        cta: "Ver sitio en vivo",
        url: "https://memoryair.com",
        host: "memoryair.com",
      },
      figs: {
        title: "FIGS",
        role: "Landing en HTML, CSS y JS",
        count: 36,
        countLabel: "PRs fusionados",
        note: "Landing estática a partir de un diseño en Figma.",
      },
      others: [
        {
          title: "Savory Spice",
          text: "Desarrollador en el refresh de identidad: construí el store locator y los gift sets.",
        },
        {
          title: "Leaf Shave",
          text: "Auditoría WCAG y corrección de todo lo que dependía del código.",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Capacidades que combino en cada entrega",
      text: "Frontend y Shopify como especialización principal, complementado con accesibilidad, backend e integraciones para soluciones completas.",
      groups: skillGroupsEs,
    },
    community: {
      eyebrow: "Community & Talks",
      title: "Comunidad como extensión del trabajo técnico",
      text: "Organizo espacios, conecto personas y comparto conocimiento para impulsar mejores prácticas de desarrollo en Puebla y México.",
      cards: communityCardsEs,
    },
    contact: {
      eyebrow: "Contact",
      title: "Si buscas calidad visual, accesibilidad y ejecución técnica, conversemos.",
      text: "Colaboro con equipos y clientes, y estoy abierto a proyectos y roles retadores — frontend, full stack, Shopify o híbrido diseño-dev. Proyectos cortos o largos; remoto (preferido), presencial o híbrido. Español e inglés.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      pytalavera: "PyTalavera",
    },
    theme: {
      toDark: "Activar modo oscuro",
      toLight: "Activar modo claro",
    },
    locale: {
      switchToEn: "Switch to English",
      switchToEs: "Cambiar a español",
    },
    meta: {
      title: "Jorge Hernández — Creative dev · Ecommerce · Accessibility",
      description:
        "Portfolio de Jorge Hernández: full stack frontend, Shopify ecommerce, accesibilidad WCAG y community builder en Puebla, México.",
    },
  },
  en: {
    skipLink: "Skip to main content",
    header: { contact: "Contact" },
    availability: "Open to new opportunities",
    hero: {
      eyebrow: "Developer with design DNA",
      headline: "Creative development. Optimized execution.",
      subheadline: "Ecommerce and interfaces your brand can be proud of.",
      intro:
        "I'm Jorge, a design-minded full stack developer focused on the people who use what I build. I work on Shopify ecommerce, high-craft landing pages, and solutions where aesthetics, accessibility, and technical optimization go together.",
      valueTitle: "Value for teams and clients",
      valueItems: [
        "I translate business needs into high-quality interfaces on Shopify and the web.",
        "I bridge design and development with accessibility judgment (WCAG/ADA).",
        "I automate and optimize technical processes — metafields, integrations, SEO, and applied AI.",
      ],
      stats: [
        { label: "Focus", value: "UI + A11y" },
        { label: "Scope", value: "Ecommerce" },
        { label: "Craft", value: "Pixel" },
      ],
    },
    cv: {
      label: "Download CV",
      ariaLabel: "Download CV in English (PDF)",
      altLabel: "Also in Spanish",
      altAriaLabel: "Also in Spanish: download CV in Spanish (PDF)",
    },
    about: {
      eyebrow: "About",
      title: "Design, code, and judgment for the people who use it",
      text: "I don't fit a single label: I'm full stack with a frontend lean, a creative dev visually, and a community builder in Puebla. Before writing code I ask who will use it, how it can look better, and how to surprise without sacrificing function.",
      pillars: [
        { text: "Consistent visual quality — faithful to the design and responsive in production", variant: "default" },
        { text: "Accessibility that matters — WCAG/ADA in real ecommerce, not just theory", variant: "accent" },
        { text: "Processes that scale — metafields, integrations, and continuous optimization", variant: "default" },
      ],
      mantra: "Do it well. Do it beautifully. Do it fast. Do it optimally.",
    },
    services: {
      eyebrow: "Services",
      title: "What you can expect from me",
      text: "As a teammate or project partner — from ecommerce and accessibility to integrations, automation, and AI applied to the business.",
      columns: servicesColumnsEn,
      footer: "Short engagements or long-term collaborations — remote, on-site, or hybrid.",
      rolesLabel: "Roles",
      roles: roleChipsEn,
    },
    projects: {
      title: "Selected projects",
      text: "Shopify themes and landings I built and can show.",
      featured: {
        kicker: "Featured case",
        title: "Memory Air",
        role: "Shopify Front-End",
        lede: "Custom Online Store 2.0 theme, starting from low-fidelity wireframes.",
        case: "The original wireframes were unclear. I proposed the scroll video, the flip cards, and the animated counters, and the client approved them.",
        seeCase: "See case",
        cta: "View live site",
        url: "https://memoryair.com",
        host: "memoryair.com",
      },
      figs: {
        title: "FIGS",
        role: "Landing in HTML, CSS and JS",
        count: 36,
        countLabel: "merged PRs",
        note: "Static landing from a Figma design.",
      },
      others: [
        {
          title: "Savory Spice",
          text: "Developer on the identity refresh: I built the store locator and the gift sets.",
        },
        {
          title: "Leaf Shave",
          text: "WCAG audit and fixes for everything that depended on code.",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Capabilities I combine on every delivery",
      text: "Frontend and Shopify as core strengths, complemented by accessibility, backend, and integrations for complete solutions.",
      groups: skillGroupsEn,
    },
    community: {
      eyebrow: "Community & Talks",
      title: "Community as an extension of technical work",
      text: "I organize spaces, connect people, and share knowledge to raise the bar for development practices in Puebla and Mexico.",
      cards: communityCardsEn,
    },
    contact: {
      eyebrow: "Contact",
      title: "If you want visual quality, accessibility, and technical execution, let's talk.",
      text: "I work with teams and clients, and I'm open to challenging projects and roles — frontend, full stack, Shopify, or design-dev hybrid. Short or long engagements; remote (preferred), on-site, or hybrid. Spanish and English.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      pytalavera: "PyTalavera",
    },
    theme: {
      toDark: "Enable dark mode",
      toLight: "Enable light mode",
    },
    locale: {
      switchToEn: "Switch to English",
      switchToEs: "Cambiar a español",
    },
    meta: {
      title: "Jorge Hernández — Creative dev · Ecommerce · Accessibility",
      description:
        "Portfolio of Jorge Hernández: full stack frontend developer, Shopify ecommerce, WCAG accessibility, and community builder in Puebla, Mexico.",
    },
  },
};
