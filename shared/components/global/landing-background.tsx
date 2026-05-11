export function LandingBackground() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
        }}
      />
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "repeating-linear-gradient(45deg, #020202 0px, color-mix(in oklch, var(--background) 92%, var(--foreground)) 2px, var(--background) 4px, color-mix(in oklch, var(--background) 84%, var(--foreground)) 6px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 hidden dark:block"
        style={{
          background: "color-mix(in oklch, var(--foreground) 2%, transparent)",
          backdropFilter: "blur(45px) grayscale(20%)",
          WebkitBackdropFilter: "blur(45px) grayscale(20%)",
        }}
      />
      <div className="absolute -left-32 top-20 z-0 h-72 w-72 rounded-full bg-brand/14 blur-3xl dark:hidden" />
      <div className="absolute -right-24 top-56 z-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl dark:hidden" />
      <div
        className="absolute inset-x-0 bottom-0 z-0 h-96 dark:hidden"
        style={{
          background:
            "radial-gradient(circle_at_bottom, color-mix(in oklch, var(--brand) 10%, transparent), transparent 60%)",
        }}
      />
    </>
  );
}
