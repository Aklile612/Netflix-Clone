// Pure presentation helpers extracted from the Netflix clone UI.
// Kept separate from React components so they can be unit tested directly.

export function truncateOverview(value, maxLength) {
  if (typeof value !== 'string') return value;
  return value.length > maxLength ? value.slice(0, maxLength - 1) + '...' : value;
}

export function displayTitle(movie = {}) {
  return movie.title || movie.name || movie.original_name || '';
}

export function releaseYear(movie = {}) {
  const date = movie.release_date || movie.first_air_date || '';
  return date ? date.slice(0, 4) : '';
}

export function buildImageUrl(path, base = 'https://image.tmdb.org/t/p/original') {
  return path ? `${base}${path}` : base;
}

export function isScrolled(scrollY, threshold = 50) {
  return scrollY > threshold;
}

export function footerYear(date = new Date()) {
  return date.getFullYear();
}

export function normalizeWhitespace(value = '') {
  return String(value).replace(/\s+/g, ' ').trim();
}

export function formatRuntime(minutes) {
  if (!Number.isFinite(minutes)) return '';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours ? `${hours}h ${mins}m` : `${mins}m`;
}
