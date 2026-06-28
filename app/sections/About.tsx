"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, Blocks, Server } from "lucide-react";

function FloatingIcon({ icon: Icon, delay, x, y }: { icon: any; delay: number; x: string; y: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 0.15, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
      style={{ position: "absolute", left: x, top: y }}
      className="text-cyan"
    >
      <Icon size={40} />
    </motion.div>
  );
}

function HolographicCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div
        ref={cardRef}
        className="relative w-64 h-80 md:w-80 md:h-96 glass-strong rounded-2xl flex flex-col items-center justify-center transition-transform duration-200 ease-out cursor-hover group"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/10 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mb-6 border border-cyan/30 group-hover:border-cyan/60 transition-colors">
          <span className="text-4xl md:text-5xl font-bold text-gradient-cyan">SC</span>
        </div>

        <p className="text-white/60 text-sm font-mono tracking-wider">DIGITAL IDENTITY</p>
        <p className="text-cyan/40 text-xs font-mono mt-2">VERIFIED • SECURE • WEB3</p>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-white/20 font-mono">
          <span>0x7a3f...9e2d</span>
          <span>SHA-256</span>
        </div>
      </div>

      <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 to-purple/20 rounded-3xl blur-2xl opacity-20 -z-10" />
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <FloatingIcon icon={Code2} delay={0.2} x="5%" y="10%" />
      <FloatingIcon icon={Database} delay={0.4} x="85%" y="15%" />
      <FloatingIcon icon={Blocks} delay={0.6} x="10%" y="75%" />
      <FloatingIcon icon={Server} delay={0.8} x="90%" y="80%" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan/60 text-sm tracking-[0.3em] uppercase mb-4 font-mono">01 • About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">The Architect</h2>
          <div className="w-16 h-px bg-gradient-to-r from-cyan to-purple mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HolographicCard />
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              I&apos;m a <span className="text-cyan font-medium">final-year IT Engineer</span> (graduating 2026) with hands-on experience building secure, scalable web applications using Java, Python, JavaScript, Node.js, Express.js, and MongoDB.
            </motion.p>

            <motion.p variants={itemVariants} className="text-white/60 leading-relaxed mb-6">
              My flagship project, <span className="text-purple font-medium">Identix</span>, is a blockchain-based digital identity verification platform supporting 200+ records — built with SHA-256 hashing, Ethereum integration, dynamic QR codes with 30-second expiry, and biometric app-lock for privacy-first identity sharing.
            </motion.p>

            <motion.p variants={itemVariants} className="text-white/60 leading-relaxed mb-6">
              I&apos;ve also built <span className="text-purple font-medium">Fitness Station</span>, a responsive web app for workout plans, nutrition guidance, and product browsing. During my internship at CodElevate Technologies, I worked on backend optimization that improved system stability and performance by 20%.
            </motion.p>

            <motion.p variants={itemVariants} className="text-white/60 leading-relaxed mb-8">
              I&apos;m currently strengthening my React.js, system design, and cloud (AWS) skills, and I&apos;m actively looking for full-stack/backend developer and SDE roles where I can contribute to building secure, scalable products from day one.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {["Open Source", "Web3", "Blockchain", "AI/ML", "Cloud"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full glass text-sm text-cyan/80 border border-cyan/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
