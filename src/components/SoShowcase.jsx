// src/components/SoShowcase.jsx
import React from "react";
import "./SoShowcase.css";
import comingSoonImg from "../assets/so-coming-soon.jpg"; // put your screenshot here

export default function SoShowcase() {
  return (
    <section className="so-showcase-section" aria-hidden>
      <div className="so-showcase-inner">
        <h3 className="so-showcase-heading">
          India’s Renowned <span>Orthopaedic Specialists</span>
        </h3>

        <p className="so-showcase-sub">
          Get trusted second opinions from verified orthopaedic experts across
          spine, joint replacement, trauma, sports medicine, and pediatric
          orthopaedics — ensuring the right diagnosis and safe treatment.
        </p>

        <div className="so-image-wrapper">
          <img
            src={comingSoonImg}
            alt="India’s Renowned Orthopaedic Specialists - Coming Soon"
            className="so-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
