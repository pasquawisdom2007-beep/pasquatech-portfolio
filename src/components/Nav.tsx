import { useEffect, useState } from "react";
import { Link, useLocation } from "../router/Router";
import { topNav, drawerNav } from "../data/nav";

export default function Nav() {
  const path = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [path]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-mark">PD</span>
          PASQUA DEV
        </Link>

        <nav className="nav__links">
          {topNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav__link${path === item.to ? " nav__link--active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/start-project" className="btn btn--primary btn--sm nav__cta">
          Let's Talk
        </Link>

        <button
          className={`nav__burger${open ? " nav__burger--open" : ""}`}
          onClick={toggle}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>

    <div className={`nav__drawer${open ? " nav__drawer--open" : ""}`}>
      {drawerNav.map((section, i) => (
        <div key={i}>
          {section.group && <div className="nav__group-label">{section.group}</div>}
          {section.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav__drawer-link${path === link.to ? " nav__drawer-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
      <Link to="/start-project" className="btn btn--primary btn--full">
        Let's Talk
      </Link>
    </div>
    </>
  );
}
