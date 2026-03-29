"use client";

export function LandingSection() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-surface">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60" />

      {/* Center content */}
      <div className="relative z-10 text-center space-y-6">
        <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
          Portfolio 2025
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-[#111]">
          My Projects
        </h1>
        <p className="text-on-surface-variant text-base max-w-xs mx-auto font-light leading-snug tracking-tight">
          Fullstack developer crafting digital experiences with care.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <p className="text-[10px] font-medium text-outline tracking-widest uppercase">
          Scroll to explore
        </p>
        <div className="w-5 h-8 rounded-full border-2 border-outline-variant/30 flex justify-center p-1">
          <div className="w-1 h-1 bg-primary rounded-full scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
