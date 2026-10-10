import { Link } from 'react-router-dom';
import { ArrowDown, FileText, Code2, Sparkles, MapPin, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: 'calc(80vh - var(--header-height))',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(3.5rem, 7vw, 5.5rem) 0 clamp(2.5rem, 5vw, 4rem) 0',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(244, 236, 224, 0.45) 0%, var(--color-cream-100) 100%)',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Eyebrow / Focus Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(74, 14, 23, 0.06)',
              border: '1px solid rgba(207, 160, 67, 0.35)',
              marginBottom: '1.75rem',
            }}
          >
            <Sparkles size={14} color="var(--color-gold-600)" />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-burgundy-700)',
              }}
            >
              CSE Student &bull; Chandigarh University
            </span>
          </div>

          {/* Main Name Heading */}
          <h1
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--color-burgundy-900)',
              lineHeight: 1.08,
              marginBottom: '0.85rem',
              textTransform: 'uppercase',
            }}
          >
            Falak Baharwani
          </h1>

          {/* Tagline */}
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 2.8vw, 1.85rem)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: 'var(--color-gold-700)',
              marginBottom: '1.75rem',
              letterSpacing: '0.01em',
            }}
          >
            &ldquo;Curious Mind. Creative Soul. Future Innovator.&rdquo;
          </div>

          {/* Gold Decorative Divider */}
          <div
            style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--color-gold-500), transparent)',
              margin: '0 auto 2rem auto',
            }}
          />

          {/* Concise Grounded Bio */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              lineHeight: 1.75,
              color: 'var(--color-charcoal-muted)',
              maxWidth: '720px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            A Computer Science and Engineering student with an active curiosity for
            artificial intelligence, system design, and practical software engineering.
            Passionate about understanding how computers execute ideas—from instruction-level
            simulations to intelligent predictive systems—and dedicated to continuous learning.
          </p>

          {/* Primary Calls to Action (Multi-Page Navigation) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '3rem',
            }}
          >
            <Link
              to="/projects"
              className="btn btn-primary"
              style={{
                fontSize: '1rem',
                padding: '0.95rem 2rem',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              <Code2 size={18} />
              <span>Explore My Projects</span>
            </Link>

            <Link
              to="/resume"
              className="btn btn-secondary"
              style={{
                fontSize: '1rem',
                padding: '0.95rem 2rem',
                borderRadius: '6px',
                backgroundColor: 'var(--color-white)',
                textDecoration: 'none',
              }}
            >
              <FileText size={18} />
              <span>View My Resume</span>
            </Link>
          </div>

          {/* Quick Meta Pills (Location, LinkedIn, GitHub, Email) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.25rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(74, 14, 23, 0.08)',
              fontSize: '0.875rem',
              color: 'var(--color-charcoal-muted)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={15} color="var(--color-burgundy-600)" />
              <span>Mohali, Punjab, India</span>
            </span>

            <span style={{ color: 'rgba(74, 14, 23, 0.2)' }}>&bull;</span>

            <a
              href="mailto:baharwanifalak@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--color-burgundy-700)',
                fontWeight: 500,
              }}
              className="meta-link"
            >
              <Mail size={15} />
              <span>baharwanifalak@gmail.com</span>
            </a>

            <span style={{ color: 'rgba(74, 14, 23, 0.2)' }}>&bull;</span>

            <a
              href="https://github.com/Falakk21"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--color-burgundy-700)',
                fontWeight: 500,
              }}
              className="meta-link"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>

            <span style={{ color: 'rgba(74, 14, 23, 0.2)' }}>&bull;</span>

            <a
              href="https://www.linkedin.com/in/falak-baharwani-36bb72377/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--color-burgundy-700)',
                fontWeight: 500,
              }}
              className="meta-link"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        .meta-link:hover {
          color: var(--color-gold-600) !important;
        }
      `}</style>
    </section>
  );
}
