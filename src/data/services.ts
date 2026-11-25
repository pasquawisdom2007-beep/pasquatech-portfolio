export type Service = {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: "whatsapp-bots",
    title: "WhatsApp Bot Development",
    description: "Custom WhatsApp bots built on reliable, modular architecture.",
    details: ["Session pairing & QR auth", "Group administration tools", "Anti-link & protection systems", "Media, sticker & download commands"],
    icon: "whatsapp",
  },
  {
    id: "telegram-bots",
    title: "Telegram Bot Development",
    description: "AI assistants and interactive bots for Telegram communities.",
    details: ["Conversational AI assistants", "Entertainment & content bots", "Moderation & community tools", "Expandable command systems"],
    icon: "telegram",
  },
  {
    id: "websites",
    title: "Website Development",
    description: "Fast, modern websites built with clean, maintainable code.",
    details: ["Responsive multi-page sites", "Landing pages & portfolios", "Deployment-ready builds", "SEO-friendly structure"],
    icon: "globe",
  },
  {
    id: "web-apps",
    title: "Web Application Development",
    description: "Interactive web applications tailored to a real workflow.",
    details: ["Custom UI & interaction design", "State-driven interfaces", "API-connected features", "Cross-device responsiveness"],
    icon: "layout",
  },
  {
    id: "custom-apps",
    title: "Custom Application Development",
    description: "Purpose-built software for a specific need or process.",
    details: ["Requirements-first approach", "Modular, extensible code", "Clear project scoping", "Ongoing iteration"],
    icon: "code",
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbot Development",
    description: "Conversational AI features integrated into bots and sites.",
    details: ["Natural-language interactions", "Context-aware responses", "Assistant-style workflows", "Integration with existing bots"],
    icon: "cpu",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Connecting your product to the services it depends on.",
    details: ["Third-party API wiring", "Authentication & tokens", "Data syncing", "Error handling & retries"],
    icon: "plug",
  },
  {
    id: "automation",
    title: "Automation Systems",
    description: "Scripts and systems that remove repetitive manual work.",
    details: ["Task scheduling", "Workflow scripting", "Notification pipelines", "Process automation"],
    icon: "zap",
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    description: "End-to-end software built around your exact idea.",
    details: ["Architecture planning", "Full build & testing", "Deployment support", "Documentation handover"],
    icon: "box",
  },
];
