// src/components/Testimonials.jsx
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import avatarImg from "../assets/testimonial-avatar.jpg"; // ✅ Placeholder avatar
import "./Testimonials.css";

const testimonials = [
  {
    name: "Arun S.",
    condition: "Knee Osteoarthritis",
    category: "Joint Replacement",
    review:
      "My local doctor suggested knee replacement surgery, but the orthopaedic second opinion recommended advanced physiotherapy and lifestyle changes. Within 4 months, my pain reduced significantly and I avoided surgery.",
    image: avatarImg,
  },
  {
    name: "Meera P.",
    condition: "Spinal Disc Herniation",
    category: "Spine",
    review:
      "I was advised for immediate spinal surgery, but the second opinion suggested a non-surgical treatment plan with targeted exercises. Today, I am pain-free and back to my normal routine without surgery.",
    image: avatarImg,
  },
  {
    name: "Ravi K.",
    condition: "ACL Sports Injury",
    category: "Sports Medicine",
    review:
      "After my sports injury, one doctor said I would not play again. The orthopaedic second opinion connected me with a sports medicine expert, who gave me a rehab plan. I am now back on the field in just 6 months!",
    image: avatarImg,
  },
  {
    name: "Sonal T.",
    condition: "Hip Fracture (Accident)",
    category: "Trauma",
    review:
      "I was told my recovery would take over a year. The second opinion recommended a minimally invasive procedure with a faster recovery plan. I was walking with support in just 2 months.",
    image: avatarImg,
  },
  {
    name: "Kabir R.",
    condition: "Pediatric Bone Deformity",
    category: "Pediatric Orthopaedics",
    review:
      "My child was diagnosed with a leg deformity and surgery was suggested. The orthopaedic second opinion guided us to a specialized pediatric orthopaedic doctor who treated it without surgery. We are so relieved.",
    image: avatarImg,
  },
  {
    name: "Anjali M.",
    condition: "Shoulder Arthritis",
    category: "Orthopaedics",
    review:
      "I had severe shoulder pain and was told to undergo joint replacement. The second opinion offered advanced injection therapy combined with physio, which worked wonders. Surgery was avoided.",
    image: avatarImg,
  },
];

function TestimonialsApp() {
  const [filter, setFilter] = useState("All");

  // Build categories dynamically
  const categories = ["All", ...Array.from(new Set(testimonials.map((t) => t.category)))];

  const filteredTestimonials =
    filter === "All" ? testimonials : testimonials.filter((t) => t.category === filter);

  return (
    <div className="testimonials-app">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Testimonial Cards */}
      <div className="cards-container">
        {filteredTestimonials.map((t, index) => (
          <div className="card" key={`${t.name}-${index}`}>
            <div className="card-header">
              <img src={t.image} alt={`${t.name} avatar`} className="avatar" />
              <div>
                <h3>{t.name}</h3>
                <p className="condition">{t.condition}</p>
              </div>
            </div>

            <div className="stars" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="gold" />
              ))}
            </div>

            <p className="review">"{t.review}"</p>

            <div className="card-footer">
              <span className="category-label">{t.category}</span>
              <a className="read-more" href="#" aria-label={`Read more about ${t.name}`}>
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsApp;
