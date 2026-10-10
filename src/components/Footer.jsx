import { ArrowUp, Mail, Binary } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-burgundy-900)',
        color: 'var(--color-cream-100)',
        borderTop: '1px solid rgba(223, 183, 90, 0.25)',
        padding: '3.5rem 0 2.5rem 0',
      }}
    >
      <div className="container">
        {/* Top Tier */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(223, 183, 90, 0.15)',
            marginBottom: '2rem',
          }}
        >
          {/* Identity */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '0.45rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  border: '1.2px solid var(--color-gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--color-gold-400)',
                }}
              >
                FB
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-cream-50)',
                  letterSpacing: '0.04em',
                }}
              >
                Falak Baharwani
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--color-gold-300)',
                margin: 0,
              }}
            >
              &ldquo;Curious mind. Always learning.&rdquo;
            </p>
          </div>

          {/* Nav & Social Quick Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link
              to="/playground"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                color: 'var(--color-gold-400)',
                textDecoration: 'none',
                fontWeight: 600,
              }}
              className="footer-link"
            >
              <Binary size={15} />
              <span>Number Systems Playground</span>
            </Link>

            <a
              href="https://github.com/Falakk21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid rgba(223, 183, 90, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-cream-100)',
                transition: 'all var(--transition-fast)',
              }}
              className="footer-social-btn"
            >
              <Github size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/falak-baharwani-36bb72377/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid rgba(223, 183, 90, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-cream-100)',
                transition: 'all var(--transition-fast)',
              }}
              className="footer-social-btn"
            >
              <Linkedin size={17} />
            </a>

            <a
              href="mailto:baharwanifalak@gmail.com"
              aria-label="Email Falak"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid rgba(223, 183, 90, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-cream-100)',
                transition: 'all var(--transition-fast)',
              }}
              className="footer-social-btn"
            >
              <Mail size={17} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(223, 183, 90, 0.15)',
                border: '1px solid var(--color-gold-400)',
                color: 'var(--color-gold-300)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              className="footer-top-btn"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.825rem',
            color: 'rgba(250, 246, 238, 0.65)',
            gap: '0.75rem',
          }}
        >
          <div>
            &copy; 2026 Falak Baharwani. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            <span>B.E. CSE (AI) &bull; Chandigarh University</span>
            <span>Mohali, Punjab, India</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-social-btn:hover {
          color: var(--color-gold-400) !important;
          border-color: var(--color-gold-400) !important;
          background-color: rgba(223, 183, 90, 0.1) !important;
          transform: translateY(-2px);
        }
        .footer-top-btn:hover {
          background-color: var(--color-gold-400) !important;
          color: var(--color-burgundy-900) !important;
          transform: translateY(-2px);
        }
        .footer-link:hover {
          color: var(--color-gold-300) !important;
          text-decoration: underline !important;
        }
      `}</style>
    </footer>
  );
}
