import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import MockFrame from "../components/MockFrame";
import { LINKS } from "../data/links";

export default function Websites() {
  return (
    <PageShell title="Websites & Web Applications">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Web Development</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>Websites & Web Applications</h1>
            <p className="lede" style={{ marginTop: 16 }}>
              Live websites and web applications I've designed and deployed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card">
              <span className="badge" style={{ width: "fit-content", marginBottom: 12 }}>Website</span>
              <h3 style={{ marginBottom: 10 }}>Pasqua MD Pairing</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
                A WhatsApp session pairing website that generates short session IDs. Deployed
                across two related endpoints — a primary and a secondary deployment.
              </p>
              <div className="grid grid--2">
                <MockFrame label="Primary deployment" url={LINKS.pairSitePrimary} />
                <MockFrame label="Secondary deployment" url={LINKS.pairSiteSecondary} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="card">
              <span className="badge" style={{ width: "fit-content", marginBottom: 12 }}>Web Application</span>
              <h3 style={{ marginBottom: 10 }}>Couple Theatre</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
                An entertainment-focused movie website, built as a standalone web application.
              </p>
              <MockFrame label="Couple Theatre" url={LINKS.coupleTheatre} />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
