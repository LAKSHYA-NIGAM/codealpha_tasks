/**
 * CodeAlpha Portfolio Contact Form Sanitizer & Validator
 * Validates names, emails, subject length, and escapes potential XSS injection characters.
 */

export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export function validateContactSubmission(formData) {
  const errors = [];
  if (!formData || typeof formData !== 'object') {
    return { valid: false, errors: ['Invalid submission payload'] };
  }

  const name = typeof formData.name === 'string' ? formData.name.trim() : '';
  const email = typeof formData.email === 'string' ? formData.email.trim() : '';
  const message = typeof formData.message === 'string' ? formData.message.trim() : '';

  if (name.length < 2) {
    errors.push('Name must be at least 2 characters long.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push('A valid email address is required.');
  }

  if (message.length < 10) {
    errors.push('Message must contain at least 10 characters.');
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitized: {
      name: sanitizeInput(name),
      email: email.toLowerCase(),
      message: sanitizeInput(message),
    },
  };
}
