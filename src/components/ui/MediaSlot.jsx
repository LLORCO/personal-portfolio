import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { btnPrimary } from "./buttons";

export default function MediaSlot({ media }) {
  const [allowMotion, setAllowMotion] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!media || media.type !== "video") return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const sync = () => setAllowMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [media]);

  if (!media) return null;

  if (media.type === "video") {
    const shouldPlay = allowMotion || playing;
    return (
      <figure className="lg:col-span-12">
        {shouldPlay ? (
          <video
            className="aspect-video w-full rounded-xl object-cover"
            muted
            playsInline
            loop
            poster={media.poster}
            autoPlay={allowMotion || playing}
          >
            <source src={media.src} />
          </video>
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className={`relative block w-full ${btnPrimary} !p-0`}>
            <img src={media.poster} alt="" className="aspect-video w-full rounded-xl object-cover" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-lg bg-accent-700 px-4 py-2.5 text-sm font-semibold text-white dark:bg-accent-400 dark:text-stone-950">
                <Play size={16} aria-hidden="true" />
                Play
              </span>
            </span>
          </button>
        )}
      </figure>
    );
  }

  return (
    <figure className="lg:col-span-12">
      <img src={media.src} alt={media.alt ?? ""} loading="lazy" className="aspect-video w-full rounded-xl object-cover" />
    </figure>
  );
}
