/**
 * CodeAlpha Audio Graphic Equalizer (EQ) Manager
 * Manages 5 frequency bands (60Hz, 250Hz, 1kHz, 4kHz, 16kHz) with gain clamping (-12dB to +12dB).
 */

export const EQ_PRESETS = {
  flat: [0, 0, 0, 0, 0],
  bassBoost: [8, 5, 1, 0, 0],
  vocal: [-2, 2, 6, 4, 1],
  rock: [5, 3, -1, 4, 6],
  electronic: [6, 4, 0, 3, 5],
};

export class Equalizer {
  constructor(initialPreset = 'flat') {
    this.bands = [60, 250, 1000, 4000, 16000]; // frequencies in Hz
    this.gains = [...(EQ_PRESETS[initialPreset] || EQ_PRESETS.flat)];
    this.currentPreset = initialPreset;
  }

  setBandGain(bandIndex, gainDb) {
    if (bandIndex < 0 || bandIndex >= this.bands.length) return false;
    const clamped = Math.max(-12, Math.min(12, Number(gainDb) || 0));
    this.gains[bandIndex] = clamped;
    this.currentPreset = 'custom';
    return true;
  }

  applyPreset(presetName) {
    if (!EQ_PRESETS[presetName]) return false;
    this.gains = [...EQ_PRESETS[presetName]];
    this.currentPreset = presetName;
    return true;
  }

  getGains() {
    return [...this.gains];
  }
}
