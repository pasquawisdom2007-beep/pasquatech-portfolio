import { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
}) {
  const { ref, className } = useReveal();
  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
