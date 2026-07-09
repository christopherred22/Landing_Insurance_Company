export interface TiktokOEmbed {
  type: 'video' | 'rich' | string
  title?: string
  author_name?: string
  author_url?: string
  thumbnail_url?: string
}

// TikTok's public oEmbed endpoint is CORS-enabled and works for both video
// and profile URLs. Used to show a real preview (not just a raw link) in
// the admin panel before a link goes live.
export async function fetchTiktokOembed(url: string): Promise<TiktokOEmbed | null> {
  try {
    const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}
