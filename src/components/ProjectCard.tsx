import { Project } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import StatusBadge from "./StatusBadge";
import Reveal from "./Reveal";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} as="div" style={{ height: "100%" }}>
      <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <div className="icon-badge" style={{ marginBottom: 0, fontWeight: 700, fontSize: "0.85rem" }}>
            {project.initials}
          </div>
          <StatusBadge status={project.status} />
        </div>

        <span className="badge" style={{ marginBottom: 12, width: "fit-content" }}>{project.category}</span>
        <h3 style={{ marginBottom: 10 }}>{project.name}</h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", flex: 1 }}>{project.description}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "18px 0" }}>
          {project.stack.map((s) => (
            <span className="tech-pill" key={s}>{s}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
              <FaGithub size={14} /> Repository
            </a>
          )}
          {project.secondaryUrl && (
            <a href={project.secondaryUrl.url} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
              <FaExternalLinkAlt size={12} /> {project.secondaryUrl.label}
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
