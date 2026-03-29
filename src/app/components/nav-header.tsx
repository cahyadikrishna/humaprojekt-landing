"use client";

export function NavHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(73,75,214,0.04)]">
      <div className="flex justify-between items-center px-5 py-4 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-lg font-black tracking-[-0.04em] text-zinc-900 uppercase">
            CURATOR
          </span>
        </div>
        <button className="bg-primary text-on-primary px-5 py-2 rounded-full font-bold text-xs tracking-widest transition-all hover:opacity-80 active:scale-95">
          RESUME
        </button>
      </div>
    </header>
  );
}
