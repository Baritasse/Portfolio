"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mt-section border-t border-border-subtle bg-bg-surface/40">
      <div className="container-x py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-mono text-xs text-fg-muted">
            <span className="text-cyber-green">$</span> echo "Designed & built
            by <span className="text-fg-primary">Barae Jliyakh</span>" —{" "}
            {new Date().getFullYear()}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="rounded-md border border-border-subtle p-2 text-fg-secondary transition-all duration-200 hover:border-cyber-green hover:text-cyber-green"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border-subtle p-2 text-fg-secondary transition-all duration-200 hover:border-cyber-green hover:text-cyber-green"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border-subtle p-2 text-fg-secondary transition-all duration-200 hover:border-cyber-green hover:text-cyber-green"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border-subtle p-2 text-fg-secondary transition-all duration-200 hover:border-cyber-green hover:text-cyber-green"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
