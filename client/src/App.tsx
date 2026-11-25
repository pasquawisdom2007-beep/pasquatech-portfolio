import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, Bot, Check, ChevronRight, Code2, ExternalLink, Github, Globe2,
  Layers3, Menu, MessageCircle, MonitorSmartphone, Package, Palette, Radio,
  Send, Server, Sparkles, Terminal, X, Zap,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import { Toaster, toast } from "sonner";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const LINKS = {
  github: "https://github.com/pasquawisdom2007-beep",
  domain: "https://pasquatech.com",
  whatsapp: "https://wa.me/devpasqua_xr",
  channel: "https://whatsapp.com/channel/0029Vb912f9It5rxMNf1Sf2n",
  sukuna: "https://github.com/pasquawisdom2007-beep/SUKUNA_MD",
  pairA: "https://pair-site-wmte.onrender.com/",
  pairB: "https://pair-site-91ob.onrender.com/",
  couple: "https://couple-theatre-nlmd.onrender.com/",
  hinatu: "https://t.me/Hinatu_bot",
  lancy: "https://t.me/Lancyverse_bot",
  video: "https://github.com/pasquawisdom2007-beep/pasqua-video-gen",
};

const nav = [
  ["About", "/about"], ["Projects", "/projects"], ["Services", "/services"],
  ["Technologies", "/technologies"], ["Community", "/community"],
] as const;

