import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { LINKS } from "../data/links";
import { FaTelegramPlane } from "react-icons/fa";

const BOTS = [
  {
    name: "Hinatu",
    category: "AI Chat Assistant",
    description:
      "Hinatu is an AI-powered Telegram assistant designed for intelligent conversations and additional assistant capabilities.",
    url: LINKS.telegramHinatu,
  },
  {
    name: "Lancyverse",
    category: "Entertainment, Comics & Interactive Content",
    description:
      "Lancyverse is a Telegram entertainment and content-discovery project featuring comics and additional interactive capabilities.",
    url: LINKS.telegramLancyverse,
  },
];

export default function TelegramBots() {
  return (
    <PageShell title="Telegram Bots">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Telegram Bot Development</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>Telegram Bots</h1>
            <p className="lede" style={{ marginTop: 16 }}>
              A growing portfolio of Telegram bots — from conversational AI to entertainment and
              content discovery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {BOTS.map((bot, i) => (
              <Reveal key={bot.name} delay={i * 100}>
                <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div className="icon-badge">
                    <FaTelegramPlane size={20} />
                  </div>
                  <span className="badge" style={{ width: "fit-content", marginBottom: 12 }}>
                    {bot.category}
                  </span>
                  <h3 style={{ marginBottom: 10 }}>{bot.name}</h3>
                  <p style={{ color: "var(--text-secondary)", flex: 1 }}>{bot.description}</p>
                  <a
                    href={bot.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary btn--sm"
                    style={{ marginTop: 20, width: "fit-content" }}
                  >
                    <FaTelegramPlane size={13} /> Open {bot.name} on Telegram
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p style={{ color: "var(--text-secondary)", marginTop: 40, textAlign: "center" }}>
              More Telegram bots will appear here as they're built.
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
