import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { validateEmail, validateContactForm } from '../contact-validator.js';

describe('Contact Form Validator Tests', () => {
  test('validates correct email formats', () => {
    assert.equal(validateEmail('test@example.com'), true);
    assert.equal(validateEmail('user.name+tag@domain.co.uk'), true);
    assert.equal(validateEmail('invalid-email'), false);
    assert.equal(validateEmail('missing@domain'), false);
    assert.equal(validateEmail(''), false);
    assert.equal(validateEmail(null), false);
  });

  test('validates complete valid contact form', () => {
    const result = validateContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, I would like to collaborate on an open source project!'
    });
    assert.equal(result.isValid, true);
    assert.equal(Object.keys(result.errors).length, 0);
  });

  test('flags short name and invalid email', () => {
    const result = validateContactForm({
      name: 'J',
      email: 'bad-email',
      message: 'Hello world!'
    });
    assert.equal(result.isValid, false);
    assert.ok(result.errors.name);
    assert.ok(result.errors.email);
  });

  test('flags short message below 10 characters', () => {
    const result = validateContactForm({
      name: 'Alice',
      email: 'alice@example.com',
      message: 'Hi'
    });
    assert.equal(result.isValid, false);
    assert.ok(result.errors.message);
  });
});
