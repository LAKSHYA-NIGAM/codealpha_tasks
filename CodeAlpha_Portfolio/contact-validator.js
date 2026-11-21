/**
 * Contact Form Validator
 * Validates name, email, and message inputs before dispatching.
 */

function validateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email.trim());
}

function validateContactForm({ name, email, message }) {
  const errors = {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long.";
  }

  if (!validateEmail(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validateEmail, validateContactForm };
}
