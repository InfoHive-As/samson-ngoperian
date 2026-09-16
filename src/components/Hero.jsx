import React from 'react';
import { Mail, Linkedin, Globe, Copy, MapPin, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onCopyEmail }) {
  return (
    <section className="hero wrap">
      <div className="eyebrow-badge">
        <span className="pulse-dot"></span>
        <span>Active M&E Officer · {personalInfo.location}</span>
      </div>

      <h1>{personalInfo.name}</h1>
      <p className="hero-role">{personalInfo.title}</p>
      
      <p className="hero-tagline">{personalInfo.tagline}</p>

      <div className="hero-highlights">
        <span className="highlight-chip"><MapPin size={13} /> Doldol / Nanyuki, Laikipia</span>
        <span className="highlight-chip">📊 BSc Biostatistics (JKUAT)</span>
        <span className="highlight-chip">📡 EarthRanger & SMART Tool</span>
        <span className="highlight-chip">🗺️ QGIS & ArcGIS Mapping</span>
        <span className="highlight-chip">💻 R, Python, SPSS & STATA</span>
      </div>

      <div className="cta-row">
        <a className="btn primary" href={`mailto:${personalInfo.email}`}>
          <Mail size={16} /> Contact Email
        </a>
        <a
          className="btn"
          href={personalInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <button
          className="btn"
          onClick={() => onCopyEmail(personalInfo.email)}
          type="button"
        >
          <Copy size={16} /> Copy Email
        </button>
      </div>
    </section>
  );
}
