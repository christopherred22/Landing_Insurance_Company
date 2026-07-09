// Mirrors the `tiktok_links_url_is_tiktok` check constraint in supabase_setup.sql.
const TIKTOK_URL_RE = /^https:\/\/(www\.|vm\.|vt\.|m\.)?tiktok\.com\//i

export function isTiktokUrl(url: string): boolean {
  return TIKTOK_URL_RE.test(url.trim())
}

// Full video URLs (https://www.tiktok.com/@user/video/123...) carry the numeric
// video ID TikTok's iframe player needs. Short links (vm./vt.tiktok.com) and
// bare profile URLs don't — those redirect/resolve server-side, which a
// browser fetch can't follow due to CORS, so there's no ID to extract.
const VIDEO_ID_RE = /\/video\/(\d+)/

export function extractTiktokVideoId(url: string): string | null {
  return url.match(VIDEO_ID_RE)?.[1] ?? null
}
