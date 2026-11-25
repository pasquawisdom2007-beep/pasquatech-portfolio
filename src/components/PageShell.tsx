import { ReactNode, useEffect } from "react";

export default function PageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    document.title = `${title} — PASQUA DEV`;
  }, [title]);

  return <div className="page-enter">{children}</div>;
}
