import { useContent } from "../../hooks/useContent";

export default function AboutSection() {
  const { about } = useContent();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-t border-stone-200 py-14 dark:border-stone-800 sm:py-20"
    >
      <h2
        id="about-title"
        className="font-heading text-3xl font-bold tracking-[-0.02em] text-stone-950 dark:text-stone-50 sm:text-4xl"
      >
        {about.title}
      </h2>
      <div className="mt-6 max-w-[50ch] space-y-4 text-lg leading-relaxed text-stone-700 dark:text-stone-300">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
