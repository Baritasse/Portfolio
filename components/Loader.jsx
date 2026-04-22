"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
  "[  OK  ] Mounting /dev/sda1 on /",
  "[  OK  ] Starting network manager...",
  "[  OK  ] Establishing secure tunnel via OpenVPN",
  "[  OK  ] Loading portfolio kernel v1.0",
  "[  OK  ] Initializing React runtime",
  "[  OK  ] Cyber palette — engaged",
  "[ USER ] Welcome, recruiter.",
];

export default function Loader() {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const lineInterval = setInterval(() => {
      if (i < bootLines.length) {
        const next = bootLines[i];
        if (next) setLines((prev) => [...prev, next]);
        i++;
      } else {
        clearInterval(lineInterval);
      }
    }, 220);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 5;
      });
    }, 90);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-base"
    >
      <div className="w-full max-w-xl px-6">
        <div className="mb-6 flex items-center gap-3 font-mono text-sm">
          <span className="flex h-2.5 w-2.5 rounded-full bg-cyber-green shadow-glow" />
          <span className="text-fg-secondary">barae@portfolio</span>
          <span className="text-fg-muted">:~$</span>
          <span className="text-fg-primary caret">./boot.sh</span>
        </div>

        <div className="mb-6 h-48 space-y-1.5 overflow-hidden font-mono text-xs leading-relaxed text-fg-secondary">
          {lines.map((line, idx) => {
            if (!line) return null;
            const isUser = line.includes("USER");
            const isOk = line.includes("OK");
            const bracket = line.match(/\[.*?\]/)?.[0] ?? "";
            const rest = line.replace(/\[.*?\]/, "");
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={
                  isUser
                    ? "text-cyber-green"
                    : isOk
                    ? "text-fg-primary"
                    : "text-fg-muted"
                }
              >
                <span
                  className={
                    isOk
                      ? "text-cyber-green"
                      : isUser
                      ? "text-cyber-blue"
                      : ""
                  }
                >
                  {bracket}
                </span>
                <span>{rest}</span>
              </motion.div>
            );
          })}
        </div>

        <div>
          <div className="mb-2 flex justify-between font-mono text-xs text-fg-muted">
            <span>Loading portfolio</span>
            <span className="text-cyber-green">{progress}%</span>
          </div>
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-border-subtle">
            <motion.div
              className="h-full bg-gradient-to-r from-cyber-green to-cyber-blue"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              style={{ boxShadow: "0 0 10px rgba(0,255,157,0.6)" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}