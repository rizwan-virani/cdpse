/* ============================================================================
   CDPSE  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the target objects the textbook-dense domain reading modules populate
   (CDPSE.reading[1..4], appended from the lazy-loaded content modules).

   This file loads first and establishes the global CDPSE namespace consumed
   by quizEngine.js, flashEngine.js, and app.js.

   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.CDPSE = window.CDPSE || {};

/* SINGLE SOURCE OF TRUTH for every exam figure. The dashboard cards, mock-exam
   engine, scoring, analytics, readiness projection, and history readouts all
   READ from this object — no exam figure is duplicated as a literal elsewhere.

   Like the CISA and CISM, the CDPSE is a FIXED-FORM, linear exam (not adaptive):
   120 multiple-choice questions in a single 3.5-hour appointment, scored on
   ISACA's 200–800 scale with 450 to pass. `itemsMin`/`itemsMax` are therefore
   equal, and `maxQuestions` (the full-length mock) matches the real exam length. */
CDPSE.exam = {
  code: "CDPSE",
  name: "CDPSE",
  fullName: "Certified Data Privacy Solutions Engineer",
  vendor: "ISACA",
  format: "Fixed form",          // 120 linear multiple-choice items (not adaptive)
  minutes: 210,                  // 3.5 hours
  itemsMin: 120, itemsMax: 120,
  itemsLabel: "120",
  maxQuestions: 120,             // full-length mock length = the real fixed length
  scaleLow: 200, scaleHigh: 800, passing: 450,
  domains: 4,
  launched: "2020",
  body: "ISACA"
};

/* Per-domain metadata. `objectives` mirror the official ISACA CDPSE Exam Content
   Outline (Effective 2025) at the subtopic level. `weight` is the official domain
   weight; `sectionCount` is the number of dense reading sections this platform
   authors for the domain (one per subtopic). */
