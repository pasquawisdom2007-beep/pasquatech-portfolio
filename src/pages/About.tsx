import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { languages } from "../data/tech";
import { Link } from "../router/Router";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <PageShell title="About">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">About Me</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
              Hi, I'm Pasqua — a 19-year-old developer behind PASQUA DEV.
            </h1>
            <p className="lede" style={{ marginTop: 20, maxWidth: 720 }}>
              I'm a developer and technology enthusiast who builds bots, websites, web
              applications and automation systems. I enjoy turning ideas into working software —
              from a WhatsApp bot that handles an entire group, to a website someone actually
              uses every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <Reveal>
              <div className="card">
                <h3 style={{ marginBottom: 14 }}>What I build</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  My work spans WhatsApp bots, Telegram bots, websites and web applications. I'm
                  drawn to projects with a real command interface, real users and a real problem
                  to solve — automation, communication, or entertainment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card">
                <h3 style={{ marginBottom: 14 }}>How I approach software</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  I build in modular pieces, test as I go, and keep iterating rather than
                  shipping once and walking away. I'd rather ship something small and working
                  than something large and half-finished.
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
              <div className="eyebrow">Languages</div>
              <h2>What I code with</h2>
            </div>
          </Reveal>
          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {languages.map((lang) => (
                <span className="tech-pill" key={lang} style={{ fontSize: "0.92rem", padding: "10px 18px" }}>
                  {lang}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Journey</div>
              <h2>How this has grown</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="timeline">
              <div className="timeline__item">
                <h3 style={{ marginBottom: 6, fontSize: "1.05rem" }}>Started building bots</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Began developing SUKUNA MD, a WhatsApp bot built on Baileys, learning session
                  pairing, command architecture and group administration along the way.
                </p>
              </div>
              <div className="timeline__item">
                <h3 style={{ marginBottom: 6, fontSize: "1.05rem" }}>Expanded to Telegram</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Built Hinatu and Lancyverse — an AI chat assistant and an entertainment bot —
                  exploring conversational and content-driven experiences on a different platform.
                </p>
              </div>
              <div className="timeline__item">
                <h3 style={{ marginBottom: 6, fontSize: "1.05rem" }}>Moved into web development</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Took on freelance web projects, including NGO websites, and shipped the Pasqua
                  MD pairing site and Couple Theatre as standalone web products.
                </p>
              </div>
              <div className="timeline__item">
                <h3 style={{ marginBottom: 6, fontSize: "1.05rem" }}>Building PASQUA DEV</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Bringing all of this work together under one brand, with a clear path for
                  people to find a project, pick a service and start a conversation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Want to work together?</h2>
              <div className="cta-band__actions">
                <Link to="/start-project" className="btn btn--primary">
                  Start a Project <FaArrowRight size={13} />
                </Link>
                <Link to="/projects" className="btn btn--ghost">View My Projects</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
