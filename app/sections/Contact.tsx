"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, ArrowUp, Radio } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan/60 text-sm tracking-[0.3em] uppercase mb-4 font-mono">05 • Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">The Uplink</h2>
          <div className="w-16 h-px bg-gradient-to-r from-cyan to-purple mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Terminal-style info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-xl overflow-hidden border border-cyan/20">
              <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-white/30 font-mono">swaraj@portfolio:~</span>
              </div>

              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <p className="text-white/30">$ whoami</p>
                  <p className="text-cyan mt-1">Swaraj Chikhale</p>
                </div>
                <div>
                  <p className="text-white/30">$ cat contact.info</p>
                  <div className="mt-2 space-y-3">
                    <a
                      href="mailto:swarajchikhale2004@gmail.com"
                      className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-cyan/60 group-hover:text-cyan" />
                      swarajchikhale2004@gmail.com
                    </a>
                    <a
                      href="tel:+919309925233"
                      className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-cyan/60 group-hover:text-cyan" />
                      +91 93099 25233
                    </a>
                    <a
                      href="https://www.linkedin.com/in/swarajchikhale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors group"
                    >
                      <Linkedin className="w-4 h-4 text-cyan/60 group-hover:text-cyan" />
                      linkedin.com/in/swarajchikhale
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-white/30">$ status</p>
                  <p className="text-green-400 mt-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Open to opportunities
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-white/30 terminal-cursor">$ _</p>
                </div>
              </div>
            </div>

            {/* Animated satellite */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mt-10 w-32 h-32 mx-auto relative"
            >
              <div className="absolute inset-0 border border-cyan/10 rounded-full" />
              <div className="absolute inset-4 border border-purple/10 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Radio className="w-8 h-8 text-cyan/40" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border border-cyan/20 rounded-full"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-white/40 mb-2 font-mono">NAME</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-white/40 mb-2 font-mono">EMAIL</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/40 mb-2 font-mono">MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all resize-none"
                  placeholder="Let's build something amazing..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan/20 to-purple/20 border border-cyan/30 text-white font-medium hover:glow-cyan transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 cursor-hover"
              >
                {isSubmitting ? (
                  <span className="font-mono">Transmitting...</span>
                ) : submitted ? (
                  <span className="text-green-400 font-mono">Message Received!</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Swaraj Chikhale. Built with React, Three.js & Tailwind.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-white/30 hover:text-cyan transition-colors cursor-hover"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
