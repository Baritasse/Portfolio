"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

/**
 * Section SKILLS — keycaps 3D interactifs
 * Inspiration : vidéo TikTok — touches de clavier flottantes
 *
 * Chaque touche =
 *   - un "face" (top) avec le label
 *   - une "skirt" (côté) qui donne la profondeur
 *   - une ombre portée animée
 *   - float idle + hover scale/rotate/glow
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden py-section"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-96 w-[90%] max-w-4xl rounded-full bg-gradient-to-r from-cyber-green/5 via-cyber-blue/5 to-cyber-green/5 blur-3xl" />

      <div className="container-x relative">
        <SectionHeading
          number="02."
          title="Skills."
          subtitle="Mon clavier favori — chaque touche, une compétence que j'explore et consolide au quotidien."
        />

        {/* Grille des keycaps */}
        <div className="relative">
          {/* Légende - rappel touches */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-8 flex items-center gap-2 font-mono text-xs text-fg-muted"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyber-green" />
            Survole une touche pour voir le détail
          </motion.div>

          {/* Layout keyboard-like */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
            {skills.map((skill, idx) => (
              <Keycap key={skill.key} skill={skill} index={idx} />
            ))}
          </div>

          {/* Barre de statut terminal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mx-auto mt-16 max-w-xl rounded-md border border-border-subtle bg-bg-surface/60 px-4 py-3 font-mono text-xs backdrop-blur-sm"
          >
            <div className="flex items-center justify-between text-fg-muted">
              <span className="flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-cyber-green shadow-[0_0_6px_rgba(0,255,157,0.8)]" />
                STACK_ACTIVE
              </span>
              <span>{skills.length} keys mapped</span>
              <span>
                <span className="text-cyber-green">&gt;</span> always learning
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * KEYCAP — touche de clavier pseudo-3D
 * structure :
 *   - wrapper (flottement)
 *     - shadow (couche du bas qui reste visible quand on hover)
 *     - cap (ce qu'on appuie)
 *       - face (label + detail)
 */
function Keycap({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  // Tailles adaptées en fonction du type de touche
  const sizeClass = {
    md: "w-20 h-20 sm:w-24 sm:h-24",
    lg: "w-32 h-20 sm:w-40 sm:h-24",
  }[skill.size];

  // Couleurs d'accent
  const accent =
    skill.color === "green"
      ? "text-cyber-green"
      : skill.color === "blue"
      ? "text-cyber-blue"
      : "text-fg-primary";

  const glowColor =
    skill.color === "green"
      ? "rgba(0, 255, 157, 0.5)"
      : "rgba(0, 212, 255, 0.5)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: 0.05 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
      style={{
        perspective: "800px",
        // Élève la touche survolée au-dessus des voisines
        // pour que le tooltip ne soit pas masqué
        zIndex: hovered ? 30 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Flottement idle subtil */}
      <motion.div
        animate={{
          y: hovered ? -6 : [0, -3, 0],
        }}
        transition={{
          duration: hovered ? 0.2 : 4 + (index % 3),
          repeat: hovered ? 0 : Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        className="relative"
      >
        {/* Couche d'ombre inférieure (base 3D) */}
        <div
          className={`absolute inset-0 ${sizeClass} translate-y-1.5 rounded-xl bg-black`}
          style={{
            background:
              "linear-gradient(180deg, #050505 0%, #020202 100%)",
            boxShadow: `0 8px 24px -6px ${
              hovered ? glowColor : "rgba(0,0,0,0.7)"
            }`,
            transition: "box-shadow 300ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />

        {/* Cap principal */}
        <motion.button
          animate={{
            rotateX: hovered ? -8 : 0,
            rotateY: hovered ? 6 : 0,
            scale: hovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`relative ${sizeClass} cursor-pointer rounded-xl border bg-bg-elevated transition-colors duration-200`}
          style={{
            transformStyle: "preserve-3d",
            borderColor: hovered
              ? skill.color === "green"
                ? "rgba(0, 255, 157, 0.6)"
                : "rgba(0, 212, 255, 0.6)"
              : "rgba(255, 255, 255, 0.06)",
            background:
              skill.color === "green"
                ? "linear-gradient(145deg, #0d1f18 0%, #050c09 50%, #0a0a0a 100%)"
                : "linear-gradient(145deg, #0a1a22 0%, #040c11 50%, #0a0a0a 100%)",
            boxShadow: hovered
              ? `0 0 0 1px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.5), 0 16px 40px -8px ${glowColor}`
              : "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)",
          }}
          aria-label={`${skill.label} — ${skill.level}`}
        >
          {/* Reflet supérieur */}
          <span
            className="pointer-events-none absolute inset-x-1 top-1 h-1/3 rounded-lg opacity-40"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
            }}
          />

          {/* Contenu */}
          <div className="relative flex h-full flex-col items-center justify-center p-2">
            {/* Touche principale — label mono */}
            <span
              className={`font-mono text-[11px] font-bold uppercase tracking-wider ${accent}`}
              style={{
                textShadow: hovered ? `0 0 8px ${glowColor}` : "none",
              }}
            >
              {skill.key}
            </span>
            {/* Label complet */}
            <span className="mt-0.5 text-center font-display text-[10px] font-medium text-fg-primary sm:text-xs">
              {skill.label}
            </span>
          </div>

          {/* Badge détail visible au hover */}
          <motion.div
            initial={false}
            animate={{
              opacity: hovered ? 1 : 0,
              y: hovered ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-bg-surface px-2.5 py-1.5 font-mono text-[10px] shadow-lg backdrop-blur-sm"
            style={{
              borderColor: glowColor,
            }}
          >
            <span className={accent}>{skill.level}</span>
            <span className="mx-1 text-fg-muted">·</span>
            <span className="text-fg-secondary">{skill.detail}</span>
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
