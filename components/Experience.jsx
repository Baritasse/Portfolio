"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

/**
 * Timeline professionnelle
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 py-section"
    >
      <div className="container-x">
        <SectionHeading
          number="04."
          title="Expérience."
          subtitle="Des expériences variées qui m'ont appris la rigueur, la discipline et le vrai sens du travail d'équipe."
        />

        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-[9px] top-0 h-full w-px bg-gradient-to-b from-cyber-green via-border to-transparent md:left-1/2" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-8 md:grid md:grid-cols-2 md:gap-8"
            >
              {/* Dot */}
              <div className="absolute left-0 top-3 flex h-5 w-5 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                <span className="h-5 w-5 rounded-full border-2 border-cyber-green bg-bg-base" />
                <span className="absolute h-2.5 w-2.5 rounded-full bg-cyber-green shadow-glow" />
              </div>

              {/* Spacer pour desktop */}
              {idx % 2 !== 0 && <div className="hidden md:block" />}

              {/* Carte */}
              <div
                className={`ml-10 card-base p-6 transition-all duration-300 hover:border-cyber-green/40 ${
                  idx % 2 === 0
                    ? "md:ml-0 md:mr-8"
                    : "md:ml-8"
                }`}
              >
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                  <span className="badge badge-accent">
                    <Briefcase className="h-3 w-3" />
                    {exp.type}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-fg-muted">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-fg-primary">
                  {exp.role}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-cyber-green">
                  <span>{exp.company}</span>
                  <span className="text-fg-muted">·</span>
                  <span className="inline-flex items-center gap-1 text-fg-secondary">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-fg-secondary">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyber-green" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
