import Hero from '@/components/sections/Hero';
import BuildingHero from '@/components/sections/BuildingHero';
import Features from '@/components/sections/Features';
import InteractiveTabs from '@/components/ui/InteractiveTabs';
import About from '@/components/sections/About';
import Respaldo from '@/components/sections/Respaldo';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* Sección de presentación impresionante con animación de construcción de edificio */}
      {/* <BuildingHero /> */}
      
      {/* Hero original */}
      <Hero />
      
      <ScrollReveal animation="fadeUp">
        <Features />
      </ScrollReveal>
      
      <ScrollReveal animation="scale" delay={0.1}>
        <InteractiveTabs />
      </ScrollReveal>
      
      {/* ImpactMetrics retirada: toda la seccion (inversion ejecutada, m2/ano, 98% de
          entregas, 4.8/5, empleos, comparacion con la industria, serie historica de
          proyectos y mapa de calor por distrito) eran cifras sin respaldo. La credibilidad
          real vive en <Respaldo />: RUC, partida registral y certificados ISO verificables. */}

      <ScrollReveal animation="fadeUp">
        <About />
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <Respaldo />
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
