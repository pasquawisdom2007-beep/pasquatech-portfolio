import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { techGroups } from "../data/tech";

export default function Technologies() {
  return (
    <PageShell title="Technologies & Skills">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Expertise</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>Technologies & Skills</h1>
            <p className="lede" style={{ marginTop: 16 }}>
              The languages, frameworks and tools behind my projects — and the ones I'm still
              exploring.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {techGroups.map((group, i) => (
              <Reveal key={group.category} delay={i * 60}>
                <div className="card">
                  <h3 style={{ marginBottom: 16 }}>{group.category}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {group.items.map((item) => (
                      <span className="tech-pill" key={item.name}>
                        {item.name}
                        {item.note && <em style={{ opacity: 0.6, marginLeft: 6, fontStyle: "normal" }}>· {item.note}</em>}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
