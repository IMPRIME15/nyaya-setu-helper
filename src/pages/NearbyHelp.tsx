/**
 * Nearby Help Page – NyayaSetu
 * Static demo data for legal aid offices, helplines, and cyber crime cells
 */
import { Phone, MapPin, Mail, Shield, Users, AlertTriangle } from "lucide-react";
import { nearbyHelpData } from "@/data/legalData";

const NearbyHelp = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Nearby Help & Helplines</h1>
        <div className="section-divider" />
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Find legal aid offices, emergency helpline numbers, and cyber crime cells near you across India.
        </p>
      </div>

      {/* Emergency Helplines */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
          <Phone className="w-6 h-6 text-primary" />
          Important Helpline Numbers
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyHelpData.helplines.map((h) => (
            <div
              key={h.number}
              className="bg-card rounded-2xl border border-border p-5 card-hover flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0 shadow">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{h.name}</p>
                <a
                  href={`tel:${h.number}`}
                  className="text-primary font-bold text-lg hover:underline"
                >
                  {h.number}
                </a>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Aid Offices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
          <Users className="w-6 h-6 text-primary" />
          Legal Aid Offices
        </h2>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {nearbyHelpData.legalAid.map((office, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row sm:items-center gap-3 p-5 ${
                idx !== nearbyHelpData.legalAid.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <span className="chip mt-0.5">{office.type}</span>
                  <p className="font-semibold text-foreground">{office.name}</p>
                </div>
                <div className="flex items-start gap-1.5 mt-2">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{office.address}</p>
                </div>
              </div>
              <a
                href={`tel:${office.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                {office.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Cyber Crime Cells */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
          <Shield className="w-6 h-6 text-primary" />
          Cyber Crime Police Stations
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyHelpData.cyberCells.map((cell) => (
            <div key={cell.city} className="bg-card rounded-2xl border border-border p-5 card-hover">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="font-bold text-foreground">{cell.city}</span>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">{cell.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a
                  href={`mailto:${cell.email}`}
                  className="text-xs text-primary hover:underline break-all"
                >
                  {cell.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Portals */}
      <section>
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
          <AlertTriangle className="w-6 h-6 text-accent" />
          Important Online Portals
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "National Cyber Crime Portal", url: "https://cybercrime.gov.in", desc: "File cyber crime complaints online including financial fraud." },
            { name: "RTI Online (Central Govt)", url: "https://rtionline.gov.in", desc: "File RTI applications to Central Government departments." },
            { name: "EDAAKHIL Consumer Portal", url: "https://edaakhil.nic.in", desc: "File consumer complaints online with Consumer Commissions." },
            { name: "National Consumer Helpline", url: "https://consumerhelpline.gov.in", desc: "Resolve consumer disputes through mediation and complaint." },
            { name: "NALSA Legal Services", url: "https://nalsa.gov.in", desc: "Free legal aid and services for eligible citizens." },
            { name: "Lok Adalat", url: "https://njdg.ecourts.gov.in", desc: "Alternative dispute resolution through Lok Adalats." },
          ].map((portal) => (
            <a
              key={portal.name}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl border border-border p-5 card-hover group"
            >
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{portal.name}</p>
              <p className="text-xs text-muted-foreground mb-3">{portal.desc}</p>
              <span className="text-xs text-primary font-medium">Visit Portal →</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NearbyHelp;
