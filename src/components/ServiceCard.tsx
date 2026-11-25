import {
  FaWhatsapp,
  FaTelegramPlane,
  FaGlobe,
  FaLayerGroup,
  FaCode,
  FaMicrochip,
  FaPlug,
  FaBolt,
  FaBoxOpen,
} from "react-icons/fa";
import { Service } from "../data/services";
import { Link } from "../router/Router";
import Reveal from "./Reveal";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane,
  globe: FaGlobe,
  layout: FaLayerGroup,
  code: FaCode,
  cpu: FaMicrochip,
  plug: FaPlug,
  zap: FaBolt,
  box: FaBoxOpen,
};

export default function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const Icon = ICONS[service.icon] ?? FaCode;
  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div className="icon-badge">
          <Icon size={20} />
        </div>
        <h3 style={{ marginBottom: 10 }}>{service.title}</h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: 16 }}>
          {service.description}
        </p>
        <ul style={{ margin: "0 0 24px", padding: 0, listStyle: "none", flex: 1 }}>
          {service.details.map((d) => (
            <li
              key={d}
              style={{
                fontSize: "0.86rem",
                color: "var(--text-secondary)",
                padding: "7px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {d}
            </li>
          ))}
        </ul>
        <Link to="/start-project" className="btn btn--ghost btn--sm btn--full">
          Get Started
        </Link>
      </div>
    </Reveal>
  );
}
