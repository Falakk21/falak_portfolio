import { Award, CheckCircle, FileText, ExternalLink, Trophy, Sparkles } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    examCode: 'AZ-900',
    issuer: 'Microsoft',
    issuedDate: 'November 19, 2025',
    verificationId: 'cuS7-uSez',
    certificatePdf: '/assets/Azure_Fundamentals.pdf',
    description: 'Validates foundational knowledge of cloud concepts, core Azure architectural services, security, governance, and cloud cost management.',
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    examCode: 'AI-900',
    issuer: 'Microsoft',
    issuedDate: 'April 28, 2026',
    certificatePdf: null,
    description: 'Demonstrates understanding of machine learning and artificial intelligence principles, computer vision, natural language processing, and Azure OpenAI/cognitive services.',
  },
];

const ACHIEVEMENTS = [
  {
    title: '7th Rank in India — UCMAS Mental Arithmetic',
    type: 'National Competition',
    badge: 'National Rank 7',
    description: 'Achieved 7th rank across India in the national UCMAS Mental Arithmetic Competition, recognizing exceptional speed, concentration, and mental mathematical calculation.',
  },
  {
    title: 'Recipient of the Bharti Airtel Scholarship',
    type: 'Merit-Based Scholarship',
    badge: 'Merit Scholar',
    description: 'Selected recipient of the Bharti Airtel Scholarship, a prestigious academic initiative that supports engineering education and covers hostel expenses.',
  },
];

export default function Certifications({ hideHeader = false }) {
  return (
    <section
      id="certifications"
      className="section section-tinted"
      style={hideHeader ? { paddingTop: 'clamp(2rem, 4vw, 3.5rem)' } : undefined}
    >
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-eyebrow">
              <Award size={15} /> Validated Credentials
            </span>
            <h2 className="section-title">Certifications &amp; Achievements</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Formal industry credentials and competitive recognitions earned through
              disciplined academic and technical effort.
            </p>
          </div>
        )}

        {/* ========================================================
            PART 1: INDUSTRY CERTIFICATIONS
            ======================================================== */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
            <Award size={18} color="var(--color-burgundy-700)" />
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-burgundy-900)' }}>
              Microsoft Professional Certifications
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.examCode}
                className="card-editorial"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--color-gold-500)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span className="badge badge-gold" style={{ fontFamily: 'var(--font-mono)' }}>
                      {cert.examCode}
                    </span>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--color-charcoal-muted)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      Issued: {cert.issuedDate}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--color-burgundy-900)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {cert.title}
                  </h4>

                  <div
                    style={{
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--color-burgundy-700)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Issuer: {cert.issuer}
                  </div>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {cert.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(74, 14, 23, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {cert.certificatePdf ? (
                    <a
                      href={cert.certificatePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        padding: '0.5rem 0.95rem',
                        fontSize: '0.825rem',
                        borderRadius: '4px',
                      }}
                    >
                      <FileText size={15} />
                      <span>View Original Certificate</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--color-charcoal-muted)',
                        fontStyle: 'italic',
                      }}
                    >
                      Verified Credential
                    </span>
                  )}

                  {cert.verificationId && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-gold-700)',
                      }}
                    >
                      ID: {cert.verificationId}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: CONFIRMED ACHIEVEMENTS
            ======================================================== */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
            <Trophy size={18} color="var(--color-gold-600)" />
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-burgundy-900)' }}>
              Honors &amp; Recognized Achievements
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.title}
                className="card-editorial"
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(207, 160, 67, 0.12)',
                    border: '1px solid rgba(207, 160, 67, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold-700)',
                    flexShrink: 0,
                  }}
                >
                  <Trophy size={22} />
                </div>

                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <span className="badge badge-gold" style={{ fontSize: '0.725rem' }}>
                      {ach.badge}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-burgundy-700)',
                        fontWeight: 600,
                      }}
                    >
                      {ach.type}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.15rem',
                      color: 'var(--color-burgundy-900)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {ach.title}
                  </h4>

                  <p style={{ fontSize: '0.885rem', lineHeight: 1.6 }}>
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
