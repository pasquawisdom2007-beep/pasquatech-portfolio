import { LINKS } from "./links";

export type ProjectStatus = "live" | "in-progress" | "planned";

export type Project = {
  id: string;
  name: string;
  category: "WhatsApp Bots" | "Telegram Bots" | "Websites" | "Web Applications";
  description: string;
  stack: string[];
  status: ProjectStatus;
  demoUrl?: string;
  repoUrl?: string;
  secondaryUrl?: { label: string; url: string };
  initials: string;
};

export const projects: Project[] = [
  {
    id: "sukuna-md",
    name: "SUKUNA MD",
    category: "WhatsApp Bots",
    description:
      "A modular WhatsApp bot built on Baileys, with session pairing, QR authentication, group administration, anti-link protection, media and sticker tools, and a growing command library.",
    stack: ["Node.js", "Baileys", "JavaScript"],
    status: "live",
    repoUrl: LINKS.githubSukuna,
    initials: "SM",
  },
  {
    id: "hinatu",
    name: "Hinatu",
    category: "Telegram Bots",
    description:
      "An AI-powered Telegram assistant built for intelligent conversations, with room for additional assistant capabilities over time.",
    stack: ["Node.js", "Telegram Bot API"],
    status: "live",
    demoUrl: LINKS.telegramHinatu,
    initials: "HN",
  },
  {
    id: "lancyverse",
    name: "Lancyverse",
    category: "Telegram Bots",
    description:
      "An entertainment and content-discovery Telegram bot featuring comics and additional interactive capabilities.",
    stack: ["Node.js", "Telegram Bot API"],
    status: "live",
    demoUrl: LINKS.telegramLancyverse,
    initials: "LV",
  },
  {
    id: "pasqua-md-pairing",
    name: "Pasqua MD Pairing",
    category: "Websites",
    description:
      "A WhatsApp session pairing website that generates short session IDs, deployed across two related endpoints for pairing and backup access.",
    stack: ["Node.js", "Express"],
    status: "live",
    demoUrl: LINKS.pairSitePrimary,
    secondaryUrl: { label: "Secondary deployment", url: LINKS.pairSiteSecondary },
    initials: "PS",
  },
  {
    id: "couple-theatre",
    name: "Couple Theatre",
    category: "Web Applications",
    description:
      "An entertainment-focused movie website built as a web application, presenting a browsing experience for films.",
    stack: ["JavaScript", "Web App"],
    status: "live",
    demoUrl: LINKS.coupleTheatre,
    initials: "CT",
  },
];

export const categories = ["All", "WhatsApp Bots", "Telegram Bots", "Websites", "Web Applications"] as const;
