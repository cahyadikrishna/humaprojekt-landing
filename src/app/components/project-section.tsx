"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  position: string;
  rotation: string;
}

interface TechCard {
  logo?: string;
  icon: string;
  label: string;
  position: string;
  rotation: string;
}

interface Project {
  display: "mobile" | "desktop";
  title: string;
  subtitle: string;
  tags: string[];
  accentColor: string;
  accentGlow: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
  contentImage?: string;
  featureCards: FeatureCard[];
  techCards: TechCard[];
}

const projects: Project[] = [
  {
    display: "desktop",
    title: "Lokerian",
    subtitle: "Web Cari Lowongan Kerja Harian",
    tags: ["Vue", "Nuxt"],
    accentColor: "rgba(34,197,94,0.08)",
    accentGlow: "bg-green-500/15",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
    icon: "search",
    contentImage: "https://res.cloudinary.com/dhtysfkix/image/upload/v1774784579/lokerian-landing_wijpcr.webp",
    featureCards: [
      {
        icon: "category",
        title: "Smart Cataloging",
        description: "Fresh daily listings from hotels and local businesses.",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "qr_code_scanner",
        title: "Easy Management",
        description: "Post and manage job openings in a few clicks.",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        position: "bottom-[12%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "code", label: "Vue", position: "-translate-y-48 -translate-x-44 md:-translate-x-72", rotation: "-rotate-6" },
      { icon: "web", label: "Nuxt", position: "-translate-y-48 translate-x-44 md:translate-x-72", rotation: "rotate-6" },
      { icon: "storage", label: "Pinia", position: "translate-y-32 translate-x-52 md:translate-x-80", rotation: "rotate-12" },
      { icon: "style", label: "Tailwind", position: "translate-y-32 -translate-x-52 md:-translate-x-80", rotation: "-rotate-12" },
    ],
  },
  {
    display: "desktop",
    title: "Agung Bali Car Rental",
    subtitle: "Company profile & booking via WhatsApp",
    tags: ["Nuxt", "Tailwind"],
    accentColor: "rgba(245,158,11,0.08)",
    accentGlow: "bg-amber-500/15",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    icon: "directions_car",
    contentImage: "https://res.cloudinary.com/dhtysfkix/image/upload/v1774784579/carrental-landing_ejho4v.webp",
    featureCards: [
      {
        icon: "event_available",
        title: "Booking via WA",
        description: "Pre-filled WhatsApp message for instant inquiry.",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "language",
        title: "Responsive Display",
        description: "Seamless layout across desktop and mobile views.",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        position: "bottom-[12%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "web", label: "Nuxt", position: "-translate-y-48 -translate-x-44 md:-translate-x-72", rotation: "-rotate-6" },
      { icon: "style", label: "Tailwind", position: "-translate-y-48 translate-x-44 md:translate-x-72", rotation: "rotate-6" },
      { icon: "cloud", label: "Vercel", position: "translate-y-32 translate-x-52 md:translate-x-80", rotation: "rotate-12" },
      { icon: "chat", label: "WhatsApp", position: "translate-y-32 -translate-x-52 md:-translate-x-80", rotation: "-rotate-12" },
    ],
  },
  {
    display: "desktop",
    title: "Fundamental Codes",
    subtitle: "Jasa Belajar Coding Online",
    tags: ["Next.js", "TypeScript"],
    accentColor: "rgba(14,165,233,0.08)",
    accentGlow: "bg-sky-500/15",
    gradientFrom: "from-sky-500",
    gradientTo: "to-blue-600",
    icon: "terminal",
    contentImage: "https://res.cloudinary.com/dhtysfkix/image/upload/v1774784579/funcode-landing_oeeeni.webp",
    featureCards: [
      {
        icon: "speed",
        title: "Online Course",
        description: "Structured coding modules with hands-on exercises.",
        iconBg: "bg-sky-100",
        iconColor: "text-sky-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "responsive_layout",
        title: "Latest Insight",
        description: "Curriculum aligned with current industry standards.",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        position: "bottom-[12%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "data_object", label: "Next.js", position: "-translate-y-48 -translate-x-44 md:-translate-x-72", rotation: "-rotate-6" },
      { icon: "code", label: "TypeScript", position: "-translate-y-48 translate-x-44 md:translate-x-72", rotation: "rotate-6" },
      { icon: "style", label: "Tailwind", position: "translate-y-32 translate-x-52 md:translate-x-80", rotation: "rotate-12" },
      { icon: "cloud", label: "Vercel", position: "translate-y-32 -translate-x-52 md:-translate-x-80", rotation: "-rotate-12" },
    ],
  },
  {
    display: "desktop",
    title: "Kayana Photo Helper",
    subtitle: "Desktop photo culling app",
    tags: ["Electron", "React"],
    accentColor: "rgba(168,85,247,0.08)",
    accentGlow: "bg-purple-500/15",
    gradientFrom: "from-purple-500",
    gradientTo: "to-fuchsia-500",
    icon: "photo_library",
    contentImage: "https://res.cloudinary.com/dhtysfkix/image/upload/v1774785464/Screenshot_2026-03-29_at_19.35.16_kigbft.webp",
    featureCards: [
      {
        icon: "bolt",
        title: "Rapid Culling",
        description: "Keyboard-driven workflow to cull thousands of photos.",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "folder_open",
        title: "Batch Export",
        description: "One-click copy of selected photos to any folder.",
        iconBg: "bg-fuchsia-100",
        iconColor: "text-fuchsia-600",
        position: "bottom-[12%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "desktop_windows", label: "Electron", position: "-translate-y-48 -translate-x-44 md:-translate-x-72", rotation: "-rotate-6" },
      { icon: "code", label: "React", position: "-translate-y-48 translate-x-44 md:translate-x-72", rotation: "rotate-6" },
      { icon: "data_object", label: "Node.js", position: "translate-y-32 translate-x-52 md:translate-x-80", rotation: "rotate-12" },
      { icon: "image", label: "Sharp", position: "translate-y-32 -translate-x-52 md:-translate-x-80", rotation: "-rotate-12" },
    ],
  },
  {
    display: "mobile",
    title: "Censly Gen",
    subtitle: "AI-powered assistant",
    tags: ["OpenClaw", "TypeScript"],
    accentColor: "rgba(59,130,246,0.08)",
    accentGlow: "bg-blue-500/20",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    icon: "smart_toy",
    contentImage: "https://res.cloudinary.com/dhtysfkix/image/upload/v1774784583/IMG_0960_zt1zaz.png",
    featureCards: [
      {
        icon: "psychology",
        title: "Context Engine",
        description: "Persistent memory across multi-turn conversations.",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        position: "top-[16%] left-[2%]",
        rotation: "-rotate-6",
      },
      {
        icon: "bolt",
        title: "Telegram Integration",
        description: "Seamless AI chat directly inside Telegram.",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-600",
        position: "bottom-[20%] right-[2%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "auto_awesome", label: "OpenClaw", position: "-translate-y-44 translate-x-4", rotation: "-rotate-6" },
      { icon: "code", label: "TypeScript", position: "translate-y-40 translate-x-28", rotation: "rotate-6" },
      { icon: "send", label: "Telegram", position: "-translate-y-16 translate-x-44", rotation: "rotate-12" },
      { icon: "terminal", label: "KiloCode", position: "translate-y-16 -translate-x-40", rotation: "-rotate-6" },
    ],
  },
  {
    display: "mobile",
    title: "Censly Fin",
    subtitle: "Financial Helper",
    tags: ["TypeScript", "Supabase"],
    accentColor: "rgba(16,185,129,0.08)",
    accentGlow: "bg-emerald-500/10",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
    icon: "account_balance",
    contentImage: "https://res.cloudinary.com/dhtysfkix/image/upload/v1774784588/IMG_0959_bez7u7.png",
    featureCards: [
      {
        icon: "trending_up",
        title: "Telegram",
        description: "Log transactions instantly via Telegram bot.",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        position: "top-[16%] left-[2%]",
        rotation: "-rotate-6",
      },
      {
        icon: "security",
        title: "Reporting",
        description: "Live financial reports synced to Google Sheets.",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        position: "bottom-[20%] right-[2%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "database", label: "Supabase", position: "-translate-y-44 translate-x-4", rotation: "-rotate-6" },
      { icon: "table_chart", label: "SpreadSheet", position: "translate-y-40 translate-x-28", rotation: "rotate-6" },
      { icon: "search", label: "Google", position: "-translate-y-16 translate-x-44", rotation: "rotate-12" },
    ],
  },
  {
    display: "mobile",
    title: "Censly Expense App",
    subtitle: "Mobile app expense tracker",
    tags: ["React Native", "TypeScript"],
    accentColor: "rgba(234,88,12,0.08)",
    accentGlow: "bg-orange-500/20",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    icon: "receipt_long",
    contentImage: "https://res.cloudinary.com/dhtysfkix/image/upload/v1774785465/IMG_0829_mnjc34.webp",
    featureCards: [
      {
        icon: "pie_chart",
        title: "Spending Insights",
        description: "Visual breakdowns of expenses by category.",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        position: "top-[16%] left-[2%]",
        rotation: "-rotate-6",
      },
      {
        icon: "receipt",
        title: "Quick Logging",
        description: "Add expenses in seconds with smart defaults.",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        position: "bottom-[20%] right-[2%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "phone_android", label: "React Native", position: "-translate-y-44 translate-x-4", rotation: "-rotate-6" },
      { icon: "code", label: "TypeScript", position: "translate-y-40 translate-x-28", rotation: "rotate-6" },
      { icon: "database", label: "Supabase", position: "-translate-y-16 translate-x-44", rotation: "rotate-12" },
      { icon: "auto_awesome", label: "Gemini", position: "translate-y-16 -translate-x-40", rotation: "-rotate-6" },
    ],
  },
  {
    display: "desktop",
    title: "Evisa Landing & Dashboard",
    subtitle: "Visa application platform",
    tags: ["Nuxt", "Tailwind"],
    accentColor: "rgba(99,102,241,0.08)",
    accentGlow: "bg-indigo-500/15",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-blue-500",
    icon: "flight",
    contentImage: "https://res.cloudinary.com/dhtysfkix/image/upload/v1774784579/evisa-landing_na4tv3.webp",
    featureCards: [
      {
        icon: "description",
        title: "Smart Forms",
        description: "Step-by-step visa application with validation.",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "track_changes",
        title: "Status Tracking",
        description: "Real-time progress updates from visa vendors.",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        position: "bottom-[12%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "web", label: "Nuxt", position: "-translate-y-48 -translate-x-44 md:-translate-x-72", rotation: "-rotate-6" },
      { icon: "style", label: "Tailwind", position: "-translate-y-48 translate-x-44 md:translate-x-72", rotation: "rotate-6" },
      { icon: "widgets", label: "Quasar", position: "translate-y-32 translate-x-52 md:translate-x-80", rotation: "rotate-12" },
    ],
  },
];

/* ─── Shared sub-components ─── */

function TechCards({ cards }: { cards: TechCard[] }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {cards.map((tech, i) => (
        <div
          key={tech.label}
          className={`absolute ${tech.position} ${tech.rotation} flex flex-col items-center gap-1 animate-float`}
          style={{ "--float-delay": `${i * 0.7}s`, "--float-duration": `${3 + i * 0.3}s` } as CSSProperties}
        >
          <div className="w-11 h-11 md:w-12 md:h-12 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-zinc-100 flex items-center justify-center">
            {tech.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tech.logo} alt={tech.label} className="w-6 h-6 md:w-7 md:h-7 object-contain" />
            ) : (
              <span className="material-symbols-outlined text-zinc-500 text-lg md:text-xl">
                {tech.icon}
              </span>
            )}
          </div>
          <span className="text-[9px] font-semibold text-zinc-400 tracking-wide">
            {tech.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function rotationToDeg(twClass: string): string {
  const match = twClass.match(/(-?)rotate-(\d+)/);
  if (!match) return "0deg";
  return `${match[1]}${match[2]}deg`;
}

function FeatureCards({ cards }: { cards: FeatureCard[] }) {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className={`feature-card animate-float absolute ${card.position} w-36 md:w-44 p-3 md:p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl shadow-zinc-200/50 border border-white/20 pointer-events-auto`}
          style={{
            "--rotation": rotationToDeg(card.rotation),
            "--float-delay": `${0.3 + i * 0.8}s`,
            "--float-duration": `${3.5 + i * 0.3}s`,
          } as CSSProperties}
        >
          <div className={`w-7 h-7 rounded-lg ${card.iconBg} flex items-center justify-center mb-2`}>
            <span className={`material-symbols-outlined ${card.iconColor} text-sm`}>
              {card.icon}
            </span>
          </div>
          <h4 className="text-on-surface font-bold text-xs mb-0.5">
            {card.title}
          </h4>
          <p className="text-on-surface-variant text-[10px] leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function ProjectInfo({
  project,
  className,
  centerTags,
}: {
  project: Project;
  className?: string;
  centerTags?: boolean;
}) {
  return (
    <div className={className}>
      <div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-1">
          {project.title}
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant font-medium">
          {project.subtitle}
        </p>
      </div>
      <div className={`flex gap-3 justify-center ${centerTags ? "" : "md:justify-start"} mt-4`}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 bg-surface-container rounded-full text-[11px] font-bold tracking-wider text-outline uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── iPhone mockup ─── */

function MobileMockup({ project }: { project: Project }) {
  return (
    <div className="relative z-20 group">
      <div className={`absolute inset-0 ${project.accentGlow} blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700`} />
      <div className="floating-mockup relative w-[180px] h-[380px] md:w-[220px] md:h-[460px] bg-zinc-900 rounded-[2.5rem] p-1.5 shadow-[0_48px_80px_rgba(45,52,53,0.15)] ring-4 ring-zinc-800/50">
        <div className={`relative w-full h-full bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} rounded-[2rem] overflow-hidden`}>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-30" />
          {project.contentImage ? (
            <Image src={project.contentImage} alt={project.title} fill sizes="(max-width: 768px) 180px, 220px" className="object-cover object-top" />
          ) : (
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-white/30 text-5xl md:text-6xl">
                {project.icon}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── MacBook mockup ─── */

function DesktopMockup({ project }: { project: Project }) {
  return (
    <div className="relative z-20 group">
      {/* Floating blobs */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full" />
      {/* MacBook container */}
      <div className="relative flex flex-col items-center">
        {/* Screen */}
        <div className="w-[300px] h-[195px] md:w-[480px] md:h-[310px] bg-neutral-900 rounded-t-[8px] md:rounded-t-[12px] p-1.5 md:p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] relative overflow-hidden border-[4px] md:border-[6px] border-neutral-800">
          <div className={`w-full h-full bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} rounded-[3px] md:rounded-[4px] overflow-hidden relative`}>
            {project.contentImage ? (
              <Image src={project.contentImage} alt={project.title} fill sizes="(max-width: 768px) 300px, 480px" className="object-cover object-top" />
            ) : (
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-white/30 text-5xl md:text-7xl">
                  {project.icon}
                </span>
              </div>
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
          </div>
        </div>
        {/* Keyboard base */}
        <div className="w-[340px] md:w-[560px] h-[10px] md:h-[14px] bg-neutral-700 rounded-b-lg md:rounded-b-xl relative shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-0.5 md:h-1 bg-neutral-800/50 rounded-b-sm" />
        </div>
      </div>
    </div>
  );
}

/* ─── Card layouts per display type ─── */

function MobileProjectCard({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="snap-section bg-surface">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-70" />
      {/* Accent gradient — centered on mobile, right-side on desktop (under mockup) */}
      <div
        className="absolute top-1/2 left-1/2 md:left-auto md:right-[20%] -translate-x-1/2 -translate-y-1/2 md:translate-x-1/2 w-[600px] h-[600px] pointer-events-none rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${project.accentColor.replace(/[\d.]+\)$/, "0.18)")} 0%, transparent 70%)` }}
      />

      <div className="relative h-full max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-20">
        {/* Stage */}
        <div
          className={`relative order-1 md:order-2 w-full max-w-sm h-[420px] md:h-[500px] perspective-1000 flex items-center justify-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <TechCards cards={project.techCards} />
          <MobileMockup project={project} />
          <FeatureCards cards={project.featureCards} />
        </div>

        {/* Info */}
        <ProjectInfo
          project={project}
          className={`order-2 md:order-1 max-w-sm text-center md:text-left ${
            isVisible ? "animate-fade-in-up-delay-1" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
}

function DesktopProjectCard({ project }: { project: Project }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="snap-section bg-surface">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-70" />
      {/* Accent gradient — centered under mockup */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${project.accentColor.replace(/[\d.]+\)$/, "0.18)")} 0%, transparent 70%)` }}
      />

      <div className="relative h-full max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center gap-6">
        {/* Stage — centered for both mobile & desktop viewport */}
        <div
          className={`relative w-full max-w-2xl h-[340px] md:h-[420px] flex items-center justify-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <TechCards cards={project.techCards} />
          <DesktopMockup project={project} />
          <FeatureCards cards={project.featureCards} />
        </div>

        {/* Info — always below, centered */}
        <ProjectInfo
          project={project}
          centerTags
          className={`max-w-md text-center ${
            isVisible ? "animate-fade-in-up-delay-1" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
}

/* ─── Export ─── */

export function ProjectSections() {
  return (
    <>
      {projects.map((project) =>
        project.display === "desktop" ? (
          <DesktopProjectCard key={project.title} project={project} />
        ) : (
          <MobileProjectCard key={project.title} project={project} />
        )
      )}
    </>
  );
}