CDPSE.domainMeta = [
  { id: 1, weight: 20, color: "d1", icon: "🏛", title: "Privacy Governance", sectionCount: 11,
    short: "The governance foundation of a privacy program: personal information and privacy principles (Privacy by Design), global privacy laws (GDPR, CCPA), documentation, and privacy operations.",
    objectives: [
      { id: "1A1", t: "Personal Information & Data Classification" },
      { id: "1A2", t: "Privacy Principles & Privacy by Design" },
      { id: "1A3", t: "Consent, Transparency & Lawful Basis" },
      { id: "1A4", t: "Global Privacy Laws I — GDPR & the EU Model" },
      { id: "1A5", t: "Global Privacy Laws II — US State & International Regimes" },
      { id: "1A6", t: "Privacy Documentation: Policies, Notices & Guidelines" },
      { id: "1B1", t: "Privacy Organization, Culture, Roles & the DPO" },
      { id: "1B2", t: "Vendor & Supply-Chain Privacy Management" },
      { id: "1B3", t: "Privacy Incident Management" },
      { id: "1B4", t: "Data-Subject Rights & Request Handling (DSAR)" },
      { id: "1B5", t: "Breach Notification & Regulatory Reporting" }
    ] },
  { id: 2, weight: 18, color: "d2", icon: "⚖", title: "Privacy Risk Management and Compliance", sectionCount: 10,
    short: "Identifying and treating privacy risk and proving compliance: the privacy risk process, PIA/DPIA assessments, privacy frameworks (NIST PF, ISO 27701), and program metrics.",
    objectives: [
      { id: "2A1", t: "Privacy Risk Management Process & Policies" },
      { id: "2A2", t: "Privacy Impact & Data Protection Assessments (PIA/DPIA)" },
      { id: "2A3", t: "Privacy Threats & Vulnerabilities" },
      { id: "2A4", t: "Privacy Risk Response & Treatment" },
      { id: "2A5", t: "Privacy Training & Awareness" },
      { id: "2B1", t: "Privacy Frameworks (NIST PF, ISO/IEC 27701)" },
      { id: "2B2", t: "Regulatory Compliance & Cross-Border Mechanisms" },
      { id: "2B3", t: "Evidence, Artifacts & the Record of Processing (RoPA)" },
      { id: "2B4", t: "Program Monitoring, Metrics & Auditing" },
      { id: "2B5", t: "Accountability & Demonstrating Compliance" }
    ] },
  { id: 3, weight: 23, color: "d3", icon: "🔄", title: "Data Life Cycle Management", sectionCount: 13,
    short: "Governing personal data across its life cycle: inventory and classification, dataflow mapping, quality, use limitation and minimization, retention, cross-border transfer, and destruction.",
    objectives: [
      { id: "3A1", t: "The Data Life Cycle & Data-Governance Model" },
      { id: "3A2", t: "Data Inventory & Mapping" },
      { id: "3A3", t: "Dataflow Diagrams & Data Classification" },
      { id: "3A4", t: "Data Quality & Accuracy" },
      { id: "3A5", t: "Purpose Limitation & Data Use Limitation" },
      { id: "3A6", t: "Data Analytics, Aggregation & AI/Warehousing" },
      { id: "3B1", t: "Data Minimization" },
      { id: "3B2", t: "Data Disclosure & Third-Party Sharing" },
      { id: "3B3", t: "Cross-Border Data Transfer" },
      { id: "3B4", t: "Data Storage & Security at Rest" },
      { id: "3B5", t: "Data Retention & Archiving" },
      { id: "3B6", t: "Data Destruction & Secure Disposal" },
      { id: "3B7", t: "Data Portability & Interoperability" }
    ] },
  { id: 4, weight: 39, color: "d4", icon: "🔐", title: "Privacy Engineering", sectionCount: 22,
    short: "The largest domain: building privacy into technology — infrastructure and cloud, the SDLC, identity and access, encryption, and privacy-enhancing technologies like anonymization.",
    objectives: [
      { id: "4A1", t: "Infrastructure & Platform Technology (Legacy & Cloud)" },
      { id: "4A2", t: "Cloud Computing & Shared-Responsibility Privacy" },
      { id: "4A3", t: "Devices & Endpoints" },
      { id: "4A4", t: "Connectivity & Network Privacy" },
      { id: "4A5", t: "Secure Development Life Cycle (SDLC) & PbD in Build" },
      { id: "4A6", t: "APIs & Cloud-Native Services" },
      { id: "4B1", t: "Asset Management" },
      { id: "4B2", t: "Identity & Access Management" },
      { id: "4B3", t: "Authentication, Authorization & Least Privilege" },
      { id: "4B4", t: "Patch Management & System Hardening" },
      { id: "4B5", t: "Communication & Transport Protocols (TLS)" },
      { id: "4B6", t: "Encryption & Key Management" },
      { id: "4B7", t: "Hashing, Tokenization & Data Masking" },
      { id: "4B8", t: "Monitoring, Logging & Auditing" },
      { id: "4C1", t: "Consent Management & Consent Tagging" },
      { id: "4C2", t: "Tracking Technologies & Cookie Management" },
      { id: "4C3", t: "Anonymization" },
      { id: "4C4", t: "Pseudonymization & De-identification" },
      { id: "4C5", t: "Privacy Enhancing Technologies (PETs)" },
      { id: "4C6", t: "Differential Privacy & Advanced PETs" },
      { id: "4C7", t: "AI / Machine-Learning Privacy Considerations" },
      { id: "4C8", t: "Privacy in Emerging Technologies (IoT, Biometrics, Blockchain)" }
    ] }
];

/* The four PBQ formats — one per domain. CDPSE has no simulations, so these are
   privacy-engineering decision scenarios (authentic to the exam's scenario
   items): each poses a described situation and asks for the BEST governance,
   risk/compliance, data-life-cycle, or privacy-engineering action, field by
   field. `domainColor` drives the badge tint. */
