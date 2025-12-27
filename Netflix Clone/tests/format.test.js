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

test("truncateOverview shortens overview fixture 8", () => {
  assert.equal(truncateOverview("The Crown — fixture 8: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "The Crown — fixture 8: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode ...");
});

test("displayTitle prefers title for fixture 9", () => {
  assert.equal(displayTitle({"title":"The Crown","name":"Alternative 9","original_name":"Original 9"}), "The Crown");
});

test("releaseYear reads release_date fixture 10", () => {
  assert.equal(releaseYear({"release_date":"2025-12-09","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 11", () => {
  assert.equal(buildImageUrl("/the_crown_1.jpg"), "https://image.tmdb.org/t/p/original/the_crown_1.jpg");
});

test("isScrolled evaluates offset 7 (fixture 12)", () => {
  assert.equal(isScrolled(7), false);
});

test("footerYear returns 1998 (fixture 13)", () => {
  assert.equal(footerYear(new Date("1998-06-15T12:00:00Z")), 1998);
});

test("normalizeWhitespace collapses whitespace fixture 14", () => {
  assert.equal(normalizeWhitespace("  Case 1\t with   spaces \n and tabs  "), "Case 1 with spaces and tabs");
});

test("formatRuntime formats 45 minutes (fixture 15)", () => {
  assert.equal(formatRuntime(45), "45m");
});

test("truncateOverview shortens overview fixture 16", () => {
  assert.equal(truncateOverview("Money Heist — fixture 16: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "Money Heist — fixture 16: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episo...");
});

test("displayTitle prefers title for fixture 17", () => {
  assert.equal(displayTitle({"title":"Money Heist","name":"Alternative 17","original_name":"Original 17"}), "Money Heist");
});

test("releaseYear reads release_date fixture 18", () => {
  assert.equal(releaseYear({"release_date":"2025-12-10","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 19", () => {
  assert.equal(buildImageUrl("/money_heist_2.jpg"), "https://image.tmdb.org/t/p/original/money_heist_2.jpg");
});

test("isScrolled evaluates offset 14 (fixture 20)", () => {
  assert.equal(isScrolled(14), false);
});

test("footerYear returns 1999 (fixture 21)", () => {
  assert.equal(footerYear(new Date("1999-06-15T12:00:00Z")), 1999);
});

