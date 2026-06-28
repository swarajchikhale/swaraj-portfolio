"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Shield, Dumbbell } from "lucide-react";

const projects = [
  {
    title: "Identix",
    subtitle: "The Blockchain Identity Vault",
    description:
      "A blockchain-based digital identity verification platform supporting 200+ records. Features SHA-256 hashing, Ethereum integration, dynamic QR codes with 30-second expiry, and biometric app-lock for privacy-first identity sharing.",
    icon: Shield,
    tags: ["Blockchain", "Web3", "Ethereum", "SHA-256", "Biometric Auth", "Node.js"],
    color: "cyan",
    gradient: "from-cyan/20 to-cyan/5",
    border: "border-cyan/20",
    hoverBorder: "group-hover:border-cyan/50",
  },
  {
    title: "Fitness Station",
    subtitle: "The Wellness Engine",
    description:
      "A responsive full-stack web application for workout plans, nutrition guidance, and product browsing. Built with modern UI principles and optimized for performance across all devices.",
    icon: Dumbbell,
    tags: ["Full-Stack", "Responsive", "JavaScript", "MongoDB", "Express", "React"],
    color: "purple",
    gradient: "from-purple/20 to-purple/5",
    border: "border-purple/20",
    hoverBorder: "group-hover:border-purple/50",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      ref={cardRef}
      className={`group relative glass rounded-2xl overflow-hidden transition-all duration-200 ease-out cursor-hover bg-gradient-to-br ${project.gradient} ${project.border} border hover:shadow-2xl`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
      
      <div className="relative p-8 md:p-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color === "cyan" ? "from-cyan/20 to-cyan/5" : "from-purple/20 to-purple/5"} border ${project.border} flex items-center justify-center`}>
            <Icon className={`w-7 h-7 ${project.color === "cyan" ? "text-cyan" : "text-purple"}`} />
          </div>
          <button className="p-2 rounded-full glass hover:bg-white/10 transition-colors">
            <ExternalLink className="w-4 h-4 text-white/60" />
          </button>
        </div>

        <p className={`text-xs font-mono tracking-wider uppercase mb-2 ${project.color === "cyan" ? "text-cyan/60" : "text-purple/60"}`}>
          {project.subtitle}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs glass border ${project.border}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${project.color} to-transparent opacity-30`} />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan/60 text-sm tracking-[0.3em] uppercase mb-4 font-mono">03 • Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">The Flagship Builds</h2>
          <div className="w-16 h-px bg-gradient-to-r from-cyan to-purple mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
