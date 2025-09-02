// src/components/Faqs.jsx
import React, { useState, useMemo } from "react";
import "./Faqs.css";

const FAQ_ITEMS = [
  {
    q: "How does the orthopaedic second opinion process work?",
    a: "You share your medical records (X-rays, MRI, prescriptions). We connect you with a verified orthopaedic specialist who reviews your case and provides an expert opinion with recommended treatment options."
  },
  {
    q: "Which orthopaedic conditions do you cover?",
    a: "We cover a wide range of orthopaedic specialties including spine, joint replacement, trauma, sports medicine, and pediatric orthopaedics."
  },
  {
    q: "How much does an orthopaedic second opinion cost?",
    a: "Our pricing is affordable and transparent. Costs may vary based on the complexity of your case, but you will always know the charges before confirming."
  },
  {
    q: "How do I share my medical records?",
    a: "Reports, X-rays, and MRIs can be uploaded securely via our portal or shared through email after booking. We accept PDFs, images, and DICOM formats."
  },
  {
    q: "How quickly will I receive my second opinion?",
    a: "Most cases are reviewed within 3–7 working days. Urgent cases are prioritized and may be completed faster depending on specialist availability."
  },
  {
    q: "Do you provide guidance on surgery alternatives?",
    a: "Yes. Many patients come to us to avoid unnecessary surgery. Our specialists provide alternative treatment options wherever possible."
  },
  {
    q: "Are your specialists verified?",
    a: "Yes. All specialists are board-certified orthopaedic doctors with an average of 15+ years of experience across leading hospitals in India."
  },
  {
    q: "Can patients from Tier-2 and Tier-3 towns access your service?",
    a: "Absolutely. Our platform is designed to provide accessible orthopaedic consultations to patients across India, not just metro cities."
  },
  {
    q: "Do you have partnerships with hospitals and insurers?",
    a: "Yes, we collaborate with hospitals, insurers, corporates, and NGOs to make orthopaedic consultations widely accessible and affordable."
  },
  {
    q: "What are the benefits of getting an orthopaedic second opinion?",
    a: "A second opinion can confirm or modify your diagnosis, prevent unnecessary surgery, provide confidence in your treatment plan, and save costs."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_ITEMS;
    return FAQ_ITEMS.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="faq-inner">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-sub">
          Find answers to common questions about our orthopaedic second opinion services.
        </p>

        <div className="faq-search-wrap" role="search">
          <label htmlFor="faq-search" className="visually-hidden">Search FAQs</label>
          <div className="faq-search">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false">
              <path d="M21 21l-4.35-4.35" stroke="#9aaab5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="11" cy="11" r="6" stroke="#9aaab5" strokeWidth="1.6" fill="none"/>
            </svg>
            <input
              id="faq-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for questions or answers..."
              className="faq-input"
              aria-label="Search FAQs"
            />
          </div>
        </div>

        <div className="faq-list" role="list">
          {filtered.length === 0 && (
            <div className="faq-empty">No FAQs match your search.</div>
          )}

          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className={`faq-card ${isOpen ? "open" : ""}`} key={idx} role="listitem">
                <button
                  className="faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden>
                    {isOpen ? (
                      <svg viewBox="0 0 24 24" width="18" height="18"><path d="M18 15l-6-6-6 6" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 5v14M5 12h14" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                    )}
                  </span>
                </button>

                <div
                  className="faq-answer"
                  style={{ maxHeight: isOpen ? "480px" : "0px" }}
                >
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
