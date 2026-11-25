import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { LINKS } from "../data/links";
import { FaGithub, FaWhatsapp, FaTelegramPlane, FaArrowRight } from "react-icons/fa";
import { Link } from "../router/Router";

export default function Contact() {
  return (
    <PageShell title="Contact">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Get In Touch</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>Let's Talk.</h1>
            <p className="lede" style={{ marginTop: 16 }}>
              Have an idea, a question or a project in mind? I'd love to hear about it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <Reveal>
              <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="card" style={{ display: "block" }}>
                <div className="icon-badge"><FaWhatsapp size={20} /></div>
                <h3 style={{ marginBottom: 8 }}>WhatsApp</h3>
                <p style={{ color: "var(--text-secondary)" }}>The fastest way to reach me directly.</p>
              </a>
            </Reveal>
            <Reveal delay={60}>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="card" style={{ display: "block" }}>
                <div className="icon-badge"><FaGithub size={20} /></div>
                <h3 style={{ marginBottom: 8 }}>GitHub</h3>
                <p style={{ color: "var(--text-secondary)" }}>See the code behind my projects.</p>
              </a>
            </Reveal>
            <Reveal delay={120}>
              <a href={LINKS.telegramHinatu} target="_blank" rel="noreferrer" className="card" style={{ display: "block" }}>
                <div className="icon-badge"><FaTelegramPlane size={20} /></div>
                <h3 style={{ marginBottom: 8 }}>Hinatu on Telegram</h3>
                <p style={{ color: "var(--text-secondary)" }}>Chat with my AI Telegram assistant.</p>
              </a>
            </Reveal>
            <Reveal delay={180}>
              <a href={LINKS.telegramLancyverse} target="_blank" rel="noreferrer" className="card" style={{ display: "block" }}>
                <div className="icon-badge"><FaTelegramPlane size={20} /></div>
                <h3 style={{ marginBottom: 8 }}>Lancyverse on Telegram</h3>
                <p style={{ color: "var(--text-secondary)" }}>Entertainment and comics bot.</p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Let's build something together.</h2>
              <div className="cta-band__actions">
                <Link to="/start-project" className="btn btn--primary">
                  Start a Project <FaArrowRight size={13} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
