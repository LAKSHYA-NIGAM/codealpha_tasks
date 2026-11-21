import assert from 'node:assert';
import test from 'node:test';
import { PlaylistEngine, formatDuration } from '../playlist-engine.js';

const mockTracks = [
  { id: '1', title: 'Track One', artist: 'Artist A' },
  { id: '2', title: 'Track Two', artist: 'Artist B' },
  { id: '3', title: 'Track Three', artist: 'Artist C' },
];

test('PlaylistEngine: next and previous in repeat all mode', () => {
  const engine = new PlaylistEngine(mockTracks);
  assert.strictEqual(engine.getCurrentTrack().title, 'Track One');

  assert.strictEqual(engine.next().title, 'Track Two');
  assert.strictEqual(engine.next().title, 'Track Three');
  // Loops back to first track
  assert.strictEqual(engine.next().title, 'Track One');

  // Previous from first loops to last track
  assert.strictEqual(engine.previous().title, 'Track Three');
});

test('PlaylistEngine: repeat one mode stays on current track', () => {
  const engine = new PlaylistEngine(mockTracks);
  engine.repeatMode = 'one';
  assert.strictEqual(engine.next().title, 'Track One');
  assert.strictEqual(engine.next().title, 'Track One');
});

test('PlaylistEngine: shuffle preserves track count and sets shuffled flag', () => {
  const engine = new PlaylistEngine(mockTracks);
  engine.shuffle();
  assert.strictEqual(engine.tracks.length, 3);
  assert.strictEqual(engine.isShuffled, true);

  engine.unshuffle();
  assert.strictEqual(engine.isShuffled, false);
  assert.deepStrictEqual(engine.tracks, mockTracks);
});

test('formatDuration: formats seconds into mm:ss', () => {
  assert.strictEqual(formatDuration(0), '0:00');
  assert.strictEqual(formatDuration(65), '1:05');
  assert.strictEqual(formatDuration(245), '4:05');
});
