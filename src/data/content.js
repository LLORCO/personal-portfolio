export const personal = {
  fullName: "Jorge Hernández",
  role: "Shopify Front-End Developer",
  email: "jlhc1996@gmail.com",
  links: {
    github: "https://github.com/LLORCO",
    linkedin: "https://linkedin.com/in/jorge-luis-hc",
    pytalavera: "https://pytalavera.github.io/comunidad/",
    pydayMexico: null,
    memoryAir: "https://memoryair.com",
    savorySpice: "https://www.savoryspiceshop.com",
  },
  cv: { es: "/cv/Jorge-Hernandez-CV-ES.pdf", en: "/cv/Jorge-Hernandez-CV-EN.pdf" },
};

const skillGroupsEs = [
  {
    label: "Shopify",
    items:
      "Shopify Plus · Liquid · Online Store 2.0 · Metafields · Shopify CLI · GraphQL Admin API · Theme Check",
  },
  {
    label: "Front-end",
    items:
      "JavaScript · Web Components · TypeScript · Tailwind CSS · Vite · HTML · CSS · React (mantenimiento de Hydrogen/Oxygen: JSX, hooks, estado)",
  },
  {
    label: "Accesibilidad",
    items: "WCAG · ARIA · HTML semántico · axe DevTools",
  },
  {
    label: "Datos e integraciones",
    items: "Python · Matrixify · Searchanise · Seal Subscriptions · Klaviyo",
  },
  {
    label: "Flujo de trabajo",
    items: "Git y GitHub (PRs y code review) · Figma",
  },
  {
    label: "Backend",
    items: "Java · Spring Boot",
  },
];

const skillGroupsEn = [
  {
    label: "Shopify",
    items:
      "Shopify Plus · Liquid · Online Store 2.0 · Metafields · Shopify CLI · GraphQL Admin API · Theme Check",
  },
  {
    label: "Front-end",
    items:
      "JavaScript · Web Components · TypeScript · Tailwind CSS · Vite · HTML · CSS · React (maintaining Hydrogen/Oxygen: JSX, hooks, state)",
  },
  {
    label: "Accessibility",
    items: "WCAG · ARIA · semantic HTML · axe DevTools",
  },
  {
    label: "Data and integrations",
    items: "Python · Matrixify · Searchanise · Seal Subscriptions · Klaviyo",
  },
  {
    label: "Workflow",
    items: "Git and GitHub (PRs and code review) · Figma",
  },
  {
    label: "Backend",
    items: "Java · Spring Boot",
  },
];

const projectsEs = [
  {
    id: "memory-air",
    layout: "feature",
    title: "Memory Air: de wireframes a un tema Shopify a medida",
    summary:
      "Memory Air es una marca de salud del sueño. Los diseños llegaron como wireframes de baja fidelidad, así que propuse por mi cuenta cómo debía verse y moverse el sitio. El cliente aprobó la propuesta y la construí como desarrollador principal.",
    builtTitle: "Lo que propuse y construí",
    built: [
      "Una historia con video que avanza con el scroll en la página Science",
      "Tarjetas de beneficios que se voltean, con botón y teclado",
      "Contadores animados para las cifras del estudio que publica la marca",
      "Página de producto con membresía y su lógica en el carrito",
    ],
    facts: [
      { label: "Rol", value: "Desarrollador principal" },
      { label: "Periodo", value: "jul–ago 2026" },
      { label: "Alcance", value: "Home, producto, Science y Wholesale" },
      { label: "PRs", value: "57 de 60 (56 mergeados)" },
    ],
    stack: "Shopify Online Store 2.0 · Liquid · Web Components · Tailwind CSS 4 · Vite · Seal Subscriptions",
    url: personal.links.memoryAir,
    caseStudyPath: "/memory-air",
    media: null,
    ctaCase: "Leer el caso completo",
    ctaSite: "Ver memoryair.com",
  },
  {
    id: "savory-spice",
    layout: "wide",
    title: "Savory Spice: migración de catálogo en un refresh de marca",
    summary:
      "Participé como desarrollador en el refresh de marca de Savory Spice, una tienda Shopify Plus, junto al equipo de diseño. Migré el catálogo completo al tema nuevo: más de 400 productos con unos 115 metafields cada uno, además de recetas, blogs, colecciones y ubicaciones, automatizado con Python y Matrixify. También construí el store locator y los gift sets.",
    built: [
      "Cambié la configuración manual en JSON por secciones con selectores de producto: el equipo de la tienda edita sin ayuda de desarrollo.",
      "Integré la búsqueda de Searchanise y coordiné con sus desarrolladores para ampliar los datos de su API.",
      "El tema nuevo carga al menos 15% más rápido.",
      "28 PRs mergeados.",
    ],
    stack: "Shopify Plus · Liquid · JavaScript · Python · Matrixify · Searchanise",
    url: personal.links.savorySpice,
    media: null,
    ctaSite: "Ver savoryspiceshop.com",
  },
  {
    id: "leaf-shave",
    layout: "row",
    title: "Leaf Shave: accesibilidad en una tienda en producción",
    summary:
      "Audité 54 páginas con axe DevTools y encontré más de 2,000 problemas WCAG, 49 de ellos críticos. Corregí todos los que dependían del código (contraste, teclado, nombres accesibles, ARIA, tamaño de objetivos táctiles) y documenté los que dependían de diseño o marca para que el cliente decidiera. También trabajé con los desarrolladores de apps de terceros para que agregaran aria-labels a sus widgets, un arreglo que llega a todas las tiendas que usan esos plugins.",
    meta: "Shopify · Liquid · WCAG · ARIA · axe DevTools · 11 PRs mergeados",
  },
  {
    id: "figs",
    layout: "row",
    title: "FIGS: landing estática con interacción",
    summary:
      "Landing en HTML, CSS y JavaScript a partir de diseños en Figma: navegación sticky, tabs, carruseles, tarjetas animadas y parallax.",
    meta: "HTML · CSS · JavaScript · 36 PRs mergeados",
  },
  {
    id: "side-projects",
    layout: "line",
    summary:
      "Proyectos personales: una invitación web para bodas y un scoreboard para torneos de Street Fighter.",
  },
];

