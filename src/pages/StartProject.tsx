import { useState } from "react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { buildWhatsAppLink } from "../data/links";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaGlobe,
  FaLayerGroup,
  FaMobileAlt,
  FaRobot,
  FaPlug,
  FaBolt,
  FaEllipsisH,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const OPTIONS = [
  { id: "whatsapp-bot", label: "I need a WhatsApp bot", icon: FaWhatsapp },
  { id: "telegram-bot", label: "I need a Telegram bot", icon: FaTelegramPlane },
  { id: "website", label: "I need a website", icon: FaGlobe },
  { id: "web-app", label: "I need a web application", icon: FaLayerGroup },
  { id: "mobile-app", label: "I need a mobile application", icon: FaMobileAlt },
  { id: "ai-assistant", label: "I need an AI assistant", icon: FaRobot },
  { id: "api-integration", label: "I need API integration", icon: FaPlug },
  { id: "automation", label: "I need custom automation", icon: FaBolt },
  { id: "other", label: "Something else", icon: FaEllipsisH },
];

type FormData = {
  name: string;
  what: string;
  description: string;
  budget: string;
  timeline: string;
};

const EMPTY_FORM: FormData = { name: "", what: "", description: "", budget: "", timeline: "" };

export default function StartProject() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const serviceLabel = OPTIONS.find((o) => o.id === service)?.label ?? "";

  const goToStep2 = () => {
    if (!service) return;
    setStep(2);
  };

  const validate = () => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) next.name = "Please tell me your name.";
    if (!form.what.trim()) next.what = "Let me know what you'd like built.";
    if (!form.description.trim()) next.description = "A short description helps me understand the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    const lines = [
      `Hi! I'd like to start a project.`,
      ``,
      `Service: ${serviceLabel}`,
      `Name: ${form.name}`,
      `What I want built: ${form.what}`,
      `Description: ${form.description}`,
    ];
    if (form.budget.trim()) lines.push(`Budget: ${form.budget}`);
    if (form.timeline.trim()) lines.push(`Timeline: ${form.timeline}`);
    const url = buildWhatsAppLink(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setStep(3);
  };

  const restart = () => {
    setStep(1);
    setService(null);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  return (
    <PageShell title="Start a Project">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Start a Project</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)" }}>What would you like us to build?</h1>
            <p className="lede" style={{ marginTop: 16 }}>
              Tell me what you're working on. Choose a service and let's turn your idea into
              something real.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="wizard">
            <div className="wizard__progress">
              {[1, 2, 3].map((n) => (
                <div key={n} className={`wizard__progress-bit${step >= n ? " wizard__progress-bit--done" : ""}`}>
                  <span />
                </div>
              ))}
            </div>

            {step === 1 && (
              <Reveal>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const selected = service === opt.id;
                    return (
                      <button
                        key={opt.id}
                        className={`option-card${selected ? " option-card--selected" : ""}`}
                        onClick={() => setService(opt.id)}
                      >
                        <span className="option-card__icon"><Icon size={16} /></span>
                        <span style={{ fontWeight: 600 }}>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="wizard__nav">
                  <span />
                  <button className="btn btn--primary" disabled={!service} onClick={goToStep2}>
                    Continue <FaArrowRight size={13} />
                  </button>
                </div>
              </Reveal>
            )}

            {step === 2 && (
              <Reveal>
                <div className="card">
                  <span className="badge" style={{ marginBottom: 20, width: "fit-content" }}>{serviceLabel}</span>

                  <div className="field">
                    <label>Your name</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Jordan"
                    />
                    {errors.name && <div className="field__error">{errors.name}</div>}
                  </div>

                  <div className="field">
                    <label>What do you want built?</label>
                    <input
                      value={form.what}
                      onChange={(e) => setForm({ ...form, what: e.target.value })}
                      placeholder="e.g. A WhatsApp bot for my community group"
                    />
                    {errors.what && <div className="field__error">{errors.what}</div>}
                  </div>

                  <div className="field">
                    <label>Short description</label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Tell me a bit more about the project..."
                    />
                    {errors.description && <div className="field__error">{errors.description}</div>}
                  </div>

                  <div className="field">
                    <label>Preferred budget (optional)</label>
                    <input
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      placeholder="e.g. ₦30,000 – ₦50,000"
                    />
                  </div>

                  <div className="field">
                    <label>Preferred timeline (optional)</label>
                    <input
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      placeholder="e.g. Within 2 weeks"
                    />
                  </div>
                </div>

                <div className="wizard__nav">
                  <button className="btn btn--ghost" onClick={() => setStep(1)}>
                    <FaArrowLeft size={13} /> Back
                  </button>
                  <button className="btn btn--primary" onClick={submit}>
                    Send via WhatsApp <FaWhatsapp size={15} />
                  </button>
                </div>
              </Reveal>
            )}

            {step === 3 && (
              <Reveal>
                <div className="card" style={{ textAlign: "center", padding: 48 }}>
                  <div className="icon-badge" style={{ margin: "0 auto 18px" }}>
                    <FaWhatsapp size={20} />
                  </div>
                  <h3 style={{ marginBottom: 12 }}>Almost there</h3>
                  <p className="lede" style={{ margin: "0 auto 24px" }}>
                    A WhatsApp tab should have opened with your message pre-filled. Review it and
                    hit send whenever you're ready — nothing was sent automatically.
                  </p>
                  <button className="btn btn--ghost" onClick={restart}>Start another request</button>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
