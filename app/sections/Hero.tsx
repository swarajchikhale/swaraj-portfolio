"use client";

import { motion } from "framer-motion";
import HeroScene from "./HeroScene";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <HeroScene />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-cyan/60 text-sm md:text-base tracking-[0.5em] uppercase mb-6 font-mono">
            Welcome to My Portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient-cyan glow-text">SWARAJ</span>
          <br />
          <span className="text-gradient-purple">CHIKHALE</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px w-24 mx-auto bg-gradient-to-r from-cyan to-purple mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-4"
        >
          Final-Year IT Engineer | Full-Stack Developer | Blockchain & Web3 Builder
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm text-white/40 mb-10 font-mono"
        >
          Java • Node.js • Express • MongoDB • React • Blockchain • AI/ML
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block glass px-8 py-4 rounded-full text-white font-medium tracking-wide hover:glow-cyan transition-all duration-500 cursor-hover group"
        >
          <span className="flex items-center gap-2">
            Explore
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </span>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-cyan/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
