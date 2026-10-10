import { Code2, Globe, BrainCircuit, Cloud, Database, Wrench } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    category: 'Programming',
    icon: Code2,
    description: 'Core systems, object-oriented programming, and computational scripting.',
    skills: [
      { name: 'C', note: 'Procedural & memory basics' },
      { name: 'C++', note: 'Object-oriented & DSA' },
      { name: 'Python', note: 'AI/ML scripting & data tools' },
      { name: 'Java', note: 'Currently learning', badge: 'Learning' },
    ],
  },
  {
    category: 'Web Development',
    icon: Globe,
    description: 'Frontend markup, styling, and interactive scripting.',
    skills: [
      { name: 'HTML', note: 'Semantic web layout' },
      { name: 'CSS', note: 'Responsive design & styling' },
      { name: 'JavaScript', note: 'ES6+ interactivity & DOM logic' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: BrainCircuit,
    description: 'Core concepts, algorithms, and generative models.',
    skills: [
      { name: 'Generative AI', note: 'Academic focus & concepts' },
      { name: 'Machine Learning', note: 'Foundations & workflows' },
    ],
  },
  {
    category: 'Cloud & Systems',
    icon: Cloud,
    description: 'Cloud infrastructure platforms and operating system environments.',
    skills: [
      { name: 'Microsoft Azure', note: 'AZ-900 Certified fundamentals' },
      { name: 'Linux', note: 'Command-line & filesystem environment' },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    description: 'Relational data modeling, querying, and storage management.',
    skills: [
      { name: 'MySQL', note: 'Relational queries & schema' },
      { name: 'MariaDB', note: 'Data storage & operations' },
    ],
  },
  {
    category: 'Tools & Workflows',
    icon: Wrench,
    description: 'Developer environments, version control, and experimentation tooling.',
    skills: [
      { name: 'Git', note: 'Version tracking' },
      { name: 'GitHub', note: 'Collaboration & repositories' },
      { name: 'Visual Studio Code', note: 'Primary code editor' },
      { name: 'Jupyter Notebook', note: 'Interactive experimentation' },
    ],
  },
];

export default function Skills({ hideHeader = false }) {
  return (
    <section
      id="skills"
      className="section section-tinted"
      style={hideHeader ? { paddingTop: 'clamp(2rem, 4vw, 3.5rem)' } : undefined}
    >
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-eyebrow">
              <span style={{ color: 'var(--color-gold-500)' }}>&loz;</span> Technical Competencies
            </span>
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Languages, frameworks, systems, and tools actively practiced through
              coursework, certifications, and hands-on projects.
            </p>
          </div>
        )}

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {SKILL_CATEGORIES.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.category}
                className="card-editorial"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.65rem',
                }}
              >
                <div>
                  {/* Category Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      marginBottom: '0.65rem',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(74, 14, 23, 0.06)',
                        border: '1px solid rgba(207, 160, 67, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-burgundy-700)',
                      }}
                    >
                      <IconComp size={19} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: '1.15rem',
                          color: 'var(--color-burgundy-900)',
                          marginBottom: '0.1rem',
                        }}
                      >
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.825rem',
                      color: 'var(--color-charcoal-muted)',
                      marginBottom: '1.25rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                    }}
                  >
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.55rem 0.85rem',
                          backgroundColor: 'var(--color-cream-50)',
                          borderRadius: '6px',
                          border: '1px solid rgba(74, 14, 23, 0.05)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontWeight: 600,
                              fontSize: '0.92rem',
                              color: 'var(--color-burgundy-800)',
                            }}
                          >
                            {skill.name}
                          </span>
                          {skill.badge && (
                            <span
                              style={{
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                padding: '0.15rem 0.5rem',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(207, 160, 67, 0.15)',
                                color: 'var(--color-gold-700)',
                                border: '1px solid rgba(207, 160, 67, 0.3)',
                              }}
                            >
                              {skill.badge}
                            </span>
                          )}
                        </div>

                        <span
                          style={{
                            fontSize: '0.785rem',
                            color: 'var(--color-charcoal-muted)',
                            fontStyle: 'italic',
                          }}
                        >
                          {skill.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle base indicator */}
                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px dashed rgba(74, 14, 23, 0.08)',
                    fontSize: '0.725rem',
                    color: 'var(--color-gold-700)',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {cat.skills.length} confirmed competencies
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
