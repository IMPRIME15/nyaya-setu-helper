/**
 * legalData.ts
 * Static data for legal guides, nearby help, and categories.
 * This serves as the content database for NyayaSetu.
 */

export interface LegalCategory {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  color: string;
  steps: Step[];
  documents: string[];
  estimatedTime: string;
  tips: string[];
}

export interface Step {
  title: string;
  description: string;
}

export const legalCategories: LegalCategory[] = [
  {
    id: "fir",
    title: "Police Complaint (FIR Guide)",
    icon: "🚔",
    shortDesc: "Learn how to file a First Information Report (FIR) with the police easily.",
    color: "from-blue-500 to-blue-700",
    estimatedTime: "1–3 days",
    steps: [
      {
        title: "Visit the nearest Police Station",
        description: "Go to the police station that has jurisdiction over the area where the crime happened. You can also file online at many state police portals.",
      },
      {
        title: "Write your complaint",
        description: "Write down what happened clearly — who, what, when, where. Include names, dates, and any witnesses. You can use our Complaint Generator to draft this.",
      },
      {
        title: "Submit the complaint to the officer in-charge",
        description: "The Station House Officer (SHO) must register your FIR. It is mandatory under Section 154 CrPC. They cannot refuse to register an FIR for a cognizable offence.",
      },
      {
        title: "Get a signed copy of the FIR",
        description: "After registration, you are entitled to a free copy of the FIR. Keep this safely — it has a unique FIR number.",
      },
      {
        title: "If Police refuses, approach the SP or file online",
        description: "If the SHO refuses to register the FIR, you can send your complaint by post to the Superintendent of Police or file it with the Judicial Magistrate directly.",
      },
    ],
    documents: [
      "Written complaint (in local language or English)",
      "Photo ID proof (Aadhaar, Voter ID, PAN)",
      "Any supporting evidence (photos, screenshots, witnesses)",
      "Medical report (if physical assault)",
    ],
    tips: [
      "Keep the tone factual — avoid emotional language.",
      "FIR filing for cognizable offences (murder, theft, rape, etc.) is FREE and MANDATORY.",
      "You can file FIR online via the state police portal in most states.",
      "If unhappy with police, you can contact Human Rights Commission or approach the court.",
    ],
  },
  {
    id: "consumer",
    title: "Consumer Complaint",
    icon: "🛒",
    shortDesc: "Know your rights as a consumer and file complaints against defective products or services.",
    color: "from-green-500 to-green-700",
    estimatedTime: "30–90 days",
    steps: [
      {
        title: "Identify the type of complaint",
        description: "Determine if it is a defective product, deficient service, unfair trade practice, or overcharging (beyond MRP).",
      },
      {
        title: "Send a written notice to the seller/company",
        description: "Send a legal notice giving them 15–30 days to resolve your issue. Keep a copy of this notice.",
      },
      {
        title: "File complaint on the National Consumer Helpline",
        description: "Go to consumerhelpline.gov.in or call 1800-11-4000 (toll-free). You can also file on the EDAAKHIL portal online.",
      },
      {
        title: "Select the right Consumer Forum",
        description: "District Forum: Claims up to ₹1 crore. State Commission: ₹1–10 crore. National Commission: Above ₹10 crore.",
      },
      {
        title: "Submit your complaint with evidence",
        description: "File your complaint with all bills, receipts, and communication records. Pay the nominal court fee and submit.",
      },
    ],
    documents: [
      "Bill/Invoice/Receipt",
      "Warranty card (if applicable)",
      "Communication records (emails, messages) with seller",
      "Photos of defective product",
      "Medical bills (if product caused harm)",
      "Legal notice copy sent to seller",
    ],
    tips: [
      "You can file for free on EDAAKHIL portal (edaakhil.nic.in).",
      "No lawyer is needed for claims below ₹5 lakh.",
      "You have 2 years from the date of the issue to file.",
      "Call NCH helpline 1800-11-4000 for free guidance.",
    ],
  },
  {
    id: "cyber",
    title: "Online Fraud / Cyber Crime",
    icon: "💻",
    shortDesc: "Report online fraud, UPI scams, social media harassment, and cyber crimes.",
    color: "from-purple-500 to-purple-700",
    estimatedTime: "3–7 days",
    steps: [
      {
        title: "Immediately block the fraud number/account",
        description: "Block the fraudulent number or account. Contact your bank immediately to freeze the transaction if money was lost.",
      },
      {
        title: "File complaint on cybercrime.gov.in",
        description: "Visit the National Cyber Crime Reporting Portal at cybercrime.gov.in. You can file anonymously for sensitive cases.",
      },
      {
        title: "Call Helpline 1930",
        description: "Dial 1930 (Cyber Crime Helpline) immediately for financial fraud. Time is critical for reversing fraudulent transactions.",
      },
      {
        title: "Visit nearest Cyber Crime Cell",
        description: "Most district police stations have a cyber crime cell. Visit with all evidence — screenshots, transaction IDs, etc.",
      },
      {
        title: "File FIR if required",
        description: "For serious offences (identity theft, hacking, child pornography, etc.), file an FIR at the local police station.",
      },
    ],
    documents: [
      "Screenshots of fraud messages/calls/transactions",
      "Bank transaction IDs and statements",
      "Email headers (for email fraud)",
      "URLs of fake websites",
      "Photo ID (Aadhaar/Voter ID)",
    ],
    tips: [
      "Act FAST — call 1930 within hours of financial fraud for best recovery chances.",
      "Do NOT share OTPs, passwords, or Aadhaar with anyone.",
      "cybercrime.gov.in allows anonymous reporting.",
      "Take screenshots immediately as evidence before accounts get deleted.",
    ],
  },
  {
    id: "tenant",
    title: "Tenant/Landlord Dispute",
    icon: "🏠",
    shortDesc: "Resolve property disputes, illegal eviction, deposit issues between tenants and landlords.",
    color: "from-orange-500 to-orange-700",
    estimatedTime: "15–90 days",
    steps: [
      {
        title: "Review your Rent Agreement",
        description: "Read your rent agreement carefully. Understand the notice period, deposit return terms, and eviction clauses.",
      },
      {
        title: "Send a written notice",
        description: "Send a formal written notice to the landlord about your grievance (non-refund of deposit, illegal eviction, lack of maintenance, etc.).",
      },
      {
        title: "Approach Rent Control Authority",
        description: "Visit the Rent Control Officer in your city. States like Maharashtra, Delhi, Karnataka have specific Rent Control Acts.",
      },
      {
        title: "File a complaint with Rent Tribunal",
        description: "If the landlord doesn't respond, file a case at the Rent Tribunal / Civil Court depending on the amount and your state laws.",
      },
      {
        title: "Seek Legal Aid if needed",
        description: "Free legal help is available at District Legal Services Authority (DLSA). Contact NALSA (1516) for free legal aid.",
      },
    ],
    documents: [
      "Signed rent agreement",
      "Deposit receipts",
      "Rent payment receipts",
      "Written communication with landlord",
      "Photographs of property condition",
      "Utility bills (to prove residence)",
    ],
    tips: [
      "A registered rent agreement provides stronger legal protection.",
      "Landlord cannot cut electricity or water supply to evict you — that's illegal.",
      "Security deposit refund must happen within the agreed period (usually 30–60 days).",
      "Call NALSA helpline 1516 for free legal advice.",
    ],
  },
  {
    id: "rti",
    title: "RTI Filing Guide",
    icon: "📋",
    shortDesc: "Use the Right to Information Act to get information from any government office.",
    color: "from-teal-500 to-teal-700",
    estimatedTime: "30 days (mandatory response)",
    steps: [
      {
        title: "Identify the Public Authority",
        description: "Determine which government department or office has the information you need. RTI applies to all central and state government departments.",
      },
      {
        title: "Write your RTI Application",
        description: "Write a simple letter in English or local language addressed to the Public Information Officer (PIO) of that department. Be specific about what information you want.",
      },
      {
        title: "Pay the RTI Fee",
        description: "Pay ₹10 fee by Demand Draft, Postal Order, or cash (for central govt). For state govts, fee varies (usually ₹10–₹50). BPL card holders are exempt.",
      },
      {
        title: "Submit by post or online",
        description: "For Central Government: rtionline.gov.in. For state governments, check your state RTI portal. Or post to the PIO of the department.",
      },
      {
        title: "Wait for response (30 days)",
        description: "The PIO must reply within 30 days. For life/liberty matters, it is 48 hours. If no reply, file First Appeal within 30 days of deadline.",
      },
    ],
    documents: [
      "RTI Application (written or typed)",
      "₹10 fee (Postal Order / DD / cash)",
      "BPL certificate (if applicable, for fee exemption)",
      "ID proof (for some departments)",
    ],
    tips: [
      "Be very specific in your questions — vague RTIs get vague answers.",
      "You do NOT need to give reasons for asking information.",
      "If reply is unsatisfactory, file First Appeal → Second Appeal → CIC/SIC.",
      "Use rtionline.gov.in for Central Government RTIs — it's free above ₹10 fee.",
    ],
  },
];

