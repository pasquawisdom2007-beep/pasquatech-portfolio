import { Link } from "../router/Router";
import { FaGithub, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import PageShell from "../components/PageShell";
import Terminal from "../components/Terminal";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { languages } from "../data/tech";
import { LINKS } from "../data/links";

export default function Home() {
  return (
    <PageShell title="Home">
      <section className="hero">
        <div className="ambient-glow" style={{ top: -120, right: -160 }} />
        <div className="container">
          <div className="hero__top">
            <Reveal>
              <div className="eyebrow">Independent Software Developer</div>
              <h1>PASQUA DEV</h1>
              <p className="lede" style={{ marginTop: 18 }}>
                Turning Ideas Into Digital Experiences. I'm a developer who builds bots, websites,
                web applications and intelligent software solutions. I create technology that
                solves problems, connects people and brings ideas to life.
              </p>
              <div className="hero__actions">
                <Link to="/start-project" className="btn btn--primary">
                  Let's build something together <FaArrowRight size={13} />
                </Link>
                <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
                  <FaGithub size={16} /> GitHub
                </a>
                <a href={LINKS.whatsappChannel} target="_blank" rel="noreferrer" className="btn btn--ghost">
                  <FaWhatsapp size={16} /> Updates Channel
                </a>
              </div>
              <div className="hero__stats">
                <div>
                  <div className="hero__stat-num">{projects.length}</div>
                  <div className="hero__stat-label">Live Projects</div>
                </div>
                <div>
                  <div className="hero__stat-num">{languages.length}</div>
                  <div className="hero__stat-label">Languages</div>
                </div>
                <div>
                  <div className="hero__stat-num">19</div>
                  <div className="hero__stat-label">Years Old</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <Terminal />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Featured Work</div>
              <h2>Projects I've shipped</h2>
              <p className="lede">A look at the bots, bridges and websites currently live.</p>
            </div>
          </Reveal>
          <div className="grid grid--3">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard project={p} delay={i * 80} key={p.id} />
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link to="/projects" className="btn btn--ghost">
                View all projects <FaArrowRight size={12} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">What I Offer</div>
              <h2>Services built around your idea</h2>
            </div>
          </Reveal>
          <div className="grid grid--3">
            {services.slice(0, 3).map((s, i) => (
              <ServiceCard service={s} delay={i * 80} key={s.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Toolbox</div>
              <h2>Technology stack</h2>
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
            <div className="card" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
              <div>
                <div className="eyebrow">About</div>
                <h3 style={{ marginBottom: 10 }}>A 19-year-old developer who likes shipping real things</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  From WhatsApp bots to full web applications — I enjoy turning ideas into working
                  software, one project at a time.
                </p>
              </div>
              <Link to="/about" className="btn btn--ghost">
                Read more <FaArrowRight size={12} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <div className="ambient-glow" style={{ bottom: -200, left: "40%" }} />
              <h2>Let's build something together.</h2>
              <p className="lede" style={{ margin: "16px auto 0" }}>
                Tell me what you're working on and let's turn it into something real.
              </p>
              <div className="cta-band__actions">
                <Link to="/start-project" className="btn btn--primary">
                  Start a Project <FaArrowRight size={13} />
                </Link>
                <Link to="/contact" className="btn btn--ghost">
                  Contact Me
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