const projectsEn = [
  {
    id: "memory-air",
    layout: "feature",
    title: "Memory Air: from wireframes to a custom Shopify theme",
    summary:
      "Memory Air is a sleep health brand. The designs arrived as low-fidelity wireframes, so I proposed how the site should look and move. The client approved it, and I built it as the lead developer.",
    builtTitle: "What I proposed and built",
    built: [
      "A scroll-driven video story on the Science page",
      "Benefit cards that flip, with a button and keyboard support",
      "Animated counters for the study figures the brand publishes",
      "A product page with a membership and its cart logic",
    ],
    facts: [
      { label: "Role", value: "Lead developer" },
      { label: "Timeline", value: "Jul–Aug 2026" },
      { label: "Scope", value: "Home, product, Science and Wholesale" },
      { label: "PRs", value: "57 of 60 (56 merged)" },
    ],
    stack: "Shopify Online Store 2.0 · Liquid · Web Components · Tailwind CSS 4 · Vite · Seal Subscriptions",
    url: personal.links.memoryAir,
    caseStudyPath: "/memory-air",
    media: null,
    ctaCase: "Read the case study",
    ctaSite: "Visit memoryair.com",
  },
  {
    id: "savory-spice",
    layout: "wide",
    title: "Savory Spice: catalog migration during a brand refresh",
    summary:
      "I worked as a developer on Savory Spice's brand refresh, a Shopify Plus store, alongside the design team. I migrated the full catalog to the new theme: 400+ products with about 115 metafields each, plus recipes, blogs, collections and store locations, automated with Python and Matrixify. I also built the store locator and the gift sets.",
    built: [
      "Replaced manual JSON settings with product-picker sections, so the store team edits content without a developer.",
      "Integrated Searchanise search and worked with their developers to add the data their API was missing.",
      "The new theme loads at least 15% faster.",
      "28 merged PRs.",
    ],
    stack: "Shopify Plus · Liquid · JavaScript · Python · Matrixify · Searchanise",
    url: personal.links.savorySpice,
    media: null,
    ctaSite: "Visit savoryspiceshop.com",
  },
  {
    id: "leaf-shave",
    layout: "row",
    title: "Leaf Shave: accessibility on a live store",
    summary:
      "I audited 54 pages with axe DevTools and found more than 2,000 WCAG issues, 49 of them critical. I fixed every issue that could be fixed in code (contrast, keyboard access, accessible names, ARIA, touch target size) and documented the ones that depended on design or brand decisions for the client. I also worked with third-party app developers to add aria-labels to their widgets, a fix that reaches every store using those plugins.",
    meta: "Shopify · Liquid · WCAG · ARIA · axe DevTools · 11 merged PRs",
  },
  {
    id: "figs",
    layout: "row",
    title: "FIGS: interactive static landing page",
    summary:
      "A landing page in HTML, CSS and JavaScript, built from Figma designs: sticky navigation, tabs, carousels, animated cards and parallax.",
    meta: "HTML · CSS · JavaScript · 36 merged PRs",
  },
  {
    id: "side-projects",
    layout: "line",
    summary: "Side projects: a wedding invitation site and a scoreboard for Street Fighter tournaments.",
  },
];

