import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <FAQ />
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
