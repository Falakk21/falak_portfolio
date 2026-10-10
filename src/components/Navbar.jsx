import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Binary, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Education', path: '/education' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Internship', path: '/internship' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll state for subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'var(--color-burgundy-800)',
          borderBottom: scrolled
            ? '1px solid rgba(223, 183, 90, 0.28)'
            : '1px solid rgba(223, 183, 90, 0.12)',
          boxShadow: scrolled
            ? '0 10px 30px -10px rgba(32, 5, 8, 0.6)'
            : '0 4px 16px rgba(32, 5, 8, 0.2)',
          transition: 'all var(--transition-normal)',
          height: 'var(--header-height)',
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo & Name */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'var(--color-cream-100)',
              textDecoration: 'none',
            }}
            aria-label="Falak Baharwani Home"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: '1.2px solid var(--color-gold-400)',
                backgroundColor: 'rgba(74, 14, 23, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--color-gold-400)',
                boxShadow: '0 2px 10px rgba(223, 183, 90, 0.18)',
              }}
            >
              FB
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--color-cream-50)',
                  lineHeight: 1.2,
                }}
              >
                Falak Baharwani
              </div>
              <div
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-400)',
                  fontWeight: 500,
                }}
              >
                CSE Student
              </div>
            </div>
          </Link>

          {/* Desktop Multi-Page Navigation Links */}
          <nav
            role="navigation"
            aria-label="Primary Navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.2rem',
            }}
            className="desktop-nav"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={{
                    padding: '0.45rem 0.65rem',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: isActive ? 'var(--color-gold-300)' : 'rgba(250, 246, 238, 0.78)',
                    position: 'relative',
                    transition: 'color var(--transition-fast)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                  }}
                  className="nav-link"
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: '12%',
                        right: '12%',
                        height: '2px',
                        backgroundColor: 'var(--color-gold-400)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </NavLink>
              );
            })}

            {/* Dedicated Link: Number Systems Playground */}
            <Link
              to="/playground"
              style={{
                marginLeft: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem 0.95rem',
                fontSize: '0.825rem',
                fontWeight: 600,
                color: 'var(--color-burgundy-900)',
                background: 'linear-gradient(135deg, var(--color-gold-300), var(--color-gold-500))',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--color-gold-300)',
                boxShadow: '0 2px 12px rgba(223, 183, 90, 0.28)',
                transition: 'all var(--transition-normal)',
                textDecoration: 'none',
              }}
              className="playground-nav-btn"
              title="Interactive Number Systems Converter & Simulator"
            >
              <Binary size={15} strokeWidth={2.4} />
              <span>Number Systems Playground</span>
              <ArrowUpRight size={13} strokeWidth={2.4} />
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid rgba(223, 183, 90, 0.3)',
              borderRadius: '6px',
              padding: '0.45rem',
              color: 'var(--color-gold-300)',
              cursor: 'pointer',
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Burgundy Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'var(--color-burgundy-900)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '5.5rem 2rem 2.5rem 2rem',
            overflowY: 'auto',
            animation: 'fadeInMenu 240ms ease-out',
          }}
        >
          {/* Mobile Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              alignItems: 'flex-start',
            }}
          >
            {NAV_ITEMS.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--color-gold-300)' : 'var(--color-cream-100)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    animation: `slideInItem 200ms ease-out ${idx * 30}ms forwards`,
                    opacity: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-gold-500)',
                    }}
                  >
                    0{idx + 1}.
                  </span>
                  {item.label}
                </NavLink>
              );
            })}

            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(223, 183, 90, 0.2)',
                margin: '0.75rem 0',
              }}
            />

            {/* Mobile Dedicated Playground Link */}
            <Link
              to="/playground"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                padding: '0.95rem 1.25rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--color-burgundy-900)',
                background: 'linear-gradient(135deg, var(--color-gold-300), var(--color-gold-500))',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-gold)',
                textDecoration: 'none',
              }}
            >
              <Binary size={18} />
              <span>Number Systems Playground</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Footer note in mobile menu */}
          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(223, 183, 90, 0.15)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-gold-400)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
              }}
            >
              "Curious Mind. Creative Soul. Future Innovator."
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 1039px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
        .nav-link:hover {
          color: var(--color-gold-300) !important;
        }
        .playground-nav-btn:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 4px 18px rgba(223, 183, 90, 0.4) !important;
        }
        @keyframes fadeInMenu {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInItem {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
