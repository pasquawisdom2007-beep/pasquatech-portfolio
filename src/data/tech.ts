export type TechGroup = {
  category: string;
  items: { name: string; note?: string }[];
};

export const languages = ["JavaScript", "PHP", "HTML", "CSS", "Python", "C++"];

export const techGroups: TechGroup[] = [
  {
    category: "Frontend Development",
    items: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "React", note: "Exploring" }],
  },
  {
    category: "Backend Development",
    items: [{ name: "Node.js" }, { name: "PHP" }, { name: "Python" }],
  },
  {
    category: "Bot Development",
    items: [{ name: "Baileys (WhatsApp)" }, { name: "Telegram Bot API" }],
  },
  {
    category: "AI Integration",
    items: [{ name: "Conversational AI APIs" }],
  },
  {
    category: "Automation",
    items: [{ name: "Node.js scripting" }, { name: "Python scripting" }],
  },
  {
    category: "Hosting & Deployment",
    items: [{ name: "Render" }],
  },
  {
    category: "Version Control",
    items: [{ name: "Git" }, { name: "GitHub" }],
  },
  {
    category: "Also Exploring",
    items: [{ name: "C++", note: "Exploring" }, { name: "APIs & Integrations", note: "Exploring" }, { name: "Databases", note: "Exploring" }],
  },
];
