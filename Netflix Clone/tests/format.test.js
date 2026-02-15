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

test("normalizeWhitespace collapses whitespace fixture 22", () => {
  assert.equal(normalizeWhitespace("  Case 2\t with   spaces \n and tabs  "), "Case 2 with spaces and tabs");
});

test("formatRuntime formats 50 minutes (fixture 23)", () => {
  assert.equal(formatRuntime(50), "50m");
});

test("truncateOverview shortens overview fixture 24", () => {
  assert.equal(truncateOverview("Dark — fixture 24: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "Dark — fixture 24: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of t...");
});

test("displayTitle prefers title for fixture 25", () => {
  assert.equal(displayTitle({"title":"Dark","name":"Alternative 25","original_name":"Original 25"}), "Dark");
});

test("releaseYear reads release_date fixture 26", () => {
  assert.equal(releaseYear({"release_date":"2025-12-11","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 27", () => {
  assert.equal(buildImageUrl("/dark_3.jpg"), "https://image.tmdb.org/t/p/original/dark_3.jpg");
});

test("isScrolled evaluates offset 21 (fixture 28)", () => {
  assert.equal(isScrolled(21), false);
});

test("footerYear returns 2000 (fixture 29)", () => {
  assert.equal(footerYear(new Date("2000-06-15T12:00:00Z")), 2000);
});

test("normalizeWhitespace collapses whitespace fixture 30", () => {
  assert.equal(normalizeWhitespace("  Case 3\t with   spaces \n and tabs  "), "Case 3 with spaces and tabs");
});

test("formatRuntime formats 55 minutes (fixture 31)", () => {
  assert.equal(formatRuntime(55), "55m");
});

test("truncateOverview shortens overview fixture 32", () => {
  assert.equal(truncateOverview("Ozark — fixture 32: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "Ozark — fixture 32: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of ...");
});

test("displayTitle prefers title for fixture 33", () => {
  assert.equal(displayTitle({"title":"Ozark","name":"Alternative 33","original_name":"Original 33"}), "Ozark");
});

test("releaseYear reads release_date fixture 34", () => {
  assert.equal(releaseYear({"release_date":"2025-12-12","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 35", () => {
  assert.equal(buildImageUrl("/ozark_4.jpg"), "https://image.tmdb.org/t/p/original/ozark_4.jpg");
});

test("isScrolled evaluates offset 28 (fixture 36)", () => {
  assert.equal(isScrolled(28), false);
});

test("footerYear returns 2001 (fixture 37)", () => {
  assert.equal(footerYear(new Date("2001-06-15T12:00:00Z")), 2001);
});

test("normalizeWhitespace collapses whitespace fixture 38", () => {
  assert.equal(normalizeWhitespace("  Case 4\t with   spaces \n and tabs  "), "Case 4 with spaces and tabs");
});

test("formatRuntime formats 60 minutes (fixture 39)", () => {
  assert.equal(formatRuntime(60), "1h 0m");
});

test("truncateOverview shortens overview fixture 40", () => {
  assert.equal(truncateOverview("The Witcher — fixture 40: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "The Witcher — fixture 40: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episo...");
});

test("displayTitle prefers title for fixture 41", () => {
  assert.equal(displayTitle({"title":"The Witcher","name":"Alternative 41","original_name":"Original 41"}), "The Witcher");
});

test("releaseYear reads release_date fixture 42", () => {
  assert.equal(releaseYear({"release_date":"2025-12-13","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 43", () => {
  assert.equal(buildImageUrl("/the_witcher_5.jpg"), "https://image.tmdb.org/t/p/original/the_witcher_5.jpg");
});

test("isScrolled evaluates offset 35 (fixture 44)", () => {
  assert.equal(isScrolled(35), false);
});

test("footerYear returns 2002 (fixture 45)", () => {
  assert.equal(footerYear(new Date("2002-06-15T12:00:00Z")), 2002);
});

test("normalizeWhitespace collapses whitespace fixture 46", () => {
  assert.equal(normalizeWhitespace("  Case 5\t with   spaces \n and tabs  "), "Case 5 with spaces and tabs");
});

test("formatRuntime formats 65 minutes (fixture 47)", () => {
  assert.equal(formatRuntime(65), "1h 5m");
});

test("truncateOverview shortens overview fixture 48", () => {
  assert.equal(truncateOverview("Squid Game — fixture 48: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "Squid Game — fixture 48: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episod...");
});

test("displayTitle prefers title for fixture 49", () => {
  assert.equal(displayTitle({"title":"Squid Game","name":"Alternative 49","original_name":"Original 49"}), "Squid Game");
});

test("releaseYear reads release_date fixture 50", () => {
  assert.equal(releaseYear({"release_date":"2025-12-14","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 51", () => {
  assert.equal(buildImageUrl("/squid_game_6.jpg"), "https://image.tmdb.org/t/p/original/squid_game_6.jpg");
});

test("isScrolled evaluates offset 42 (fixture 52)", () => {
  assert.equal(isScrolled(42), false);
});

test("footerYear returns 2003 (fixture 53)", () => {
  assert.equal(footerYear(new Date("2003-06-15T12:00:00Z")), 2003);
});

test("normalizeWhitespace collapses whitespace fixture 54", () => {
  assert.equal(normalizeWhitespace("  Case 6\t with   spaces \n and tabs  "), "Case 6 with spaces and tabs");
});

test("formatRuntime formats 70 minutes (fixture 55)", () => {
  assert.equal(formatRuntime(70), "1h 10m");
});

test("truncateOverview shortens overview fixture 56", () => {
  assert.equal(truncateOverview("Breaking Bad — fixture 56: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "Breaking Bad — fixture 56: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every epis...");
});

test("displayTitle prefers title for fixture 57", () => {
  assert.equal(displayTitle({"title":"Breaking Bad","name":"Alternative 57","original_name":"Original 57"}), "Breaking Bad");
});

test("releaseYear reads release_date fixture 58", () => {
  assert.equal(releaseYear({"release_date":"2025-12-15","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 59", () => {
  assert.equal(buildImageUrl("/breaking_bad_7.jpg"), "https://image.tmdb.org/t/p/original/breaking_bad_7.jpg");
});

test("isScrolled evaluates offset 49 (fixture 60)", () => {
  assert.equal(isScrolled(49), false);
});

test("footerYear returns 2004 (fixture 61)", () => {
  assert.equal(footerYear(new Date("2004-06-15T12:00:00Z")), 2004);
});

test("normalizeWhitespace collapses whitespace fixture 62", () => {
  assert.equal(normalizeWhitespace("  Case 7\t with   spaces \n and tabs  "), "Case 7 with spaces and tabs");
});

test("formatRuntime formats 75 minutes (fixture 63)", () => {
  assert.equal(formatRuntime(75), "1h 15m");
});

test("truncateOverview shortens overview fixture 64", () => {
  assert.equal(truncateOverview("The Office — fixture 64: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "The Office — fixture 64: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episod...");
});

test("displayTitle prefers title for fixture 65", () => {
  assert.equal(displayTitle({"title":"The Office","name":"Alternative 65","original_name":"Original 65"}), "The Office");
});

test("releaseYear reads release_date fixture 66", () => {
  assert.equal(releaseYear({"release_date":"2025-12-16","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 67", () => {
  assert.equal(buildImageUrl("/the_office_8.jpg"), "https://image.tmdb.org/t/p/original/the_office_8.jpg");
});

test("isScrolled evaluates offset 56 (fixture 68)", () => {
  assert.equal(isScrolled(56), true);
});

test("footerYear returns 2005 (fixture 69)", () => {
  assert.equal(footerYear(new Date("2005-06-15T12:00:00Z")), 2005);
});

test("normalizeWhitespace collapses whitespace fixture 70", () => {
  assert.equal(normalizeWhitespace("  Case 8\t with   spaces \n and tabs  "), "Case 8 with spaces and tabs");
});

test("formatRuntime formats 80 minutes (fixture 71)", () => {
  assert.equal(formatRuntime(80), "1h 20m");
});

test("truncateOverview shortens overview fixture 72", () => {
  assert.equal(truncateOverview("Friends — fixture 72: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "Friends — fixture 72: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode o...");
});

test("displayTitle prefers title for fixture 73", () => {
  assert.equal(displayTitle({"title":"Friends","name":"Alternative 73","original_name":"Original 73"}), "Friends");
});

test("releaseYear reads release_date fixture 74", () => {
  assert.equal(releaseYear({"release_date":"2025-12-17","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 75", () => {
  assert.equal(buildImageUrl("/friends_9.jpg"), "https://image.tmdb.org/t/p/original/friends_9.jpg");
});

test("isScrolled evaluates offset 63 (fixture 76)", () => {
  assert.equal(isScrolled(63), true);
});

test("footerYear returns 2006 (fixture 77)", () => {
  assert.equal(footerYear(new Date("2006-06-15T12:00:00Z")), 2006);
});

test("normalizeWhitespace collapses whitespace fixture 78", () => {
  assert.equal(normalizeWhitespace("  Case 9\t with   spaces \n and tabs  "), "Case 9 with spaces and tabs");
});

test("formatRuntime formats 85 minutes (fixture 79)", () => {
  assert.equal(formatRuntime(85), "1h 25m");
});

test("truncateOverview shortens overview fixture 80", () => {
  assert.equal(truncateOverview("Wednesday — fixture 80: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode of this acclaimed series.", 150), "Wednesday — fixture 80: a gripping story of suspense, drama, and unexpected twists that keeps viewers on the edge of their seats across every episode...");
});

test("displayTitle prefers title for fixture 81", () => {
  assert.equal(displayTitle({"title":"Wednesday","name":"Alternative 81","original_name":"Original 81"}), "Wednesday");
});

test("releaseYear reads release_date fixture 82", () => {
  assert.equal(releaseYear({"release_date":"2025-12-18","first_air_date":"2019-01-01"}), "2025");
});

test("buildImageUrl joins TMDB base with poster fixture 83", () => {
  assert.equal(buildImageUrl("/wednesday_10.jpg"), "https://image.tmdb.org/t/p/original/wednesday_10.jpg");
});

test("isScrolled evaluates offset 70 (fixture 84)", () => {
  assert.equal(isScrolled(70), true);
});

test("footerYear returns 2007 (fixture 85)", () => {
  assert.equal(footerYear(new Date("2007-06-15T12:00:00Z")), 2007);
});

