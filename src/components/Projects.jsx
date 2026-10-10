import { useState } from 'react';
import { ExternalLink, Cpu, ShieldAlert, ShoppingBag, ArrowRight, CheckCircle2, Layers, Terminal } from 'lucide-react';
import { Github } from './Icons';

const COA_SAMPLE_INSTRUCTIONS = {
  threeAddress: [
    'ADD R1, A, B    ; R1 = A + B',
    'SUB R2, C, D    ; R2 = C - D',
    'MUL R3, R1, R2  ; R3 = R1 * R2',
    'DIV X,  R3, E   ; X  = R3 / E',
  ],
  twoAddress: [
    'MOV R1, A       ; R1 = A',
    'ADD R1, B       ; R1 = R1 + B',
    'MOV R2, C       ; R2 = C',
    'SUB R2, D       ; R2 = R2 - D',
    'MUL R1, R2      ; R1 = R1 * R2',
    'DIV R1, E       ; R1 = R1 / E',
    'MOV X,  R1      ; X  = R1',
  ],
  oneAddress: [
    'LOAD  A         ; AC = A',
    'ADD   B         ; AC = AC + B',
    'STORE T1        ; T1 = AC',
    'LOAD  C         ; AC = C',
    'SUB   D         ; AC = AC - D',
    'MUL   T1        ; AC = AC * T1',
    'DIV   E         ; AC = AC / E',
    'STORE X         ; X  = AC',
  ],
  zeroAddress: [
    'PUSH A          ; Push A onto stack',
    'PUSH B          ; Push B onto stack',
    'ADD             ; Pop A, B -> Push (A+B)',
    'PUSH C          ; Push C',
    'PUSH D          ; Push D',
    'SUB             ; Pop C, D -> Push (C-D)',
    'MUL             ; Pop -> Push ((A+B)*(C-D))',
    'PUSH E          ; Push E',
    'DIV             ; Pop -> Push Result',
    'POP  X          ; Store into variable X',
  ],
};

