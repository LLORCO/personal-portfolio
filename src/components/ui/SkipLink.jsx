import { useContent } from "../../hooks/useContent";

export default function SkipLink() {
  const { skipLink } = useContent();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-stone-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent-700 dark:focus:bg-stone-900 dark:focus:text-stone-50 dark:focus:outline-accent-300"
    >
      {skipLink}
    </a>
  );
}
