import assert from 'node:assert';
import test from 'node:test';
import { Equalizer, EQ_PRESETS } from '../audio-equalizer.js';

test('Equalizer: loads presets and updates gains', () => {
  const eq = new Equalizer('bassBoost');
  assert.deepStrictEqual(eq.getGains(), EQ_PRESETS.bassBoost);
  assert.strictEqual(eq.currentPreset, 'bassBoost');

  eq.applyPreset('vocal');
  assert.deepStrictEqual(eq.getGains(), EQ_PRESETS.vocal);
});

test('Equalizer: clamps manual gain between -12dB and +12dB', () => {
  const eq = new Equalizer();
  eq.setBandGain(0, 20); // Exceeds upper limit
  assert.strictEqual(eq.gains[0], 12);
  assert.strictEqual(eq.currentPreset, 'custom');

  eq.setBandGain(1, -25); // Exceeds lower limit
  assert.strictEqual(eq.gains[1], -12);
});

test('Equalizer: ignores invalid band index', () => {
  const eq = new Equalizer();
  assert.strictEqual(eq.setBandGain(10, 5), false);
});
