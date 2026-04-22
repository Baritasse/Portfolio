"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import GlowCursor from "@/components/GlowCursor";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Petit loader d'intro pour l'ambiance terminal
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      {!isLoading && <PortfolioContent />}
    </>
  );
}

function PortfolioContent() {
  return (
    <>
      {/* Effet halo qui suit la souris */}
      <GlowCursor />

      {/* Texture bruit — subtile */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Grille de fond */}
      <div
        className="pointer-events-none fixed inset-0 bg-grid opacity-[0.15]"
        aria-hidden="true"
      />
      {/* Dégradé radial au sommet */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[600px] bg-radial-glow"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
