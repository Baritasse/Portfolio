// =====================================================
// Données du portfolio — Barae Jliyakh
// Centralisées ici pour faciliter la maintenance
// =====================================================

export const personal = {
  name: "Barae Jliyakh",
  role: "Alternant BUT Réseaux & Télécommunications",
  tagline: "Étudiant en Terminale NSI — en recherche d'alternance 2026",
  location: "91150 Étampes — Mobile en Île-de-France",
  email: "jliyakhbarae134@gmail.com",
  phone: "07 69 00 65 21",
  github: "https://github.com/Baritasse",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/bar9ou9a._",
  photo: "/me.jpg",
  cv: "/cv.pdf",
};

export const about = {
  intro:
    "Étudiant en Terminale Générale (Mathématiques, NSI), j'intègre à la rentrée 2026 le BUT Réseaux & Télécommunications.",
  body: [
    "Passionné d'informatique depuis plusieurs années, j'ai construit mes bases en Python, SQL et Linux, et je me forme en continu à la cybersécurité à travers des CTF et des projets personnels.",
    "Je recherche une alternance dans les domaines Réseaux, Télécoms et Cybersécurité pour m'investir dans des projets techniques concrets en environnement professionnel.",
    "Curieux, rigoureux et à l'aise en équipe, je m'épanouis autant devant un terminal Linux que sur les tatamis en pratiquant le jiu-jitsu.",
  ],
  stats: [
    { label: "Projets techniques", value: "7+" },
    { label: "Langues parlées", value: "3" },
    { label: "Années de code", value: "2" },
  ],
};

// =====================================================
// Compétences — touches de clavier (keycaps)
// =====================================================
// Chaque compétence est mappée comme une touche
// avec son "binding" (glyphe du dessus) et son niveau
// =====================================================
export const skills = [
  {
    key: "PY",
    label: "Python",
    detail: "POO, scripts, data",
    level: "Débutant",
    color: "green",
    size: "md",
  },
  {
    key: "HTML",
    label: "HTML",
    detail: "Structure, sémantique",
    level: "Débutant",
    color: "green",
    size: "md",
  },
  {
    key: "CSS",
    label: "CSS",
    detail: "Layouts, responsive",
    level: "Débutant",
    color: "green",
    size: "md",
  },
  {
    key: "JS",
    label: "JavaScript",
    detail: "DOM, ES6+",
    level: "Débutant",
    color: "blue",
    size: "md",
  },
  {
    key: "SQL",
    label: "SQL",
    detail: "Requêtes, conception",
    level: "Débutant",
    color: "blue",
    size: "md",
  },
  {
    key: "GIT",
    label: "Git",
    detail: "Versionning, GitHub",
    level: "Débutant",
    color: "green",
    size: "md",
  },
  {
    key: "LNX",
    label: "Linux",
    detail: "CLI, scripts shell",
    level: "Débutant",
    color: "green",
    size: "md",
  },
  {
    key: "NET",
    label: "Réseaux",
    detail: "TCP/IP, LAN, Wi-Fi",
    level: "Débutant",
    color: "blue",
    size: "lg",
  },
  {
    key: "SEC",
    label: "Cybersécurité",
    detail: "CTF, hacking éthique",
    level: "Débutant",
    color: "green",
    size: "lg",
  },
];

