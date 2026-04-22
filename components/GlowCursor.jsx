"use client";

import { useEffect, useState } from "react";

/**
 * Halo lumineux qui suit la souris — effet "spotlight"
 * Se désactive automatiquement sur mobile pour préserver les perfs
 */
export default function GlowCursor() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Activé uniquement sur desktop (pointer fin)
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);

    if (!mq.matches) return;

    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="glow-cursor"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      aria-hidden="true"
    />
  );
}
