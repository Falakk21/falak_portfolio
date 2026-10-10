import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import {
  Code2,
  Cpu,
  GraduationCap,
  Award,
  Binary,
  ArrowRight,
  FileText,
  Mail,
  Sparkles,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Editorial About Snapshot */}
      <section className="section section-tinted">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            {/* Portrait Frame */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', maxWidth: '340px', width: '100%' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: '12px -12px -12px 12px',
                    border: '1.5px solid var(--color-gold-500)',
                    borderRadius: '12px',
                    opacity: 0.6,
                  }}
                />
                <div
                  style={{
                    position: 'relative',
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
                    style={{ width: '100%', height: 'auto', aspectRatio: '4/5', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      padding: '0.75rem 1.25rem',
                      backgroundColor: 'var(--color-burgundy-800)',
                      borderTop: '1px solid rgba(223, 183, 90, 0.25)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ color: 'var(--color-cream-100)', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-serif)' }}>
                      Falak Baharwani
                    </span>
                    <span style={{ color: 'var(--color-gold-400)', fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 600 }}>
                      Chandigarh University
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Preview */}
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>
                <Sparkles size={14} /> Introduction
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  color: 'var(--color-burgundy-900)',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                Curious student engineer building practical foundations.
              </h2>
              <p style={{ marginBottom: '1.25rem', fontSize: '1.025rem' }}>
                Currently in Semester 3 pursuing a <strong>B.E. (Hons.) in Computer Science and Engineering</strong> with
                a focus area in <strong>Generative AI</strong>. I am enthusiastic about understanding how computing
                works from hardware instructions up to machine learning workflows.
              </p>
              <p style={{ marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                My journey balances technical rigor in C, C++, and Python with personal creative passions
                including reading, baking, and visual modeling.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/about"
                  className="btn btn-primary"
                  style={{ borderRadius: '6px' }}
                >
                  <span>Read Full Bio &amp; Interests</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/education"
                  className="btn btn-secondary"
                  style={{ borderRadius: '6px', backgroundColor: 'var(--color-white)' }}
                >
                  <GraduationCap size={16} />
                  <span>Academic Journey</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Project Spotlight */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Cpu size={15} /> Flagship Software
            </span>
            <h2 className="section-title">Featured Project</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Highlighted software demonstrating computer organization and instruction-level simulation.
            </p>
          </div>

          <div
            className="card-editorial"
            style={{
              maxWidth: '960px',
              margin: '0 auto 2.5rem auto',
              border: '1.5px solid rgba(207, 160, 67, 0.45)',
              padding: 'clamp(1.75rem, 4vw, 2.75rem)',
              background: 'linear-gradient(180deg, #FFFFFF 0%, var(--color-cream-50) 100%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <span className="badge badge-gold">
                <Cpu size={14} /> Featured 01 &bull; COA Architecture
              </span>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <span className="badge" style={{ backgroundColor: 'rgba(74, 14, 23, 0.06)' }}>React + Vite</span>
                <span className="badge" style={{ backgroundColor: 'rgba(74, 14, 23, 0.06)' }}>JavaScript</span>
              </div>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.6rem, 2.5vw, 2.15rem)',
                color: 'var(--color-burgundy-900)',
                marginBottom: '0.85rem',
              }}
            >
              Instruction Set Simulator
            </h3>

            <p style={{ marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
              A web-based computer architecture simulator that translates arithmetic expressions
              into four CPU instruction formats: <strong>Three-Address</strong>, <strong>Two-Address</strong>,
              <strong>One-Address (Accumulator)</strong>, and <strong>Zero-Address (Stack)</strong>. Features
              expression validation, postfix conversion, and instruction count optimization.
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(74, 14, 23, 0.08)',
              }}
            >
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link
                  to="/projects"
                  className="btn btn-primary"
                  style={{ borderRadius: '6px', fontSize: '0.9rem' }}
                >
                  <Code2 size={16} />
                  <span>View All Projects</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href="https://github.com/Falakk21/COA-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ borderRadius: '6px', fontSize: '0.9rem' }}
                >
                  <Github size={16} />
                  <span>GitHub Repo</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <span style={{ fontSize: '0.8rem', color: 'var(--color-gold-700)', fontFamily: 'var(--font-mono)' }}>
                Expression: (A+B)*(C-D)/E
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Callout: Number Systems Playground */}
      <section
        style={{
          backgroundColor: 'var(--color-burgundy-800)',
          color: 'var(--color-cream-100)',
          padding: 'clamp(3.5rem, 6vw, 5rem) 0',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(223, 183, 90, 0.15)',
                border: '1px solid rgba(223, 183, 90, 0.3)',
                color: 'var(--color-gold-400)',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
              }}
            >
              <Binary size={15} /> Interactive Web Application
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
                color: 'var(--color-cream-50)',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Number Systems Playground
            </h2>

            <p
              style={{
                color: 'rgba(250, 246, 238, 0.85)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                maxWidth: '680px',
                margin: '0 auto 2rem auto',
              }}
            >
              Try our bespoke computer architecture laboratory tool. Convert between Binary, Octal,
              Decimal, and Hexadecimal with arbitrary BigInt precision, mathematical steps, and history persistence.
            </p>

            <Link
              to="/playground"
              className="btn btn-gold"
              style={{
                padding: '0.95rem 2.25rem',
                fontSize: '1rem',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              <Binary size={18} />
              <span>Launch Number Systems Playground</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Key Highlights Grid (Education, Skills, Certifications, Internship) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <span style={{ color: 'var(--color-gold-500)' }}>&loz;</span> Explore Further
            </span>
            <h2 className="section-title">Portfolio Sections</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Navigate through the detailed sections to discover Falak&rsquo;s background,
              credentials, and resume.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Education Card */}
            <Link
              to="/education"
              className="card-editorial"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(74, 14, 23, 0.06)',
                    color: 'var(--color-burgundy-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <GraduationCap size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-burgundy-900)', marginBottom: '0.5rem' }}>
                  Education
                </h3>
                <p style={{ fontSize: '0.885rem', lineHeight: 1.6 }}>
                  B.E. (Hons.) in CSE with Generative AI focus at Chandigarh University, expected 2029.
                </p>
              </div>
              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: 'var(--color-burgundy-700)',
                }}
              >
                <span>View Timeline</span>
                <ArrowRight size={14} />
              </div>
            </Link>

            {/* Skills Card */}
            <Link
              to="/skills"
              className="card-editorial"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(74, 14, 23, 0.06)',
                    color: 'var(--color-burgundy-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Code2 size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-burgundy-900)', marginBottom: '0.5rem' }}>
                  Technical Skills
                </h3>
                <p style={{ fontSize: '0.885rem', lineHeight: 1.6 }}>
                  Categorized competencies in C, C++, Python, Web Development, Databases, Azure, and Git.
                </p>
              </div>
              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: 'var(--color-burgundy-700)',
                }}
              >
                <span>View Skills</span>
                <ArrowRight size={14} />
              </div>
            </Link>

            {/* Certifications Card */}
            <Link
              to="/certifications"
              className="card-editorial"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(74, 14, 23, 0.06)',
                    color: 'var(--color-burgundy-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Award size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-burgundy-900)', marginBottom: '0.5rem' }}>
                  Certifications
                </h3>
                <p style={{ fontSize: '0.885rem', lineHeight: 1.6 }}>
                  Microsoft Certified Azure Fundamentals AZ-900, AI-900, and UCMAS India 7th Rank honor.
                </p>
              </div>
              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: 'var(--color-burgundy-700)',
                }}
              >
                <span>View Certifications</span>
                <ArrowRight size={14} />
              </div>
            </Link>

            {/* Resume Card */}
            <Link
              to="/resume"
              className="card-editorial"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(74, 14, 23, 0.06)',
                    color: 'var(--color-burgundy-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <FileText size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-burgundy-900)', marginBottom: '0.5rem' }}>
                  Curriculum Vitae
                </h3>
                <p style={{ fontSize: '0.885rem', lineHeight: 1.6 }}>
                  Direct PDF document viewer and download option for Falak&rsquo;s official verified resume.
                </p>
              </div>
              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: 'var(--color-burgundy-700)',
                }}
              >
                <span>Preview Resume</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
