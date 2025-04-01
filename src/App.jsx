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
        <blockquote>“I was blown away! Scored a 1st class.” – Sarah, UK</blockquote>
        <blockquote>“My project was ready in 2 days. Highly recommend!” – Jay, UAE</blockquote>
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