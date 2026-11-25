import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { LINKS } from "../data/links";
import { FaWhatsapp } from "react-icons/fa";

export default function Community() {
  return (
    <PageShell title="Community">
      <section className="hero">
        <div className="ambient-glow" style={{ top: 80, left: "30%" }} />
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Community</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>Stay Connected. Stay Updated.</h1>
            <p className="lede" style={{ margin: "18px auto 0" }}>
              Follow my WhatsApp Channel for development updates, projects and announcements as
              they happen.
            </p>
            <div style={{ marginTop: 32 }}>
              <a href={LINKS.whatsappChannel} target="_blank" rel="noreferrer" className="btn btn--primary">
                <FaWhatsapp size={16} /> Follow My WhatsApp Channel
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
