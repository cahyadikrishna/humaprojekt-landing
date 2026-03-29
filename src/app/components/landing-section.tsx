"use client";

import Image from "next/image";

export function LandingSection() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-surface">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid" />

      {/* Accent gradient — centered */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(73, 75, 214, 0.18) 0%, transparent 70%)" }}
      />

      {/* Center content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Profile photo card */}
        <div className="flex justify-center mb-2">
          <div
            className="feature-card animate-float rounded-2xl bg-white/90 backdrop-blur-md p-2 shadow-xl shadow-zinc-200/50"
            style={
              { "--rotation": "-2deg", "--float-duration": "4s" } as React.CSSProperties
            }
          >
            <Image
              src="https://res.cloudinary.com/dhtysfkix/image/upload/v1774801086/IMG_4706_hkeboo.jpg"
              alt="Cahyadi Krishna"
              width={144}
              height={144}
              className="rounded-lg object-cover w-36 h-36"
              priority
            />
          </div>
        </div>

        <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
          Portfolio
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-[#111]">
          Cahyadi Krishna
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
