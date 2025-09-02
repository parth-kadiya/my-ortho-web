// src/components/SuccessStories.jsx
import React from "react";
import "./SuccessStories.css";
import avatarImg from "../assets/testimonial-avatar.jpg"; // add this file to src/assets

export default function SuccessStories() {
  return (
    <section className="ss-section" aria-label="Trusted Ortho Success Stories">
      <div className="ss-inner">
        <div className="ss-top">
          <div className="ss-icon" aria-hidden>
            {/* Bone/Joint icon for ortho relevance */}
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="#1363DF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 12c0-2 1-4 3-4s3 2 3 4-1 4-3 4-3-2-3-4z" />
              <path d="M14 8c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4z" />
              <path d="M7 12h7" />
            </svg>
          </div>

          <h2 className="ss-title">
            Real Patient <span>Success Stories</span>
          </h2>

          <p className="ss-sub">
            See how trusted orthopaedic second opinions have helped patients
            across India avoid unnecessary procedures, choose the right
            treatments, and regain confidence in their healthcare journey.
          </p>

          <div className="ss-underline" aria-hidden />
        </div>

        <div className="ss-stats" role="list" aria-label="Success statistics">
          <article className="stat-card" role="listitem">
            <div className="stat-number">67%</div>
            <div className="stat-label">Treatment Plans Improved</div>
          </article>

          <article className="stat-card" role="listitem">
            <div className="stat-number">21%</div>
            <div className="stat-label">Diagnoses Changed</div>
          </article>

          <article className="stat-card" role="listitem">
            <div className="stat-number">90%+</div>
            <div className="stat-label">Patient Confidence</div>
          </article>

          <article className="stat-card" role="listitem">
            <div className="stat-number">200+</div>
            <div className="stat-label">Cities Reached</div>
          </article>
        </div>

        <div className="ss-testimonial">
          <div className="ss-avatar-wrap" aria-hidden>
            <img
              src={avatarImg}
              alt="Patient Anil K."
              className="ss-avatar"
            />
          </div>

          <div className="ss-quote-wrap">
            <svg
              className="ss-quote-icon"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="#1363DF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M7 17a4 4 0 0 1-4-4V7" />
              <path d="M17 17a4 4 0 0 1-4-4V7" />
            </svg>

            <blockquote className="ss-quote">
              “I was advised surgery in my hometown, but through My Ortho
              Opinion I received a trusted second opinion from a senior
              orthopaedic specialist. The expert recommended a non-surgical
              treatment plan that worked perfectly. Today, I am pain-free and
              confident in my recovery.”
            </blockquote>

            <div className="ss-meta">
              <div className="ss-name">Anil K.</div>
              <div className="ss-location">Ahmedabad, India, 46</div>
              <a
                className="ss-case-link"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Knee Pain – Avoided Surgery
              </a>
            </div>
          </div>

          <div className="ss-rating" aria-hidden>
            <div className="stars" title="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="#fbbf24"
                  stroke="#fbbf24"
                  strokeWidth="0.5"
                  aria-hidden
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.87 1.402-8.168L.132 9.211l8.2-1.193z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
