import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import OurStory from "@/components/OurStory";
import OurTeam from "@/components/OurTeam";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <OurStory />
        <OurTeam />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
