// src/components/Hero.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-badge">Trusted by Orthopaedic Patients Across India</div>

        <h1 className="hero-title">
          Get Expert Ortho <br />
          <span>Second Opinions</span>
        </h1>

        <p className="hero-sub">
          Connect with leading Orthopaedic specialists and make confident healthcare 
          decisions with our trusted second opinion service
        </p>

        <div className="hero-ctas">
          <a className="btn btn-primary-one" href="#request">
            Request an Ortho Opinion
          </a>
          <a className="btn btn-outline" href="#how">
            How It Works
          </a>
        </div>

        <hr className="hero-divider" />

        <div className="hero-features">
          <div className="feature">
            <svg
              className="feature-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
            </svg>
            <span>Trusted & Affordable Care</span>
          </div>

          <div className="feature">
            <svg
              className="feature-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
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
            <span>Verified Ortho Specialists</span>
          </div>

          <div className="feature">
            <svg
              className="feature-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
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
            <span>Fast Response (48–72 Hrs)</span>
          </div>
        </div>
      </div>

      {/* floating whatsapp using react-icons */}
      <a
        className="floating-whatsapp"
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={22} className="wh-icon" aria-hidden="true" />
      </a>
    </section>
  );
}
