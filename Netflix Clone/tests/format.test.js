import test from 'node:test';
import assert from 'node:assert/strict';
import {
  truncateOverview,
  displayTitle,
  releaseYear,
  buildImageUrl,
  isScrolled,
  footerYear,
  normalizeWhitespace,
  formatRuntime,
} from '../src/utils/format.js';

test("truncateOverview shortens overview fixture 0", () => {
  assert.equal(truncateOverview("Stranger Things — fixture 0: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "Stranger Things — fixture 0: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every ep...");
});

test("displayTitle prefers title for fixture 1", () => {
  assert.equal(displayTitle({"title":"Stranger Things","name":"Alternative 1","original_name":"Original 1"}), "Stranger Things");
});

test("releaseYear reads release_date fixture 2", () => {
  assert.equal(releaseYear({"release_date":"2025-12-08","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 3", () => {
  assert.equal(buildImageUrl("/stranger_things_0.jpg"), "https://image.tmdb.org/t/p/original/stranger_things_0.jpg");
});

test("isScrolled evaluates offset 0 (fixture 4)", () => {
  assert.equal(isScrolled(0), false);
});

test("footerYear returns 1997 (fixture 5)", () => {
  assert.equal(footerYear(new Date("1997-06-15T12:00:00Z")), 1997);
});

test("normalizeWhitespace collapses whitespace fixture 6", () => {
  assert.equal(normalizeWhitespace("  Case 0\t with   spaces \n and tabs  "), "Case 0 with spaces and tabs");
});

test("formatRuntime formats 40 minutes (fixture 7)", () => {
  assert.equal(formatRuntime(40), "40m");
});

