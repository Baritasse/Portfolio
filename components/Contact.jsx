"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Instagram } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal } from "@/lib/data";

/**
 * Section Contact — style terminal + CTA clair
 */
export default function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      Icon: Mail,
    },
    {
      label: "Téléphone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
      Icon: Phone,
    },
    {
      label: "Localisation",
      value: personal.location,
      href: null,
      Icon: MapPin,
    },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-section"
    >
      <div className="container-x">
        <SectionHeading
          number="05."
          title="Contact."
          subtitle="Une offre d'alternance ? Un projet ? Une discussion autour d'un terminal ?"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          {/* Carte principale */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-surface/70 p-8 backdrop-blur-xl md:p-12">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyber-green/10 blur-3xl" />

            <div className="relative text-center">
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-cyber-green/30 bg-cyber-green/5 px-3 py-1.5 font-mono text-xs text-cyber-green">
                <span className="flex h-2 w-2 rounded-full bg-cyber-green shadow-[0_0_8px_rgba(0,255,157,0.8)]" />
                Status: en recherche d'alternance
              </div>

              <h3 className="font-display text-3xl font-bold text-fg-primary md:text-4xl">
                Parlons-en.
              </h3>
              <p className="mx-auto mt-4 max-w-lg text-fg-secondary">
                Je suis ouvert à toute opportunité d'alternance BUT R&T sur
                l'Île-de-France. N'hésitez pas à me contacter — je réponds
                rapidement.
              </p>

              {/* CTA principal */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="btn-primary"
                >
                  <Send className="h-4 w-4" />
                  Envoyer un message
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Séparateur */}
            <div className="my-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-border-subtle" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                Autres moyens
              </span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>

            {/* Liste des contacts */}
            <div className="grid gap-3 sm:grid-cols-3">
              {contactLinks.map(({ label, value, href, Icon }) => (
                <ContactItem
                  key={label}
                  label={label}
                  value={value}
                  href={href}
                  Icon={Icon}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ label, value, href, Icon }) {
  const content = (
    <>
      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border-subtle bg-bg-elevated text-cyber-green transition-all duration-200 group-hover:border-cyber-green group-hover:bg-cyber-green/10">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">
          {label}
        </div>
        <div className="truncate text-sm text-fg-primary transition-colors duration-200 group-hover:text-cyber-green">
          {value}
        </div>
      </div>
    </>
  );

  const className =
    "group flex items-center gap-3 rounded-lg border border-border-subtle bg-bg-surface/60 p-3 transition-all duration-200 hover:border-cyber-green/40 hover:bg-bg-elevated";

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}
