import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Left: Logo */}
        <a href="/" className="brand">
          <img
            src="/logo.png"
            alt="My Ortho Opinion logo"
            className="brand-logo"
          />
        </a>

        {/* Center: Navigation */}
        <nav className="header-nav" aria-label="Main navigation">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#vision">Vision & Mission</a></li>
            <li><a href="#why">Why My Ortho Opinion</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#specialties">Specialties</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Right: CTA */}
        <div className="header-right">
          <a className="cta" href="#request" aria-label="Request an Opinion">
            Request an Opinion
          </a>
        </div>
      </div>
    </header>
  );
}
