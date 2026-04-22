"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, GraduationCap, Languages, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  about,
  personal,
  education,
  languages,
  interests,
  qualities,
} from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-section"
    >
      <div className="container-x">
        <SectionHeading
          number="01."
          title="À propos."
          subtitle="Un parcours tourné vers la tech, construit autant par la curiosité que par la persévérance."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Photo + infos latérales */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Photo avec frame */}
            <div className="group relative mx-auto max-w-[280px] lg:mx-0">
              <div className="absolute -inset-3 rounded-2xl border border-cyber-green/30 transition-all duration-300 group-hover:-inset-4 group-hover:border-cyber-green" />
              <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-xl bg-cyber-green/10 blur-xl" />
              <div className="relative overflow-hidden rounded-xl border border-border bg-bg-surface">
                {/* Placeholder fallback si pas d'image */}
                <div className="aspect-[3/4] w-full bg-gradient-to-br from-bg-elevated via-bg-surface to-ink-300">
                  <Image
                    src={personal.photo}
                    alt={personal.name}
                    width={320}
                    height={420}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                    unoptimized
                  />
                </div>
                {/* Overlay scan */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent opacity-60" />
                <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-xs text-cyber-green">
                  IMG_001.jpg
                </div>
              </div>
            </div>

            {/* Langues */}
            <div className="card-base p-5">
              <div className="mb-3 flex items-center gap-2 font-mono text-xs text-cyber-green">
                <Languages className="h-3.5 w-3.5" />
                LANGUES
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="mb-1 flex items-baseline justify-between">
                      <span className="text-sm text-fg-primary">{lang.name}</span>
                      <span className="font-mono text-[10px] text-fg-muted">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-border-subtle">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyber-green to-cyber-blue"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Centres d'intérêt */}
            <div className="card-base p-5">
              <div className="mb-3 flex items-center gap-2 font-mono text-xs text-cyber-green">
                <Heart className="h-3.5 w-3.5" />
                CENTRES D'INTÉRÊT
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span key={i} className="badge">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Texte principal + formation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-8"
          >
            {/* Texte */}
            <div className="space-y-4 text-[15px] leading-relaxed text-fg-secondary">
              <p className="text-lg text-fg-primary">{about.intro}</p>
              {about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-base px-4 py-5 text-center"
                >
                  <div className="font-display text-3xl font-bold text-cyber-green">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Formation — timeline */}
            <div>
              <div className="mb-4 flex items-center gap-2 font-mono text-xs text-cyber-green">
                <GraduationCap className="h-4 w-4" />
                FORMATION
              </div>
              <ol className="relative space-y-4 border-l border-border-subtle pl-6">
                {education.map((edu, idx) => (
                  <li key={idx} className="relative">
                    <span
                      className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg-base ${
                        edu.status === "upcoming"
                          ? "bg-cyber-green shadow-glow"
                          : edu.status === "current"
                          ? "bg-cyber-blue"
                          : "bg-fg-muted"
                      }`}
                    />
                    <div className="font-mono text-[10px] uppercase tracking-wider text-cyber-green">
                      {edu.period}
                    </div>
                    <div className="mt-1 text-[15px] font-semibold text-fg-primary">
                      {edu.degree}
                    </div>
                    <div className="text-sm text-fg-secondary">{edu.school}</div>
                    <div className="mt-0.5 text-xs text-fg-muted">
                      {edu.note}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Qualités */}
            <div>
              <div className="mb-3 font-mono text-xs text-cyber-green">
                QUALITÉS
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {qualities.map((q) => (
                  <div
                    key={q}
                    className="flex items-center gap-2 rounded-md border border-border-subtle bg-bg-surface/60 px-3 py-2 text-xs text-fg-secondary"
                  >
                    <Check className="h-3 w-3 shrink-0 text-cyber-green" />
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
