/**
 * CodeAlpha Music Player Playlist Engine
 * Manages playlist queue, track navigation (next/prev), repeat modes, and Fisher-Yates shuffle.
 */

export class PlaylistEngine {
  constructor(tracks = []) {
    this.tracks = [...tracks];
    this.currentIndex = 0;
    this.repeatMode = 'all'; // 'none' | 'all' | 'one'
    this.isShuffled = false;
    this.originalOrder = [...tracks];
  }

  getCurrentTrack() {
    if (this.tracks.length === 0) return null;
    return this.tracks[this.currentIndex];
  }

  next() {
    if (this.tracks.length === 0) return null;

    if (this.repeatMode === 'one') {
      return this.getCurrentTrack();
    }

    if (this.currentIndex === this.tracks.length - 1) {
      if (this.repeatMode === 'all') {
        this.currentIndex = 0;
      } else {
        return null; // Reached end, playback stops
      }
    } else {
      this.currentIndex++;
    }

    return this.getCurrentTrack();
  }

  previous() {
    if (this.tracks.length === 0) return null;
    if (this.currentIndex === 0) {
      this.currentIndex = this.repeatMode === 'all' ? this.tracks.length - 1 : 0;
    } else {
      this.currentIndex--;
    }
    return this.getCurrentTrack();
  }

  shuffle() {
    if (this.tracks.length <= 1) return;
    const current = this.getCurrentTrack();

    // Fisher-Yates shuffle
    const shuffled = [...this.tracks];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    this.tracks = shuffled;
    this.isShuffled = true;
    // Keep current playing track at its new index
    this.currentIndex = this.tracks.findIndex((t) => t.id === current.id);
  }

  unshuffle() {
    const current = this.getCurrentTrack();
    this.tracks = [...this.originalOrder];
    this.isShuffled = false;
    this.currentIndex = this.tracks.findIndex((t) => t.id === current?.id);
  }
}

export function formatDuration(seconds) {
  const sec = Math.max(0, Math.floor(Number(seconds) || 0));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
