// app/page.js
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      {/* Hero (full-screen) */}
      <Hero />

      {/* What I Do / Services */}
      <Services />

      {/* Portfolio */}
      <Portfolio />

      {/* Contact */}
      <Contact />
    </>
  );
}