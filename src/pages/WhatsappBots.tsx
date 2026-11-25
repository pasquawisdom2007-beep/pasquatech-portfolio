import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { LINKS } from "../data/links";
import { FaGithub } from "react-icons/fa";

const FEATURES = [
  "WhatsApp session pairing",
  "QR authentication",
  "Group administration",
  "Anti-link & protection systems",
  "Media commands",
  "Sticker generation",
  "Download utilities",
  "Image processing",
  "Modular command architecture",
  "AI integrations",
  "Deployment functionality",
];

export default function WhatsappBots() {
  return (
    <PageShell title="WhatsApp Bots">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">WhatsApp Bot Development</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>SUKUNA MD</h1>
            <p className="lede" style={{ marginTop: 16 }}>
              A modular WhatsApp bot built on the Baileys library, designed around clean session
              handling, group administration and a growing command library.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
              <a href={LINKS.githubSukuna} target="_blank" rel="noreferrer" className="btn btn--primary">
                <FaGithub size={16} /> View Repository
              </a>
              <a href={LINKS.pairSitePrimary} target="_blank" rel="noreferrer" className="btn btn--ghost">
                Open Pairing Site
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <Reveal>
              <div className="card">
                <h3 style={{ marginBottom: 12 }}>Project overview</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  SUKUNA MD handles authentication through WhatsApp pairing and QR codes, then
                  gives group admins protection tools — anti-link filtering, moderation commands
                  — alongside media, sticker and download utilities for everyday users.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card">
                <h3 style={{ marginBottom: 12 }}>Technology</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {["Node.js", "Baileys", "JavaScript"].map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
                <p style={{ color: "var(--text-secondary)", marginTop: 16 }}>
                  Built with a modular command structure so new features can be added without
                  touching the core connection logic.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Feature Categories</div>
              <h2>What SUKUNA MD does</h2>
            </div>
          </Reveal>
          <div className="grid grid--3">
            {FEATURES.map((f, i) => (
              <Reveal key={f} delay={i * 40}>
                <div className="card" style={{ padding: 20 }}>
                  <span style={{ fontSize: "0.95rem" }}>{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Want a bot like this?</h2>
              <p className="lede" style={{ margin: "14px auto 0" }}>
                I build WhatsApp bots with the same level of structure and care.
              </p>
              <div className="cta-band__actions">
                <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn btn--primary">
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
