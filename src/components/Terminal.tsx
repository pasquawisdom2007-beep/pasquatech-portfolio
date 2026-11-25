import { useEffect, useState } from "react";

const LINES = [
  "Initializing PASQUA DEV...",
  "Loading development environment...",
  "Exploring possibilities...",
  "Building digital experiences...",
  "System status: ONLINE.",
];

export default function Terminal() {
  const [shown, setShown] = useState<string[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(LINES);
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled || lineIndex >= LINES.length) return;
      const line = LINES[lineIndex];
      if (charIndex <= line.length) {
        setTyping(line.slice(0, charIndex));
        charIndex += 1;
        setTimeout(typeNext, 22);
      } else {
        setShown((prev) => [...prev, line]);
        setTyping("");
        lineIndex += 1;
        charIndex = 0;
        setTimeout(typeNext, 260);
      }
    };
    const start = setTimeout(typeNext, 400);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot" />
        <span className="terminal__dot" />
        <span className="terminal__dot" />
      </div>
      {shown.map((line, i) => (
        <div className="terminal__line" key={i}>
          {line}
        </div>
      ))}
      {typing && (
        <div className="terminal__line">
          {typing}
          <span className="terminal__cursor" />
        </div>
      )}
      {!typing && shown.length === LINES.length && (
        <div className="terminal__line">
          <span className="terminal__cursor" />
        </div>
      )}
    </div>
  );
}
