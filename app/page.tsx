import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonial />
      <WhyChooseUs />
      <Stats />
      <Footer />
    </>
  );
}
