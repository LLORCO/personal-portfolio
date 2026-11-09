import { ArrowRight, Download, Mail } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import { btnPrimary, btnSecondary, focusRing, textLink } from "../ui/buttons";

function CommunityLine({ segments, links, className }) {
  return (
    <p className={className}>
      {segments.map((seg, index) => {
        if (!seg.link) {
          return <span key={index}>{seg.t}</span>;
        }
        const href = links[seg.link];
        if (!href) {
          return <span key={index}>{seg.t}</span>;
        }
        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={textLink}
          >
            {seg.t}
          </a>
        );
      })}
    </p>
  );
}

export default function HeroSection() {
  const { hero, personal, locale } = useContent();
  const cvHref = personal.cv[locale];

  return (
    <section aria-labelledby="hero-title" className="grid gap-x-16 gap-y-12 pb-20 pt-12 lg:grid-cols-12 lg:pt-20">
      <div className="lg:col-span-7">
        <h1
          id="hero-title"
          className="font-heading text-4xl font-bold leading-[1.02] tracking-[-0.025em] text-stone-950 dark:text-stone-50 sm:text-5xl lg:text-6xl"
        >
          Shopify <span className="whitespace-nowrap">Front-End</span> Developer
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-stone-800 dark:text-stone-200 lg:text-xl">
          {hero.lead}
        </p>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-stone-600 dark:text-stone-400">{hero.meta}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#work" className={btnPrimary}>
            {hero.ctaWork}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href={cvHref} download type="application/pdf" className={btnSecondary}>
            <Download size={16} aria-hidden="true" />
            {hero.ctaCv}
          </a>
          <a href={`mailto:${personal.email}`} className={`inline-flex items-center gap-2 py-3 sm:ml-2 ${textLink}`}>
            <Mail size={16} aria-hidden="true" />
            {hero.ctaEmail}
          </a>
        </div>

        <p className="mt-8 text-base font-semibold text-stone-900 dark:text-stone-100">{hero.availability}</p>
        <CommunityLine
          segments={hero.community}
          links={personal.links}
          className="mt-2 max-w-[60ch] text-base leading-relaxed text-stone-700 dark:text-stone-300"
        />
      </div>

      <div className="lg:col-span-5 lg:pt-3">
        <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100">{hero.recentTitle}</h2>
        <ul className="mt-4 border-b border-stone-300 dark:border-stone-700">
          {hero.recent.map((item) => (
            <li key={item.id} className="border-t border-stone-300 dark:border-stone-700">
              <a href={item.href} className={`group flex items-start justify-between gap-6 rounded-sm py-5 ${focusRing}`}>
                <span>
                  <span className="block font-heading text-2xl font-semibold text-stone-950 dark:text-stone-50">
                    {item.name}
                  </span>
                  <span className="mt-1 block text-base font-normal text-stone-600 no-underline dark:text-stone-400">
                    {item.description}
                  </span>
                </span>
                <ArrowRight
                  size={20}
                  aria-hidden="true"
                  className="mt-2 shrink-0 text-accent-800 motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-1 dark:text-accent-300"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