export default function Projects({ hideHeader = false }) {
  const [selectedFormat, setSelectedFormat] = useState('threeAddress');

  return (
    <section
      id="projects"
      className="section"
      style={hideHeader ? { paddingTop: 'clamp(2rem, 4vw, 3.5rem)' } : undefined}
    >
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-eyebrow">
              <span style={{ color: 'var(--color-gold-500)' }}>&loz;</span> Engineering Portfolio
            </span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Practical software projects developed to explore computer architecture,
              web utility heuristics, and procedural systems programming.
            </p>
          </div>
        )}

        {/* ========================================================
            PROJECT 1: INSTRUCTION SET SIMULATOR (FEATURED PROMINENCE)
            ======================================================== */}
        <div
          className="card-editorial"
          style={{
            marginBottom: '3rem',
            border: '1.5px solid rgba(207, 160, 67, 0.45)',
            boxShadow: 'var(--shadow-card)',
            background: 'linear-gradient(180deg, #FFFFFF 0%, var(--color-cream-50) 100%)',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
          }}
        >
          {/* Top Badge Banner */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="badge badge-gold" style={{ fontSize: '0.825rem' }}>
                <Cpu size={14} /> Featured Project 01
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.785rem',
                  color: 'var(--color-burgundy-700)',
                  fontWeight: 600,
                }}
              >
                Computer Organization &amp; Architecture
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ backgroundColor: 'rgba(74, 14, 23, 0.06)', color: 'var(--color-burgundy-800)' }}>
                React + Vite
              </span>
              <span className="badge" style={{ backgroundColor: 'rgba(74, 14, 23, 0.06)', color: 'var(--color-burgundy-800)' }}>
                JavaScript
              </span>
              <span className="badge" style={{ backgroundColor: 'rgba(74, 14, 23, 0.06)', color: 'var(--color-burgundy-800)' }}>
                CSS
              </span>
            </div>
          </div>

          {/* Grid: Details on Left, Interactive Format Visualizer on Right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center',
            }}
          >
            {/* Left: Project Details */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                  color: 'var(--color-burgundy-900)',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                Instruction Set Simulator
              </h3>

              <p style={{ marginBottom: '1.25rem', fontSize: '1.025rem' }}>
                An educational Computer Organization and Architecture web application that demonstrates
                how arithmetic expressions are parsed, converted into postfix notation, and systematically
                translated into four fundamental CPU instruction formats.
              </p>

              {/* Key Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={17} color="var(--color-gold-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-charcoal)' }}>
                    <strong>Four CPU Formats:</strong> Simulates Three-Address, Two-Address, One-Address (Accumulator), and Zero-Address (Stack) instruction sets.
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={17} color="var(--color-gold-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-charcoal)' }}>
                    <strong>Expression Parser:</strong> Validates uppercase variable inputs (A&ndash;Z) and evaluates operator precedence.
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={17} color="var(--color-gold-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-charcoal)' }}>
                    <strong>Postfix &amp; Metrics:</strong> Displays intermediate postfix form alongside exact instruction count analysis for each format.
                  </span>
                </div>
              </div>

              {/* Verified GitHub Action Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a
                  href="https://github.com/Falakk21/COA-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ borderRadius: '6px' }}
                >
                  <Github size={17} />
                  <span>View Repository</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right: Architecture Simulator Preview & Format Switcher */}
            <div
              style={{
                backgroundColor: 'var(--color-burgundy-900)',
                borderRadius: '10px',
                border: '1px solid rgba(223, 183, 90, 0.3)',
                padding: '1.5rem',
                color: 'var(--color-cream-100)',
                boxShadow: 'var(--shadow-hover)',
              }}
            >
              {/* Terminal Title Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(223, 183, 90, 0.2)',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E74C3C' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F1C40F' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2ECC71' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--color-gold-300)',
                      marginLeft: '0.5rem',
                    }}
                  >
                    COA Instruction Architecture
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'rgba(250, 246, 238, 0.6)',
                  }}
                >
                  Expression: (A+B)*(C-D)/E
                </div>
              </div>

              {/* Format Switcher Pills */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0.35rem',
                  marginBottom: '1rem',
                }}
              >
                {[
                  { id: 'threeAddress', label: '3-Addr' },
                  { id: 'twoAddress', label: '2-Addr' },
                  { id: 'oneAddress', label: '1-Addr (AC)' },
                  { id: 'zeroAddress', label: '0-Addr (Stack)' },
                ].map((fmt) => {
                  const active = selectedFormat === fmt.id;
                  return (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setSelectedFormat(fmt.id)}
                      style={{
                        padding: '0.45rem 0.25rem',
                        fontSize: '0.725rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        borderRadius: '4px',
                        border: active
                          ? '1px solid var(--color-gold-400)'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: active ? 'rgba(207, 160, 67, 0.22)' : 'rgba(255, 255, 255, 0.05)',
                        color: active ? 'var(--color-gold-300)' : 'rgba(250, 246, 238, 0.7)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        textAlign: 'center',
                      }}
                    >
                      {fmt.label}
                    </button>
                  );
                })}
              </div>

              {/* Generated Instruction Set Display */}
              <div
                style={{
                  backgroundColor: 'rgba(20, 3, 5, 0.8)',
                  borderRadius: '6px',
                  padding: '1rem',
                  border: '1px solid rgba(74, 14, 23, 0.6)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.825rem',
                  minHeight: '210px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--color-gold-400)',
                      marginBottom: '0.65rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Generated Sequence ({COA_SAMPLE_INSTRUCTIONS[selectedFormat].length} instructions):
                  </div>
                  {COA_SAMPLE_INSTRUCTIONS[selectedFormat].map((line, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.2rem 0',
                        color: line.includes(';') ? 'rgba(250, 246, 238, 0.95)' : 'var(--color-gold-300)',
                        display: 'flex',
                        gap: '0.75rem',
                      }}
                    >
                      <span style={{ color: 'rgba(250, 246, 238, 0.3)', width: '18px', textAlign: 'right' }}>
                        {idx + 1}
                      </span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.72rem',
                    color: 'rgba(250, 246, 238, 0.55)',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Postfix: AB+CD-*E/</span>
                  <span style={{ color: 'var(--color-gold-400)' }}>Format: {selectedFormat.replace('Address', '-Address')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PROJECTS 2 & 3: GRID SHOWCASE
            ======================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* PROJECT 2: PHISHING LINK DETECTOR */}
          <div
            className="card-editorial"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
              >
                <span className="badge badge-burgundy">
                  <ShieldAlert size={14} /> Project 02
                </span>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <span className="badge" style={{ backgroundColor: 'rgba(74, 14, 23, 0.05)' }}>HTML</span>
                  <span className="badge" style={{ backgroundColor: 'rgba(74, 14, 23, 0.05)' }}>CSS</span>
                  <span className="badge" style={{ backgroundColor: 'rgba(74, 14, 23, 0.05)' }}>JavaScript</span>
                </div>
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  color: 'var(--color-burgundy-900)',
                  marginBottom: '0.75rem',
                }}
              >
                Phishing Link Detector
              </h3>

              <p style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                A client-side security utility created to evaluate user-submitted web links for
                potentially suspicious characteristics using targeted heuristic rules.
              </p>

              {/* Heuristic inspection points */}
              <div
                style={{
                  backgroundColor: 'var(--color-cream-50)',
                  border: '1px solid rgba(74, 14, 23, 0.07)',
                  borderRadius: '6px',
                  padding: '0.95rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-burgundy-700)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Verified Detection Heuristics:
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-charcoal-muted)',
                  }}
                >
                  <li>&bull; Flags unencrypted <code>http://</code> protocol prefixes.</li>
                  <li>&bull; Identifies deceptive <code>@</code> user-info address obfuscation.</li>
                  <li>&bull; Analyzes suspicious URL length thresholds (&gt;60 chars).</li>
                  <li>&bull; Scans for social engineering keywords (<em>free</em>, <em>win</em>, <em>gift</em>).</li>
                </ul>
              </div>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(74, 14, 23, 0.08)' }}>
              <a
                href="https://github.com/Falakk21/PHISHING-LINK-DETECTOR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', borderRadius: '6px' }}
              >
                <Github size={16} />
                <span>View Repository</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* PROJECT 3: C SHOP BILLING SYSTEM */}
          <div
            className="card-editorial"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
              >
                <span className="badge badge-burgundy">
                  <ShoppingBag size={14} /> Project 03
                </span>
                <span className="badge badge-gold">
                  Language: C
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  color: 'var(--color-burgundy-900)',
                  marginBottom: '0.75rem',
                }}
              >
                C Shop Billing System
              </h3>

              <p style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                A menu-driven retail inventory and billing application developed in procedural C
                for managing product records and generating purchase invoices for small stores.
              </p>

              {/* Verified operations */}
              <div
                style={{
                  backgroundColor: 'var(--color-cream-50)',
                  border: '1px solid rgba(74, 14, 23, 0.07)',
                  borderRadius: '6px',
                  padding: '0.95rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-burgundy-700)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Verified Source Functionality:
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-charcoal-muted)',
                  }}
                >
                  <li>&bull; <strong>Item Management:</strong> Add, update, delete, and list catalog items.</li>
                  <li>&bull; <strong>Billing Engine:</strong> Computes quantities, unit rates, and totals.</li>
                  <li>&bull; <strong>File Storage:</strong> Persists inventory data to disk files for reuse.</li>
                  <li>&bull; <strong>CLI Workflow:</strong> Clean interactive command-line terminal menu.</li>
                </ul>
              </div>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(74, 14, 23, 0.08)' }}>
              <a
                href="https://github.com/Falakk21/shop-billing-management-system-c"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', borderRadius: '6px' }}
              >
                <Github size={16} />
                <span>View Repository</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
