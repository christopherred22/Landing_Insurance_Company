import { describe, it, expect } from 'vitest'
import { isTiktokUrl, extractTiktokVideoId } from './validators'

describe('isTiktokUrl', () => {
  it('accepts real TikTok URLs', () => {
    expect(isTiktokUrl('https://www.tiktok.com/@someuser')).toBe(true)
    expect(isTiktokUrl('https://tiktok.com/@someuser')).toBe(true)
    expect(isTiktokUrl('https://vm.tiktok.com/ZMabc123/')).toBe(true)
    expect(isTiktokUrl('https://vt.tiktok.com/ZMabc123/')).toBe(true)
  })

  it('rejects non-TikTok or spoofed URLs', () => {
    expect(isTiktokUrl('https://www.instagram.com/someuser')).toBe(false)
    expect(isTiktokUrl('https://tiktok.com.evil.com/@someuser')).toBe(false)
    expect(isTiktokUrl('https://evil.com/tiktok.com')).toBe(false)
    expect(isTiktokUrl('http://www.tiktok.com/@someuser')).toBe(false)
    expect(isTiktokUrl('not a url')).toBe(false)
  })
})

describe('extractTiktokVideoId', () => {
  it('extracts the numeric ID from a full video URL', () => {
    expect(extractTiktokVideoId('https://www.tiktok.com/@scout2015/video/6718335390845095173')).toBe(
      '6718335390845095173',
    )
  })

  it('returns null for profile URLs and short links', () => {
    expect(extractTiktokVideoId('https://www.tiktok.com/@scout2015')).toBe(null)
    expect(extractTiktokVideoId('https://vm.tiktok.com/ZMabc123/')).toBe(null)
  })
})
