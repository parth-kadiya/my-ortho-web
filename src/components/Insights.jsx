// src/components/Insights.jsx
import React from "react";
import "./Insights.css";

// import images from src/assets
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";

function InsightCard({ img, date, title, excerpt }) {
  return (
    <article className="ins-card" role="article">
      <div className="ins-thumb">
        <img src={img} alt={title} />
      </div>

      <div className="ins-body">
        <time className="ins-date">{date}</time>
        <h3 className="ins-title">{title}</h3>
        <p className="ins-excerpt">{excerpt}</p>
        <a className="ins-read" href="#!">Read article →</a>
      </div>
    </article>
  );
}

export default function Insights() {
  const posts = [
    {
      img: post1,
      date: "August 20, 2025",
      title: "Knee Replacement Surgery Cost in India: A Complete Guide",
      excerpt:
        "Everything you need to know about knee replacement surgery costs, hospital choices, and recovery tips.",
    },
    {
      img: post2,
      date: "August 25, 2025",
      title: "Second Opinion vs First Consultation: What’s the Difference?",
      excerpt:
        "Understand when a second opinion matters and how it can change treatment decisions for better outcomes.",
    },
    {
      img: post3,
      date: "August 8, 2025",
      title: "Transmural Heart Attack: Key Causes, Symptoms & Second Opinion Guide",
      excerpt:
        "A concise guide to transmural heart attacks, warning signs, and why a second opinion can be life-saving.",
    },
  ];

  return (
    <section className="ins-section" aria-label="Latest Health Insights">
      <div className="ins-container">
        <div className="ins-top-cta">
          <div className="ins-cta-text">
            <strong>Ready to Get Expert Advice?</strong>
            <span>Start your journey to a confident healthcare decision today.</span>
          </div>
          <button className="ins-cta-btn">Get Started Now</button>
        </div>

        <h2 className="ins-heading">Latest Health Insights</h2>
        <p className="ins-sub">
          Stay informed with our latest articles on healthcare and medical insights
        </p>

        <div className="ins-grid" role="list">
          {posts.map((p, i) => (
            <InsightCard
              key={i}
              img={p.img}
              date={p.date}
              title={p.title}
              excerpt={p.excerpt}
            />
          ))}
        </div>

        <div className="ins-footer-news">
          <h3 className="ins-footer-title">Stay Connected with My Ortho Opinion</h3>
          <p className="ins-footer-sub">
            Subscribe to receive trusted orthopaedic insights, expert second opinion updates,
            and the latest guidance for confident healthcare decisions.
          </p>

          <form className="ins-subscribe" onSubmit={(e) => e.preventDefault()}>
            <input aria-label="Email address" type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
