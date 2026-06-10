import AboutSection from "./components/sections/AboutSection";
import CommunitySection from "./components/sections/CommunitySection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import SkillsSection from "./components/sections/SkillsSection";
import DocumentMeta from "./components/DocumentMeta";
import MarqueeStrip from "./components/MarqueeStrip";
import SiteHeader from "./components/SiteHeader";
import AmbientBackground from "./components/ui/AmbientBackground";
import SectionDivider from "./components/ui/SectionDivider";
import SkipLink from "./components/ui/SkipLink";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-body text-stone-800 antialiased dark:bg-stone-950 dark:text-stone-200">
      <DocumentMeta />
      <SkipLink />
      <AmbientBackground />

      <main id="main-content">
        <SiteHeader />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pt-10">
          <HeroSection />

          <div className="mb-14 lg:mb-20">
            <MarqueeStrip />
          </div>

          <SectionDivider />
          <AboutSection />

          <SectionDivider />
          <ServicesSection />

          <SectionDivider />
          <ProjectsSection />

          <SectionDivider />
          <SkillsSection />

          <SectionDivider />
          <CommunitySection />

          <SectionDivider />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
