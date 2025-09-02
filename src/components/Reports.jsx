import React, { useState } from "react";
import "./Reports.css";
import {
  FaBone,
  FaHospitalAlt,
  FaBandAid,
  FaRunning,
  FaChild,
} from "react-icons/fa";

const categories = [
  { key: "Spine", Icon: FaBone },
  { key: "Joint Replacement", Icon: FaHospitalAlt },
  { key: "Trauma", Icon: FaBandAid },
  { key: "Sports Medicine", Icon: FaRunning },
  { key: "Pediatric Ortho", Icon: FaChild },
];

export default function Reports() {
  const [active, setActive] = useState("Spine");

  // demo patient data (replace with real data later)
  const patient = {
    id: "ORTHO-2025-1023",
    scanType: "Spine X-Ray",
    diagnosis: "Mild Scoliosis",
    recommendation: "Further evaluation advised",
    timestamp: "2025-08-29",
  };

  return (
    <section className="rp-section" aria-label="Ortho second opinion reports">
      <div className="rp-inner">
        <h2 className="rp-title">
          Get a Second Opinion on Your Orthopaedic Reports
        </h2>

        <p className="rp-sub">
          India’s renowned orthopaedics guarantee your access to high-quality
          diagnoses and safe treatment. Select your specialty to begin.
        </p>

        <div className="rp-pills" role="tablist" aria-label="Report categories">
          {categories.map((c) => {
            const Icon = c.Icon;
            return (
              <button
                key={c.key}
                role="tab"
                aria-pressed={active === c.key}
                aria-label={c.key}
                className={`rp-pill ${active === c.key ? "rp-pill--active" : ""}`}
                onClick={() => setActive(c.key)}
              >
                <span className="rp-pill__icon" aria-hidden>
                  <Icon className="rp-pill__icon-svg" />
                </span>
                <span className="rp-pill__text">{c.key}</span>
              </button>
            );
          })}
        </div>

        <div className="rp-grid">
          <div className="rp-left rp-card">
            <div className="rp-left__header">Specialty Report Preview</div>

            <div className="rp-ecg">
              {/* subtle grid background rendered by CSS */}
              <div className="rp-ecg__center">
                <svg
                  className="rp-heart"
                  viewBox="0 0 24 24"
                  width="100"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    stroke="#1363DF"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 7v6l3 2"
                    fill="none"
                    stroke="#1363DF"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <div className="rp-ecg__footer">
                <span className="rp-ecg__left">Report Type</span>
                <span className="rp-ecg__right">{patient.scanType}</span>
              </div>
            </div>
          </div>

          <aside
            className="rp-right rp-card rp-info"
            aria-label="Patient details"
          >
            <div className="rp-info__row">
              <span className="rp-info__label">Patient ID</span>
              <span className="rp-info__value">{patient.id}</span>
            </div>

            <div className="rp-info__row">
              <span className="rp-info__label">Scan Type</span>
              <span className="rp-info__value">{patient.scanType}</span>
            </div>

            <div className="rp-info__row">
              <span className="rp-info__label">Diagnosis</span>
              <span className="rp-info__value rp-info__value--highlight">
                {patient.diagnosis}
              </span>
            </div>

            <div className="rp-info__row">
              <span className="rp-info__label">Recommendation</span>
              <span className="rp-info__value">{patient.recommendation}</span>
            </div>

            <div className="rp-info__row">
              <span className="rp-info__label">Timestamp</span>
              <span className="rp-info__value">{patient.timestamp}</span>
            </div>

            <div className="rp-info__actions">
              <button className="rp-btn--outline">View Full Report</button>
              <button className="rp-btn--primary">
                Request Ortho Opinion
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
