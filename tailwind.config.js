/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Tokens primitifs ===
        ink: {
          0: "#000000",
          50: "#050505",
          100: "#0a0a0a",
          200: "#111111",
          300: "#1a1a1a",
          400: "#2a2a2a",
        },
        // === Accents cyber ===
        cyber: {
          green: "#00ff9d",
          "green-dim": "#00cc7e",
          blue: "#00d4ff",
          "blue-dim": "#00a8cc",
          purple: "#b48aff",
        },
        // === Tokens sémantiques ===
        bg: {
          base: "#000000",
          surface: "#0a0a0a",
          elevated: "#111111",
          overlay: "rgba(10, 10, 10, 0.8)",
        },
        fg: {
          primary: "#f5f5f5",
          secondary: "#a3a3a3",
          muted: "#525252",
          subtle: "#333333",
        },
        border: {
          subtle: "#1a1a1a",
          DEFAULT: "#262626",
          strong: "#404040",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Scale modulaire
        "display-xl": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      spacing: {
        // Scale 4px
        section: "clamp(4rem, 10vw, 8rem)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 255, 157, 0.35)",
        "glow-blue": "0 0 40px -10px rgba(0, 212, 255, 0.35)",
        "glow-soft": "0 0 24px -12px rgba(0, 255, 157, 0.5)",
        keycap:
          "0 4px 0 0 #0a0a0a, 0 6px 0 0 #050505, 0 8px 20px -4px rgba(0, 255, 157, 0.15), inset 0 1px 0 0 rgba(255,255,255,0.08)",
        "keycap-hover":
          "0 6px 0 0 #0a0a0a, 0 8px 0 0 #050505, 0 12px 32px -4px rgba(0, 255, 157, 0.4), inset 0 1px 0 0 rgba(255,255,255,0.15)",
        "card-hover":
          "0 20px 40px -12px rgba(0, 255, 157, 0.2), 0 0 0 1px rgba(0, 255, 157, 0.15)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(38,38,38,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(38,38,38,0.4) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(0,255,157,0.12), transparent 60%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
