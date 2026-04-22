"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Folder } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

/**
 * Section Projets — grid de cartes animées
 * hover = lift + glow + underline animé
 */
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-section"
    >
      <div className="container-x">
        <SectionHeading
          number="03."
          title="Projets."
          subtitle="Des projets concrets qui m'ont permis d'apprendre — infra, mobile, cybersécurité et web."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full"
    >
      {/* Glow hover */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-cyber-green/0 via-cyber-green/0 to-cyber-blue/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:from-cyber-green/15 group-hover:to-cyber-blue/15 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-bg-surface/70 backdrop-blur-sm transition-all duration-300 ease-out-expo group-hover:-translate-y-1 group-hover:border-cyber-green/40 group-hover:shadow-card-hover">
        {/* Header — category glyph */}
        <div className="flex items-center justify-between border-b border-border-subtle p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyber-green/30 bg-cyber-green/5 font-mono text-[11px] font-semibold text-cyber-green">
            {project.highlight}
          </div>
          <div className="flex items-center gap-2 opacity-70 transition-opacity duration-200 group-hover:opacity-100">
            <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">
              {project.year}
            </span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Lien vers ${project.title}`}
              className="rounded-md p-1.5 text-fg-secondary transition-all duration-200 hover:bg-bg-elevated hover:text-cyber-green"
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-cyber-green">
            <Folder className="h-3 w-3" />
            {project.category}
          </div>
          <h3 className="mb-3 font-display text-lg font-semibold text-fg-primary transition-colors duration-200 group-hover:text-cyber-green">
            {project.title}
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-fg-secondary">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-border-subtle bg-bg-elevated/50 px-2 py-0.5 font-mono text-[10px] text-fg-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Ligne décorative animée au bottom */}
        <div className="h-[2px] w-full bg-border-subtle">
          <div className="h-full w-0 bg-gradient-to-r from-cyber-green to-cyber-blue transition-all duration-500 ease-out-expo group-hover:w-full" />
        </div>
      </div>
    </motion.article>
  );
}
