import { HeartHandshake, Calendar, MapPin, Users, Leaf, Sprout, BookOpen, Building2 } from 'lucide-react';

const THEMES = [
  {
    title: 'Community Development',
    icon: Users,
    desc: 'Understanding grassroots civic structures, local needs assessment, and community participation.',
  },
  {
    title: 'Environmental Sustainability',
    icon: Leaf,
    desc: 'Promoting local conservation initiatives, ecological awareness, and resource care.',
  },
  {
    title: 'Farmer Empowerment',
    icon: Sprout,
    desc: 'Interacting with agricultural communities regarding sustainable practices and local resources.',
  },
  {
    title: 'Women’s Education & Awareness',
    icon: BookOpen,
    desc: 'Fostering dialogue around education, health awareness, and self-reliance initiatives.',
  },
];

export default function Internship({ hideHeader = false }) {
  return (
    <section
      id="internship"
      className="section"
      style={hideHeader ? { paddingTop: 'clamp(2rem, 4vw, 3.5rem)' } : undefined}
    >
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-eyebrow">
              <HeartHandshake size={15} /> Social Contribution
            </span>
            <h2 className="section-title">Internship &amp; Community Engagement</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Ground-level community immersion and social development internship with
              the Shresth Navnirman Foundation.
            </p>
          </div>
        )}

        {/* Main Experience Editorial Card */}
        <div
          className="card-editorial"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            border: '1px solid rgba(74, 14, 23, 0.1)',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(74, 14, 23, 0.08)',
              marginBottom: '2rem',
            }}
          >
            <div>
              <span className="badge badge-burgundy" style={{ marginBottom: '0.65rem' }}>
                Social Internship Program
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)',
                  color: 'var(--color-burgundy-900)',
                  marginBottom: '0.25rem',
                }}
              >
                Shresth Navnirman Foundation
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.9rem',
                  color: 'var(--color-charcoal-muted)',
                }}
              >
                <MapPin size={15} color="var(--color-gold-600)" />
                <span>Rural Development &amp; Community Outposts, India</span>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1rem',
                backgroundColor: 'rgba(207, 160, 67, 0.1)',
                border: '1px solid rgba(207, 160, 67, 0.3)',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--color-gold-700)',
                fontWeight: 600,
              }}
            >
              <Calendar size={15} />
              <span>June 15, 2026 — July 10, 2026</span>
            </div>
          </div>

          {/* Two-Stage Experience Structure */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-burgundy-800)',
                marginBottom: '1rem',
                letterSpacing: '0.02em',
              }}
            >
              Two-Phase Engagement Structure
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {/* Stage 1: Village Panchayat */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-cream-50)',
                  borderLeft: '3px solid var(--color-gold-500)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  <Building2 size={16} color="var(--color-burgundy-700)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.785rem',
                      color: 'var(--color-gold-700)',
                      fontWeight: 600,
                    }}
                  >
                    June 15 – June 30, 2026
                  </span>
                </div>
                <h5
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--color-burgundy-900)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Phase I: Village Panchayat Engagement
                </h5>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Direct interaction with local rural governance bodies to study village administration,
                  infrastructural needs, and civic mechanisms in rural areas.
                </p>
              </div>

              {/* Stage 2: NGO Foundation Outreaches */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-cream-50)',
                  borderLeft: '3px solid var(--color-burgundy-600)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  <HeartHandshake size={16} color="var(--color-burgundy-700)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.785rem',
                      color: 'var(--color-gold-700)',
                      fontWeight: 600,
                    }}
                  >
                    July 1 – July 10, 2026
                  </span>
                </div>
                <h5
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--color-burgundy-900)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Phase II: Foundation Social Programs
                </h5>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Structured collaboration on ground-level social development workflows, outreach
                  activities, and community welfare initiatives guided by NGO mentors.
                </p>
              </div>
            </div>
          </div>

          {/* Core Focus Themes */}
          <div>
            <h4
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-burgundy-800)',
                marginBottom: '1rem',
              }}
            >
              Key Themes &amp; Contribution Areas
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
              }}
            >
              {THEMES.map((th) => {
                const IconComp = th.icon;
                return (
                  <div
                    key={th.title}
                    style={{
                      padding: '1rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(74, 14, 23, 0.06)',
                      backgroundColor: 'var(--color-white)',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(74, 14, 23, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-burgundy-700)',
                        marginBottom: '0.65rem',
                      }}
                    >
                      <IconComp size={16} />
                    </div>

                    <div
                      style={{
                        fontSize: '0.925rem',
                        fontWeight: 600,
                        color: 'var(--color-burgundy-900)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {th.title}
                    </div>

                    <p style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
                      {th.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