CDPSE.pbqFormats = [
  { id: 1, icon: "🏛", domainColor: 1, obj: "1A2 / 1A3 / 1B1 / 1B4", badge: "PRIVACY GOVERNANCE", title: "Establish the Privacy Governance Program",
    desc: "Work a governance scenario field by field — assign the privacy role, choose the correct privacy artifact, select the lawful basis, and handle the data-subject request the situation demands.",
    long: "You are the privacy solutions engineer standing up governance. For each item, assign the correct <b>privacy role and accountability</b> (data controller vs. processor, DPO, privacy office, business owner), choose the correct <b>privacy artifact</b> (privacy notice vs. internal policy vs. procedure vs. guideline), make the <b>lawful-basis / consent</b> decision that legitimizes the processing (consent, contract, legal obligation, legitimate interest), and select the right <b>data-subject-rights response</b> (access, rectification, erasure, portability, objection) the scenario requires." },
  { id: 2, icon: "⚖", domainColor: 2, obj: "2A2 / 2A3 / 2A4 / 2B1", badge: "RISK & COMPLIANCE", title: "Assess & Treat Privacy Risk",
    desc: "Run a privacy-risk scenario: scope the PIA/DPIA, identify the privacy threat, choose the correct risk response, and map the control to the governing framework.",
    long: "You own the privacy risk process. For each field, decide whether a <b>PIA/DPIA</b> is required and what it must cover, identify the specific <b>privacy threat or harm</b> (unauthorized processing, secondary use, re-identification, excessive collection), select the <b>privacy-risk response</b> the situation demands (mitigate, transfer, avoid, accept) against the organization's risk appetite, and map the chosen control to the correct <b>privacy framework</b> reference (NIST Privacy Framework, ISO/IEC 27701, GDPR article)." },
  { id: 3, icon: "🔄", domainColor: 3, obj: "3A3 / 3B1 / 3B3 / 3B6", badge: "DATA LIFE CYCLE", title: "Govern Data Across the Life Cycle",
    desc: "Manage a data-life-cycle scenario: classify the data, choose the minimization or retention action, decide the transfer mechanism, and select the correct destruction method.",
    long: "You govern personal data through its life cycle. For each item, correctly <b>classify the data</b> and place it on the dataflow, choose the right <b>collection/minimization or use-limitation</b> action, apply the correct <b>retention or cross-border-transfer</b> decision (Standard Contractual Clauses, adequacy, retention schedule), and select the appropriate <b>destruction or de-identification</b> method (crypto-shredding, secure erasure, anonymization) that satisfies the stated privacy requirement." },
  { id: 4, icon: "🔐", domainColor: 4, obj: "4B2 / 4B6 / 4C3 / 4C4", badge: "PRIVACY ENGINEERING", title: "Engineer the Privacy Controls",
    desc: "Direct a privacy-engineering scenario: select the technical control, choose between anonymization and pseudonymization, apply the encryption or access decision, and pick the right Privacy Enhancing Technology.",
    long: "You engineer the technical privacy controls. For each field, select the correct <b>security control that protects privacy</b> (IAM/least privilege, encryption in transit and at rest, key management, logging), choose correctly between <b>anonymization and pseudonymization / de-identification</b> for the stated purpose, apply the right <b>consent-management or tracking-technology</b> action (consent tagging, cookie management), and select the <b>Privacy Enhancing Technology (PET)</b> — tokenization, differential privacy, homomorphic encryption, data masking — that the requirement calls for." }
];