// Nearby help static data
export const nearbyHelpData = {
  legalAid: [
    {
      name: "Supreme Court Legal Services Committee",
      address: "Tilak Marg, New Delhi - 110001",
      phone: "011-23388922",
      type: "Legal Aid",
    },
    {
      name: "Delhi State Legal Services Authority",
      address: "Patiala House Courts, New Delhi",
      phone: "011-23385129",
      type: "Legal Aid",
    },
    {
      name: "NALSA (National Legal Services Authority)",
      address: "12/11, Jam Nagar House, Shahjahan Road, New Delhi",
      phone: "1516",
      type: "Legal Aid",
    },
    {
      name: "Maharashtra State Legal Services Authority",
      address: "High Court Extension Building, Mumbai",
      phone: "022-22621230",
      type: "Legal Aid",
    },
    {
      name: "Karnataka State Legal Services Authority",
      address: "High Court Building, Bengaluru",
      phone: "080-22114803",
      type: "Legal Aid",
    },
  ],
  helplines: [
    { name: "Police Emergency", number: "100", description: "For immediate police assistance anywhere in India" },
    { name: "Women Helpline", number: "1091", description: "For women in distress, domestic abuse, harassment" },
    { name: "Child Helpline", number: "1098", description: "For children in need of care and protection" },
    { name: "Senior Citizen Helpline", number: "14567", description: "For elderly citizens facing abuse or neglect" },
    { name: "NALSA Legal Aid", number: "1516", description: "Free legal advice for all citizens" },
    { name: "National Consumer Helpline", number: "1800-11-4000", description: "Consumer complaints and guidance (toll-free)" },
    { name: "Cyber Crime Helpline", number: "1930", description: "Report online fraud and cyber crimes immediately" },
    { name: "Domestic Violence", number: "181", description: "Mahila helpline for domestic violence and abuse" },
    { name: "Anti-Corruption Helpline", number: "1031", description: "Report government corruption and bribery" },
    { name: "Human Rights Commission", number: "14433", description: "National Human Rights Commission helpline" },
  ],
  cyberCells: [
    { city: "New Delhi", address: "Mandir Marg Police Station, New Delhi", email: "cybercell-dl@nic.in" },
    { city: "Mumbai", address: "Cyber Crime Investigation Cell, CST Road, Santacruz, Mumbai", email: "cybercrime@mahapolice.gov.in" },
    { city: "Bengaluru", address: "Cyber Crime Police Station, CID Headquarters, Bengaluru", email: "cybercrime@ksp.gov.in" },
    { city: "Chennai", address: "Cyber Crime Cell, Police Commissioner Office, Chennai", email: "cybercrime.tn@nic.in" },
    { city: "Hyderabad", address: "Cyber Crime Cell, Police Commissioner Office, Hyderabad", email: "cybercrime@tspolice.gov.in" },
    { city: "Kolkata", address: "Cyber Crime Cell, Lalbazar, Kolkata", email: "cybercrime@kpf.gov.in" },
  ],
};