// =====================================================
// Projets — cartes du portfolio
// =====================================================
export const projects = [
  {
    title: "Serveur NAS personnel",
    category: "Infrastructure",
    description:
      "Transformation d'un ancien PC en NAS auto-hébergé : stockage réseau, partage de fichiers multi-utilisateurs et configuration complète sous Linux.",
    tags: ["Linux", "Réseau", "SMB", "Self-hosted"],
    highlight: "Infra",
    year: "2025",
    link: "#",
  },
  {
    title: "Serveur multimédia Plex",
    category: "Streaming",
    description:
      "Mise en place d'un serveur Plex auto-hébergé type Netflix : streaming local, transcodage, configuration réseau et gestion des accès utilisateurs.",
    tags: ["Plex", "Réseau", "Streaming", "Linux"],
    highlight: "Plex",
    year: "2025",
    link: "#",
  },
  {
    title: "App Android — Suivi musculation",
    category: "Mobile",
    description:
      "Application Android native (APK) pour suivre les séances de musculation : logique métier, interface utilisateur et persistance des données.",
    tags: ["Android", "UI/UX", "IA-assisté", "Mobile"],
    highlight: "APK",
    year: "2025",
    link: "#",
  },
  {
    title: "Participation CTF",
    category: "Cybersécurité",
    description:
      "Défis cybersécurité sur PasseTonHack et compétitions régionales : web exploitation, cryptographie, OSINT, et travail d'équipe.",
    tags: ["Security", "CTF", "Pentest", "Team"],
    highlight: "CTF",
    year: "2024-25",
    link: "#",
  },
  {
    title: "Jeux interactifs en Python",
    category: "Programmation",
    description:
      "Deux mini-jeux développés en Python avec une approche objet (POO). Travail sur la logique algorithmique et l'architecture de code.",
    tags: ["Python", "POO", "Logique", "Jeu"],
    highlight: "POO",
    year: "2024",
    link: "#",
  },
  {
    title: "Site web personnel — HTML/CSS",
    category: "Web",
    description:
      "Conception et développement d'un site personnel en HTML/CSS (classe de Seconde) : structure sémantique et mise en forme responsive.",
    tags: ["HTML", "CSS", "Web", "Responsive"],
    highlight: "Web",
    year: "2023",
    link: "#",
  },
];

// =====================================================
// Expérience professionnelle
// =====================================================
export const experiences = [
  // idx 0 → colonne de gauche
  {
    role: "Stage d'observation — Sapeurs-Pompiers",
    company: "Caserne d'Étampes (SDIS 91)",
    location: "Étampes (91)",
    period: "2023 — 1 semaine",
    type: "Stage 3ème",
    bullets: [
      "Immersion dans le fonctionnement d'un centre de secours",
      "Découverte du système de secours français et de son organisation",
      "Compréhension de l'importance de la hiérarchie dans les métiers de l'urgence",
      "Observation de la rigueur, de la discipline et du travail d'équipe",
    ],
  },
  // idx 1 → colonne de droite
  {
    role: "Employé polyvalent",
    company: "Le Sublime",
    location: "Étampes (91)",
    period: "06/2024 — actuellement",
    type: "CDI temps partiel",
    bullets: [
      "Gestion des stocks et de l'approvisionnement",
      "Réception et déballage des marchandises",
      "Ouverture et fermeture de caisse, encaissement",
      "Travail d'équipe pour un service fluide",
    ],
  },
];

// =====================================================
// Formation
// =====================================================
export const education = [
  {
    degree: "BUT Réseaux & Télécommunications",
    school: "IUT — recherche en cours",
    period: "Rentrée 09/2026",
    note: "1re année en alternance visée",
    status: "upcoming",
  },
  {
    degree: "Baccalauréat Général",
    school: "Lycée Geoffroy Saint-Hilaire — Étampes",
    period: "01/2025 — En cours",
    note: "Spécialités Mathématiques & NSI",
    status: "current",
  },
  {
    degree: "Diplôme National du Brevet",
    school: "Collège Marie Curie — Étampes",
    period: "09/2022 — 07/2023",
    note: "Mention Bien",
    status: "done",
  },
];

// =====================================================
// Langues & centres d'intérêt
// =====================================================
export const languages = [
  { name: "Français", level: "C2 — Natif", value: 100 },
  { name: "Arabe", level: "C2 — Natif", value: 100 },
  { name: "Anglais", level: "B2 — Intermédiaire sup.", value: 75 },
];

export const interests = [
  "JJB (Jiu-jitsu brésilien)",
  "Cybersécurité & CTF",
  "Développement web",
  "Self-hosting",
  "Jeux vidéo (Souls-like)",
];

export const qualities = [
  "Rigueur & curiosité",
  "Travail d'équipe",
  "Autonomie",
  "Bon relationnel",
];

// =====================================================
// Navigation
// =====================================================
export const navigation = [
  { label: "À propos", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
