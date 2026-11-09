# Jorge Hernández — Evidencia y proyectos

> Casos reales, métricas y contexto para secciones del portfolio.  
> Complementado con export GitHub en `profile/github-export/` (jun 2026).

---

## Resumen de actividad GitHub (jun 2024 → jun 2026)

- **96 pull requests** (85 mergeados)
- **323+ commits** en repos activos (muestra exportada)
- Repos principales: Progress Labs (Shopify/Liquid), PyDay México, proyectos personales

---

## Trabajo profesional — Progress Labs (confirmado)

Rol: desarrollo frontend / Shopify Liquid · colaboración con diseño y backend · ownership de entregas en themes.

### 1. Savory Spice — `progress-labs/savory-spice` ⭐ Proyecto bandera

**Cliente:** [Savory Spice Shop](https://www.savoryspiceshop.com) — tienda ecommerce de especias y condimentos en USA.

**Por qué es el case study principal:** Proyecto donde puse a prueba casi **todas** mis habilidades como desarrollador de interfaces — no fue solo migración de datos. Colaboré con el equipo de diseño en el **refresco de identidad de marca** y construí piezas completas del storefront desde cero.

**Escala del catálogo:** la marca comunica **400+ especias, hierbas y blends**; cientos de SKUs con variantes (jar, refill bag, large bag), bundles, recetas y contenido editorial.

**Qué hice (alcance real):**

**Identidad & colaboración con diseño**

- Trabajo conjunto con diseño para traducir el refresh de marca a código en producción
- Secciones completas custom — no solo tweaks: bloques nuevos, layouts modulares, consistencia visual en todo el theme
- Criterio de fidelidad al diseño entre Figma y Liquid en un catálogo que no perdona inconsistencias

**Interfaces & componentes custom**

- **Carousels custom** — featured products, gift sets, recipe cards, comportamiento mobile/desktop
- **Store locator** — experiencia de tiendas físicas integrada al ecommerce
- **PDP avanzados** — descuentos dinámicos, bundles, gift sets, variantes de presentación
- **Páginas automatizadas** — templates y secciones alimentadas por metafields/metaobjects a escala
- Recipe cards, filtros de producto, discount badges, grids responsivos

**Datos & operaciones a escala**

- **Migración de metafields** con scripts Python + Matrixify (metadatos de producto, contenido asociado)
- Manejo de información masiva — catálogo, recetas, formatos, bundles — reproducible y mantenible
- Repo público de referencia: [shopify-metafields-migration](https://github.com/LLORCO/shopify-metafields-migration)

**Evidencia GitHub**

- **29 PRs mergeados** · ~190 commits en el periodo exportado
- Tickets referenciados: SAV-258, SAV-260, SAV-281, SAV-306, SAV-324, SAV-332, etc.

**Impacto / valor (para copy del portfolio):**

- Storefront que refleja una identidad de marca renovada — algo que el cliente puede presumir
- Catálogo de 400+ productos gestionable sin romper diseño ni operaciones
- Demuestra perfil **Shopify dev + creative dev + full stack de interfaz** en un solo proyecto
- Automatización que ahorra semanas de trabajo manual en contenido y metadatos

**Stack:** Shopify Liquid · JavaScript · CSS · Python · Matrixify · Figma (handoff)

**Mostrar en portfolio:** Sí — **primera card, más espacio, posible case study extendido**. No reducir a "solo migración".

**Barra sugerida:** `bg-moss-800`

**Nota personal (tono About/Hero):** Proyecto del que más orgullo — convergencia de diseño, código, escala y criterio de producto.

---

### 2. Leaf Shave — `progress-labs/leaf-shave-new`

**Qué hice:**

- **12 PRs mergeados** enfocados en **accesibilidad WCAG/ADA**
- Cart live regions (anuncios add/update/remove en carrito)
- Jerarquía de headings (h1 en páginas clave)
- Alt text en imágenes, iconos de navegación, ratings, secciones How To Use
- Landmarks ARIA, labels en links de footer, corrección de markup semántico
- PR adicional en `LSasimone/leaf-shopify-theme`: accessibility audit fixes

**Impacto / valor:**

- Reduce riesgo legal y mejora experiencia para usuarios con lectores de pantalla
- Demuestra que accesibilidad se implementa en producción, no solo se menciona

**Stack:** Shopify Liquid · WCAG 2.x · ARIA

**Mostrar en portfolio:** Sí — **pilar diferenciador**. Case study ideal de accesibilidad ecommerce.

**Barra sugerida:** `bg-accent-500`

---

### 3. FIGS Landing — `progress-labs/figs-landing`

**Qué hice:**

- **36 PRs mergeados** — landing corporativa/narrativa
- Nav sticky, tabs, carousels, cards con transform, animaciones sincronizadas
- Fixes mobile extensivos (carousel, tabs, border radius, pillars)
- Tipografía, parallax, secciones Product / People / Purpose / Impact

**Impacto / valor:**

- Ejecución fiel al diseño en marketing site de alto detalle visual
- Equilibrio entre creatividad y comportamiento responsive impecable

**Stack:** HTML/CSS/JS (landing custom)

**Mostrar en portfolio:** Sí.

**Barra sugerida:** `bg-vibe-500`

---

### 4. Polly Wales — `progress-labs/polly-wales`

**Qué hice:**

- **5 PRs** — secciones custom Liquid (statement-block, image-block, content-content, media content)
- FAQ con URL params y smooth scrolling

**Stack:** Shopify Liquid

**Mostrar en portfolio:** Sí, como ejemplo de sections modulares en theme premium.

---

## Anexo técnico — Metafields migration (parte de Savory Spice)

**Repo:** [LLORCO/shopify-metafields-migration](https://github.com/LLORCO/shopify-metafields-migration)

**Contexto:** Una capa del proyecto Savory Spice — no el proyecto completo. Catálogo de **400+ productos** con metadatos ricos (recetas, formatos, bundles, contenido asociado).

**Qué hice:** Scripts automatizados para migración de metafields vía Matrixify, complementando las secciones y páginas automatizadas del theme.

**Por qué importa en la narrativa:** Muestra que además de construir UI, domino la **columna vertebral de datos** del ecommerce. Migrar mal rompe PDPs, SEO y operaciones; automatizar bien libera al equipo de diseño y negocio.

**Mostrar en portfolio:** Enlazar desde la card de Savory Spice — no como proyecto separado que eclipse el resto del trabajo.

---

## Proyectos personales / freelance representativos

### Invitación de boda — `LLORCO/boda-invitacion`

**Qué es:** Landing React + Vite + Tailwind + animaciones AOS.

**Enfoque UX:**

- Accesibilidad para **invitados** (lectura, navegación, claridad)
- Accesibilidad para **quienes gestionan** la experiencia

**GitHub:** 7 PRs mergeados · 22 commits

**Mostrar en portfolio:** Sí — ejemplo de creative dev + cuidado por usuarios reales.

---

### Street Fighter Scoreboard — `LLORCO/street_fighter_scoreboard`

**Qué es:** Tablero de puntuación para torneos — UI + servidor en tiempo real.

**Enfoque UX:**

- Simple para la persona que lleva el conteo del marcador
- Claro para participantes y público

**Conexión comunidad:** Encaja con charlas retro/Python en PyTalavera.

**Mostrar en portfolio:** Sí — side project con propósito claro.

---

### Otros repos públicos (secundarios)

| Repo | Notas |
|---|---|
| `ECOMMERCE_WEB` | Ecommerce React + Tailwind, dark mode, Vercel |
| `Tetris_py` | Python — charlas / comunidad |
| `shopify-metafields-migration` | Ver arriba |

---

## Comunidad

### PyTalavera — Co-organizador

**Web:** https://pytalavera.github.io/comunidad/

**Qué hago:**

- Organizar meetups mensuales
- Onboarding de asistentes
- Conectar con otros programadores y comunidades locales
- Crear presentaciones y buscar ponentes (también doy pláticas)
- Promover la comunidad en eventos del ecosistema tech de Puebla

**Copy sugerido:** "Comunidad pythonista en Puebla — espacio inclusivo para aprender, compartir y colaborar."

---

### Python México — PyDay México

**Rol:** PM del desarrollo de la página web del circuito nacional de eventos. Puebla = **primera sede**.

**Qué hago:**

- Gestionar desarrollo del sitio (no como dev principal, sino como PM)
- Revisar y testear entregables
- Brainstorms y propuestas de producto/experiencia
- **Call for speakers** (junto con otro colaborador)
- PR en repo `PythonMexico/pyday.mx` (sede Puebla)

**Copy sugerido:** "Puente entre comunidad, producto y ejecución — del meetup local al evento nacional."

---

## Propuesta para sección Projects (orden sugerido)

1. **Savory Spice** — Case study bandera: refresh de marca + secciones custom + carousels + store locator + páginas automatizadas + metafields a escala
2. **Leaf Shave** — Accesibilidad WCAG en Shopify (diferenciador)
3. **FIGS Landing** — Creative dev + fidelidad al diseño
4. **Scoreboard / Invitación** — UX para operadores y usuarios (card combinada o dos cards más pequeñas)

---

## Skills — agrupación por capacidades (no solo logos)

### Frontend & UI

React · JavaScript · Tailwind CSS · Responsive design · Implementación fiel al diseño · Microinteracciones

### Ecommerce

Shopify · Liquid · Metafields · Matrixify · PDP · Theme customization · Integraciones third-party

### Optimización & calidad

SEO · Accesibilidad WCAG/ADA · Auditorías · Performance · Semantic HTML · ARIA

### Backend & integraciones

Java · Spring Boot · Python · REST APIs · SQL

### Procesos & liderazgo

Ownership de proyectos · PM ligero · Git · CI/CD basics · IA en flujos de trabajo

### Comunidad

Organización de meetups · Charlas técnicas · Call for speakers · Community building

---

## Marquee tokens sugeridos

`ECOMMERCE` · `SHOPIFY` · `A11Y` · `CREATIVE DEV` · `FULL STACK` · `SEO` · `PYTALAVERA` · `COMMUNITY`

---

## Ronda 3 — Freelance vs empleo (completada)

- **Servicios:** catálogo completo en `profile/OFFERS.md` (Shopify, a11y, landings, CRM/ERP, IA, APIs, etc.)
- **Freelance:** proyectos cortos y largos
- **Roles empleo:** senior frontend · fullstack · hybrid design-dev · shopify dev
- **Empresa:** agencia · startup · remoto preferido (abierto a presencial)
- **Restricciones:** ninguna declarada — abierto a retos alineados
- **Disponibilidad:** "Abierto a nuevas oportunidades" + tono retador sin urgencia
