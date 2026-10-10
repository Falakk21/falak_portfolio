import { useState } from 'react';
import { FileText, Download, ExternalLink, Eye, AlertCircle } from 'lucide-react';

export default function ResumeSection({ hideHeader = false }) {
  const resumeUrl = '/assets/Falak_Baharwani_Resume.pdf';
  const resumeFileName = 'Falak_Baharwani_Resume.pdf';
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section
      id="resume"
      className="section section-tinted"
      style={hideHeader ? { paddingTop: 'clamp(2rem, 4vw, 3.5rem)' } : undefined}
    >
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-eyebrow">
              <FileText size={15} /> Curriculum Vitae
            </span>
            <h2 className="section-title">Resume</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Complete academic and technical resume detailing coursework, foundational
              engineering skills, certifications, and project experience.
            </p>
          </div>
        )}

        {/* Action Header Banner */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto 2rem auto',
            backgroundColor: 'var(--color-burgundy-800)',
            borderRadius: '10px',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            border: '1px solid rgba(223, 183, 90, 0.25)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                backgroundColor: 'rgba(223, 183, 90, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-400)',
              }}
            >
              <FileText size={22} />
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  color: 'var(--color-cream-50)',
                  fontWeight: 600,
                }}
              >
                Falak_Baharwani_Resume.pdf
              </div>
              <div
                style={{
                  fontSize: '0.785rem',
                  color: 'rgba(250, 246, 238, 0.7)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Official PDF Document &bull; Verified Candidate Copy
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href={resumeUrl}
              download={resumeFileName}
              className="btn btn-gold"
              style={{
                borderRadius: '6px',
                padding: '0.75rem 1.45rem',
                fontSize: '0.885rem',
              }}
              title="Download official PDF resume"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold"
              style={{
                borderRadius: '6px',
                padding: '0.75rem 1.25rem',
                fontSize: '0.885rem',
              }}
              title="Open PDF directly in a new browser window"
            >
              <ExternalLink size={15} />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer Container */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            backgroundColor: 'var(--color-white)',
            borderRadius: '12px',
            border: '1px solid rgba(74, 14, 23, 0.12)',
            boxShadow: 'var(--shadow-hover)',
            overflow: 'hidden',
          }}
        >
          {/* Top Viewer Toolbar */}
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: 'var(--color-cream-200)',
              borderBottom: '1px solid rgba(74, 14, 23, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.825rem',
              color: 'var(--color-charcoal-muted)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Eye size={15} color="var(--color-burgundy-700)" />
              <span style={{ fontWeight: 600, color: 'var(--color-burgundy-800)' }}>
                Document Preview
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                PDF Embed Stream
              </span>
              <a
                href={resumeUrl}
                download={resumeFileName}
                style={{
                  color: 'var(--color-burgundy-700)',
                  fontWeight: 600,
                  fontSize: '0.785rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <Download size={13} />
                Download
              </a>
            </div>
          </div>

          {/* Iframe Viewport with Fallback */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '620px',
              height: '75vh',
              maxHeight: '920px',
              backgroundColor: '#525659',
            }}
          >
            <iframe
              src={`${resumeUrl}#toolbar=1&navpanes=0`}
              title="Falak Baharwani Resume PDF Viewer"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                display: 'block',
              }}
              onLoad={() => setIframeLoaded(true)}
            >
              {/* Fallback if iframe fails to render in browser */}
              <div
                style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  backgroundColor: 'var(--color-white)',
                  color: 'var(--color-charcoal)',
                }}
              >
                <AlertCircle size={36} color="var(--color-burgundy-700)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  PDF Viewer Unavailable
                </h4>
                <p style={{ maxWidth: '420px', margin: '0 auto 1.5rem auto', fontSize: '0.9rem' }}>
                  Your current mobile browser or security policy does not support inline PDF preview.
                  You can view or download the resume directly:
                </p>
                <a
                  href={resumeUrl}
                  download={resumeFileName}
                  className="btn btn-primary"
                >
                  <Download size={16} />
                  <span>Download Falak_Baharwani_Resume.pdf</span>
                </a>
              </div>
            </iframe>
          </div>

          {/* Mobile Fallback Footer Note */}
          <div
            style={{
              padding: '0.85rem 1.25rem',
              backgroundColor: 'var(--color-cream-50)',
              borderTop: '1px solid rgba(74, 14, 23, 0.06)',
              fontSize: '0.8rem',
              color: 'var(--color-charcoal-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span>
              Tip: If the embedded viewer does not display in mobile preview, tap <strong>Open in New Tab</strong> or <strong>Download</strong>.
            </span>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-burgundy-700)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <span>Direct Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
