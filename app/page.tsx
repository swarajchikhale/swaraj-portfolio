"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-white/5 z-[60]">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan to-purple"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </motion.main>
      )}
    </>
  );
}
