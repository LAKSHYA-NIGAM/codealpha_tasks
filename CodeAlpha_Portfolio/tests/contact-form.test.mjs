import assert from 'node:assert';
import test from 'node:test';
import { sanitizeInput, validateContactSubmission } from '../contact-form.js';

test('sanitizeInput: escapes HTML XSS special characters', () => {
  const xss = '<script>alert("hack")</script>';
  const clean = sanitizeInput(xss);
  assert.strictEqual(clean, '&lt;script&gt;alert(&quot;hack&quot;)&lt;/script&gt;');
});

test('validateContactSubmission: valid complete form submission', () => {
  const payload = {
    name: 'Lakshya Nigam',
    email: 'lakshya@example.com',
    message: 'Hello, I would like to discuss engineering opportunities.',
  };
  const res = validateContactSubmission(payload);
  assert.strictEqual(res.valid, true);
  assert.strictEqual(res.errors.length, 0);
  assert.strictEqual(res.sanitized.email, 'lakshya@example.com');
});

test('validateContactSubmission: catches missing or invalid fields', () => {
  const bad = { name: '', email: 'not-an-email', message: 'Hi' };
  const res = validateContactSubmission(bad);
  assert.strictEqual(res.valid, false);
  assert.strictEqual(res.errors.length, 3);
});
