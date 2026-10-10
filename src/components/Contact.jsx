import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Info, Loader2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { CONTACT_CONFIG } from '../config/contact';

export default function Contact({ hideHeader = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '', // Honeypot field for bot spam detection
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check: If bot filled the hidden gotcha field, abort silently
    if (formData._gotcha) {
      setStatus('success');
      setFeedbackMessage("Thank you for reaching out! I'll get back to you soon.");
      return;
    }

    if (!validate()) return;

    // Check if endpoint is configured
    const endpoint = CONTACT_CONFIG.formspreeEndpoint;
    if (!endpoint || endpoint.trim() === '' || endpoint.includes('your_form_id')) {
      setStatus('unconfigured');
      setFeedbackMessage(
        'Form service endpoint is not yet configured. Please set your Formspree endpoint in src/config/contact.js or via VITE_FORMSPREE_ENDPOINT in your .env file.'
      );
      return;
    }

    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage("Thank you for reaching out! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setFeedbackMessage(
          errorData.error || 'There was an issue sending your message. Please reach out directly via email.'
        );
      }
    } catch (err) {
      setStatus('error');
      setFeedbackMessage('Network error occurred. Please contact Falak directly at baharwanifalak@gmail.com.');
    }
  };

  return (
    <section
      id="contact"
      className="section"
      style={hideHeader ? { paddingTop: 'clamp(2rem, 4vw, 3.5rem)' } : undefined}
    >
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-eyebrow">
              <Mail size={15} /> Let's Connect
            </span>
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Whether inquiring about student internship opportunities, technical collaborations,
              or exploring ideas in AI, feel free to reach out.
            </p>
          </div>
        )}

        {/* 2-Column Layout: Direct Details + Contact Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
            maxWidth: '1060px',
            margin: '0 auto',
          }}
        >
          {/* Column 1: Direct Contact Cards */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-gold-700)',
                  marginBottom: '0.5rem',
                }}
              >
                Direct Channels
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)',
                  color: 'var(--color-burgundy-900)',
                  marginBottom: '0.75rem',
                }}
              >
                Let&rsquo;s talk technology.
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65 }}>
                I am actively interested in internships, research opportunities, and collaborative
                software projects. All emails and messages are answered promptly.
              </p>
            </div>

            {/* Direct Cards List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {/* Email */}
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="card-editorial"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.15rem',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(74, 14, 23, 0.08)',
                    color: 'var(--color-burgundy-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-700)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Primary Email
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-burgundy-900)' }}>
                    {CONTACT_CONFIG.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${CONTACT_CONFIG.phone}`}
                className="card-editorial"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.15rem',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(74, 14, 23, 0.08)',
                    color: 'var(--color-burgundy-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-700)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Phone / WhatsApp
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-burgundy-900)' }}>
                    {CONTACT_CONFIG.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div
                className="card-editorial"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.15rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(74, 14, 23, 0.08)',
                    color: 'var(--color-burgundy-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-700)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Location
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-burgundy-900)' }}>
                    {CONTACT_CONFIG.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <a
                href={CONTACT_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, borderRadius: '6px', fontSize: '0.85rem', padding: '0.75rem' }}
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={CONTACT_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, borderRadius: '6px', fontSize: '0.85rem', padding: '0.75rem' }}
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Column 2: Form */}
          <div
            className="card-editorial"
            style={{
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              backgroundColor: 'var(--color-white)',
              border: '1px solid rgba(74, 14, 23, 0.12)',
            }}
          >
            <h3
              style={{
                fontSize: '1.35rem',
                color: 'var(--color-burgundy-900)',
                marginBottom: '0.35rem',
              }}
            >
              Send A Message
            </h3>
            <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Fill out this form and I will respond to your email as soon as possible.
            </p>

            {/* Honest Feedback Notifications */}
            {status === 'success' && (
              <div
                role="alert"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(46, 204, 113, 0.12)',
                  border: '1px solid rgba(46, 204, 113, 0.35)',
                  color: '#1e7e34',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                }}
              >
                <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>{feedbackMessage}</div>
              </div>
            )}

            {status === 'unconfigured' && (
              <div
                role="alert"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(241, 196, 15, 0.12)',
                  border: '1px solid rgba(241, 196, 15, 0.4)',
                  color: '#7d5a00',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                }}
              >
                <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Form Endpoint Unconfigured:</strong> {feedbackMessage}
                  <div style={{ marginTop: '0.4rem' }}>
                    You can contact Falak directly at{' '}
                    <a
                      href={`mailto:${CONTACT_CONFIG.email}`}
                      style={{ textDecoration: 'underline', fontWeight: 600 }}
                    >
                      {CONTACT_CONFIG.email}
                    </a>.
                  </div>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div
                role="alert"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(231, 76, 60, 0.1)',
                  border: '1px solid rgba(231, 76, 60, 0.3)',
                  color: '#c0392b',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                }}
              >
                <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>{feedbackMessage}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot field (hidden from screen reader & visual users) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="_gotcha">Leave this empty</label>
                <input
                  type="text"
                  name="_gotcha"
                  id="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name Field */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--color-burgundy-900)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Your Name <span style={{ color: 'var(--color-burgundy-600)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Alex Sharma"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '6px',
                    border: errors.name ? '1px solid #E74C3C' : '1px solid rgba(74, 14, 23, 0.18)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem',
                    backgroundColor: 'var(--color-cream-50)',
                    color: 'var(--color-charcoal)',
                  }}
                />
                {errors.name && (
                  <p id="name-error" style={{ color: '#E74C3C', fontSize: '0.785rem', marginTop: '0.25rem' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--color-burgundy-900)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Email Address <span style={{ color: 'var(--color-burgundy-600)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., name@domain.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '6px',
                    border: errors.email ? '1px solid #E74C3C' : '1px solid rgba(74, 14, 23, 0.18)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem',
                    backgroundColor: 'var(--color-cream-50)',
                    color: 'var(--color-charcoal)',
                  }}
                />
                {errors.email && (
                  <p id="email-error" style={{ color: '#E74C3C', fontSize: '0.785rem', marginTop: '0.25rem' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--color-burgundy-900)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Subject <span style={{ color: 'var(--color-burgundy-600)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Internship Inquiry / Collaboration"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '6px',
                    border: errors.subject ? '1px solid #E74C3C' : '1px solid rgba(74, 14, 23, 0.18)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem',
                    backgroundColor: 'var(--color-cream-50)',
                    color: 'var(--color-charcoal)',
                  }}
                />
                {errors.subject && (
                  <p id="subject-error" style={{ color: '#E74C3C', fontSize: '0.785rem', marginTop: '0.25rem' }}>
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--color-burgundy-900)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Message <span style={{ color: 'var(--color-burgundy-600)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your note, question, or opportunity here..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '6px',
                    border: errors.message ? '1px solid #E74C3C' : '1px solid rgba(74, 14, 23, 0.18)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem',
                    backgroundColor: 'var(--color-cream-50)',
                    color: 'var(--color-charcoal)',
                    resize: 'vertical',
                  }}
                />
                {errors.message && (
                  <p id="message-error" style={{ color: '#E74C3C', fontSize: '0.785rem', marginTop: '0.25rem' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  borderRadius: '6px',
                  padding: '0.9rem',
                  opacity: status === 'submitting' ? 0.7 : 1,
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="spin-icon" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>

      <style>{`
        .spin-icon {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