function External({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ExternalLink size={14} /></a>;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => setOpen(false), [location]);
  return <div className="app-shell">
    <div className="grain" aria-hidden="true" />
    <header className="site-header">
      <Link href="/" className="brand"><span className="brand-mark">P</span><span>PASQUA <b>DEV</b></span></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      <nav className={`site-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
        {nav.map(([label, href]) => <Link key={href} href={href} className={location === href ? "active" : ""}>{label}</Link>)}
        <Link href="/start-project" className="nav-cta">Start a project <ArrowRight size={15} /></Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="site-footer container">
      <Link href="/" className="brand"><span className="brand-mark small">P</span><span>PASQUA <b>DEV</b></span></Link>
      <span>Turning ideas into digital experiences.</span>
      <div className="footer-links"><External href={LINKS.github}>GitHub</External><External href={LINKS.whatsapp}>WhatsApp</External><Link href="/contact">Contact</Link></div>
      <span className="footer-copy">© 2026 PASQUA DEV</span>
    </footer>
  </div>;
}

function PageHero({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return <section className="page-hero container"><p className="eyebrow"><span className="status-dot" /> {kicker}</p><h1>{title}</h1><p className="lead">{text}</p></section>;
}

function SectionHeading({ index, title, text }: { index: string; title: string; text?: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{index}</span> / PASQUA DEV</p><h2>{title}</h2></div>{text && <p className="section-note">{text}</p>}</div>;
}

function LoadingScreen() {
  const lines = ["Initializing PASQUA DEV...", "Loading development environment...", "Exploring possibilities...", "Building digital experiences...", "System status: ONLINE."];
  const [index, setIndex] = useState(0);
  useEffect(() => { const t = setInterval(() => setIndex(i => Math.min(i + 1, lines.length - 1)), 230); return () => clearInterval(t); }, []);
  return <motion.div className="loading-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}><div className="loader-inner"><div className="loader-brand"><span className="brand-mark">P</span> PASQUA DEV</div><div className="terminal mini-terminal"><div className="terminal-bar"><span /><span /><span /><b>pasqua@dev:~</b></div>{lines.slice(0, index + 1).map((line, i) => <p key={line} className={i === lines.length - 1 && index === lines.length - 1 ? "success" : ""}><span>$</span> {line}{i === index && <i className="cursor" />}</p>)}</div></div></motion.div>;
}

function Home() {
  const [showLoader, setShowLoader] = useState(() => !sessionStorage.getItem("pasqua-loaded"));
  useEffect(() => { if (showLoader) { const t = setTimeout(() => { sessionStorage.setItem("pasqua-loaded", "1"); setShowLoader(false); }, 1250); return () => clearTimeout(t); } }, [showLoader]);
  return <>
    <AnimatePresence>{showLoader && <LoadingScreen />}</AnimatePresence>
    <section className="hero container">
      <div className="hero-content"><p className="eyebrow"><span className="status-dot" /> Independent developer · PASQUA DEV</p><h1>Turning Ideas<br /><span>Into Digital</span><br />Experiences.</h1><p className="lead">I'm a developer who builds bots, websites, web applications and intelligent software solutions. I create technology that solves problems, connects people and brings ideas to life.</p><div className="hero-actions"><Link href="/start-project" className="button primary">Let's build something together <ArrowRight size={17} /></Link><Link href="/projects" className="text-link">Explore selected work <ChevronRight size={16} /></Link></div></div>
      <div className="hero-visual"><div className="terminal"><div className="terminal-bar"><span /><span /><span /><b>pasqua@dev:~</b><em>ONLINE</em></div><div className="terminal-body"><p><span className="prompt">$</span> whoami</p><p className="terminal-accent">pasqua_dev</p><p><span className="prompt">$</span> cat current_focus.txt</p><p className="terminal-muted">Bots · web apps · useful tools</p><p><span className="prompt">$</span> <i className="cursor" /></p></div></div><div className="visual-caption"><span>01</span><span>Build with intent</span></div></div>
    </section>
    <section className="signal-strip"><div className="container strip-grid"><span>01 / DEVELOPER</span><span>02 / BUILDER</span><span>03 / EXPLORER</span><span>04 / PROBLEM SOLVER</span></div></section>
    <section className="container section-block"><SectionHeading index="01" title="Selected projects" text="A small ecosystem of independent projects. Open the original repository or live service to explore each one." /><div className="project-grid"> <ProjectCard type="WhatsApp automation" title="SUKUNA_MD" desc="A JavaScript WhatsApp bot for group management and everyday chat automation." icon={<Bot />} href={LINKS.sukuna} tags={["JavaScript", "WhatsApp", "Open source"]} /><ProjectCard type="Pairing infrastructure" title="PAIR_SITE" desc="A separate secure pairing console for pairing devices, QR connections and deployment scripts." icon={<Radio />} href={LINKS.pairA} tags={["Pair codes", "Redis", "Deployment"]} /><ProjectCard type="Live web experience" title="Couple Theatre" desc="A standalone website project available as a live Render service." icon={<Globe2 />} href={LINKS.couple} tags={["Website", "Live service"]} /></div><Link className="section-link" href="/projects">View all projects <ArrowRight size={16} /></Link></section>
    <section className="dark-band"><div className="container two-col"><div><p className="eyebrow"><span>02</span> / THE APPROACH</p><h2>Technology should feel <span>human.</span></h2></div><div className="principles"><div><span>01</span><h3>Start with the problem</h3><p>Useful software begins with a clear reason to exist. I focus on the job a product needs to do.</p></div><div><span>02</span><h3>Make the next step obvious</h3><p>Interfaces should guide people without getting in their way, from a bot command to a deployment flow.</p></div><div><span>03</span><h3>Keep the work independent</h3><p>Each project has its own purpose, repository and link. The portfolio is the map, not a merge.</p></div></div></div></section>
    <section className="container home-cta"><div><p className="eyebrow"><span className="status-dot" /> Have an idea?</p><h2>Let's make it <span>real.</span></h2></div><Link className="button primary" href="/start-project">Start a project <ArrowRight size={17} /></Link></section>
  </>;
}

function ProjectCard({ type, category, title, desc, icon, href, tags = ["PASQUA DEV", "Open link"] }: { type?: string; category?: string; title: string; desc: string; icon: React.ReactNode; href: string; tags?: string[] }) { return <article className="project-card"><div className="card-icon">{icon}</div><p className="card-type">{type || category}</p><h3>{title}</h3><p>{desc}</p><div className="tag-row">{tags.map(t => <span key={t}>{t}</span>)}</div><External href={href} className="card-link">Open project</External></article>; }

const projectData = [
  { category: "WhatsApp bots", title: "SUKUNA_MD", desc: "JavaScript WhatsApp bot for managing groups and building useful chat automation.", href: LINKS.sukuna, icon: <Bot /> },
  { category: "Websites", title: "PAIR_SITE / wmte", desc: "Live PASQUA MD pairing and deployment console with pair, QR and script-builder flows.", href: LINKS.pairA, icon: <Radio /> },
  { category: "Websites", title: "PAIR_SITE / 91ob", desc: "A second live endpoint for the separate pairing-site project.", href: LINKS.pairB, icon: <Server /> },
  { category: "Websites", title: "Couple Theatre", desc: "A standalone live website project.", href: LINKS.couple, icon: <MonitorSmartphone /> },
  { category: "Telegram bots", title: "Hinatu", desc: "Telegram bot link supplied as part of the PASQUA DEV ecosystem.", href: LINKS.hinatu, icon: <Send /> },
  { category: "Telegram bots", title: "Lancyverse", desc: "Telegram bot link supplied as part of the PASQUA DEV ecosystem.", href: LINKS.lancy, icon: <Send /> },
  { category: "Apps / experiments", title: "Pasqua Video Gen", desc: "A public HTML project for image-to-video AI generation, listed on the GitHub profile.", href: LINKS.video, icon: <Sparkles /> },
];

function Projects() { const categories = ["All", "WhatsApp bots", "Telegram bots", "Websites", "Apps / experiments"]; const [filter, setFilter] = useState("All"); const items = projectData.filter(p => filter === "All" || p.category === filter); return <><PageHero kicker="Project directory" title="Independent builds, clearly linked." text="Explore the bots, websites and experiments that make up the PASQUA DEV portfolio. Every project stays in its own home." /><section className="container section-block project-directory"><div className="filter-row" role="group" aria-label="Filter projects">{categories.map(c => <button key={c} className={filter === c ? "selected" : ""} onClick={() => setFilter(c)}>{c}</button>)}</div><div className="directory-grid">{items.map(p => <ProjectCard key={p.title} {...p} />)}</div></section></>; }

function About() { return <><PageHero kicker="About PASQUA DEV" title="A young builder with a practical bias." text="PASQUA DEV is the personal technology portfolio of Paschal Jayden. The work sits where communication, automation and the web meet." /><section className="container about-grid"><div className="about-note"><span className="big-number">19</span><p>Years old, learning in public and building real projects one useful problem at a time.</p></div><div className="about-copy"><h2>Build things people can use.</h2><p>I work across bots, websites, web applications and intelligent software solutions. I care about a clear interaction, an honest scope and a reliable path from idea to something people can actually try.</p><p>My current work includes the separate SUKUNA_MD and PAIR_SITE projects, plus live website and bot experiments. This portfolio connects them without merging their codebases.</p><div className="skill-list"><span>JavaScript</span><span>React</span><span>Node.js</span><span>WhatsApp automation</span><span>Web interfaces</span><span>Product thinking</span></div></div></section><section className="container timeline-section"><SectionHeading index="02" title="A work in progress" text="No invented titles or milestones. Just the path visible in the work." /><div className="timeline"><div><span>NOW</span><h3>Building and shipping</h3><p>Developing independent bots, deployment tools, websites and experiments.</p></div><div><span>NEXT</span><h3>Keep exploring</h3><p>Turning new ideas into small, testable digital experiences.</p></div></div></section></>; }

function CategoryPage({ kind, title, text, items }: { kind: string; title: string; text: string; items: Array<{ title: string; desc: string; href: string; icon: React.ReactNode }> }) { return <><PageHero kicker={kind} title={title} text={text} /><section className="container section-block"><div className="directory-grid">{items.map(i => <ProjectCard key={i.title} {...i} type={kind} tags={["PASQUA DEV", "Open link"]} />)}</div></section></>; }

function Services() { const services = ["WhatsApp bots", "Telegram bots", "Websites", "Web applications", "Automation tools", "AI integrations", "Deployment support", "UI / UX design", "Custom software"]; return <><PageHero kicker="Services" title="From first sketch to useful software." text="Choose a direction and tell me what you want to make. The next step is a clear conversation, not an automatic promise." /><section className="container service-layout"><div className="service-grid">{services.map((s, i) => <Link href={`/start-project?service=${encodeURIComponent(s)}`} className="service-card" key={s}><span>0{i + 1}</span><h3>{s}</h3><ArrowRight size={17} /></Link>)}</div><div className="service-aside"><Sparkles size={20} /><h3>Have something different in mind?</h3><p>Custom ideas are welcome. Use the project starter to share the shape of the problem.</p><Link href="/start-project" className="text-link">Start a conversation <ArrowRight size={16} /></Link></div></section></>; }

function Technologies() { const known = ["JavaScript", "TypeScript", "React", "Vite", "Node.js", "HTML / CSS", "Baileys", "Redis", "GitHub", "Render"]; const exploring = ["AI-powered interfaces", "Image-to-video experiments", "Deeper automation patterns", "New deployment workflows"]; return <><PageHero kicker="Technologies" title="Tools I use, areas I explore." text="A grounded view of the stack visible in the projects. No proficiency percentages, just the technologies connected to real work and current exploration." /><section className="container tech-grid"><div className="tech-panel"><p className="eyebrow"><Code2 size={15} /> Used in current work</p><div className="tech-cloud">{known.map(t => <span key={t}>{t}</span>)}</div></div><div className="tech-panel secondary"><p className="eyebrow"><Zap size={15} /> Exploring next</p><div className="explore-list">{exploring.map(t => <div key={t}><ChevronRight size={15} /><span>{t}</span></div>)}</div></div></section></>; }

function StartProject() { const params = new URLSearchParams(window.location.search); const initial = params.get("service") || ""; const [step, setStep] = useState(1); const [service, setService] = useState(initial); const [form, setForm] = useState({ name: "", details: "", timeline: "" }); const services = ["WhatsApp bots", "Telegram bots", "Websites", "Web applications", "Automation tools", "AI integrations", "Deployment support", "UI / UX design", "Custom software"]; const canNext = service.length > 0; const submit = (e: FormEvent) => { e.preventDefault(); if (!form.name || !form.details) { toast.error("Add your name and a few project details first."); return; } const msg = `Hello PASQUA DEV, I'm ${form.name}. I want to discuss ${service}.\n\nProject details: ${form.details}\nTimeline: ${form.timeline || "Not specified"}`; window.open(`${LINKS.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer"); }; return <><PageHero kicker="Start a project" title="Give the idea a useful first shape." text="Select a service, share the context and review your message before it opens WhatsApp. Nothing is sent automatically." /><section className="container starter"><div className="steps"><span className={step >= 1 ? "current" : ""}>01 <b>Choose</b></span><span className={step >= 2 ? "current" : ""}>02 <b>Details</b></span><span className={step >= 3 ? "current" : ""}>03 <b>Send</b></span></div>{step === 1 && <div className="starter-panel"><h2>What are we making?</h2><div className="choice-grid">{services.map(s => <button key={s} className={service === s ? "choice selected" : "choice"} onClick={() => setService(s)}><span>{service === s ? <Check size={16} /> : <span className="choice-dot" />}</span>{s}</button>)}</div><button className="button primary next" disabled={!canNext} onClick={() => setStep(2)}>Continue <ArrowRight size={16} /></button></div>}{step === 2 && <form className="starter-panel form-panel" onSubmit={e => { e.preventDefault(); setStep(3); }}><p className="eyebrow">Selected service · {service}</p><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="How should I call you?" /></label><label>What should we build?<textarea required rows={5} value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} placeholder="Tell me about the problem, audience or outcome." /></label><label>Timeline (optional)<input value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })} placeholder="e.g. Exploring, this month" /></label><div className="form-actions"><button type="button" className="text-link" onClick={() => setStep(1)}>Back</button><button className="button primary">Review message <ArrowRight size={16} /></button></div></form>}{step === 3 && <div className="starter-panel review"><div className="review-icon"><MessageCircle /></div><p className="eyebrow">Ready for review</p><h2>Open WhatsApp with your brief?</h2><p>WhatsApp will open with a pre-filled message. You can edit it before sending.</p><div className="review-box"><b>{form.name}</b><span>{service}</span><p>{form.details}</p></div><div className="form-actions"><button className="text-link" onClick={() => setStep(2)}>Edit details</button><button className="button primary" onClick={submit}>Open WhatsApp <ExternalLink size={16} /></button></div></div>}</section></>; }

function Contact() { return <><PageHero kicker="Contact" title="The easiest way to reach me is a clear message." text="For project ideas, questions about a listed build or collaboration, use one of the official links below." /><section className="container contact-grid"><External href={LINKS.whatsapp} className="contact-link"><MessageCircle /><span><b>WhatsApp</b><small>Message @devpasqua_xr</small></span><ArrowRight /></External><External href={LINKS.github} className="contact-link"><Github /><span><b>GitHub</b><small>Follow the code and repositories</small></span><ArrowRight /></External><External href={LINKS.domain} className="contact-link"><Globe2 /><span><b>Official domain</b><small>pasquatech.com</small></span><ArrowRight /></External></section></>; }

function Community() { return <><PageHero kicker="Community" title="Stay close to the work." text="Follow the public places where PASQUA DEV projects are shared, tested and made available." /><section className="container community-grid"><External href={LINKS.channel} className="community-card"><MessageCircle /><span><b>WhatsApp Channel</b><small>Updates from PASQUA DEV</small></span><ArrowRight /></External><External href={LINKS.github} className="community-card"><Github /><span><b>GitHub</b><small>Open repositories and experiments</small></span><ArrowRight /></External><External href={LINKS.hinatu} className="community-card"><Send /><span><b>Hinatu</b><small>Open Telegram bot</small></span><ArrowRight /></External><External href={LINKS.lancy} className="community-card"><Send /><span><b>Lancyverse</b><small>Open Telegram bot</small></span><ArrowRight /></External></section></>; }

function AppRoutes() { return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/projects" component={Projects} /><Route path="/whatsapp-bots" component={() => <CategoryPage kind="WhatsApp bots" title="Bots that live where people already talk." text="SUKUNA_MD is the WhatsApp bot project in this portfolio. Visit its separate repository for the source and project details." items={[{ title: "SUKUNA_MD", desc: "A JavaScript WhatsApp bot for managing groups and building useful chat automation.", href: LINKS.sukuna, icon: <Bot /> }, { title: "PAIR_SITE", desc: "The separate pairing and deployment console connected to the bot workflow.", href: LINKS.pairA, icon: <Radio /> }]} />} /><Route path="/telegram-bots" component={() => <CategoryPage kind="Telegram bots" title="Small interfaces with a direct route to action." text="Open the supplied Telegram bot links and try the live entry points." items={[{ title: "Hinatu", desc: "Open the Hinatu Telegram bot.", href: LINKS.hinatu, icon: <Send /> }, { title: "Lancyverse", desc: "Open the Lancyverse Telegram bot.", href: LINKS.lancy, icon: <Send /> }]} />} /><Route path="/websites" component={() => <CategoryPage kind="Websites" title="Web experiences with their own front door." text="These live links belong to separate website projects. The portfolio is only the directory." items={[{ title: "PAIR_SITE / wmte", desc: "Live PASQUA MD pairing console.", href: LINKS.pairA, icon: <Radio /> }, { title: "PAIR_SITE / 91ob", desc: "Second live pairing-site endpoint.", href: LINKS.pairB, icon: <Radio /> }, { title: "Couple Theatre", desc: "Standalone live website project.", href: LINKS.couple, icon: <MonitorSmartphone /> }]} />} /><Route path="/apps" component={() => <CategoryPage kind="Apps / experiments" title="Experiments that keep the curiosity moving." text="A deliberately small list of projects and explorations that are public or explicitly linked." items={[{ title: "Pasqua Video Gen", desc: "Public HTML project for image-to-video AI generation.", href: LINKS.video, icon: <Sparkles /> }, { title: "PASQUA DEV portfolio", desc: "This standalone portfolio, built as a static React site.", href: "https://pasquatech.com", icon: <Layers3 /> }]} />} /><Route path="/technologies" component={Technologies} /><Route path="/services" component={Services} /><Route path="/start-project" component={StartProject} /><Route path="/contact" component={Contact} /><Route path="/community" component={Community} /><Route component={() => <PageHero kicker="404" title="This route is not built yet." text="Use the navigation to return to the project directory." />} /></Switch>; }

export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="dark"><Toaster /><Layout><AppRoutes /></Layout></ThemeProvider></ErrorBoundary>; }
