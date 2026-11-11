import { useInViewOnce } from "../../hooks/useInViewOnce";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import LiveSiteLink from "./LiveSiteLink";
import ProjectPicture from "./ProjectPicture";
import SpinningCounter from "./SpinningCounter";

export default function FigsCard({ figs }) {
  const [ref, inView] = useInViewOnce({ threshold: 0.45 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <article
      ref={ref}
      className="rounded-2xl border border-moss-950/15 bg-white px-6 py-7 sm:px-8 sm:py-[26px] dark:border-white/10 dark:bg-stone-900"
    >
      <ProjectPicture
        preview={figs.preview}
        className="mb-4 aspect-[16/10] h-auto w-full rounded-[8px] object-cover object-top"
      />
      <h3 className="font-heading text-[1.85rem] font-bold leading-tight tracking-tight text-moss-950 sm:text-[2.15rem] dark:text-stone-50">
        {figs.title}
      </h3>
      <p className="mt-2 text-[0.95rem] font-semibold text-stone-700 dark:text-stone-300">{figs.role}</p>
      <div className="reel-stage my-[18px] mb-1 flex min-h-[5.2em] items-center overflow-visible">
        <SpinningCounter value={figs.count} inView={inView} reducedMotion={reducedMotion} />
      </div>
      <p className="text-base font-semibold text-moss-950 dark:text-mint-100">{figs.countLabel}</p>
      <p className="mt-1.5 text-[0.98rem] leading-snug text-stone-700 dark:text-stone-300">{figs.note}</p>
      <div className="mt-4">
        <LiveSiteLink href={figs.url} variant="text">
          {figs.cta}
        </LiveSiteLink>
      </div>
    </article>
  );
}
