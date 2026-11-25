import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Cable,
  Check,
  Code2,
  Github,
  Globe2,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    index: "01",
    eyebrow: "WhatsApp automation",
    title: "SUKUNA_MD",
    description:
      "A multi-session WhatsApp bot built for dependable everyday automation, AI conversations, group tools, media commands, and a more thoughtful chat experience.",
    accent: "violet",
    icon: Bot,
    tags: ["Node.js", "Baileys", "AI memory", "Group tooling"],
    href: "https://github.com/pasquawisdom2007-beep/SUKUNA_MD",
  },
  {
    index: "02",
    eyebrow: "Pairing infrastructure",
    title: "PAIR_SITE",
    description:
      "A focused pairing and deployment surface that helps users connect WhatsApp sessions, recover credentials, and move from first code to a runnable bot.",
    accent: "lime",
    icon: Cable,
    tags: ["Express", "Redis", "Pair codes", "Deployment"],
    href: "https://github.com/pasquawisdom2007-beep/PAIR_SITE",
  },
];

const principles = [
  {
    icon: BrainCircuit,
    title: "Useful by default",
    copy: "Features should feel practical on the first tap, not like a demo waiting for a manual setup tour.",
  },
  {
    icon: ShieldCheck,
    title: "Built to stay up",
    copy: "Reliability, clean session boundaries, and graceful failure matter as much as the feature itself.",
  },
  {
    icon: Code2,
    title: "Details carry the work",
    copy: "The small decisions—feedback, readable output, and clear hand-offs—make tools worth returning to.",
  },
];

function ExternalArrow() {
  return <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="orb orb-violet" aria-hidden="true" />
      <div className="orb orb-lime" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <span className="wordmark-mark">P</span>
          <span>Pasqua<span className="wordmark-dot">.</span>tech</span>
        </a>
        <button
          className="mobile-menu"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav id="site-navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            className="nav-github"
            href="https://github.com/pasquawisdom2007-beep"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <Github size={15} /> GitHub <ExternalArrow />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow reveal reveal-one">
              <span className="status-dot" /> Independent software studio · 2026
            </div>
            <h1 className="reveal reveal-two">
              Tools with a <em>point&nbsp;of&nbsp;view.</em>
            </h1>
            <p className="hero-intro reveal reveal-three">
              Pasqua Tech makes expressive, useful software for the way people
              actually communicate, create, and connect online.
            </p>
            <div className="hero-actions reveal reveal-four">
              <a className="button button-primary" href="#projects">
                Explore the builds <ArrowDownRight size={18} />
              </a>
              <a
                className="text-link"
                href="https://github.com/pasquawisdom2007-beep"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> Follow the work <ExternalArrow />
              </a>
            </div>
          </div>

          <div className="hero-aside reveal reveal-three" aria-label="Studio statement">
            <div className="aside-line" />
            <p className="aside-kicker">Selected work / 02</p>
            <p className="aside-quote">
              “Make the interface feel like an invitation, not an instruction manual.”
            </p>
            <div className="aside-meta">
              <span>Paschal Jayden</span>
              <span>Founder / builder</span>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Studio disciplines">
          <div className="ticker-track">
            <span>Automation</span><i>✳</i><span>AI experiences</span><i>✳</i><span>Deployment tools</span><i>✳</i><span>Human-scale software</span><i>✳</i>
            <span>Automation</span><i>✳</i><span>AI experiences</span><i>✳</i><span>Deployment tools</span><i>✳</i><span>Human-scale software</span><i>✳</i>
          </div>
        </section>

        <section className="projects-section container" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-label"><span>01</span> The project shelf</p>
              <h2>Two builds.<br /><em>One ecosystem.</em></h2>
            </div>
            <p className="section-summary">
              The projects stay independent by design. Choose the tool you need,
              then follow its own repository for the details.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card ${project.accent}`} key={project.title}>
                  <div className="card-topline">
                    <span>{project.index} / BUILD</span>
                    <span className="card-icon"><Icon size={20} strokeWidth={1.5} /></span>
                  </div>
                  <div className="project-content">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    Open repository <ExternalArrow />
                  </a>
                </article>
              );
            })}
          </div>
          <p className="project-note"><Globe2 size={15} /> Separate repositories. Shared standards. No hidden hand-offs.</p>
        </section>

        <section className="approach-section" id="approach">
          <div className="container approach-inner">
            <div className="approach-heading">
              <p className="section-label"><span>02</span> How it gets made</p>
              <h2>Quietly opinionated.<br /><em>Deliberately useful.</em></h2>
            </div>
            <div className="principles-list">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div className="principle" key={principle.title}>
                    <span className="principle-number">0{index + 1}</span>
                    <Icon className="principle-icon" size={23} strokeWidth={1.6} />
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-card">
            <div className="contact-mark"><Sparkles size={23} strokeWidth={1.5} /></div>
            <div>
              <p className="section-label"><span>03</span> Keep in touch</p>
              <h2>Want to see what ships next?</h2>
              <p>Follow the repositories, open an issue, or reach out through GitHub.</p>
            </div>
            <a className="button button-dark" href="https://github.com/pasquawisdom2007-beep" target="_blank" rel="noreferrer">
              Visit GitHub <ExternalArrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2026 Pasqua Tech</span>
        <span>Built with intent<span className="footer-star"> ✳</span></span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
