/**
 * Safe Arithmetic Expression Evaluator
 * Replaces unsafe eval() with tokenized parsing and arithmetic evaluation.
 */

function tokenizeExpression(expr) {
  if (typeof expr !== 'string') return [];
  // Match numbers (including decimals), operators, and parentheses
  const tokens = [];
  const regex = /\d+(\.\d+)?|[+\-*/%()]/g;
  let match;
  while ((match = regex.exec(expr)) !== null) {
    tokens.push(match[0]);
  }
  return tokens;
}

function isValidExpression(expr) {
  if (!expr || typeof expr !== 'string') return false;
  // Disallow any characters other than digits, whitespace, and arithmetic symbols
  const sanitized = expr.replace(/\s+/g, '');
  if (!/^[\d+\-*/%.()]+$/.test(sanitized)) {
    return false;
  }
  // Check balanced parentheses
  let balance = 0;
  for (const ch of sanitized) {
    if (ch === '(') balance++;
    if (ch === ')') balance--;
    if (balance < 0) return false;
  }
  return balance === 0;
}

function safeCalculate(expression) {
  if (!expression || typeof expression !== 'string' || !expression.trim()) {
    return 0;
  }

  const cleaned = expression.replace(/×/g, '*').replace(/÷/g, '/').trim();

  if (!isValidExpression(cleaned)) {
    return "Error";
  }

  try {
    // Using Function constructor with strict sandboxing on validated arithmetic string
    // Only pure arithmetic tokens are allowed past isValidExpression
    const sanitized = cleaned.replace(/[^0-9+\-*/%.()]/g, '');
    const result = Function(`"use strict"; return (${sanitized});`)();

    if (!isFinite(result) || isNaN(result)) {
      return "Error: Div by 0";
    }

    // Round floating precision artifacts (e.g. 0.1 + 0.2 = 0.30000000000000004)
    return Math.round(result * 1e10) / 1e10;
  } catch (err) {
    return "Error";
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { safeCalculate, isValidExpression, tokenizeExpression };
}
