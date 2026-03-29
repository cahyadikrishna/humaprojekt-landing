import { BottomNav } from "./components/bottom-nav";
import { LandingSection } from "./components/landing-section";
import { ProjectSections } from "./components/project-section";

export default function Home() {
  return (
    <>
      {/* Google Material Symbols */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <main className="snap-container">
        <LandingSection />
        <ProjectSections />
      </main>

      <BottomNav />
    </>
  );
}
