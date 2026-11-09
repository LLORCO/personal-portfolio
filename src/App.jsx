import AboutSection from "./components/sections/AboutSection";
import CommunitySection from "./components/sections/CommunitySection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import MemoryAirCase from "./components/sections/MemoryAirCase";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import DocumentMeta from "./components/DocumentMeta";
import SiteHeader from "./components/SiteHeader";
import SkipLink from "./components/ui/SkipLink";
import { isMemoryAirPath } from "./lib/path";

export default function App() {
  const isCase = isMemoryAirPath();

  return (
    <div className="min-h-screen bg-stone-50 font-body text-stone-800 antialiased dark:bg-stone-950 dark:text-stone-200">
      <DocumentMeta />
      <SkipLink />
      <SiteHeader />

      <main id="main-content">
        {isCase ? (
          <>
            <MemoryAirCase />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <ContactSection />
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <HeroSection />
            <ProjectsSection />
            <AboutSection />
            <SkillsSection />
            <CommunitySection />
            <ContactSection />
          </div>
        )}
      </main>
    </div>
  );
}
