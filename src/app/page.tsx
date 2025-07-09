import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-8">
      <Hero />
      <About />
      <Experience />
      <ProjectsSection />
      <Contact />
    </div>
  );
}
