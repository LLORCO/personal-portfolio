export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-500/15" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-vibe-400/10 blur-3xl dark:bg-vibe-400/8" />
    </div>
  );
}
