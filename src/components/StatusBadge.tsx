import { ProjectStatus } from "../data/projects";

const LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In Progress",
  planned: "Planned",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="badge badge--muted">
      <span className={`status-dot status-dot--${status === "in-progress" ? "progress" : status}`} />
      {LABEL[status]}
    </span>
  );
}
