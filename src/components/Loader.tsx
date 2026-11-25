import { useEffect, useRef, useState } from "react";

const WORD = "PASQUA DEV";
const STATUS = [
  "Booting interface",
  "Loading modules",
  "Connecting bots",
  "Compiling experience",
  "Ready",
];
const MIN_MS = 2300; // minimum time the intro stays on screen
const SEEN_KEY = "pd-intro-seen";

type Phase = "loading" | "leaving" | "done";

export default function Loader() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seen =
    typeof window !== "undefined" && sessionStorage.getItem(SEEN_KEY) === "1";
  // Returning visitors in the same session get a much shorter intro.
  const duration = reduced ? 300 : seen ? 700 : MIN_MS;

  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);
  const pageLoaded = useRef(document.readyState === "complete");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("is-loading");

    const onLoad = () => (pageLoaded.current = true);
    if (!pageLoaded.current) window.addEventListener("load", onLoad);

    const start = performance.now();
    let raf = 0;
    let leaveTimer = 0;
    let doneTimer = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out curve; hold at 96% until the page has really finished loading
      const eased = 1 - Math.pow(1 - t, 3);
      const cap = pageLoaded.current ? 100 : 96;
      const value = Math.min(Math.round(eased * 100), cap);
      setProgress(value);

      if (value >= 100) {
        leaveTimer = window.setTimeout(() => {
          setPhase("leaving");
          document.documentElement.classList.remove("is-loading");
          document.documentElement.classList.add("is-revealed");
          doneTimer = window.setTimeout(() => {
            setPhase("done");
            document.body.style.overflow = "";
            sessionStorage.setItem(SEEN_KEY, "1");
          }, 900);
        }, 280);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // safety net: never trap the visitor behind the loader
    const failsafe = window.setTimeout(() => (pageLoaded.current = true), 5000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
      clearTimeout(failsafe);
      window.removeEventListener("load", onLoad);
      document.body.style.overflow = "";
    };
  }, [duration]);

  if (phase === "done") return null;

  const statusIndex = Math.min(
    Math.floor((progress / 100) * STATUS.length),
    STATUS.length - 1
  );

  return (
    <div
      className={`loader loader--${phase}`}
      role="status"
      aria-live="polite"
      aria-label="Loading PASQUA DEV"
    >
      <div className="loader__panel loader__panel--top" />
      <div className="loader__panel loader__panel--bottom" />
      <div className="loader__grid" aria-hidden="true" />
      <div className="loader__orb" aria-hidden="true" />

      <div className="loader__center">
        <div className="loader__mark" aria-hidden="true">
          <svg viewBox="0 0 120 120" width="112" height="112">
            <circle className="loader__ring loader__ring--outer" cx="60" cy="60" r="54" />
            <circle className="loader__ring loader__ring--inner" cx="60" cy="60" r="42" />
            <circle
              className="loader__ring loader__ring--progress"
              cx="60"
              cy="60"
              r="54"
              style={{ strokeDashoffset: 339.3 * (1 - progress / 100) }}
            />
          </svg>
          <span className="loader__mark-text">PD</span>
        </div>

        <div className="loader__word" aria-hidden="true">
          {WORD.split("").map((ch, i) => (
            <span key={i} style={{ animationDelay: `${0.25 + i * 0.06}s` }}>
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </div>

        <div className="loader__tag">Bots · Websites · Apps · Automation</div>

        <div className="loader__meter">
          <div className="loader__bar">
            <div className="loader__bar-fill" style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
          <div className="loader__meta">
            <span className="loader__status">
              <i className="loader__dot" />
              {STATUS[statusIndex]}
              <b className="loader__ellipsis" />
            </span>
            <span className="loader__pct">{String(progress).padStart(3, "0")}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
