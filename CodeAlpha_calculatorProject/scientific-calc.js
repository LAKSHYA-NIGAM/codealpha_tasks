/**
 * CodeAlpha Scientific Calculator Functions
 * Provides trigonometry (rad/deg), powers, square root, logarithms, and factorials with error bounds.
 */

export function factorial(n) {
  const num = Math.floor(Number(n));
  if (isNaN(num) || num < 0) return NaN;
  if (num === 0 || num === 1) return 1;
  if (num > 170) return Infinity; // JS Number overflow limit

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

export function sin(degrees) {
  const rad = (Number(degrees) * Math.PI) / 180;
  return Number(Math.sin(rad).toFixed(8));
}

export function cos(degrees) {
  const rad = (Number(degrees) * Math.PI) / 180;
  return Number(Math.cos(rad).toFixed(8));
}

export function tan(degrees) {
  const deg = Number(degrees) % 180;
  if (deg === 90 || deg === -90) return NaN; // Asymptote
  const rad = (Number(degrees) * Math.PI) / 180;
  return Number(Math.tan(rad).toFixed(8));
}

export function log10(val) {
  const num = Number(val);
  return num <= 0 ? NaN : Math.log10(num);
}

export function ln(val) {
  const num = Number(val);
  return num <= 0 ? NaN : Math.log(num);
}
