"use client";

import { motion } from "framer-motion";

/**
 * En-tête de section réutilisable
 * numéro — titre — ligne décorative
 */
export default function SectionHeading({
  number,
  title,
  subtitle,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      <div className="flex items-center gap-3 font-mono text-sm text-cyber-green">
        <span className="opacity-70">{number}</span>
        <span className="h-px w-12 bg-gradient-to-r from-cyber-green to-transparent" />
      </div>
      <h2 className="section-heading text-gradient">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-fg-secondary">{subtitle}</p>
      )}
    </motion.div>
  );
}
