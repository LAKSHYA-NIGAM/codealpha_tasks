import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { safeCalculate, isValidExpression, tokenizeExpression } from '../calculator-engine.js';

describe('Calculator Engine Tests', () => {
  test('evaluates simple addition and subtraction', () => {
    assert.equal(safeCalculate('12 + 34'), 46);
    assert.equal(safeCalculate('100 - 35'), 65);
  });

  test('evaluates multiplication and division with precedence', () => {
    assert.equal(safeCalculate('2 + 3 * 4'), 14);
    assert.equal(safeCalculate('20 / 4 - 2'), 3);
  });

  test('evaluates expressions with parentheses', () => {
    assert.equal(safeCalculate('(2 + 3) * 4'), 20);
    assert.equal(safeCalculate('100 / (5 + 5)'), 10);
  });

  test('evaluates decimal calculations with precision rounding', () => {
    assert.equal(safeCalculate('0.1 + 0.2'), 0.3);
    assert.equal(safeCalculate('10.5 * 2.5'), 26.25);
  });

  test('handles division by zero safely', () => {
    assert.equal(safeCalculate('10 / 0'), 'Error: Div by 0');
  });

  test('handles percentage operations', () => {
    assert.equal(safeCalculate('50 % 7'), 1);
  });

  test('handles empty and null inputs safely', () => {
    assert.equal(safeCalculate(''), 0);
    assert.equal(safeCalculate('   '), 0);
    assert.equal(safeCalculate(null), 0);
  });

  test('rejects unsafe script injection or invalid characters', () => {
    assert.equal(isValidExpression('alert(1)'), false);
    assert.equal(isValidExpression('document.cookie'), false);
    assert.equal(isValidExpression('12 + 3; evil()'), false);
    assert.equal(safeCalculate('alert(1)'), 'Error');
  });

  test('validates balanced parentheses', () => {
    assert.equal(isValidExpression('(2 + 3'), false);
    assert.equal(isValidExpression('2 + 3)'), false);
    assert.equal(isValidExpression('((2 + 3) * 4)'), true);
  });

  test('tokenizes expression properly', () => {
    const tokens = tokenizeExpression('12.5 + 4 * (3 - 1)');
    assert.deepEqual(tokens, ['12.5', '+', '4', '*', '(', '3', '-', '1', ')']);
  });
});
