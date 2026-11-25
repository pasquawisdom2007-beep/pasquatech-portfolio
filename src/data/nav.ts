export const topNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const drawerNav = [
  {
    group: null,
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
    ],
  },
  {
    group: "Explore Projects",
    links: [
      { label: "All Projects", to: "/projects" },
      { label: "WhatsApp Bots", to: "/whatsapp-bots" },
      { label: "Telegram Bots", to: "/telegram-bots" },
      { label: "Websites & Web Apps", to: "/websites" },
      { label: "Apps & Experiments", to: "/apps" },
    ],
  },
  {
    group: "Expertise",
    links: [
      { label: "Technologies & Skills", to: "/technologies" },
      { label: "Services", to: "/services" },
    ],
  },
  {
    group: "Connect",
    links: [
      { label: "Start a Project", to: "/start-project" },
      { label: "Contact", to: "/contact" },
      { label: "Community", to: "/community" },
    ],
  },
];
