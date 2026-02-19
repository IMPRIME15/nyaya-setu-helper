/**
 * Admin Panel – NyayaSetu
 * Basic admin panel to view complaint submissions and manage content.
 * Uses localStorage for demo persistence.
 */
import { useState, useEffect } from "react";
import { Trash2, PlusCircle, Eye, X, ShieldCheck } from "lucide-react";
import { legalCategories } from "@/data/legalData";

interface Submission {
  id: string;
  fullName: string;
  phone: string;
  complaintType: string;
  incidentDate: string;
  description: string;
  submittedAt: string;
}

interface ContentEntry {
  id: string;
  categoryId: string;
  tip: string;
  addedAt: string;
}

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<"submissions" | "content">("submissions");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [contentEntries, setContentEntries] = useState<ContentEntry[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  // New content form
  const [newTip, setNewTip] = useState("");
  const [newCatId, setNewCatId] = useState(legalCategories[0].id);
  const [addSuccess, setAddSuccess] = useState(false);

  // Load from localStorage on mount (simulated DB)
  useEffect(() => {
    const stored = localStorage.getItem("nyayasetu_submissions");
    if (stored) setSubmissions(JSON.parse(stored));
    const storedContent = localStorage.getItem("nyayasetu_content");
    if (storedContent) setContentEntries(JSON.parse(storedContent));
    else {
      // Demo seed data
      const seedSubmissions: Submission[] = [
        {
          id: "s1",
          fullName: "Priya Sharma",
          phone: "9876543210",
          complaintType: "Consumer Complaint",
          incidentDate: "2024-01-15",
          description: "I purchased a refrigerator from XYZ Electronics on 10th January 2024 worth ₹45,000. The product stopped working within 5 days of purchase. The seller is refusing to replace or refund the product despite multiple requests.",
          submittedAt: "2024-01-16T10:30:00",
        },
        {
          id: "s2",
          fullName: "Arun Kumar",
          phone: "8765432109",
          complaintType: "Cyber Crime / Online Fraud",
          incidentDate: "2024-01-20",
          description: "I received a call from someone posing as a bank official. They asked for my OTP and within minutes ₹50,000 was debited from my account. I have the transaction ID and call recording as evidence.",
          submittedAt: "2024-01-20T14:15:00",
        },
        {
          id: "s3",
          fullName: "Meena Devi",
          phone: "7654321098",
          complaintType: "Tenant-Landlord Dispute",
          incidentDate: "2024-02-01",
          description: "My landlord has refused to return my security deposit of ₹60,000 even after 45 days of vacating the property. I have receipts for all rent payments and the property was handed in excellent condition.",
          submittedAt: "2024-02-03T09:00:00",
        },
      ];
      localStorage.setItem("nyayasetu_submissions", JSON.stringify(seedSubmissions));
      setSubmissions(seedSubmissions);
    }
  }, []);

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter((s) => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem("nyayasetu_submissions", JSON.stringify(updated));
    if (selectedSubmission?.id === id) setSelectedSubmission(null);
  };

  const addContentTip = () => {
    if (!newTip.trim()) return;
    const entry: ContentEntry = {
      id: Date.now().toString(),
      categoryId: newCatId,
      tip: newTip.trim(),
      addedAt: new Date().toISOString(),
    };
    const updated = [...contentEntries, entry];
    setContentEntries(updated);
    localStorage.setItem("nyayasetu_content", JSON.stringify(updated));
    setNewTip("");
    setAddSuccess(true);
    setTimeout(() => setAddSuccess(false), 3000);
  };

  const deleteContent = (id: string) => {
    const updated = contentEntries.filter((c) => c.id !== id);
    setContentEntries(updated);
    localStorage.setItem("nyayasetu_content", JSON.stringify(updated));
  };

  const tabs = [
    { key: "submissions" as const, label: "Complaint Submissions", count: submissions.length },
    { key: "content" as const, label: "Manage Content", count: contentEntries.length },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
          <p className="text-sm text-muted-foreground">Manage complaints and legal guide content</p>
        </div>
        <span className="ml-auto chip">Demo Mode</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors -mb-px ${
              activeTab === tab.key
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === tab.key ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Submissions Tab */}
      {activeTab === "submissions" && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* List */}
          <div className="space-y-3">
            {submissions.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground bg-card rounded-2xl border border-border">
                No submissions yet.
              </div>
            ) : (
              submissions.map((s) => (
                <div
                  key={s.id}
                  className={`bg-card rounded-xl border p-4 cursor-pointer transition-all ${
                    selectedSubmission?.id === s.id ? "border-primary shadow-md" : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedSubmission(s)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-foreground">{s.fullName}</p>
                      <span className="chip text-xs mt-1">{s.complaintType}</span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteSubmission(s.id); }}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Incident: {new Date(s.incidentDate).toLocaleDateString("en-IN")} &nbsp;|&nbsp;
                    Submitted: {new Date(s.submittedAt).toLocaleDateString("en-IN")}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 truncate">{s.description}</p>
                </div>
              ))
            )}
          </div>

          {/* Detail Panel */}
          <div>
            {selectedSubmission ? (
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    Submission Detail
                  </h3>
                  <button onClick={() => setSelectedSubmission(null)} className="p-1 text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3 text-sm">
                  {[
                    ["Full Name", selectedSubmission.fullName],
                    ["Phone", selectedSubmission.phone],
                    ["Complaint Type", selectedSubmission.complaintType],
                    ["Incident Date", new Date(selectedSubmission.incidentDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })],
                    ["Submitted On", new Date(selectedSubmission.submittedAt).toLocaleString("en-IN")],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground font-medium">{label}</span>
                      <span className="text-foreground text-right">{value}</span>
                    </div>
                  ))}
                  <div>
                    <p className="text-muted-foreground font-medium mb-1">Description</p>
                    <p className="text-foreground bg-muted rounded-lg p-3 text-xs leading-relaxed">
                      {selectedSubmission.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => deleteSubmission(selectedSubmission.id)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/10 text-destructive text-sm font-medium hover:bg-destructive/20 transition"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Submission
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 bg-card rounded-2xl border border-border text-muted-foreground">
                <Eye className="w-10 h-10 mb-3 opacity-20" />
                <p className="text-sm">Click a submission to view details</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content Tab */}
      {activeTab === "content" && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Add tip form */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
              <PlusCircle className="w-5 h-5 text-primary" />
              Add Legal Tip / Content
            </h3>

            {addSuccess && (
              <div className="mb-4 p-3 bg-success/10 border border-success/30 rounded-lg text-success text-sm">
                ✅ Tip added successfully!
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                <select
                  value={newCatId}
                  onChange={(e) => setNewCatId(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {legalCategories.map((c) => (
                    <option key={c.id} value={c.id}>{c.icon} {c.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">New Tip / Information</label>
                <textarea
                  value={newTip}
                  onChange={(e) => setNewTip(e.target.value)}
                  placeholder="Enter a helpful legal tip or important information..."
                  rows={4}
                  className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                onClick={addContentTip}
                disabled={!newTip.trim()}
                className="w-full py-2.5 rounded-xl hero-gradient text-primary-foreground font-semibold disabled:opacity-50 transition hover:opacity-90"
              >
                Add Content
              </button>
            </div>
          </div>

          {/* Existing content */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Added Content ({contentEntries.length})</h3>
            {contentEntries.length === 0 ? (
              <div className="text-center py-16 bg-card rounded-2xl border border-border text-muted-foreground text-sm">
                No custom content added yet.
              </div>
            ) : (
              <div className="space-y-3">
                {contentEntries.map((entry) => {
                  const cat = legalCategories.find((c) => c.id === entry.categoryId);
                  return (
                    <div key={entry.id} className="bg-card rounded-xl border border-border p-4">
                      <div className="flex items-start justify-between gap-2">
                        <span className="chip">{cat?.icon} {cat?.title}</span>
                        <button
                          onClick={() => deleteContent(entry.id)}
                          className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-foreground mt-2">{entry.tip}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Added: {new Date(entry.addedAt).toLocaleDateString("en-IN")}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