/* Curated free study resources. */
CDPSE.resources = [
  { icon: "📄", title: "Official ISACA CDPSE Exam Content Outline", host: "isaca.org",
    url: "https://www.isaca.org/credentialing/cdpse",
    desc: "The authoritative blueprint — every domain, sub-area, and subtopic ISACA can test, with the official domain weightings (Privacy Governance 20%, Privacy Risk Management & Compliance 18%, Data Life Cycle Management 23%, Privacy Engineering 39%). Use it as your master checklist." },
  { icon: "📘", title: "CDPSE Review Manual & QAE Database", host: "isaca.org",
    url: "https://www.isaca.org/credentialing/cdpse/cdpse-exam-preparation",
    desc: "The ISACA CDPSE Review Manual is the canonical text, and the official Questions, Answers & Explanations (QAE) database is the standard practice-question companion, both mapped to the four domains and the privacy-engineering perspective the exam rewards." },
  { icon: "📗", title: "NIST Privacy Framework & NIST SP 800-53 Privacy Controls", host: "nist.gov",
    url: "https://www.nist.gov/privacy-framework",
    desc: "The NIST Privacy Framework (Identify-P, Govern-P, Control-P, Communicate-P, Protect-P) and the privacy controls in NIST SP 800-53 are the reference model behind Domains 2 and 4 — risk management, privacy engineering, and the technical privacy controls." },
  { icon: "📚", title: "GDPR, ISO/IEC 27701 & the Global Privacy Laws", host: "gdpr-info.eu",
    url: "https://gdpr-info.eu/",
    desc: "When a legal or standards definition must be exact, go to the source: the full text of the GDPR (lawful bases, DPIA, data-subject rights, transfers), ISO/IEC 27701 (the privacy information management extension to 27001), plus CCPA/CPRA, LGPD, and PIPEDA reference material." },
  { icon: "🎥", title: "CDPSE Domain Walkthrough Videos (Hemang Doshi, others)", host: "youtube.com",
    url: "https://www.youtube.com/results?search_query=CDPSE+exam+domain+review",
    desc: "Free domain overviews and concept walkthroughs. Widely used community channels reinforce the privacy-engineering perspective — translating privacy law and principles into concrete technical controls across the data life cycle — the exam rewards." },
  { icon: "👥", title: "r/privacy & ISACA Community — Study Plans & “I Passed” Threads", host: "reddit.com",
    url: "https://www.reddit.com/r/ISACA/",
    desc: "Crowd-sourced study plans, exam-experience intel, and pass write-ups. Read recent posts for where candidates get stuck and how the CDPSE's technical privacy-engineering mindset differs from purely legal or audit-focused privacy exams." }
];

