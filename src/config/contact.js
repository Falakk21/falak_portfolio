/**
 * Contact Form Configuration
 *
 * To connect your contact form to Formspree (or any form-backend):
 * 1. Register a free form at https://formspree.io
 * 2. Set your Formspree endpoint below or create a `.env` file with:
 *    VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
 * 3. The contact form will submit submissions directly to your email.
 *
 * If left empty, the contact form interface clearly explains that configuration
 * is required and provides direct clickable links to Falak's email and LinkedIn.
 */

export const CONTACT_CONFIG = {
  // Replace with your Formspree endpoint URL, or define VITE_FORMSPREE_ENDPOINT in your environment
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
  
  // Direct Contact Details
  email: 'baharwanifalak@gmail.com',
  phone: '+91 6265785185',
  phoneDisplay: '+91 62657 85185',
  location: 'Mohali, Punjab, India',
  linkedin: 'https://www.linkedin.com/in/falak-baharwani-36bb72377/',
  github: 'https://github.com/Falakk21',
};