const memoryAirCaseEs = {
  metaTitle: "Memory Air: caso de estudio · Jorge Hernández",
  title: "Memory Air: de wireframes a un tema Shopify a medida",
  intro:
    "Memory Air vende un dispositivo de cabecera pensado para dormir mejor y cuidar la memoria. Fui el desarrollador principal de su tema de Shopify, del header a la página de producto, y trabajé directo con el cliente.",
  facts: [
    { label: "Rol", value: "Desarrollador principal" },
    { label: "Periodo", value: "julio a agosto de 2026" },
    { label: "Alcance", value: "home, producto, Science y Wholesale" },
    { label: "Trabajo", value: "57 de los 60 PRs del proyecto (56 mergeados)" },
    {
      label: "Stack",
      value:
        "Shopify Online Store 2.0, Liquid, Web Components en JavaScript, Tailwind CSS 4, Vite, Seal Subscriptions",
    },
  ],
  sections: [
    {
      title: "El punto de partida",
      paragraphs: [
        "Los diseños llegaron como wireframes de baja fidelidad. Definían qué contenido iba en cada página, pero no cómo se veía ni cómo se movía. Esas decisiones había que tomarlas antes de construir.",
      ],
    },
    {
      title: "Lo que propuse",
      paragraphs: ["Por iniciativa propia propuse tres patrones de interfaz. El cliente los aprobó y los construí:"],
      list: [
        {
          label: "Una historia con video que avanza con el scroll",
          detail: "en la página Science. El video se queda fijo mientras lees cada paso de la explicación.",
        },
        {
          label: "Tarjetas de beneficios que se voltean",
          detail: "para mostrar el detalle de cada beneficio. Se abren con un botón y funcionan con teclado.",
        },
        {
          label: "Contadores animados",
          detail: "para las cifras del estudio que publica la marca.",
        },
      ],
      after: "Las cifras y el estudio son de Memory Air; mi trabajo fue cómo se presentan.",
    },
    {
      title: "Cómo lo construí",
      paragraphs: [
        "El tema usa secciones y bloques de Online Store 2.0 en Liquid, para que el equipo de la marca edite el contenido desde el admin. La interactividad vive en unas 35 islas de Web Components en JavaScript que se cargan cuando entran en pantalla. Los estilos van con Tailwind CSS 4 y el build con Vite.",
      ],
    },
    {
      title: "Un problema en producción",
      paragraphs: [
        "Desde landing pages de terceros se podía comprar la membresía sin el dispositivo. Primero contuve la falla con un script de emergencia para no detener las ventas. Después la cerré de forma permanente: con Seal Subscriptions, la membresía ahora depende del dispositivo dentro del carrito.",
      ],
    },
    {
      title: "Resultado",
      paragraphs: ["La propuesta se aprobó y el tema está en producción en memoryair.com."],
    },
  ],
  ctaSite: "Ver memoryair.com",
  back: "Volver a proyectos",
  cv: "Descargar CV",
  media: { hero: null, beforeAfter: null },
};

