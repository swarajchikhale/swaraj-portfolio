"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Java", level: 90, category: "Backend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 82, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "React.js", level: 78, category: "Frontend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "REST APIs", level: 85, category: "Backend" },
  { name: "Blockchain", level: 72, category: "Web3" },
  { name: "Web3", level: 70, category: "Web3" },
  { name: "AWS", level: 65, category: "Cloud" },
  { name: "JDBC", level: 80, category: "Database" },
  { name: "AI/ML", level: 68, category: "AI" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const categoryColors: Record<string, string> = {
    Backend: "from-cyan/20 to-cyan/5",
    Frontend: "from-purple/20 to-purple/5",
    Database: "from-emerald-500/20 to-emerald-500/5",
    Web3: "from-amber-500/20 to-amber-500/5",
    Cloud: "from-sky-500/20 to-sky-500/5",
    AI: "from-rose-500/20 to-rose-500/5",
  };

  const barColors: Record<string, string> = {
    Backend: "from-cyan to-cyan/60",
    Frontend: "from-purple to-purple/60",
    Database: "from-emerald-400 to-emerald-600",
    Web3: "from-amber-400 to-amber-600",
    Cloud: "from-sky-400 to-sky-600",
    AI: "from-rose-400 to-rose-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      ref={cardRef}
      className={`glass rounded-xl p-5 transition-all duration-200 ease-out cursor-hover bg-gradient-to-br ${categoryColors[skill.category] || "from-white/5 to-transparent"}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white font-medium">{skill.name}</h3>
        <span className="text-xs text-white/40 font-mono">{skill.level}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${barColors[skill.category] || "from-cyan to-purple"} rounded-full`}
        />
      </div>
      <p className="text-[10px] text-white/30 mt-2 font-mono uppercase tracking-wider">{skill.category}</p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan/60 text-sm tracking-[0.3em] uppercase mb-4 font-mono">02 • Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">The Tech Stack Galaxy</h2>
          <div className="w-16 h-px bg-gradient-to-r from-cyan to-purple mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
