export const LINKS = {
  github: "https://github.com/pasquawisdom2007-beep",
  githubSukuna: "https://github.com/pasquawisdom2007-beep/SUKUNA_MD",
  domain: "https://pasquatech.com",
  whatsapp: "https://wa.me/devpasqua_xr",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb912f9It5rxMNf1Sf2n",
  telegramHinatu: "https://t.me/Hinatu_bot",
  telegramLancyverse: "https://t.me/Lancyverse_bot",
  pairSitePrimary: "https://pair-site-wmte.onrender.com/",
  pairSiteSecondary: "https://pair-site-91ob.onrender.com/",
  coupleTheatre: "https://couple-theatre-nlmd.onrender.com/",
};

export function buildWhatsAppLink(message: string) {
  return `${LINKS.whatsapp}?text=${encodeURIComponent(message)}`;
}