const memoryAirCaseEn = {
  metaTitle: "Memory Air: case study · Jorge Hernández",
  title: "Memory Air: from wireframes to a custom Shopify theme",
  intro:
    "Memory Air sells a bedside device designed to support sleep and memory. I was the lead developer on their Shopify theme, from the header to the product page, and worked directly with the client.",
  facts: [
    { label: "Role", value: "Lead developer" },
    { label: "Timeline", value: "July to August 2026" },
    { label: "Scope", value: "home, product, Science and Wholesale pages" },
    { label: "Work", value: "57 of the project's 60 PRs (56 merged)" },
    {
      label: "Stack",
      value: "Shopify Online Store 2.0, Liquid, JavaScript Web Components, Tailwind CSS 4, Vite, Seal Subscriptions",
    },
  ],
  sections: [
    {
      title: "Where it started",
      paragraphs: [
        "The designs arrived as low-fidelity wireframes. They set what content went on each page, but not how it should look or move. Those decisions had to be made before building.",
      ],
    },
    {
      title: "What I proposed",
      paragraphs: ["On my own initiative I proposed three interface patterns. The client approved them, and I built them:"],
      list: [
        {
          label: "A scroll-driven video story",
          detail: "on the Science page. The video stays in place while you read each step of the explanation.",
        },
        {
          label: "Benefit cards that flip",
          detail: "to show the detail behind each benefit. They open with a button and work with a keyboard.",
        },
        {
          label: "Animated counters",
          detail: "for the study figures the brand publishes.",
        },
      ],
      after: "The figures and the study belong to Memory Air; my work was how they are presented.",
    },
    {
      title: "How I built it",
      paragraphs: [
        "The theme uses Online Store 2.0 sections and blocks in Liquid, so the brand's team can edit content from the admin. Interactivity lives in about 35 JavaScript Web Component islands that load when they scroll into view. Styling uses Tailwind CSS 4, and Vite handles the build.",
      ],
    },
    {
      title: "A problem in production",
      paragraphs: [
        "Third-party landing pages let people buy the membership without the device. I first contained it with an emergency script so sales could continue. Then I closed it for good: with Seal Subscriptions, the membership now depends on the device in the cart.",
      ],
    },
    {
      title: "Outcome",
      paragraphs: ["The proposal was approved, and the theme is live at memoryair.com."],
    },
  ],
  ctaSite: "Visit memoryair.com",
  back: "Back to projects",
  cv: "Download CV",
  media: { hero: null, beforeAfter: null },
};

