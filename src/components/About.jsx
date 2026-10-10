import { BookOpen, Cake, Sparkles, Cpu, Compass, Palette } from 'lucide-react';

const INTERESTS = [
  {
    name: 'Reading',
    icon: BookOpen,
    desc: 'Exploring tech literature, literature, and ideas that broaden perspectives.',
  },
  {
    name: 'Baking',
    icon: Cake,
    desc: 'Enjoying precision, patience, and the creativity of culinary crafting.',
  },
  {
    name: 'Modeling',
    icon: Sparkles,
    desc: 'Expressing poise, confidence, visual aesthetics, and creative presentation.',
  },
  {
    name: 'Exploring new technologies',
    icon: Cpu,
    desc: 'Diving into artificial intelligence, modern frameworks, and computing tools.',
  },
  {
    name: 'Traveling',
    icon: Compass,
    desc: 'Experiencing new environments, cultures, and gaining fresh viewpoints.',
  },
  {
    name: 'Creative activities',
    icon: Palette,
    desc: 'Engaging in artistic design, visual storytelling, and hands-on making.',
  },
];

export default function About({ hideHeader = false }) {
  return (
    <section
      id="about"
      className="section section-tinted"
      style={hideHeader ? { paddingTop: 'clamp(2rem, 4vw, 3.5rem)' } : undefined}
    >
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-eyebrow">
              <span style={{ color: 'var(--color-gold-500)' }}>&loz;</span> Background &amp; Persona
            </span>
            <h2 className="section-title">About Me</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              A curious student developer building solid foundations in engineering,
              artificial intelligence, and creative problem solving.
            </p>
          </div>
        )}

        {/* Content Grid: Photo + Narrative */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          {/* Profile Photo Frame */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Elegant Double Border Frame */}
            <div
              style={{
                position: 'relative',
                maxWidth: '380px',
                width: '100%',
              }}
            >
              {/* Gold decorative offset frame */}
              <div
                style={{
                  position: 'absolute',
                  inset: '14px -14px -14px 14px',
                  border: '1.5px solid var(--color-gold-500)',
                  borderRadius: '12px',
                  zIndex: 0,
                  opacity: 0.6,
                }}
              />

              {/* Main Photo Card */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-burgundy-900)',
                  border: '1px solid rgba(74, 14, 23, 0.15)',
                  boxShadow: 'var(--shadow-hover)',
                }}
              >
                <img
                  src="/assets/falak_profile.png"
                  alt="Falak Baharwani portrait"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '4 / 5',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                
                {/* Subtle caption bar */}
                <div
                  style={{
                    padding: '0.85rem 1.25rem',
                    backgroundColor: 'var(--color-burgundy-800)',
                    borderTop: '1px solid rgba(223, 183, 90, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.925rem',
                      color: 'var(--color-cream-100)',
                      fontWeight: 600,
                    }}
                  >
                    Falak Baharwani
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-gold-400)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Chandigarh, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Bio Text */}
          <div>
            <div
              style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--color-burgundy-600)',
                marginBottom: '0.75rem',
              }}
            >
              Who I Am
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.6rem, 2.5vw, 2.15rem)',
                marginBottom: '1.25rem',
                color: 'var(--color-burgundy-900)',
                lineHeight: 1.25,
              }}
            >
              Building practical software with curiosity and care.
            </h3>

            <p style={{ marginBottom: '1.15rem' }}>
              I am an undergraduate student pursuing a <strong>B.E. (Hons.) in Computer
              Science and Engineering</strong> with a specialization in <strong>Generative AI</strong> at
              Chandigarh University. My interest in technology starts with understanding fundamental
              principles—from low-level instruction execution and memory manipulation to high-level
              algorithmic systems.
            </p>

            <p style={{ marginBottom: '1.15rem' }}>
              I believe in learning through active experimentation. Whether simulating how CPU
              architectures interpret mathematical expressions, building command-line billing systems
              in C with file storage, or developing heuristics for phishing identification, I focus
              on creating clean, reliable code that actually works.
            </p>

            <p style={{ marginBottom: '1.75rem' }}>
              Outside coursework, I balance rigorous academic curiosity with creative pursuits.
              This balance between analytical discipline and artistic expression gives me a fresh,
              thoughtful perspective on product design, user experience, and continuous self-improvement.
            </p>

            {/* Quick Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(74, 14, 23, 0.1)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-700)', fontWeight: 600, letterSpacing: '0.08em' }}>
                  Academic Base
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-burgundy-800)' }}>
                  Chandigarh University
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-700)', fontWeight: 600, letterSpacing: '0.08em' }}>
                  Focus Area
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-burgundy-800)' }}>
                  Generative AI
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interests & Creative Passions (In exact required order) */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.785rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--color-gold-600)',
              }}
            >
              Beyond The Screen
            </span>
            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)',
                marginTop: '0.35rem',
                color: 'var(--color-burgundy-900)',
              }}
            >
              Interests &amp; Passions
            </h3>
            <p style={{ fontSize: '0.95rem', maxWidth: '540px', margin: '0.5rem auto 0 auto' }}>
              Personal pursuits that inspire creativity, focus, and continuous personal growth.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {INTERESTS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.name}
                  className="card-editorial"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.35rem',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(74, 14, 23, 0.06)',
                      border: '1px solid rgba(207, 160, 67, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--color-burgundy-700)',
                    }}
                  >
                    <IconComp size={20} />
                  </div>

                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-gold-600)',
                          fontWeight: 600,
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <h4
                        style={{
                          fontSize: '1.05rem',
                          color: 'var(--color-burgundy-800)',
                          fontWeight: 600,
                        }}
                      >
                        {item.name}
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
