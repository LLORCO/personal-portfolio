import { useInViewOnce } from "../../hooks/useInViewOnce";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function TextsReveal({ titleId, title, text }) {
  const [ref, inView] = useInViewOnce({ threshold: 0.4 });
  const reducedMotion = usePrefersReducedMotion();
  const shown = reducedMotion || inView;

  return (
    <div ref={ref} className={`t-stagger ${shown ? "is-shown" : ""}`}>
      <h2
        id={titleId}
        className="t-stagger-line t-stagger-line--1 text-balance font-heading text-3xl font-bold tracking-tight text-moss-950 dark:text-mint-100 sm:text-4xl lg:text-[2.55rem] lg:leading-[1.05]"
      >
        {title}
      </h2>
      <p className="t-stagger-line t-stagger-line--2 mt-2 max-w-2xl text-pretty text-base text-stone-700 dark:text-stone-300 sm:text-lg">
        {text}
      </p>
    </div>
  );
}
