import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '@/lib/supabase'

export function useRealtimeTable<T = Record<string, any>>(table: string, orderBy?: string) {
  const rows = ref<T[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function refetch() {
    let query = supabase.from(table).select('*')
    if (orderBy) query = query.order(orderBy)
    const { data, error: err } = await query
    if (err) {
      error.value = err.message
    } else {
      rows.value = (data ?? []) as T[]
    }
    loading.value = false
  }

  let channel: ReturnType<typeof supabase.channel> | null = null

  onMounted(() => {
    refetch()
    // Unique topic per subscriber: two components watching the same table
    // (e.g. Footer + an admin manager) would otherwise share one Supabase
    // channel object, and the second .on() call fails with "cannot add
    // postgres_changes callbacks after subscribe()".
    const topic = `public:${table}:${Math.random().toString(36).slice(2)}`
    channel = supabase
      .channel(topic)
      .on('postgres_changes', { event: '*', schema: 'public', table }, () => refetch())
      .subscribe()
  })

  onUnmounted(() => {
    if (channel) supabase.removeChannel(channel)
  })

  return { rows, loading, error, refetch }
}
