import { GraduationCap, Calendar, Sparkles, School } from 'lucide-react';

const EDUCATION_HISTORY = [
  {
    institution: 'Chandigarh University',
    location: 'Mohali, Punjab, India',
    degree: 'B.E. (Hons.) in Computer Science and Engineering',
    focus: 'Generative AI',
    status: 'Current Semester: Semester 3',
    period: '2025 — 2029 (Expected)',
    isCurrent: true,
    highlights: [
      'Core foundation in Computer Science and Engineering principles',
      'Specialized coursework in Generative Artificial Intelligence',
      'Hands-on exploration in computer organization, data structures, and algorithms',
    ],
  },
  {
    institution: 'St. Stephen School',
    location: 'Ratlam, Madhya Pradesh',
    degree: 'Senior Secondary Education (Class XII)',
    focus: 'Science Stream (Physics, Chemistry, Mathematics)',
    status: 'Completed',
    period: '2024 — 2025',
    isCurrent: false,
    highlights: ['Solid foundation in advanced mathematics and physical sciences'],
  },
  {
    institution: 'St. Joseph Convent School',
    location: 'Ratlam, Madhya Pradesh',
    degree: 'Secondary School Education (Class X)',
    focus: 'General Secondary Curriculum',
    status: 'Completed',
    period: '2022 — 2023',
    isCurrent: false,
    highlights: ['Comprehensive foundational schooling with academic consistency'],
  },
];

export default function Education({ hideHeader = false }) {
  return (
    <section
      id="education"
      className="section"
      style={hideHeader ? { paddingTop: 'clamp(2rem, 4vw, 3.5rem)' } : undefined}
    >
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-eyebrow">
              <GraduationCap size={15} /> Academic Journey
            </span>
            <h2 className="section-title">Education</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Formal engineering education focused on computing fundamentals,
              artificial intelligence, and analytical thinking.
            </p>
          </div>
        )}

        {/* Timeline Layout */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical gold decorative track */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '23px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--color-gold-500) 0%, rgba(207, 160, 67, 0.2) 100%)',
            }}
            className="timeline-track"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {EDUCATION_HISTORY.map((item, idx) => (
              <div
                key={item.institution}
                style={{
                  display: 'flex',
                  gap: 'clamp(1.25rem, 3vw, 2.25rem)',
                  position: 'relative',
                }}
              >
                {/* Node icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: item.isCurrent ? 'var(--color-burgundy-700)' : 'var(--color-white)',
                    border: '2px solid var(--color-gold-500)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: item.isCurrent ? 'var(--shadow-gold)' : 'var(--shadow-subtle)',
                    zIndex: 2,
                    color: item.isCurrent ? 'var(--color-gold-300)' : 'var(--color-burgundy-700)',
                  }}
                >
                  {item.isCurrent ? <GraduationCap size={22} /> : <School size={20} />}
                </div>

                {/* Card */}
                <div
                  className="card-editorial"
                  style={{
                    flex: 1,
                    borderLeft: item.isCurrent ? '3px solid var(--color-gold-500)' : '1px solid var(--color-border-subtle)',
                    backgroundColor: item.isCurrent ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.85)',
                  }}
                >
                  {/* Period & Status Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.85rem',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.825rem',
                        color: 'var(--color-gold-700)',
                        fontWeight: 600,
                      }}
                    >
                      <Calendar size={14} />
                      {item.period}
                    </span>

                    {item.isCurrent ? (
                      <span className="badge badge-gold">
                        <Sparkles size={12} /> {item.status}
                      </span>
                    ) : (
                      <span className="badge badge-burgundy">
                        {item.status}
                      </span>
                    )}
                  </div>

                  {/* Degree & Institution */}
                  <h3
                    style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                      color: 'var(--color-burgundy-800)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.degree}
                  </h3>

                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--color-charcoal)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.institution}
                  </div>

                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-charcoal-muted)',
                      marginBottom: '1rem',
                    }}
                  >
                    {item.location} &bull; Focus: <strong style={{ color: 'var(--color-burgundy-700)' }}>{item.focus}</strong>
                  </div>

                  {/* Highlights list */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                    }}
                  >
                    {item.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--color-charcoal-muted)',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ color: 'var(--color-gold-500)', fontSize: '0.8rem' }}>&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
