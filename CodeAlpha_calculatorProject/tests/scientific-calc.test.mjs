import assert from 'node:assert';
import test from 'node:test';
import { factorial, sin, cos, tan, log10, ln } from '../scientific-calc.js';

test('scientific-calc: factorial computation', () => {
  assert.strictEqual(factorial(0), 1);
  assert.strictEqual(factorial(1), 1);
  assert.strictEqual(factorial(5), 120);
  assert.strictEqual(factorial(6), 720);
  assert.ok(isNaN(factorial(-3)));
});

test('scientific-calc: trigonometry in degrees', () => {
  assert.strictEqual(sin(0), 0);
  assert.strictEqual(sin(90), 1);
  assert.strictEqual(cos(0), 1);
  assert.strictEqual(cos(90), 0);
  assert.strictEqual(tan(45), 1);
  assert.ok(isNaN(tan(90)));
});

test('scientific-calc: logarithms with domain checks', () => {
  assert.strictEqual(log10(100), 2);
  assert.strictEqual(log10(1000), 3);
  assert.strictEqual(ln(Math.E), 1);
  assert.ok(isNaN(log10(0)));
  assert.ok(isNaN(ln(-5)));
});
