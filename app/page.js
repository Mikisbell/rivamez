import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InteractiveTabs from "@/components/InteractiveTabs";
import ImpactMetrics from "@/components/ImpactMetrics";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      
      <ScrollReveal animation="fadeUp">
        <Features />
      </ScrollReveal>
      
      <ScrollReveal animation="scale" delay={0.1}>
        <InteractiveTabs />
      </ScrollReveal>
      
      <ScrollReveal animation="fadeRight" delay={0.1}>
        <ImpactMetrics />
      </ScrollReveal>
      
      <ScrollReveal animation="fadeUp">
        <About />
      </ScrollReveal>
      
      <ScrollReveal animation="blur" delay={0.2}>
        <Services />
      </ScrollReveal>
      
      <ScrollReveal animation="scaleRotate">
        <Projects />
      </ScrollReveal>
      
      <ScrollReveal animation="fadeLeft" delay={0.1}>
        <Testimonials />
      </ScrollReveal>
      
      <ScrollReveal animation="slideUp">
        <Contact />
      </ScrollReveal>
    </>
  );
}
