import { FaExternalLinkAlt } from "react-icons/fa";

export default function MockFrame({ label, url }: { label: string; url?: string }) {
  return (
    <div className="mockframe">
      <div className="mockframe__bar">
        <span /><span /><span />
      </div>
      <div className="mockframe__body">
        <div>
          <div style={{ fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{label}</div>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm" style={{ marginTop: 10 }}>
              <FaExternalLinkAlt size={11} /> Open live site
            </a>
          ) : (
            <span>Preview available on request</span>
          )}
        </div>
      </div>
    </div>
  );
}
