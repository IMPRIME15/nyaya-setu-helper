/**
 * Home Page – NyayaSetu
 * Introduction + Category Cards for legal guidance
 */
import { useNavigate } from "react-router-dom";
import { Shield, ArrowRight, Users, BookOpen, FileText } from "lucide-react";
import { legalCategories } from "@/data/legalData";

const stats = [
  { value: "5+", label: "Legal Categories", icon: BookOpen },
  { value: "24/7", label: "Guide Available", icon: Shield },
  { value: "Free", label: "Legal Aid Info", icon: Users },
  { value: "PDF", label: "Complaint Export", icon: FileText },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="hero-gradient text-primary-foreground py-20 px-4 relative overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-foreground" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary-foreground" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 border border-white/30 mb-6">
            🇮🇳 Empowering Every Indian Citizen
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
            Legal Help,{" "}
            <span className="text-accent bg-transparent">Simplified</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-white/85 max-w-2xl mx-auto leading-relaxed">
            NyayaSetu bridges the gap between complex legal procedures and common citizens.
            Know your rights, file complaints, and access justice — all in simple language.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/legal-guide")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-semibold shadow-lg hover:shadow-xl hover:bg-secondary transition-all duration-200"
            >
              Explore Legal Guides <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/complaint")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/60 text-white font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Generate Complaint Letter
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-card border-b border-border py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: "Poppins, sans-serif" }}>{value}</span>
              <span className="text-xs text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories Section ── */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Choose Your Legal Category
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Select the type of legal help you need. We'll guide you through every step in simple, clear language.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/legal-guide?category=${cat.id}`)}
              className="group text-left bg-card rounded-2xl border border-border p-6 card-hover cursor-pointer transition-all"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-md`}>
                  {cat.icon}
                </div>
                <span className="chip">⏱ {cat.estimatedTime}</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.shortDesc}</p>

              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Need to File a Complaint Right Now?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Use our Smart Complaint Generator to draft a professional complaint letter in minutes.
            Download it as a PDF and submit it to the right authority.
          </p>
          <button
            onClick={() => navigate("/complaint")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl hero-gradient text-primary-foreground font-semibold text-lg shadow-[var(--shadow-button)] hover:opacity-90 transition-opacity"
          >
            <FileText className="w-5 h-5" />
            Generate Complaint Letter
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-card border-t border-border py-8 px-4 text-center text-muted-foreground text-sm">
        <p>© 2024 NyayaSetu – Legal Help Simplifier | Built for every Indian citizen</p>
        <p className="mt-1 text-xs">
          Disclaimer: This platform provides legal information and guidance only. It is not a substitute for professional legal advice.
        </p>
      </footer>
    </main>
  );
};

export default Index;
