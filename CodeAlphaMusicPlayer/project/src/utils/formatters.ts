/**
 * Audio playback helper utilities and formatters
 */

export function formatTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds) || seconds < 0) {
    return '0:00';
  }
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function calculateProgress(currentTime: number, duration: number): number {
  if (isNaN(currentTime) || isNaN(duration) || duration <= 0) {
    return 0;
  }
  const percentage = (currentTime / duration) * 100;
  return Math.min(100, Math.max(0, percentage));
}

export function clampVolume(volume: number): number {
  if (isNaN(volume)) return 1;
  return Math.min(1, Math.max(0, volume));
}
