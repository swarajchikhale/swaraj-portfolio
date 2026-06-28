"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Development Using Java",
    company: "CodElevate Technologies",
    date: "August 2024 – November 2024",
    location: "Amravati, Maharashtra",
    description:
      "Completed a 4-month internship focusing on Java-based software development. Worked with Java 13+, JDBC, and Collection Framework to build and optimize applications. Improved system stability and performance by 20% through backend optimization.",
    icon: Code,
  },
  {
    type: "work",
    title: "Web Development Intern",
    company: "Sun Infotech",
    date: "July 2022 – August 2022",
    location: "Amravati, Maharashtra",
    description:
      "Gained hands-on experience in web development, building responsive interfaces and collaborating with the development team on debugging and usability improvements.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Bachelor of Engineering – Information Technology",
    company: "Sipna College of Engineering & Technology",
    date: "September 2023 – June 2026",
    location: "Amravati",
    description: "Pursuing BE in IT with focus on full-stack development, blockchain, and AI/ML.",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Diploma in Computer Science",
    company: "Dr. Panjabrao Deshmukh Polytechnic College",
    date: "January 2020 – July 2023",
    location: "Amravati",
    description: "Foundation in programming, database systems, and software engineering principles.",
    icon: GraduationCap,
  },
];

const certifications = [
  "Certificate of Completion – AI for Students: Build Your Own Generative AI Model Workshop",
  "Digital Skills Readiness Program – Java Full Stack",
  "Certificate of AI-ML Virtual Internship",
  "Career Essentials in Generative AI by Microsoft and LinkedIn",
];

function TimelineItem({ item, index }: { item: typeof experiences[0]; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex items-start gap-6 md:gap-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:items-center`}
    >
      {/* Timeline line & dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan to-purple border-2 border-background z-10" />
      </div>

      {/* Mobile dot */}
      <div className="md:hidden flex flex-col items-center pt-2">
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan to-purple" />
      </div>

      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
        <div className="glass rounded-xl p-6 hover:bg-white/5 transition-colors duration-300">
          <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-cyan" />
            </div>
            <div className={index % 2 === 0 ? "md:order-first" : ""}>
              <p className="text-xs text-cyan/60 font-mono uppercase tracking-wider">{item.type}</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
          <p className="text-sm text-purple/80 mb-2">{item.company}</p>
          <p className="text-xs text-white/40 font-mono mb-3">{item.date} • {item.location}</p>
          <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan/60 text-sm tracking-[0.3em] uppercase mb-4 font-mono">04 • Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">The Journey Timeline</h2>
          <div className="w-16 h-px bg-gradient-to-r from-cyan to-purple mx-auto mt-6" />
        </motion.div>

        {/* Timeline vertical line */}
        <div className="hidden md:block absolute left-1/2 top-24 bottom-32 w-px bg-gradient-to-b from-cyan/30 via-purple/30 to-cyan/30 -translate-x-1/2" />

        <div className="space-y-12 md:space-y-0">
          {experiences.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <p className="text-cyan/60 text-sm tracking-[0.3em] uppercase mb-4 font-mono">Credentials</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-cyan" />
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
