
import React from "react";
import "./App.css";
import QuoteGenerator from "./QuoteGenerator";

export default function App() {
  return (
    <div>
      <header className="hero">
        <img src="/logo.png" alt="Logo" className="hero-logo" />
        <h1>My Assignment Genius</h1>
        <p className="tagline">You Decide, We Write</p>
        <a href="#quote" className="cta-button">Get a Free Quote</a>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-card">Assignment Help</div>
          <div className="service-card">Final Year Project</div>
          <div className="service-card">Dissertation</div>
          <div className="service-card">Case Study</div>
          <div className="service-card">Presentation Slides</div>
        </div>
      </section>

      <section id="quote">
        <QuoteGenerator />
      </section>

      <section className="testimonials">
        <h2>What Students Say</h2>
        <div className="testimonial-card">
          <p>“I was struggling to finish my dissertation while working part-time. My Assignment Genius delivered a high-quality draft within 5 days, and I ended up scoring a First Class!”</p>
          <p><strong>– Sarah, UK</strong></p>
        </div>
        <div className="testimonial-card">
          <p>“As a final-year engineering student, I was completely lost with my project. Their team broke it down, guided me step-by-step, and helped me submit a top-notch project.”</p>
          <p><strong>– Jay, UAE</strong></p>
        </div>
        <div className="testimonial-card">
          <p>“English is not my first language, and I needed help making my assignment sound professional. Not only did they improve the grammar, but the flow was amazing.”</p>
          <p><strong>– Nina, Nigeria</strong></p>
        </div>
        <div className="testimonial-card">
          <p>“I got referred here by a friend and haven’t looked back since. From business reports to reflective journals, everything I’ve ordered has helped boost my grades.”</p>
          <p><strong>– Ahmed, Canada</strong></p>
        </div>
      </section>

      <section className="cta-section">
        <h3>Need academic help today?</h3>
        <a href="https://wa.me/447729563785" className="cta-button">Contact Us on WhatsApp</a>
        <p>Email: <a href="mailto:myassignmentgenius@gmail.com">myassignmentgenius@gmail.com</a></p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 My Assignment Genius</p>
      </footer>
    </div>
  );
}
