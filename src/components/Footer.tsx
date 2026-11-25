import { Link } from "../router/Router";
import { LINKS } from "../data/links";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="nav__logo" style={{ marginBottom: 14 }}>
              <span className="nav__logo-mark">PD</span>
              PASQUA DEV
            </div>
            <p className="lede" style={{ fontSize: "0.95rem" }}>
              Building digital experiences, one idea at a time.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Navigate</div>
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/about" className="footer__link">About</Link>
            <Link to="/technologies" className="footer__link">Technologies</Link>
            <Link to="/services" className="footer__link">Services</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>

          <div>
            <div className="footer__col-title">Projects</div>
            <Link to="/whatsapp-bots" className="footer__link">WhatsApp Bots</Link>
            <Link to="/telegram-bots" className="footer__link">Telegram Bots</Link>
            <Link to="/websites" className="footer__link">Websites & Web Apps</Link>
            <Link to="/apps" className="footer__link">Apps & Experiments</Link>
          </div>

          <div>
            <div className="footer__col-title">Connect</div>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="footer__link">
              <FaGithub style={{ marginRight: 8, verticalAlign: "-2px" }} />GitHub
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="footer__link">
              <FaWhatsapp style={{ marginRight: 8, verticalAlign: "-2px" }} />WhatsApp
            </a>
            <Link to="/community" className="footer__link">WhatsApp Channel</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>PASQUA DEV © 2026</span>
          <span>Built with React, hand-crafted CSS & care.</span>
        </div>
      </div>
    </footer>
  );
}
