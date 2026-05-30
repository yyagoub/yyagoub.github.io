import React from 'react';
import Hero from '../components/Hero.jsx';

/**
 * Home Page - Landing page with hero section
 *
 * Displays:
 * - Your name, title, and professional tagline
 * - "This Is What I Do" ecosystem diagram
 * - Call-to-action buttons (Get in touch, See my work)
 */
export default function Home() {
  return (
    <div className="page page-home">
      <section className="section zone-paper" aria-labelledby="hero-title">
        <div className="section-inner">
          <Hero />
        </div>
      </section>
    </div>
  );
}
