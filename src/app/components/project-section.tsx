"use client";

import { useEffect, useRef, useState } from "react";

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
  featureCards: FeatureCard[];
  techCards: TechCard[];
}

const projects: Project[] = [
  {
    display: "mobile",
    title: "Photography Vendor Platform",
    subtitle: "Full-stack booking system",
    tags: ["Next.js", "Postgres"],
    accentColor: "rgba(124,58,237,0.08)",
    accentGlow: "bg-purple-500/20",
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-600",
    icon: "photo_camera",
    featureCards: [
      {
        icon: "calendar_month",
        title: "Smart Booking",
        description: "Real-time availability with instant confirmation.",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        position: "top-[16%] left-[2%]",
        rotation: "-rotate-6",
      },
      {
        icon: "payments",
        title: "Secure Payments",
        description: "Stripe-powered escrow for every session.",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        position: "bottom-[20%] right-[2%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "data_object", label: "Next.js", position: "-translate-y-44 translate-x-4", rotation: "-rotate-6" },
      { icon: "database", label: "Supabase", position: "translate-y-40 translate-x-28", rotation: "rotate-6" },
      { icon: "cloud", label: "Vercel", position: "-translate-y-16 translate-x-44", rotation: "rotate-12" },
      { icon: "image", label: "Cloudinary", position: "translate-y-16 -translate-x-40", rotation: "-rotate-6" },
    ],
  },
  {
    display: "desktop",
    title: "Censly Dashboard",
    subtitle: "Financial analytics platform",
    tags: ["React", "D3.js", "Node.js"],
    accentColor: "rgba(99,102,241,0.08)",
    accentGlow: "bg-indigo-500/15",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-violet-500",
    icon: "monitoring",
    featureCards: [
      {
        icon: "insights",
        title: "Real-time Charts",
        description: "Live data visualization with sub-second updates.",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "shield",
        title: "Role-based Access",
        description: "Granular permissions for teams and orgs.",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        position: "top-[8%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "code", label: "React", position: "-translate-y-48 -translate-x-44", rotation: "-rotate-6" },
      { icon: "bar_chart", label: "D3.js", position: "-translate-y-48 translate-x-44", rotation: "rotate-6" },
      { icon: "dns", label: "Node.js", position: "translate-y-32 translate-x-52", rotation: "rotate-12" },
      { icon: "database", label: "Postgres", position: "translate-y-32 -translate-x-52", rotation: "-rotate-12" },
    ],
  },
  {
    display: "desktop",
    title: "Lokerian",
    subtitle: "Inventory management web app",
    tags: ["Vue", "Nuxt"],
    accentColor: "rgba(34,197,94,0.08)",
    accentGlow: "bg-green-500/15",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
    icon: "inventory_2",
    featureCards: [
      {
        icon: "category",
        title: "Smart Cataloging",
        description: "Auto-organized inventory with real-time stock sync.",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "qr_code_scanner",
        title: "Barcode Scanning",
        description: "Instant lookup via integrated scanner module.",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        position: "top-[8%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "code", label: "Vue", position: "-translate-y-48 -translate-x-44", rotation: "-rotate-6" },
      { icon: "web", label: "Nuxt", position: "-translate-y-48 translate-x-44", rotation: "rotate-6" },
      { icon: "storage", label: "Pinia", position: "translate-y-32 translate-x-52", rotation: "rotate-12" },
      { icon: "cloud", label: "Vercel", position: "translate-y-32 -translate-x-52", rotation: "-rotate-12" },
    ],
  },
  {
    display: "desktop",
    title: "Agung Bali Car Rental",
    subtitle: "Company profile & booking site",
    tags: ["Nuxt", "Tailwind"],
    accentColor: "rgba(245,158,11,0.08)",
    accentGlow: "bg-amber-500/15",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    icon: "directions_car",
    featureCards: [
      {
        icon: "event_available",
        title: "Booking Calendar",
        description: "Date picker with live fleet availability.",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "language",
        title: "Multi-language",
        description: "EN/ID content for international tourists.",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        position: "top-[8%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "web", label: "Nuxt", position: "-translate-y-48 -translate-x-44", rotation: "-rotate-6" },
      { icon: "style", label: "Tailwind", position: "-translate-y-48 translate-x-44", rotation: "rotate-6" },
      { icon: "image", label: "Cloudinary", position: "translate-y-32 translate-x-52", rotation: "rotate-12" },
      { icon: "dns", label: "Netlify", position: "translate-y-32 -translate-x-52", rotation: "-rotate-12" },
    ],
  },
  {
    display: "desktop",
    title: "Fundamental Codes",
    subtitle: "Company profile & landing page",
    tags: ["Next.js", "TypeScript"],
    accentColor: "rgba(14,165,233,0.08)",
    accentGlow: "bg-sky-500/15",
    gradientFrom: "from-sky-500",
    gradientTo: "to-blue-600",
    icon: "terminal",
    featureCards: [
      {
        icon: "speed",
        title: "Lighthouse 100",
        description: "Perfect scores across all Core Web Vitals.",
        iconBg: "bg-sky-100",
        iconColor: "text-sky-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "responsive_layout",
        title: "Pixel-perfect",
        description: "Responsive design matching Figma spec 1:1.",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        position: "top-[8%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "data_object", label: "Next.js", position: "-translate-y-48 -translate-x-44", rotation: "-rotate-6" },
      { icon: "code", label: "TypeScript", position: "-translate-y-48 translate-x-44", rotation: "rotate-6" },
      { icon: "style", label: "Tailwind", position: "translate-y-32 translate-x-52", rotation: "rotate-12" },
      { icon: "cloud", label: "Vercel", position: "translate-y-32 -translate-x-52", rotation: "-rotate-12" },
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
    featureCards: [
      {
        icon: "bolt",
        title: "Rapid Culling",
        description: "Keyboard-driven workflow for fast selection.",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        position: "top-[8%] left-[0%]",
        rotation: "-rotate-3",
      },
      {
        icon: "folder_open",
        title: "Batch Export",
        description: "One-click export of selected photos to folder.",
        iconBg: "bg-fuchsia-100",
        iconColor: "text-fuchsia-600",
        position: "top-[8%] right-[0%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "desktop_windows", label: "Electron", position: "-translate-y-48 -translate-x-44", rotation: "-rotate-6" },
      { icon: "code", label: "React", position: "-translate-y-48 translate-x-44", rotation: "rotate-6" },
      { icon: "data_object", label: "Node.js", position: "translate-y-32 translate-x-52", rotation: "rotate-12" },
      { icon: "image", label: "Sharp", position: "translate-y-32 -translate-x-52", rotation: "-rotate-12" },
    ],
  },
  {
    display: "mobile",
    title: "Censly Gen",
    subtitle: "AI-powered assistant",
    tags: ["OpenAI", "TypeScript"],
    accentColor: "rgba(59,130,246,0.08)",
    accentGlow: "bg-blue-500/20",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    icon: "smart_toy",
    featureCards: [
      {
        icon: "psychology",
        title: "Context Engine",
        description: "Deep memory across multi-turn conversations.",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        position: "top-[16%] left-[2%]",
        rotation: "-rotate-6",
      },
      {
        icon: "bolt",
        title: "Streaming Output",
        description: "Token-by-token real-time responses.",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-600",
        position: "bottom-[20%] right-[2%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "auto_awesome", label: "OpenAI", position: "-translate-y-44 translate-x-4", rotation: "-rotate-6" },
      { icon: "code", label: "TypeScript", position: "translate-y-40 translate-x-28", rotation: "rotate-6" },
      { icon: "send", label: "Telegram", position: "-translate-y-16 translate-x-44", rotation: "rotate-12" },
      { icon: "storage", label: "Redis", position: "translate-y-16 -translate-x-40", rotation: "-rotate-6" },
    ],
  },
  {
    display: "mobile",
    title: "Censly Fin",
    subtitle: "Financial planning dashboard",
    tags: ["React Native", "GraphQL"],
    accentColor: "rgba(16,185,129,0.08)",
    accentGlow: "bg-emerald-500/10",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
    icon: "account_balance",
    featureCards: [
      {
        icon: "trending_up",
        title: "Live Analytics",
        description: "Real-time portfolio tracking and insights.",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        position: "top-[16%] left-[2%]",
        rotation: "-rotate-6",
      },
      {
        icon: "security",
        title: "Bank-grade Security",
        description: "End-to-end encrypted financial data.",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        position: "bottom-[20%] right-[2%]",
        rotation: "rotate-3",
      },
    ],
    techCards: [
      { icon: "phone_android", label: "React Native", position: "-translate-y-44 translate-x-4", rotation: "-rotate-6" },
      { icon: "schema", label: "GraphQL", position: "translate-y-40 translate-x-28", rotation: "rotate-6" },
      { icon: "search", label: "Google", position: "-translate-y-16 translate-x-44", rotation: "rotate-12" },
      { icon: "gavel", label: "OpenClaw", position: "translate-y-16 -translate-x-40", rotation: "-rotate-6" },
    ],
  },
];

/* ─── Shared sub-components ─── */

function TechCards({ cards }: { cards: TechCard[] }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {cards.map((tech) => (
        <div
          key={tech.label}
          className={`absolute ${tech.position} ${tech.rotation} flex flex-col items-center gap-1`}
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

function FeatureCards({ cards }: { cards: FeatureCard[] }) {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`absolute ${card.position} w-36 md:w-44 p-3 md:p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl shadow-zinc-200/50 border border-white/20 ${card.rotation} pointer-events-auto hover:translate-y-0 transition-transform duration-300`}
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
}: {
  project: Project;
  className?: string;
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
      <div className="flex gap-3 justify-center md:justify-start mt-4">
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
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-white/30 text-5xl md:text-6xl">
              {project.icon}
            </span>
          </div>
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
            {/* Placeholder */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-white/30 text-5xl md:text-7xl">
                {project.icon}
              </span>
            </div>
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
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)` }}
      />

      <div className="h-full max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-20">
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
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)` }}
      />

      <div className="h-full max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center gap-6">
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
