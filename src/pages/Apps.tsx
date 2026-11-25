import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { Link } from "../router/Router";

export default function Apps() {
  return (
    <PageShell title="Apps & Experiments">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Experimental</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>Apps & Experimental Projects</h1>
            <p className="lede" style={{ marginTop: 16 }}>
              A dedicated space for applications, tools, AI experiments and automation projects
              as they're built. This page grows as new software ships.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card" style={{ textAlign: "center", padding: 56 }}>
              <h3 style={{ marginBottom: 12 }}>Nothing here yet</h3>
              <p className="lede" style={{ margin: "0 auto 24px" }}>
                No experimental apps are published here at the moment. In the meantime, explore
                the bots and websites already live.
              </p>
              <Link to="/projects" className="btn btn--ghost">View Current Projects</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
