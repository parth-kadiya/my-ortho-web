// src/components/Footer.jsx
import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-col contact">
            <h3 className="brand">My Ortho Opinion</h3>
            <p className="desc">
              Trusted orthopaedic second opinions that empower patients across India with 
              timely, reliable, and expert guidance for confident treatment decisions.
            </p>

            <ul className="contact-list">
              <li>
                <FiMapPin size={16} aria-hidden />
                <span>Ahmedabad • Mumbai • Delhi • Bangalore</span>
              </li>
              <li>
                <FiPhone size={16} aria-hidden />
                <span>(+91) 90000-12345</span>
              </li>
              <li>
                <FiMail size={16} aria-hidden />
                <span>support@myortho-opinion.com</span>
              </li>
            </ul>

            <div className="socials" aria-hidden>
              <a href="#" className="soc" aria-label="Facebook">
                <FaFacebookF size={14} aria-hidden />
              </a>
              <a href="#" className="soc" aria-label="Instagram">
                <FaInstagram size={14} aria-hidden />
              </a>
              <a href="#" className="soc" aria-label="LinkedIn">
                <FaLinkedinIn size={14} aria-hidden />
              </a>
              <a href="#" className="soc" aria-label="Twitter">
                <FaTwitter size={14} aria-hidden />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Vision & Mission</a></li>
              <li><a href="#">Our Specialists</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Orthopaedic Services</h4>
            <ul>
              <li><a href="#">Spine Care</a></li>
              <li><a href="#">Joint Replacement</a></li>
              <li><a href="#">Trauma & Fractures</a></li>
              <li><a href="#">Sports Medicine</a></li>
              <li><a href="#">Pediatric Orthopaedics</a></li>
              <li><a href="#">How It Works</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Benefits</h4>
            <ul>
              <li><a href="#">Trusted Second Opinions</a></li>
              <li><a href="#">Reduce Unnecessary Procedures</a></li>
              <li><a href="#">Accessible Across India</a></li>
              <li><a href="#">Expert Verified Specialists</a></li>
              <li><a href="#">Affordable & Reliable</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Patient Stories</a></li>
              <li><a href="#">Awareness Articles</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Healthcare Insights</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-mid">
          <div className="mid-col">
            <h5>Partners</h5>
            <ul>
              <li><a href="#">Hospitals</a></li>
              <li><a href="#">Insurers</a></li>
              <li><a href="#">Corporates</a></li>
              <li><a href="#">NGOs</a></li>
            </ul>
          </div>

          <div className="mid-col legal">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2025 My Ortho Opinion. All rights reserved.</div>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
