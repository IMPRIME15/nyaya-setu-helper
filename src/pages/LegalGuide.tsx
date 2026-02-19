/**
 * Legal Guide Page – NyayaSetu
 * Shows step-by-step guide, required documents, time estimate, and tips
 * for the selected legal category.
 */
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle2, Clock, FileText, Lightbulb, ArrowLeft, ChevronDown } from "lucide-react";
import { legalCategories, LegalCategory } from "@/data/legalData";

const LegalGuide = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<LegalCategory | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(0);

  useEffect(() => {
    const catId = searchParams.get("category");
    if (catId) {
      const found = legalCategories.find((c) => c.id === catId);
      setSelected(found || legalCategories[0]);
    } else {
      setSelected(null);
    }
  }, [searchParams]);

  // Category Selection Screen
  if (!selected) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Legal Guides</h1>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-4">Choose a category to view the step-by-step legal guide.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {legalCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/legal-guide?category=${cat.id}`)}
              className="group text-left bg-card rounded-2xl border border-border p-6 card-hover transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-4 shadow`}>
                {cat.icon}
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.shortDesc}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back */}
      <button
        onClick={() => navigate("/legal-guide")}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Categories
      </button>

      {/* Hero Banner for category */}
      <div className={`rounded-2xl bg-gradient-to-br ${selected.color} p-8 text-white mb-8 shadow-lg`}>
        <div className="flex items-start gap-4">
          <span className="text-4xl">{selected.icon}</span>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{selected.title}</h1>
            <p className="text-white/80 text-sm mb-3">{selected.shortDesc}</p>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>Estimated Time: <strong>{selected.estimatedTime}</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left – Steps */}
        <div className="md:col-span-2 space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Step-by-Step Process
          </h2>

          {selected.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl border border-border overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                className="w-full flex items-center gap-4 p-4 text-left"
                onClick={() => setOpenStep(openStep === idx ? null : idx)}
              >
                <span className="step-badge">{idx + 1}</span>
                <span className="font-medium text-foreground flex-1">{step.title}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform ${openStep === idx ? "rotate-180" : ""}`}
                />
              </button>
              {openStep === idx && (
                <div className="px-4 pb-4 pl-16">
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right – Sidebar */}
        <div className="space-y-5">
          {/* Documents Required */}
          <div className="bg-card rounded-2xl border border-border p-5">
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-primary" />
              Documents Required
            </h3>
            <ul className="space-y-2">
              {selected.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Tips */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-5">
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-accent" />
              Important Tips
            </h3>
            <ul className="space-y-2">
              {selected.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">💡</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Generate Complaint CTA */}
          <button
            onClick={() => navigate("/complaint")}
            className="w-full py-3 px-4 rounded-xl hero-gradient text-primary-foreground text-sm font-semibold shadow hover:opacity-90 transition"
          >
            📝 Generate Complaint Letter
          </button>
        </div>
      </div>

      {/* Category Switcher */}
      <div className="mt-10 border-t border-border pt-6">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Other Legal Guides</h3>
        <div className="flex flex-wrap gap-2">
          {legalCategories
            .filter((c) => c.id !== selected.id)
            .map((c) => (
              <button
                key={c.id}
                onClick={() => navigate(`/legal-guide?category=${c.id}`)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:border-primary hover:text-primary transition"
              >
                {c.icon} {c.title}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LegalGuide;
