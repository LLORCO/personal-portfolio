const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700 dark:focus-visible:outline-accent-300";

export const focusRing = focus;

export const btnPrimary = `inline-flex items-center gap-2 rounded-lg bg-accent-700 px-5 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-accent-800 dark:bg-accent-400 dark:text-stone-950 dark:hover:bg-accent-300 ${focus}`;

export const btnPrimarySm = btnPrimary.replace("px-5 py-3 text-base", "px-4 py-2.5 text-sm");

export const btnSecondary = `inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-3 text-base font-semibold text-stone-900 transition-colors duration-150 hover:border-stone-400 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-50 dark:hover:border-stone-500 dark:hover:bg-stone-800 ${focus}`;

export const textLink = `font-semibold text-accent-800 underline decoration-accent-700/40 underline-offset-4 transition-colors hover:decoration-accent-700 dark:text-accent-300 dark:decoration-accent-300/40 dark:hover:decoration-accent-300 ${focus}`;

export const btnContactPrimary = `inline-flex items-center gap-2 rounded-lg bg-accent-400 px-5 py-3 text-base font-semibold text-stone-950 transition-colors duration-150 hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100`;

export const btnContactCv = `inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100`;

export const contactTextLink =
  "text-mint-100 underline underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100";

export const toggleClass = `inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-stone-300 bg-white text-stone-700 transition-colors duration-150 hover:border-stone-400 hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:bg-stone-700 ${focus}`;
