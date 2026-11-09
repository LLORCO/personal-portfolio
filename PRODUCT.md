# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** recruiters and hiring managers filling **remote Shopify Developer and Front-End Developer roles**, mostly at US and international Shopify agencies and brands. They arrive from a CV, LinkedIn, or a job application, usually on desktop, and decide within about a minute whether to read further. Their job: confirm that the role fits, find proof of real Shopify work, and get the CV or contact details.
- **Secondary:** hiring teams in Puebla, Mexico, for on-site or hybrid front-end roles (second preference after remote).
- **Tertiary:** people from the Python and dev community in Puebla and Mexico (PyTalavera, PyDay México) who look Jorge up after a meetup or talk.

## Product Purpose

Personal portfolio of Jorge Luis Hernández Castellanos ("Jorge Hernández" on the site). It exists to **persuade** a hiring reader that Jorge is a credible Shopify Front-End Developer for a remote team, and to make the next step obvious: read a case study, download the CV, or send an email. Success means a recruiter can name his role, his strongest project, and how to contact him after one screen.

## Positioning

A Shopify Front-End Developer who works directly with clients and builds things a client's team can maintain:
- Lead developer on a custom Online Store 2.0 theme (Memory Air), where he started from low-fidelity wireframes, proposed the UI himself, and the client approved it.
- Catalog migrations at scale (Savory Spice) and real WCAG remediation in production (Leaf Shave).
- Gathers requirements, coordinates with third-party app vendors, and reports progress himself, in English.
- Community organizer in Puebla (PyTalavera, PyDay México, hackathon mentoring). This is a visible differentiator, not a footnote.

## Operating Context

- Bilingual site, Spanish (default) and English, with a toggle. English matters most for remote recruiters.
- Light and dark mode with a toggle; the initial theme follows the system preference.
- Visitors compare it against other portfolios and against the CV. The site and the CV must say the same things.
- Live at https://jorgehdz.vercel.app. Repository: LLORCO/personal-portfolio.

## Capabilities and Constraints

- Stack in place: React + Vite + Tailwind CSS 3, copy centralized in `src/data/content.js`, deployed on Vercel with an SPA rewrite.
- Downloadable CV in Spanish and English, with no phone number: `/public/cv/Jorge-Hernandez-CV-ES.pdf` and `/public/cv/Jorge-Hernandez-CV-EN.pdf`. The button follows the active language.
- **Do not name the agency** (Progress Labs) anywhere on the site. Use "a US Shopify agency" or "una agencia Shopify de EE. UU.".
- Memory Air screenshots, video, and wireframes **cannot be published yet** (permission pending). The case study ships text-only, with an empty media slot ready for later.
- Undecided: whether the FIGS live preview can be linked (its URL contains the agency name, so not for now). The stack of the side projects is also unconfirmed.

## Brand Commitments

- Name on the site: Jorge Hernández. Role label: **Shopify Front-End Developer**.
- Voice: first person, plain and specific. Natural Spanish and clear B2+ English. Sentences say what he built and for whom.
- Banned wording: "pixel-perfect", "creative full stack", "Senior", job-ad phrases, slogans, filler adjectives.
- Approved experience phrasing: "más de tres años desarrollando web, casi dos en agencia" / "over three years building for the web, nearly two at an agency". Never "4 years" or "2+".
- English level: B2 certified (Cambridge). Do not claim C1.
- Memory Air is a Liquid Online Store 2.0 theme with Web Components. Never call it Hydrogen, headless, or React, and never say he redesigned its cart.
- React experience is limited to maintaining Hydrogen/Oxygen storefronts (JSX, hooks, state).
- Do not list "AI workflows", Vue, or Node.js. Java and Spring Boot stay in the Backend skills group only (Jorge's decision, Nov 9, 2026), never in the hero or positioning.

## Evidence on Hand

Verified facts. Source: `/workspace/career/perfil-maestro.md`, confirmed by Jorge.

- **Memory Air (memoryair.com):**
  - Lead developer, author of 57 of 60 PRs (56 merged), Jul–Aug 2026.
  - Built the home, product page (membership and cart logic with Seal Subscriptions), Science page, and Wholesale page.
  - Built a scroll-driven video story, flip cards, and animated counters, starting from low-fidelity wireframes. He proposed the UI and the client approved it.
  - Contained a membership-without-product purchase bug with an emergency script, then fixed it permanently.
- **Savory Spice:**
  - Developer within the brand refresh team (not the whole refresh). Built the store locator and the gift sets.
  - Migrated 400+ products with ~115 metafields each, plus recipes, blogs, collections, and store locations, using Python and Matrixify. 28 merged PRs.
  - Integrated Searchanise and worked with their developers to enrich the API responses.
  - Replaced manual JSON settings with product-picker sections.
  - Load times at least 15% faster.
- **Leaf Shave:**
  - Audited 54 pages with axe DevTools: 2,000+ WCAG issues, 49 critical. Fixed every issue that could be fixed in code. 11 merged PRs.
  - Got third-party app developers to add aria-labels to their widgets.
- **FIGS:** static HTML/CSS/JS landing page built from Figma. 36 merged PRs. Not a Shopify store.
- **Community:**
  - PyTalavera since Jan 2025, as co-organizer (role still to be confirmed by Jorge).
  - PyDay México organizer since Feb 2026, a circuit in Puebla, CDMX, Guadalajara, and Monterrey.
  - Hackathon mentor for juniors and students; gives technical talks.

**Absent, do not fabricate:**
- Business metrics for Memory Air.
- Client testimonials or quotes.
- Number of freelance clients.
- Stack of the side projects.
- Note: the 226% / 300% / +22 min figures on memoryair.com are the brand's study claims, not Jorge's results.

## Product Principles

1. **Proof before adjectives.** Every claim points to a project, a number Jorge confirmed, or a link. Unverified means omitted.
2. **One read, three answers.** Role, best project, and next step are clear without scrolling.
3. **His work, not his employer.** Describe what Jorge did; keep the agency unnamed.
4. **Community is part of the profile.** It stays visible on the home page, not buried.
5. **Accessible by default.** It is a WCAG specialist's portfolio, so the site itself has to pass.

## Accessibility & Inclusion

WCAG 2.2 AA as the floor: text contrast ≥4.5:1 in both themes, visible keyboard focus, a correct heading order, a skip link, `lang` that switches with the locale, and full `prefers-reduced-motion` support for any animation.
