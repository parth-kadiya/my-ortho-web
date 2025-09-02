import React, { useState } from "react";
import "./SecondOpinion.css";
import { FaInfoCircle, FaUserMd, FaCheck, FaBone } from "react-icons/fa";

const tabs = [
  "What Is It?",
  "Why It Matters",
  "Benefits",
  "When to Seek One",
];

const leftCards = [
  {
    title: "What is Ortho Opinion?",
    text:
      "India's renowned orthopaedics guarantee your access to high-quality diagnoses and safe treatment. My Ortho Opinion ensures trusted second opinions so patients can take the right decisions with confidence.",
    note:
      "Our platform bridges the gap between patients and expert specialists across spine, joint replacement, trauma, sports medicine, and pediatric orthopaedics.",
    icon: "info",
  },
  {
    title: "Who Provides It?",
    text:
      "Second opinions are provided by verified and experienced orthopaedic specialists across India. Each expert has years of practice in their sub-specialty, ensuring reliable insights for your treatment decisions.",
    bullets: [
      "Verified orthopaedic specialists",
      "Expertise across multiple sub-specialties",
      "Trusted medical guidance nationwide",
    ],
    icon: "provider",
  },
];

export default function SecondOpinion() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section
      className="so-section"
      aria-label="Understanding Orthopaedic Second Opinions"
    >
      <div className="so-inner">
        <div className="so-badge">Trusted Ortho Guidance</div>

        <h2 className="so-title">Understanding Orthopaedic Second Opinions</h2>

        <p className="so-sub">
          Make confident treatment decisions with expert insights, reliable
          evaluations, and verified second opinions from leading orthopaedic
          specialists.
        </p>

        <div className="so-underline" aria-hidden />

        <div
          className="so-tabs"
          role="tablist"
          aria-label="Second opinion tabs"
        >
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={activeTab === t}
              className={`so-tab ${activeTab === t ? "active" : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="so-grid">
          <div className="so-left">
            {leftCards.map((c, idx) => (
              <article className="info-card" key={idx}>
                <div className="info-card-head">
                  <div className="info-icon" aria-hidden>
                    {c.icon === "info" ? (
                      <FaInfoCircle className="info-icon-svg" aria-hidden />
                    ) : (
                      <FaUserMd className="info-icon-svg" aria-hidden />
                    )}
                  </div>

                  <h3 className="info-title">{c.title}</h3>
                </div>

                <p className="info-text">{c.text}</p>

                {c.note && <div className="info-note">{c.note}</div>}

                {c.bullets && (
                  <ul className="info-bullets">
                    {c.bullets.map((b, i) => (
                      <li key={i}>
                        <FaCheck className="info-bullet-icon" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <div className="so-right" aria-hidden>
            <div className="decor-wrap">
              <div className="decor-ring" />
              <div className="decor-ring small" />

              {/* icon updated to bone/joint for ortho relevance */}
              <button
                id="decor-bone-btn"
                className="decor-btn"
                aria-hidden
                title="Bone Icon"
              >
                <FaBone className="decor-bone-icon" aria-hidden />
              </button>

              <span className="dot dot-1" />
              <span className="dot dot-2" />
              <span className="dot dot-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
