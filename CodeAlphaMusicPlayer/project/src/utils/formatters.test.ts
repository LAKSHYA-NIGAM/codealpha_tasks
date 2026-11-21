import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { formatTime, calculateProgress, clampVolume } from './formatters.ts';

describe('Audio Player Utility Formatters', () => {
  test('formatTime formats valid seconds correctly', () => {
    assert.equal(formatTime(0), '0:00');
    assert.equal(formatTime(45), '0:45');
    assert.equal(formatTime(65), '1:05');
    assert.equal(formatTime(3599), '59:59');
  });

  test('formatTime handles invalid, negative, and NaN inputs safely', () => {
    assert.equal(formatTime(-10), '0:00');
    assert.equal(formatTime(NaN), '0:00');
    assert.equal(formatTime(Infinity), '0:00');
  });

  test('calculateProgress calculates accurate percentages', () => {
    assert.equal(calculateProgress(30, 60), 50);
    assert.equal(calculateProgress(0, 100), 0);
    assert.equal(calculateProgress(100, 100), 100);
  });

  test('calculateProgress handles zero or negative duration safely', () => {
    assert.equal(calculateProgress(10, 0), 0);
    assert.equal(calculateProgress(10, -5), 0);
    assert.equal(calculateProgress(NaN, 100), 0);
  });

  test('calculateProgress clamps values beyond 100%', () => {
    assert.equal(calculateProgress(120, 100), 100);
  });

  test('clampVolume keeps values in 0.0 - 1.0 range', () => {
    assert.equal(clampVolume(0.5), 0.5);
    assert.equal(clampVolume(-0.2), 0);
    assert.equal(clampVolume(1.5), 1);
    assert.equal(clampVolume(NaN), 1);
  });
});
