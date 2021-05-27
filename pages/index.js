import Hero from "../sections/Hero";
import Features from "../sections/Features";
import About from "../sections/About";
import Faq from "../sections/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main >
      <Hero />
      <Features />
      <About />
      <Faq />
      <Footer />
    </main>
  );
}
