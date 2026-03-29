"use client";

import { useCallback, useEffect, useState } from "react";

const navItems = [
  { icon: "home", label: "Home", index: 0 },
  { icon: "work", label: "Work", index: 1 },
  { icon: "mail", label: "Contact", index: -1 },
];

export function BottomNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;
    const scrollTop = container.scrollTop;
    const sectionHeight = window.innerHeight;
    const current = Math.round(scrollTop / sectionHeight);
    setActiveIndex(current);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (index: number) => {
    if (index < 0) return;
    const container = document.querySelector(".snap-container");
    if (!container) return;
    const sections = container.querySelectorAll(".snap-section");
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-4 items-center bg-white/70 backdrop-blur-md rounded-full px-3 py-1.5 w-fit shadow-sm shadow-black/5 border border-zinc-200/30">
      {navItems.map((item) => {
        const isActive =
          item.index >= 0 &&
          (item.index === 0
            ? activeIndex === 0
            : item.index === 1 && activeIndex >= 1);
        return (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.index)}
            className={`p-1.5 rounded-full transition-colors ${
              isActive
                ? "text-primary"
                : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {item.icon}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
