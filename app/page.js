import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InteractiveTabs from "@/components/InteractiveTabs";
import Values from "@/components/Values";
import ImpactMetrics from "@/components/ImpactMetrics";
import Certifications from "@/components/Certifications";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import NewsBlog from "@/components/NewsBlog";
import CoverageMap from "@/components/CoverageMap";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <InteractiveTabs />
      <Values />
      <ImpactMetrics />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
