import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// =====================================================
// Fonts — chargement optimisé Next.js
// =====================================================
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Barae Jliyakh — Alternant BUT Réseaux & Télécommunications",
  description:
    "Portfolio de Barae Jliyakh, étudiant en Terminale NSI recherchant une alternance en Réseaux, Télécommunications et Cybersécurité.",
  keywords: [
    "alternance",
    "BUT R&T",
    "Réseaux",
    "Télécommunications",
    "Cybersécurité",
    "Python",
    "Linux",
    "CTF",
  ],
  authors: [{ name: "Barae Jliyakh" }],
  openGraph: {
    title: "Barae Jliyakh — Portfolio",
    description:
      "Étudiant BUT R&T — alternance 2026 en Réseaux & Cybersécurité.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-bg-base text-fg-primary antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
