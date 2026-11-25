import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type RouterCtx = {
  path: string;
  navigate: (to: string) => void;
};

const Ctx = createContext<RouterCtx | null>(null);

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

export function Router({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (to: string) => {
    const target = normalize(to);
    if (target === path) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    window.history.pushState({}, "", target);
    setPath(target);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const value = useMemo(() => ({ path, navigate }), [path]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useRouter() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useRouter must be used inside <Router>");
  return ctx;
}

export function useLocation() {
  return useRouter().path;
}

export function useNavigate() {
  return useRouter().navigate;
}

export function Link({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        onClick?.();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

export function Routes({ children }: { children: React.ReactNode }) {
  const { path } = useRouter();
  const kids = React.Children.toArray(children) as React.ReactElement<RouteProps>[];
  const match = kids.find((child) => normalize(child.props.path) === path);
  const fallback = kids.find((child) => child.props.path === "*");
  return <>{(match ?? fallback)?.props.element ?? null}</>;
}

type RouteProps = { path: string; element: React.ReactNode };
export function Route(_props: RouteProps) {
  return null;
}
