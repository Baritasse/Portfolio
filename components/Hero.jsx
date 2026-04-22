"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  MapPin,
  Sparkles,
  Shield,
  Network,
} from "lucide-react";
import { personal } from "@/lib/data";

/**
 * Section Hero — première impression
 * Grand nom + rôle + tagline + CTA + terminal décoratif
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16"
    >
      <div className="container-x relative z-10 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Colonne gauche — texte principal */}
          <div>
            {/* Ligne d'intro */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyber-green/30 bg-cyber-green/5 px-3 py-1.5 font-mono text-xs text-cyber-green"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyber-green shadow-[0_0_8px_rgba(0,255,157,0.8)]" />
              Disponible pour alternance — rentrée 2026
            </motion.div>

            {/* Salutation */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 font-mono text-sm text-fg-secondary"
            >
              <span className="text-cyber-green">const</span> hello ={" "}
              <span className="text-cyber-blue">"Hello, world"</span>;
            </motion.p>

            {/* Titre énorme */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-display-xl font-bold tracking-tight"
            >
              <span className="block text-fg-primary">Barae</span>
              <span className="block text-gradient">Jliyakh.</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-lg text-fg-secondary md:text-xl"
            >
              Je construis des <span className="text-fg-primary">réseaux</span>,
              je brise des <span className="text-fg-primary">challenges CTF</span>
              , et je vise une alternance en{" "}
              <span className="text-cyber-green">Réseaux, Télécoms & Cybersécurité</span>.
            </motion.p>

            {/* Localisation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex items-center gap-2 font-mono text-sm text-fg-muted"
            >
              <MapPin className="h-3.5 w-3.5 text-cyber-green" />
              {personal.location}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary">
                Voir mes projets
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                Me contacter
              </a>
            </motion.div>

            {/* Tags techno */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-2"
            >
              {[
                { icon: Shield, label: "Cybersécurité" },
                { icon: Network, label: "Réseaux" },
                { icon: Sparkles, label: "Self-hosted" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="badge"
                >
                  <Icon className="h-3 w-3" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Colonne droite — terminal décoratif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <TerminalCard />
          </motion.div>
        </div>
      </div>

      {/* Indicateur scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 font-mono text-xs text-fg-muted">
          <span>SCROLL</span>
          <span className="flex h-8 w-5 justify-center rounded-full border border-border-subtle pt-1.5">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-0.5 rounded-full bg-cyber-green"
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/** Petite carte terminal à droite du hero */
function TerminalCard() {
  const lines = [
    { prompt: true, text: "whoami" },
    { prompt: false, text: "→ barae_jliyakh" },
    { prompt: true, text: "cat /etc/goals" },
    { prompt: false, text: "→ BUT R&T — alternance 2026" },
    { prompt: true, text: "ls ./skills" },
    {
      prompt: false,
      text: "→ python  linux  sql  git  network  cyber",
    },
    { prompt: true, text: "status" },
    { prompt: false, text: "→ READY_TO_LEARN ✓", accent: true },
  ];

  return (
    <div className="relative">
      {/* Glow en arrière-plan */}
      <div className="absolute -inset-4 rounded-2xl bg-cyber-green/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-xl border border-border bg-bg-surface/90 backdrop-blur-xl shadow-glow scan-effect">
        {/* Barre de titre */}
        <div className="flex items-center justify-between border-b border-border-subtle bg-bg-elevated px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-cyber-green/70" />
          </div>
          <span className="font-mono text-xs text-fg-muted">
            barae@portfolio — zsh
          </span>
          <span className="w-12" />
        </div>

        {/* Corps */}
        <div className="space-y-1.5 p-5 font-mono text-xs leading-relaxed sm:text-sm">
          {lines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + idx * 0.18, duration: 0.25 }}
              className={`${
                line.prompt ? "text-fg-primary" : "text-fg-secondary"
              } ${line.accent ? "text-cyber-green" : ""}`}
            >
              {line.prompt && (
                <>
                  <span className="text-cyber-green">➜</span>{" "}
                  <span className="text-cyber-blue">~</span>{" "}
                </>
              )}
              {line.text}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="pt-2"
          >
            <span className="text-cyber-green">➜</span>{" "}
            <span className="text-cyber-blue">~</span>{" "}
            <span className="caret" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
