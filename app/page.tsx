import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatAgent from "@/components/ChatAgent";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EntertainmentSection />
      <ContactSection />
      <Footer />
      <ChatAgent />
    </main>
  );
}
