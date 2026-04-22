"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navigation, personal } from "@/lib/data";

/**
 * Navbar sticky avec effet glass
 * Devient plus dense au scroll
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border-subtle bg-bg-base/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-2.5 font-mono text-sm"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyber-green/40 bg-cyber-green/5 text-cyber-green transition-all duration-200 group-hover:bg-cyber-green/15 group-hover:shadow-glow-soft">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="hidden text-fg-primary sm:inline">
              barae<span className="text-cyber-green">.</span>dev
            </span>
          </a>

          {/* Nav desktop */}
          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative rounded-md px-3 py-2 font-mono text-sm text-fg-secondary transition-colors duration-200 hover:text-fg-primary"
                >
                  <span className="mr-1 text-cyber-green">
                    0{i + 1}.
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href={`mailto:${personal.email}`}
            className="hidden md:inline-flex btn-primary text-xs"
          >
            Contacter
          </a>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden rounded-md border border-border p-2 text-fg-primary"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border-subtle bg-bg-base/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-x flex flex-col py-4">
              {navigation.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-3 font-mono text-sm text-fg-secondary hover:bg-bg-elevated hover:text-fg-primary"
                  >
                    <span className="text-cyber-green">0{i + 1}.</span>
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="btn-primary w-full justify-center text-xs"
                >
                  Contacter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