/* ---- Reader: Exam Mechanics card ---- */
CDPSE.examMechanics = [
  { heading: "Format: a fixed-form, 120-question exam", body:
    "<p>The <strong>ISACA CDPSE</strong> exam is a <strong>fixed-form, linear</strong> examination: <strong>120 multiple-choice questions</strong> delivered in a single <strong>3.5-hour (210-minute)</strong> appointment. Like the CISA and CISM and unlike the adaptive ISC2 exams, the CDPSE is <em>not</em> computer-adaptive — every candidate answers the same number of items, and you may <strong>move freely: skip, flag, and return</strong> to any question before you submit. A number of the 120 items are <strong>unscored pretest questions</strong> ISACA is trialing for future forms; you cannot tell them apart from scored items, so treat every question as if it counts.</p>" +
    "<p>Because you can navigate the whole form, budget your time and <strong>answer every question</strong> — there is <strong>no penalty for a wrong answer</strong>, so a blank is strictly worse than a guess. With 120 items in 210 minutes you have roughly <strong>1.75 minutes per question</strong>, plus time for a review pass over your flagged items.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>Make a first pass answering everything you know, <strong>flagging</strong> the hard ones, then return. Never leave an item blank — an educated guess on a narrowed-down item is free expected value.</div>" },
  { heading: "Scoring: the 200–800 scale and the 450 line", body:
    "<p>CDPSE is reported as a <strong>scaled score from 200 to 800</strong>, and the passing standard is <strong>450</strong>. A scaled score is a conversion of your raw score (number of scored items correct) onto a common scale so that different exam forms are comparable and fair — it is <em>not</em> a percentage. A <strong>800</strong> is a perfect score; <strong>200</strong> is the lowest possible; <strong>450</strong> is the minimum standard of knowledge required to pass.</p>" +
    "<p>Your score is based on the <strong>total number of scored items answered correctly, regardless of domain</strong>. ISACA reports <strong>domain-level results for information only</strong> — the domain percentages tell you how much of the exam draws on each domain, but they are not scored separately, and you do not need to “pass” each domain individually. You receive a preliminary pass/fail on screen, with the official scaled score by email within about 10 working days.</p>" +
    "<blockquote>This platform's mock exam reports a scaled score using a transparent linear approximation of the 200–800 band against the 450 line. Use it as a <em>relative</em> readiness signal — “am I consistently clearing 450 on full-length practice?” — not as a literal prediction of your official result.</blockquote>" },
  { heading: "Question style and the CDPSE mindset", body:
    "<p>CDPSE items are <strong>“best answer”</strong> questions written from the perspective of a <strong>data privacy solutions engineer</strong> — the technologist who turns privacy law, principles, and risk into concrete technical controls, not a lawyer and not an auditor. Frequently more than one option is technically defensible — your job is to choose the answer a privacy <em>engineer</em> would consider <em>best</em> given the requirement and the technology. Watch the qualifiers: <strong>MOST</strong>, <strong>BEST</strong>, <strong>FIRST</strong>, and <strong>GREATEST</strong> change the correct answer entirely.</p>" +
    "<ul><li><strong>Think like a privacy engineer.</strong> The exam rewards building privacy <em>into</em> systems — Privacy by Design and by Default, data minimization, the right control at the right layer — over pure legal analysis or after-the-fact audit.</li><li><strong>Principle before mechanism.</strong> The <em>best</em> answer usually enforces a privacy principle (minimize, limit purpose, de-identify) rather than merely adding a security control on top of over-collected data.</li><li><strong>Follow the correct order.</strong> Classify and inventory data before protecting it; run the PIA/DPIA before deploying; establish lawful basis before collecting; minimize before you retain.</li><li><strong>Anonymize vs. pseudonymize correctly.</strong> Know when irreversible anonymization (out of scope of privacy law) is required versus reversible pseudonymization (still personal data) — the exam probes this repeatedly.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>For every scenario, ask: <em>“What would a privacy engineer — accountable for building the requirement into the system — do or select FIRST here?”</em> That framing resolves most “two answers look right” situations.</div>" },
  { heading: "Eligibility, experience, and maintenance", body:
    "<p>To become certified you need <strong>three (3) or more years of professional experience</strong> in data privacy governance, privacy risk management and compliance, privacy engineering, and/or data life-cycle work covering the CDPSE domains. Unlike some ISACA credentials, CDPSE has <strong>no experience waivers or substitutions</strong>. You may <strong>take the exam first</strong> and then submit your experience — you have <strong>five years from passing</strong> to apply for certification, and the experience must have been earned within the ten years preceding the application.</p>" +
    "<p>The exam registration fee is <strong>US$575 for ISACA members</strong> and <strong>US$760 for non-members</strong>; certification then requires an application. Registration opens a <strong>six-month eligibility window</strong> from the date you register — you must schedule and sit the exam within those six months (a single six-month extension is available for US$75). Once certified, you maintain CDPSE with <strong>Continuing Professional Education (CPE)</strong> — a minimum of 20 hours annually and 120 over each three-year cycle — plus the annual maintenance fee and adherence to ISACA's <strong>Code of Professional Ethics</strong>.</p>" +
    "<div class='callout scenario'><div class='lbl'>Note</div>CDPSE is a <strong>technical privacy credential</strong> — ISACA positions it for professionals who implement privacy solutions, not only advise on them. It may be funded through your program — connect with the Program Director or your professor about voucher opportunities before you register.</div>" },
  { heading: "Exam-day logistics", body:
    "<p>The CDPSE is delivered at <strong>PSI test centers</strong> or as an <strong>online remotely proctored</strong> exam. For an in-person sitting, arrive at least <strong>30 minutes early</strong> with a current, valid, government-issued photo ID whose name matches your registration. For a remote sitting, complete the system compatibility check in advance and be ready for a <strong>360° room scan and desk/mirror check</strong> at check-in.</p>" +
    "<p>The exam is <strong>closed-book</strong>: no notes, phones, smartwatches, calculators, or reference materials, and your workspace must be clear. Two short breaks are permitted with proctor approval, but the <strong>timer does not stop</strong> during a break. You cannot take screenshots or photos of any part of the exam, including the results screen.</p>" +
    "<div class='callout exam'><div class='lbl'>Mindset</div>The CDPSE rewards <strong>engineering privacy into technology across the data life cycle</strong> — governance, risk and compliance, life-cycle management, and hands-on privacy engineering — not deep trivia in any one tool or statute. You are being certified as a privacy <em>solutions engineer</em>; answer every question from that altitude.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
CDPSE.careerGuidance = [
  { heading: "Where CDPSE sits on the ladder", body:
    "<p><strong>CDPSE (Certified Data Privacy Solutions Engineer) is ISACA's technical privacy credential — the certification for professionals who build and implement privacy solutions, not only advise on them.</strong> Launched by <strong>ISACA</strong> in 2020, it certifies that you can implement privacy by design; govern data across its life cycle; assess and treat privacy risk and demonstrate compliance; and engineer the technical privacy controls that make a program real. It is an <em>experience-based</em> credential aimed at practitioners who sit at the intersection of privacy, security, and IT — the people who turn a privacy requirement into a working control.</p>" +
    "<p>For hiring managers, CDPSE on a résumé is shorthand for “this person can translate privacy law and policy into technical reality.” It is increasingly <em>required</em> in privacy-engineering, data-protection, and technical-privacy postings, and it distinguishes a candidate who can implement controls from one who can only interpret regulations.</p>" },
  { heading: "Why a technical privacy credential matters", body:
    "<p>Organizations face a widening gap between the lawyers and privacy officers who <em>interpret</em> data-protection law and the engineers who must <em>implement</em> it in systems. Regulations like the GDPR and CPRA demand Privacy by Design and by Default, data minimization, records of processing, and the ability to honor data-subject rights at scale — all of which are engineering problems as much as legal ones. CDPSE certifies exactly that bridging layer: the ability to take a privacy obligation and realize it in architecture, controls, and the data life cycle.</p>" +
    "<p>The exam's deliberate <strong>engineer's perspective</strong> is the point: employers want someone who can build privacy into a data pipeline, choose anonymization versus pseudonymization correctly, scope a DPIA, and select the right Privacy Enhancing Technology — not simply someone who can quote a statute.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>CDPSE names the exact skill set technical-privacy roles hire for: <strong>engineering privacy solutions</strong> — implementing privacy by design, governing the data life cycle, and building the technical controls that satisfy privacy law.</div>" },
  { heading: "Roles CDPSE opens", body:
    "<p>CDPSE aligns with a cluster of technical-privacy and data-protection roles. Combined with experience it credibly qualifies you for:</p>" +
    "<ul>" +
    "<li><strong>Privacy Engineer / Privacy Solutions Engineer</strong> — designing and building privacy into systems and pipelines. The whole exam maps to this job.</li>" +
    "<li><strong>Data Protection Officer (DPO) / Privacy Program Manager</strong> — owning the privacy program, governance, and data-subject rights (Domains 1, 2).</li>" +
    "<li><strong>Privacy Analyst / Consultant</strong> — running PIAs/DPIAs, data mapping, and compliance evidence (Domains 2, 3).</li>" +
    "<li><strong>Data Governance / Data Life-Cycle Manager</strong> — governing collection, use, retention, transfer, and destruction of personal data (Domain 3).</li>" +
    "<li><strong>Security Engineer / Architect with a privacy focus</strong> — implementing IAM, encryption, de-identification, and PETs as privacy controls (Domain 4).</li>" +
    "</ul>" },
  { heading: "Building the path around CDPSE", body:
    "<p>CDPSE pairs naturally with a broader privacy, security, and governance career. A common trajectory: <em>a foundational security cert (Security+) → a privacy or security engineering role → CDPSE (technical privacy) → senior privacy-engineering, DPO, or privacy-architect roles</em>. Because CDPSE proves implementation skill, many professionals pair it with a legal/policy privacy credential (such as an IAPP CIPP/CIPM) for the regulatory side, with <strong>CISM</strong> or <strong>CISA</strong> for security management or audit depth, or with <strong>CCSP</strong> for cloud. CDPSE shares vocabulary and the CPE ecosystem with the other ISACA credentials.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>CDPSE is as much a <strong>build-it mindset</strong> credential as a knowledge one. Pair it with demonstrable experience — mapping a data flow, scoping a DPIA, implementing consent management, de-identifying a dataset, standing up a retention schedule — because the experience requirement and most technical-privacy interviews probe for real controls you have implemented, not just facts you have memorized.</div>" }
];

/* Reading content is NOT bundled here. Each domain's dense reading sections live
   in their own module under assets/js/content/domainN.js and are fetched on
   demand by app.js the first time a Domain Study card is opened. This object is
   the shared target those modules populate: CDPSE.reading[N] = [ ...sections ]. */
CDPSE.reading = CDPSE.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: CDPSE.flash[N] = [ ...cards ]. */
CDPSE.flash = CDPSE.flash || {};
