import { useEffect, useState } from 'react';

export default function LoadingScreen({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user has already visited in this browser session
    const hasLoaded = sessionStorage.getItem('fb_intro_seen');
    if (hasLoaded) {
      if (onFinish) onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      const finishTimer = setTimeout(() => {
        sessionStorage.setItem('fb_intro_seen', 'true');
        if (onFinish) onFinish();
      }, 550);
      return () => clearTimeout(finishTimer);
    }, 1100);

    return () => clearTimeout(timer);
  }, [onFinish]);

  // If already seen, don't render DOM
  if (typeof window !== 'undefined' && sessionStorage.getItem('fb_intro_seen')) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'var(--color-burgundy-800)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: 'opacity 550ms cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        {/* Monogram Crest */}
        <div
          style={{
            width: '74px',
            height: '74px',
            margin: '0 auto 1.5rem auto',
            borderRadius: '16px',
            border: '1.5px solid var(--color-gold-400)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(74, 14, 23, 0.5)',
            boxShadow: '0 0 24px rgba(223, 183, 90, 0.25)',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--color-gold-400)',
              letterSpacing: '2px',
            }}
          >
            FB
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.4rem',
            letterSpacing: '0.12em',
            color: 'var(--color-cream-100)',
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
          }}
        >
          Falak Baharwani
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            color: 'var(--color-gold-300)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Curious Mind &bull; Future Innovator
        </p>

        {/* Subtle gold line bar */}
        <div
          style={{
            width: '120px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold-400), transparent)',
            margin: '1.25rem auto 0 auto',
            animation: 'pulseBar 1.2s ease-in-out infinite alternate',
          }}
        />
      </div>

      <style>{`
        @keyframes pulseBar {
          from { opacity: 0.3; transform: scaleX(0.7); }
          to { opacity: 1; transform: scaleX(1.1); }
        }
      `}</style>
    </div>
  );
}