export const content = {
  es: {
    skipLink: "Saltar al contenido principal",
    header: {
      contact: "Contacto",
      navLabel: "Principal",
      nav: {
        work: "Proyectos",
        community: "Comunidad",
        cv: "CV",
        cvLabel: "Descargar CV en PDF",
      },
    },
    hero: {
      title: "Shopify Front-End Developer",
      lead: "Soy Jorge Hernández. Construyo temas Shopify Online Store 2.0 a medida para marcas de EE. UU.: secciones que el equipo del cliente edita sin depender de un desarrollador, catálogos migrados con scripts y correcciones de accesibilidad WCAG.",
      meta: "Más de tres años desarrollando web, casi dos en una agencia Shopify de EE. UU. Trabajo en remoto y en inglés desde Puebla, México.",
      ctaWork: "Ver proyectos",
      ctaCv: "Descargar CV (PDF)",
      ctaEmail: "Escríbeme",
      availability: "Disponible para roles remotos de Shopify y Front-End.",
      community: [
        { t: "Fuera del trabajo co-organizo " },
        { link: "pytalavera", t: "PyTalavera" },
        { t: ", organizo " },
        { link: "pydayMexico", t: "PyDay México" },
        { t: " y soy mentor en hackatones." },
      ],
      recentTitle: "Trabajo reciente",
      recent: [
        {
          id: "memory-air",
          href: "#memory-air",
          name: "Memory Air",
          description: "Tema a medida, de wireframes a producción",
        },
        {
          id: "savory-spice",
          href: "#savory-spice",
          name: "Savory Spice",
          description: "Migración de 400+ productos y store locator",
        },
        {
          id: "leaf-shave",
          href: "#leaf-shave",
          name: "Leaf Shave",
          description: "Auditoría WCAG de 54 páginas",
        },
      ],
    },
    projects: {
      title: "Proyectos seleccionados",
      newTab: "(se abre en otra pestaña)",
      items: projectsEs,
    },
    about: {
      title: "Cómo trabajo",
      paragraphs: [
        "Me gusta estar cerca del cliente: levanto requerimientos, coordino con proveedores de apps y reporto avances en inglés. Cuando delego trabajo a otros desarrolladores, reviso y apruebo sus PRs.",
        "En el código cuido dos cosas: que el equipo de la tienda pueda editar el contenido desde el admin de Shopify, y que el sitio funcione con teclado y lector de pantalla.",
      ],
    },
    skills: {
      title: "Herramientas",
      groups: skillGroupsEs,
    },
    community: {
      title: "Comunidad en Puebla y México",
      items: [
        {
          name: "PyTalavera",
          role: "Co-organizador desde 2025.",
          description: "Meetups, ponentes, charlas y conexión con el ecosistema tech de Puebla.",
          href: personal.links.pytalavera,
          hrefLabel: "Ver la comunidad",
        },
        {
          name: "PyDay México",
          role: "Organizador desde 2026.",
          description:
            "Circuito en Puebla, CDMX, Guadalajara y Monterrey; llevo el sitio del evento: call for speakers, revisión y pruebas.",
        },
        {
          name: "Charlas y mentoría",
          role: "",
          description:
            "Doy charlas técnicas (Python, retro games) y soy mentor de juniors y estudiantes en hackatones.",
        },
      ],
    },
    contact: {
      title: "Busco un rol remoto de Shopify o Front-End.",
      text: "Si tu equipo trabaja con tiendas Shopify, escríbeme. Respondo en español o en inglés. También me interesan roles presenciales o híbridos en Puebla.",
      emailCta: "jlhc1996@gmail.com",
      cv: "Descargar CV (PDF)",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    caseStudies: {
      memoryAir: memoryAirCaseEs,
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
      title: "Jorge Hernández · Shopify Front-End Developer",
      description:
        "Shopify Front-End Developer en Puebla, México. Temas Online Store 2.0 a medida, migraciones de catálogo y accesibilidad WCAG. Disponible para roles remotos.",
    },
  },
  en: {
    skipLink: "Skip to main content",
    header: {
      contact: "Contact",
      navLabel: "Main",
      nav: {
        work: "Projects",
        community: "Community",
        cv: "CV",
        cvLabel: "Download CV as PDF",
      },
    },
    hero: {
      title: "Shopify Front-End Developer",
      lead: "I'm Jorge Hernández. I build custom Shopify Online Store 2.0 themes for US brands: sections the client's team can edit without a developer, catalogs migrated with scripts, and WCAG accessibility fixes.",
      meta: "Over three years building for the web, nearly two at a US Shopify agency. I work remotely, in English, from Puebla, Mexico.",
      ctaWork: "See projects",
      ctaCv: "Download CV (PDF)",
      ctaEmail: "Email me",
      availability: "Open to remote Shopify and front-end roles.",
      community: [
        { t: "Outside work I co-organize " },
        { link: "pytalavera", t: "PyTalavera" },
        { t: ", help organize " },
        { link: "pydayMexico", t: "PyDay México" },
        { t: " and mentor at hackathons." },
      ],
      recentTitle: "Recent work",
      recent: [
        {
          id: "memory-air",
          href: "#memory-air",
          name: "Memory Air",
          description: "Custom theme, from wireframes to production",
        },
        {
          id: "savory-spice",
          href: "#savory-spice",
          name: "Savory Spice",
          description: "400+ product migration and store locator",
        },
        {
          id: "leaf-shave",
          href: "#leaf-shave",
          name: "Leaf Shave",
          description: "WCAG audit across 54 pages",
        },
      ],
    },
    projects: {
      title: "Selected projects",
      newTab: "(opens in a new tab)",
      items: projectsEn,
    },
    about: {
      title: "How I work",
      paragraphs: [
        "I like working close to the client: I gather requirements, coordinate with app vendors and report progress in English. When I hand work to other developers, I review and approve their PRs.",
        "In the code I focus on two things: that the store team can edit content from the Shopify admin, and that the site works with a keyboard and a screen reader.",
      ],
    },
    skills: {
      title: "Tools",
      groups: skillGroupsEn,
    },
    community: {
      title: "Community in Puebla and Mexico",
      items: [
        {
          name: "PyTalavera",
          role: "Co-organizer since 2025.",
          description: "Meetups, speakers, talks and connections across Puebla's tech scene.",
          href: personal.links.pytalavera,
          hrefLabel: "Visit the community",
        },
        {
          name: "PyDay México",
          role: "Organizer since 2026.",
          description:
            "A circuit across Puebla, Mexico City, Guadalajara and Monterrey; I run the event website: call for speakers, review and testing.",
        },
        {
          name: "Talks and mentoring",
          role: "",
          description: "I give technical talks (Python, retro games) and mentor juniors and students at hackathons.",
        },
      ],
    },
    contact: {
      title: "I'm looking for a remote Shopify or front-end role.",
      text: "If your team builds Shopify stores, send me an email. I reply in English or Spanish. I'm also open to on-site or hybrid roles in Puebla.",
      emailCta: "jlhc1996@gmail.com",
      cv: "Download CV (PDF)",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    caseStudies: {
      memoryAir: memoryAirCaseEn,
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
      title: "Jorge Hernández · Shopify Front-End Developer",
      description:
        "Shopify Front-End Developer in Puebla, Mexico. Custom Online Store 2.0 themes, catalog migrations and WCAG accessibility. Open to remote roles.",
    },
  },
};
