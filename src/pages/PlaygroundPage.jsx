import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  BASES,
  convertNumber,
  validateInput,
} from '../utils/numberSystems';
import {
  Binary,
  ArrowRightLeft,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  BookOpen,
  History,
  Trash2,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Info,
  Layers,
  HelpCircle,
} from 'lucide-react';

const PRESET_EXAMPLES = [
  { label: 'Decimal 255', input: '255', src: 10, tgt: 16 },
  { label: 'Binary 110101', input: '110101', src: 2, tgt: 10 },
  { label: 'Hex 1A3F', input: '1A3F', src: 16, tgt: 2 },
  { label: 'Octal 755 (chmod)', input: '755', src: 8, tgt: 2 },
  { label: 'Hex FF.8 (Fraction)', input: 'FF.8', src: 16, tgt: 10 },
];

const LOCAL_STORAGE_KEY = 'fb_ns_converter_history_v1';

export default function PlaygroundPage() {
  const [inputVal, setInputVal] = useState('');
  const [srcBase, setSrcBase] = useState(10);
  const [tgtBase, setTgtBase] = useState(2);
  const [resultData, setResultData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [showSteps, setShowSteps] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);

  // Load history from localStorage safely
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setHistory(parsed.slice(0, 10));
        }
      }
    } catch (e) {
      console.warn('localStorage not accessible or corrupt', e);
    }
  }, []);

  // Save history to localStorage
  const saveToHistory = (entry) => {
    try {
      const updated = [entry, ...history.filter(h => !(h.input === entry.input && h.srcBase === entry.srcBase && h.tgtBase === entry.tgtBase))].slice(0, 10);
      setHistory(updated);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  const clearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {}
  };

  // Perform conversion
  const handleConvert = (customInput = null, customSrc = null, customTgt = null) => {
    const raw = customInput !== null ? customInput : inputVal;
    const sBase = customSrc !== null ? customSrc : srcBase;
    const tBase = customTgt !== null ? customTgt : tgtBase;

    setErrorMsg('');
    setCopied(false);

    const res = convertNumber(raw, sBase, tBase);
    if (!res.success) {
      setErrorMsg(res.error);
      setResultData(null);
      return;
    }

    setResultData(res);

    // Save into history
    saveToHistory({
      id: Date.now().toString(),
      input: raw.trim(),
      srcBase: sBase,
      tgtBase: tBase,
      result: res.result,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
  };

  // Swap Bases
  const handleSwap = () => {
    const oldSrc = srcBase;
    const oldTgt = tgtBase;
    setSrcBase(oldTgt);
    setTgtBase(oldSrc);

    // If current result exists, seed input with previous result
    if (resultData && resultData.result) {
      setInputVal(resultData.result);
      handleConvert(resultData.result, oldTgt, oldSrc);
    } else {
      handleConvert(inputVal, oldTgt, oldSrc);
    }
  };

  // Reset / Clear
  const handleClear = () => {
    setInputVal('');
    setResultData(null);
    setErrorMsg('');
    setShowSteps(false);
  };

  // Copy result
  const handleCopyResult = async (textToCopy) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard copy failed', err);
    }
  };

  // Load preset example
  const handleLoadExample = (example) => {
    setInputVal(example.input);
    setSrcBase(example.src);
    setTgtBase(example.tgt);
    handleConvert(example.input, example.src, example.tgt);
  };

  return (
    <div className="playground-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, padding: 'clamp(2.5rem, 5vw, 4.5rem) 0' }}>
        <div className="container">
          
          {/* Back link & Eyebrow */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-burgundy-700)',
                textDecoration: 'none',
              }}
              className="back-home-link"
            >
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </Link>

            <span
              className="badge badge-gold"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.785rem' }}
            >
              COA Lab Interactive Tool &bull; BigInt Engine
            </span>
          </div>

          {/* Page Heading */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <div className="section-eyebrow">
              <Binary size={16} /> Computer Organization &amp; Architecture
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)',
                color: 'var(--color-burgundy-900)',
                lineHeight: 1.15,
                marginBottom: '0.75rem',
              }}
            >
              Number Systems Playground
            </h1>
            <div className="section-divider" />
            <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal-muted)' }}>
              Complete bi-directional converter across all 12 permutations of <strong>Binary (2)</strong>,{' '}
              <strong>Octal (8)</strong>, <strong>Decimal (10)</strong>, and <strong>Hexadecimal (16)</strong>.
              Engineered with arbitrary integer precision and mathematical step-by-step breakdown.
            </p>
          </div>

          {/* Quick Preset Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2.5rem',
            }}
          >
            <span style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)', fontWeight: 600, marginRight: '0.35rem' }}>
              Quick Presets:
            </span>
            {PRESET_EXAMPLES.map((ex) => (
              <button
                key={ex.label}
                type="button"
                onClick={() => handleLoadExample(ex)}
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.785rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid rgba(74, 14, 23, 0.15)',
                  backgroundColor: 'var(--color-white)',
                  color: 'var(--color-burgundy-800)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  transition: 'all var(--transition-fast)',
                }}
                className="preset-btn"
              >
                {ex.label}
              </button>
            ))}
          </div>

          {/* Converter Workbench Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
              marginBottom: '3.5rem',
            }}
          >
            {/* Left Card: Input & Base Selectors */}
            <div
              className="card-editorial"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                boxShadow: 'var(--shadow-card)',
                border: '1.5px solid rgba(74, 14, 23, 0.12)',
              }}
            >
              <h2
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-burgundy-900)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Layers size={18} color="var(--color-gold-600)" />
                <span>Conversion Parameters</span>
              </h2>

              {/* Source & Target Base Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: '0.75rem',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                {/* Source Base Selector */}
                <div>
                  <label
                    htmlFor="src-base-select"
                    style={{
                      display: 'block',
                      fontSize: '0.785rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-burgundy-800)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    From Base
                  </label>
                  <select
                    id="src-base-select"
                    value={srcBase}
                    onChange={(e) => setSrcBase(Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(74, 14, 23, 0.2)',
                      backgroundColor: 'var(--color-cream-50)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--color-burgundy-900)',
                      cursor: 'pointer',
                    }}
                  >
                    {Object.values(BASES).map((b) => (
                      <option key={b.radix} value={b.radix}>
                        {b.name} (Base {b.radix})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Swap Button */}
                <button
                  type="button"
                  onClick={handleSwap}
                  aria-label="Swap source and target base"
                  style={{
                    marginTop: '1.25rem',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(74, 14, 23, 0.08)',
                    border: '1px solid rgba(207, 160, 67, 0.4)',
                    color: 'var(--color-burgundy-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                  }}
                  className="swap-btn"
                  title="Swap bases"
                >
                  <ArrowRightLeft size={17} />
                </button>

                {/* Target Base Selector */}
                <div>
                  <label
                    htmlFor="tgt-base-select"
                    style={{
                      display: 'block',
                      fontSize: '0.785rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-burgundy-800)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    To Base
                  </label>
                  <select
                    id="tgt-base-select"
                    value={tgtBase}
                    onChange={(e) => setTgtBase(Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(74, 14, 23, 0.2)',
                      backgroundColor: 'var(--color-cream-50)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--color-burgundy-900)',
                      cursor: 'pointer',
                    }}
                  >
                    {Object.values(BASES).map((b) => (
                      <option key={b.radix} value={b.radix}>
                        {b.name} (Base {b.radix})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Number Input Field */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <label
                    htmlFor="number-input"
                    style={{
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      color: 'var(--color-burgundy-900)',
                    }}
                  >
                    Enter {BASES[srcBase].name} Value
                  </label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-muted)', fontFamily: 'var(--font-mono)' }}>
                    Valid: [{BASES[srcBase].chars}]
                  </span>
                </div>

                <input
                  type="text"
                  id="number-input"
                  value={inputVal}
                  onChange={(e) => {
                    setInputVal(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleConvert();
                  }}
                  placeholder={`e.g. ${srcBase === 2 ? '10101' : srcBase === 8 ? '755' : srcBase === 10 ? '255' : '1A3F'}`}
                  aria-invalid={!!errorMsg}
                  aria-describedby={errorMsg ? 'conv-error' : undefined}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '6px',
                    border: errorMsg ? '1.5px solid #E74C3C' : '1px solid rgba(74, 14, 23, 0.25)',
                    backgroundColor: 'var(--color-cream-50)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--color-burgundy-900)',
                  }}
                />

                {/* Error Message Feedback */}
                {errorMsg && (
                  <div
                    id="conv-error"
                    style={{
                      marginTop: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#C0392B',
                      fontSize: '0.825rem',
                      fontWeight: 500,
                    }}
                  >
                    <Info size={15} />
                    <span>{errorMsg}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons: Convert & Clear */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => handleConvert()}
                  className="btn btn-primary"
                  style={{ flex: 2, padding: '0.85rem', borderRadius: '6px' }}
                >
                  <Sparkles size={17} />
                  <span>Convert Value</span>
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.85rem', borderRadius: '6px' }}
                  title="Clear input and result"
                >
                  <RotateCcw size={16} />
                  <span>Clear</span>
                </button>
              </div>
            </div>

            {/* Right Card: Result Showcase & Steps Toggle */}
            <div
              className="card-editorial"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                backgroundColor: 'var(--color-burgundy-800)',
                color: 'var(--color-cream-100)',
                border: '2px solid rgba(223, 183, 90, 0.45)',
                boxShadow: 'var(--shadow-hover)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.15rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.785rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-gold-300)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                    }}
                  >
                    Target Output
                  </span>
                  <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>
                    {BASES[tgtBase].name} (Base {tgtBase})
                  </span>
                </div>

                {resultData && resultData.result && (
                  <button
                    type="button"
                    onClick={() => handleCopyResult(resultData.result)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '5px',
                      backgroundColor: copied ? 'rgba(46, 204, 113, 0.25)' : 'rgba(223, 183, 90, 0.2)',
                      border: copied ? '1px solid #2ECC71' : '1px solid var(--color-gold-400)',
                      color: copied ? '#2ECC71' : 'var(--color-gold-300)',
                      fontSize: '0.785rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                    }}
                    title="Copy result to clipboard"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? 'Copied!' : 'Copy Result'}</span>
                  </button>
                )}
              </div>

              {/* Main Result Display Box (White in middle, high contrast) */}
              <div
                style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  border: '1.5px solid rgba(207, 160, 67, 0.35)',
                  minHeight: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  wordBreak: 'break-all',
                  marginBottom: '1.5rem',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.16)',
                }}
              >
                {resultData && resultData.result ? (
                  <>
                    <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'clamp(1.75rem, 3.8vw, 2.5rem)',
                          fontWeight: 700,
                          color: 'var(--color-burgundy-900)',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {resultData.result}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          fontFamily: 'var(--font-mono)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(74, 14, 23, 0.08)',
                          color: 'var(--color-burgundy-700)',
                          border: '1px solid rgba(74, 14, 23, 0.16)',
                        }}
                      >
                        Base {tgtBase}
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: '0.825rem',
                        color: 'var(--color-charcoal-muted)',
                        fontFamily: 'var(--font-mono)',
                        borderTop: '1px solid rgba(74, 14, 23, 0.08)',
                        paddingTop: '0.5rem',
                      }}
                    >
                      Input: <strong>{inputVal}</strong> ({BASES[srcBase].name}) &rarr; Converted to <strong>{resultData.result}</strong> ({BASES[tgtBase].name})
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '0.75rem 0' }}>
                    <div
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--color-burgundy-800)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Ready for conversion
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)' }}>
                      Enter a {BASES[srcBase].name} number on the left and click <strong>&ldquo;Convert Value&rdquo;</strong> to view the output.
                    </div>
                  </div>
                )}
              </div>

              {/* Show Steps Toggle Button */}
              {resultData && resultData.steps && resultData.steps.length > 0 && (
                <div>
                  <button
                    type="button"
                    onClick={() => setShowSteps(!showSteps)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(223, 183, 90, 0.12)',
                      border: '1px solid rgba(223, 183, 90, 0.35)',
                      color: 'var(--color-gold-300)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <BookOpen size={16} />
                      <span>{showSteps ? 'Hide Mathematical Steps' : 'Show Mathematical Steps'}</span>
                    </span>
                    {showSteps ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ========================================================
              MATHEMATICAL EXPLANATION STEPS (COLLAPSIBLE)
              ======================================================== */}
          {showSteps && resultData && resultData.steps && (
            <div
              className="card-editorial"
              style={{
                marginBottom: '3.5rem',
                backgroundColor: 'var(--color-white)',
                border: '1.5px solid rgba(207, 160, 67, 0.4)',
                boxShadow: 'var(--shadow-card)',
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                animation: 'fadeInSteps 300ms ease-out',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(74, 14, 23, 0.08)',
                  marginBottom: '1.5rem',
                }}
              >
                <BookOpen size={22} color="var(--color-burgundy-700)" />
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-burgundy-900)' }}>
                    Mathematical Conversion Breakdown
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)' }}>
                    Rigorous positional notation and architecture algorithms verified for Base {srcBase} &rarr; Base {tgtBase}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {resultData.steps.map((st, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.25rem',
                      borderRadius: '8px',
                      backgroundColor: 'var(--color-cream-50)',
                      borderLeft: '4px solid var(--color-gold-500)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--color-gold-700)',
                        marginBottom: '0.35rem',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {st.method || `Stage ${idx + 1}`}
                    </div>

                    <h4
                      style={{
                        fontSize: '1.15rem',
                        color: 'var(--color-burgundy-900)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {st.title}
                    </h4>

                    {st.content && (
                      <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        {st.content}
                      </p>
                    )}

                    {st.calculation && (
                      <div
                        style={{
                          backgroundColor: 'var(--color-white)',
                          padding: '0.85rem 1rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(74, 14, 23, 0.1)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.925rem',
                          color: 'var(--color-burgundy-800)',
                          margin: '0.75rem 0',
                          overflowX: 'auto',
                        }}
                      >
                        {st.calculation}
                      </div>
                    )}

                    {/* Direct Bit Groups Table if available */}
                    {st.groups && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.65rem',
                          margin: '0.75rem 0',
                        }}
                      >
                        {st.groups.map((g, gIdx) => (
                          <div
                            key={gIdx}
                            style={{
                              backgroundColor: 'var(--color-burgundy-800)',
                              color: 'var(--color-cream-100)',
                              borderRadius: '6px',
                              padding: '0.5rem 0.85rem',
                              textAlign: 'center',
                              fontFamily: 'var(--font-mono)',
                              border: '1px solid var(--color-gold-500)',
                            }}
                          >
                            <div style={{ fontSize: '0.8rem', color: 'rgba(250, 246, 238, 0.7)' }}>{g.slice}</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-gold-400)' }}>&darr; {g.val}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Division rows table if available */}
                    {st.divisionRows && (
                      <div style={{ margin: '0.75rem 0', overflowX: 'auto' }}>
                        <table
                          style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '0.85rem',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          <thead>
                            <tr style={{ backgroundColor: 'rgba(74, 14, 23, 0.08)', textAlign: 'left' }}>
                              <th style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid rgba(74, 14, 23, 0.15)' }}>Quotient Result</th>
                              <th style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid rgba(74, 14, 23, 0.15)' }}>Remainder</th>
                              <th style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid rgba(74, 14, 23, 0.15)' }}>Base {tgtBase} Digit</th>
                            </tr>
                          </thead>
                          <tbody>
                            {st.divisionRows.map((r, rIdx) => (
                              <tr key={rIdx} style={{ borderBottom: '1px solid rgba(74, 14, 23, 0.06)' }}>
                                <td style={{ padding: '0.45rem 0.75rem' }}>&divide; {tgtBase} = {r.quotient}</td>
                                <td style={{ padding: '0.45rem 0.75rem', color: 'var(--color-burgundy-700)', fontWeight: 600 }}>{r.remainder}</td>
                                <td style={{ padding: '0.45rem 0.75rem', color: 'var(--color-gold-700)', fontWeight: 700 }}>{r.symbol}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {st.explanation && (
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-muted)', marginTop: '0.5rem' }}>
                        {st.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              CONVERSION HISTORY (LAST 10 PERSISTED ENTRIES)
              ======================================================== */}
          <div
            className="card-editorial"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              backgroundColor: 'var(--color-white)',
              border: '1px solid rgba(74, 14, 23, 0.1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(74, 14, 23, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <History size={18} color="var(--color-burgundy-700)" />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-burgundy-900)' }}>
                  Conversion History (Last 10)
                </h3>
              </div>

              {history.length > 0 && (
                <button
                  type="button"
                  onClick={clearHistory}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(231, 76, 60, 0.3)',
                    backgroundColor: 'rgba(231, 76, 60, 0.06)',
                    color: '#C0392B',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                  title="Clear history from local storage"
                >
                  <Trash2 size={13} />
                  <span>Clear History</span>
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', fontStyle: 'italic', margin: 0 }}>
                No past conversions stored yet. Converted values are automatically remembered here across browser sessions.
              </p>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {history.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-cream-50)',
                      border: '1px solid rgba(74, 14, 23, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: 'var(--color-charcoal-muted)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)' }}>
                        {BASES[item.srcBase]?.name} &rarr; {BASES[item.tgtBase]?.name}
                      </span>
                      <span>{item.timestamp}</span>
                    </div>

                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-burgundy-900)' }}>
                      <span style={{ color: 'var(--color-charcoal-muted)' }}>{item.input}</span>
                      <span style={{ color: 'var(--color-gold-600)', margin: '0 6px' }}>=</span>
                      <strong style={{ color: 'var(--color-burgundy-800)' }}>{item.result}</strong>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setInputVal(item.input);
                          setSrcBase(item.srcBase);
                          setTgtBase(item.tgtBase);
                          handleConvert(item.input, item.srcBase, item.tgtBase);
                        }}
                        style={{
                          flex: 1,
                          padding: '0.3rem',
                          fontSize: '0.72rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(74, 14, 23, 0.15)',
                          backgroundColor: 'var(--color-white)',
                          color: 'var(--color-burgundy-800)',
                          cursor: 'pointer',
                        }}
                      >
                        Reuse Input
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopyResult(item.result)}
                        style={{
                          padding: '0.3rem 0.65rem',
                          fontSize: '0.72rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(207, 160, 67, 0.3)',
                          backgroundColor: 'rgba(207, 160, 67, 0.1)',
                          color: 'var(--color-gold-700)',
                          cursor: 'pointer',
                        }}
                        title="Copy converted result"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />

      <style>{`
        .back-home-link:hover {
          color: var(--color-gold-600) !important;
          transform: translateX(-2px);
        }
        .preset-btn:hover {
          border-color: var(--color-gold-500) !important;
          background-color: var(--color-burgundy-800) !important;
          color: var(--color-gold-300) !important;
        }
        .swap-btn:hover {
          background-color: var(--color-burgundy-800) !important;
          color: var(--color-gold-300) !important;
          transform: rotate(180deg);
        }
        @keyframes fadeInSteps {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
