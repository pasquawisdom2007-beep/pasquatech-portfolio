import PageShell from "../components/PageShell";
import { Link } from "../router/Router";

export default function NotFound() {
  return (
    <PageShell title="Page Not Found">
      <section className="hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h1>404</h1>
          <p className="lede" style={{ margin: "16px auto 28px" }}>
            That page doesn't exist.
          </p>
          <Link to="/" className="btn btn--primary">Back to Home</Link>
        </div>
      </section>
    </PageShell>
  );
}
