import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ eyebrow, title, subtitle, breadcrumb = title }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-cream-200)',
        borderBottom: '1px solid rgba(74, 14, 23, 0.08)',
        padding: 'clamp(2.5rem, 5vw, 4rem) 0 clamp(2rem, 4vw, 3rem) 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1rem' }}>
            <ol
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                color: 'var(--color-charcoal-muted)',
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{
                    color: 'var(--color-burgundy-700)',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                  className="breadcrumb-home"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
                <ChevronRight size={13} color="var(--color-gold-600)" />
              </li>
              <li style={{ color: 'var(--color-gold-700)', fontWeight: 600 }}>
                {breadcrumb}
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          {eyebrow && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.785rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--color-gold-600)',
                marginBottom: '0.65rem',
              }}
            >
              <span style={{ color: 'var(--color-gold-500)' }}>&loz;</span> {eyebrow}
            </div>
          )}

          {/* Page Title */}
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)',
              color: 'var(--color-burgundy-900)',
              lineHeight: 1.15,
              marginBottom: '0.75rem',
            }}
          >
            {title}
          </h1>

          {/* Gold Decorative Divider */}
          <div
            style={{
              width: '64px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--color-gold-500), transparent)',
              margin: '0.85rem auto 1.25rem auto',
            }}
          />

          {/* Subtitle */}
          {subtitle && (
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-charcoal-muted)',
                lineHeight: 1.65,
                maxWidth: '680px',
                margin: '0 auto',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <style>{`
        .breadcrumb-home:hover {
          color: var(--color-gold-600) !important;
          text-decoration: underline !important;
        }
      `}</style>
    </div>
  );
}
