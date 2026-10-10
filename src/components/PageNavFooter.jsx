import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PageNavFooter({ prev = null, next = null }) {
  if (!prev && !next) return null;

  return (
    <div
      style={{
        borderTop: '1px solid rgba(74, 14, 23, 0.08)',
        padding: '2.5rem 0',
        backgroundColor: 'var(--color-cream-50)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          {prev ? (
            <Link
              to={prev.path}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '6px',
                border: '1px solid rgba(74, 14, 23, 0.15)',
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-burgundy-800)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.885rem',
                transition: 'all var(--transition-fast)',
              }}
              className="page-nav-btn"
            >
              <ArrowLeft size={16} />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-charcoal-muted)', textTransform: 'uppercase' }}>Previous</div>
                <div>{prev.label}</div>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              to={next.path}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '6px',
                border: '1px solid var(--color-burgundy-600)',
                backgroundColor: 'var(--color-burgundy-700)',
                color: 'var(--color-cream-50)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.885rem',
                textAlign: 'right',
                transition: 'all var(--transition-fast)',
              }}
              className="page-nav-next-btn"
            >
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-gold-300)', textTransform: 'uppercase' }}>Next Section</div>
                <div>{next.label}</div>
              </div>
              <ArrowRight size={16} />
            </Link>
          ) : <div />}
        </div>
      </div>

      <style>{`
        .page-nav-btn:hover {
          border-color: var(--color-gold-500) !important;
          background-color: var(--color-cream-100) !important;
          transform: translateX(-3px);
        }
        .page-nav-next-btn:hover {
          background-color: var(--color-burgundy-800) !important;
          color: var(--color-gold-300) !important;
          border-color: var(--color-gold-400) !important;
          transform: translateX(3px);
        }
      `}</style>
    </div>
  );
}
