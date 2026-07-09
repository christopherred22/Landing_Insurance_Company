import { supabase } from '@/lib/supabase'

const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml', 'image/gif']
const MAX_BYTES = 5 * 1024 * 1024 // 5MB

export async function uploadPublicFile(bucket: string, file: File): Promise<string> {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error('Unsupported file type. Use PNG, JPEG, WEBP, GIF, or SVG.')
  }
  if (file.size > MAX_BYTES) {
    throw new Error('Image is too large. Max size is 5MB.')
  }

  // Random name (not the original filename) so uploads can't be used to
  // guess/overwrite paths or inject path-traversal segments into storage.
  const ext = file.name.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '') || 'bin'
  const path = `${crypto.randomUUID()}.${ext}`
  const { error } = await supabase.storage.from(bucket).upload(path, file)
  if (error) throw error
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl
}

// Best-effort cleanup for replaced/removed images. Failures are swallowed —
// an orphaned file in storage is a non-issue, a thrown error here shouldn't
// block the DB update/delete that already succeeded.
export async function deletePublicFile(bucket: string, publicUrl: string): Promise<void> {
  const marker = `/object/public/${bucket}/`
  const idx = publicUrl.indexOf(marker)
  if (idx === -1) return
  const path = publicUrl.slice(idx + marker.length)
  try {
    await supabase.storage.from(bucket).remove([path])
  } catch {
    // ignore
  }
}
