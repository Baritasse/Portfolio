# Portfolio — Barae Jliyakh

Portfolio personnel de **Barae Jliyakh**, étudiant en Terminale NSI cherchant une alternance en **BUT Réseaux & Télécommunications** (rentrée 2026).

Construit avec **Next.js 14 (App Router)**, **Tailwind CSS** et **Framer Motion**, dans un style dark cyberpunk sobre, motion-driven et pensé pour convertir les recruteurs.

---

## Aperçu des sections

| # | Section | Highlights |
|---|---------|-----------|
| 00 | **Hero** | Titre géant, terminal animé, CTA |
| 01 | **À propos** | Photo stylisée, stats, timeline formation, langues |
| 02 | **Skills** | **Keycaps 3D interactifs** — Python, Linux, Git, Réseaux, Cybersécurité… |
| 03 | **Projets** | Cartes animées — NAS, Plex, APK Android, CTF, Jeux Python, Site web |
| 04 | **Expérience** | Timeline professionnelle (Le Sublime) |
| 05 | **Contact** | CTA email + LinkedIn + GitHub |

---

## Design System

### Palette
| Token | Couleur | Usage |
|-------|---------|-------|
| `bg.base` | `#000000` | Fond principal (OLED black) |
| `bg.surface` | `#0a0a0a` | Cartes |
| `bg.elevated` | `#111111` | Niveau supérieur |
| `cyber.green` | `#00ff9d` | Accent principal |
| `cyber.blue` | `#00d4ff` | Accent secondaire |
| `fg.primary` | `#f5f5f5` | Texte principal |
| `fg.secondary` | `#a3a3a3` | Texte secondaire |
| `fg.muted` | `#525252` | Texte discret |

### Typographie
- **Display** : `Space Grotesk` (titres, impact)
- **Sans** : `Inter` (corps de texte)
- **Mono** : `JetBrains Mono` (code / terminal)

### Motion
- Durations : `150ms` (fast) / `200ms` (base) / `300ms` (slow)
- Easing principal : `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo)
- Apparitions au scroll via `framer-motion` + `viewport={{ once: true }}`
- Respect de `prefers-reduced-motion`

---

## Installation

### 1. Prérequis
- **Node.js 18.17+** (recommandé : 20 LTS)
- **npm** (ou `pnpm`, `yarn`, `bun`)

### 2. Installation des dépendances

```bash
cd portfolio
npm install
```

### 3. Ajouter la photo de profil

Copie ta photo dans `/public/me.jpg` :

```bash
# Depuis le dossier parent "trouver alternance"
cp me.jpg portfolio/public/me.jpg
```

(Sans cette étape, un placeholder s'affichera à la place.)

### 4. Ajouter ton CV (optionnel)

```bash
cp Barae_Jliyakh_CV_2026.pdf portfolio/public/cv.pdf
```

### 5. Lancer en dev

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

### 6. Build de production

```bash
npm run build
npm run start
```

---

## Structure du projet

```
portfolio/
├── app/
│   ├── layout.jsx          # Layout racine + fonts + metadata
│   ├── page.jsx            # Home (orchestration des sections)
│   └── globals.css         # Tokens CSS + utilitaires Tailwind
├── components/
│   ├── Navbar.jsx          # Navigation sticky + burger mobile
│   ├── Hero.jsx            # Hero + carte terminal
│   ├── About.jsx           # Bio + photo + formation + langues
│   ├── Skills.jsx          # ⌨️  Keycaps 3D — section phare
│   ├── Projects.jsx        # Grid de cartes projets
│   ├── Experience.jsx      # Timeline pro
│   ├── Contact.jsx         # CTA + moyens de contact
│   ├── Footer.jsx          # Pied de page
│   ├── Loader.jsx          # Boot terminal d'intro
│   ├── GlowCursor.jsx      # Halo lumineux suivant la souris
│   └── SectionHeading.jsx  # En-tête de section réutilisable
├── lib/
│   └── data.js             # Toutes les données du CV (modifiables ici)
├── public/
│   ├── me.jpg              # Ta photo (à copier)
│   ├── cv.pdf              # Ton CV (à copier)
│   └── placeholder.svg     # Fallback image
├── tailwind.config.js      # Design tokens
├── next.config.mjs
├── package.json
└── README.md
```

---

## Personnalisation rapide

Tout le contenu du CV (compétences, projets, expériences, contacts) est centralisé dans **[`lib/data.js`](./lib/data.js)**.

Pour modifier :
- **Ajouter une compétence** → `skills` (objet `{ key, label, detail, level, color, size }`)
- **Ajouter un projet** → `projects` (objet `{ title, category, description, tags, highlight, year, link }`)
- **Changer les couleurs** → `tailwind.config.js` → `theme.extend.colors`

---

## Déploiement (gratuit)

### Vercel (recommandé pour Next.js)
1. Push le dossier `portfolio` sur un repo GitHub
2. Importe le repo sur [vercel.com](https://vercel.com)
3. Clique "Deploy" — c'est tout.

### Netlify
Fonctionne aussi, il faut juste configurer le build :
- Build command : `npm run build`
- Publish directory : `.next`

---

## Checklist avant envoi aux recruteurs

- [ ] Photo `me.jpg` copiée dans `/public`
- [ ] CV `cv.pdf` copié dans `/public`
- [ ] Liens GitHub / LinkedIn mis à jour dans `lib/data.js`
- [ ] Projets : ajouter les liens GitHub réels dans `lib/data.js`
- [ ] Test responsive sur mobile
- [ ] Test en dark mode forcé (déjà par défaut ✓)
- [ ] Déploiement Vercel avec domaine custom

---

Développé avec ♥ pour décrocher une alternance 🚀
