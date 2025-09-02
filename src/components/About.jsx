// src/components/About.jsx
import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" aria-label="About My Ortho Opinion">
      <div className="about-inner">
        <div className="about-badge">About My Ortho Opinion</div>

        <h2 className="about-title">
          Empowering Patients
          <br />
          <span>With Trusted Ortho Opinions</span>
        </h2>

        <p className="about-sub">
          We bridge the gap between patients and world-class orthopaedic expertise,
          empowering individuals to make confident, informed treatment decisions.
        </p>

        <div className="about-underline" aria-hidden />

        <div className="about-cards">
          <article className="about-card">
            <div className="card-top-accent" />
            <div className="card-body">
              <div className="card-icon-wrap">
                <div className="card-icon">
                  {/* book icon */}
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M2 7c0-1.1.9-2 2-2h14v13H4c-1.1 0-2-.9-2-2z" />
                    <path d="M6 5v14" />
                  </svg>
                </div>
              </div>

              <h3 className="card-title">Our Vision</h3>

              <p className="card-text">
                To empower every patient in India with trusted and timely orthopaedic
                second opinions, ensuring confidence in treatment decisions and
                better quality of life.
              </p>

              <a
                className="card-link"
                href="#vision"
                aria-label="Learn more about our vision"
              >
                Learn more
                <span className="card-arrow" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </article>

          <article className="about-card">
            <div className="card-top-accent" />
            <div className="card-body">
              <div className="card-icon-wrap">
                <div className="card-icon">
                  {/* network icon */}
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M12 2v6" />
                    <path d="M5 9l7 7 7-7" />
                  </svg>
                </div>
              </div>

              <h3 className="card-title">Our Mission</h3>

              <p className="card-text">
                Our mission is to empower patients across India with reliable
                orthopaedic second opinions, enabling them to make informed
                treatment decisions with confidence and peace of mind.
              </p>

              <a
                className="card-link"
                href="#mission"
                aria-label="Learn more about our mission"
              >
                Learn more
                <span className="card-arrow" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </article>

          <article className="about-card">
            <div className="card-top-accent" />
            <div className="card-body">
              <div className="card-icon-wrap">
                <div className="card-icon">
                  {/* clock icon */}
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v6l4 2" />
                  </svg>
                </div>
              </div>

              <h3 className="card-title">Our Approach</h3>

              <p className="card-text">
                We combine medical excellence with technological innovation
                to deliver accessible, personalized second opinion services
                for patients everywhere.
              </p>

              <a
                className="card-link"
                href="#approach"
                aria-label="Learn more about our approach"
              >
                Learn more
                <span className="card-arrow" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
