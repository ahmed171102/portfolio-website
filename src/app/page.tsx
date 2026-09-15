import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Eshara from "@/components/Eshara";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Eshara />
        <ProjectsSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
