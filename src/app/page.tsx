import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StatisticsSection from "./components/StatisticsSection";

export default function Home() {
  return  (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <br></br>
        <StatisticsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
        <Footer />
    </main>
  )
}
