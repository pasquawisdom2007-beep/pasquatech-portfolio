import { useState } from "react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { categories, projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageShell title="Projects">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Portfolio</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>Projects</h1>
            <p className="lede" style={{ marginTop: 16 }}>
              A comprehensive look at what I've built — WhatsApp bots, Telegram bots, websites
              and web applications.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="filter-bar">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`filter-chip${filter === c ? " filter-chip--active" : ""}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid--3">
            {filtered.map((p, i) => (
              <ProjectCard project={p} delay={i * 70} key={p.id} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ color: "var(--text-secondary)" }}>No projects in this category yet.</p>
          )}
        </div>
      </section>
    </PageShell>
  );
}
