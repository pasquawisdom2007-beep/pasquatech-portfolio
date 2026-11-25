import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { Link } from "../router/Router";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  return (
    <PageShell title="Services">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Services</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>What I can build for you</h1>
            <p className="lede" style={{ marginTop: 16 }}>
              Hire me to build a bot, a website, an application or a custom software solution —
              scoped around what you actually need.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {services.map((s, i) => (
              <ServiceCard service={s} delay={i * 60} key={s.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Not sure which service fits?</h2>
              <p className="lede" style={{ margin: "14px auto 0" }}>
                Start the project wizard and tell me what you're working on.
              </p>
              <div className="cta-band__actions">
                <Link to="/start-project" className="btn btn--primary">
                  Start a Project <FaArrowRight size={13} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
