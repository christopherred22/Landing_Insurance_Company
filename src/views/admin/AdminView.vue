<template>
  <div class="admin-page">
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-mark">P</span>
        <span class="brand-name">Providence Admin</span>
      </div>

      <nav class="nav">
        <button :class="{ active: tab === 'tiktok' }" @click="tab = 'tiktok'">
          <span class="nav-icon">🎵</span> TikTok Links
        </button>
        <button :class="{ active: tab === 'banners' }" @click="tab = 'banners'">
          <span class="nav-icon">🖼️</span> Hero Banners
        </button>
        <button :class="{ active: tab === 'services' }" @click="tab = 'services'">
          <span class="nav-icon">🛡️</span> Manage Services
        </button>
        <button :class="{ active: tab === 'new-service' }" @click="tab = 'new-service'">
          <span class="nav-icon">➕</span> Create Service
        </button>
      </nav>

      <button class="logout-btn" @click="logout">Log out</button>
    </aside>

    <div class="content-area">
      <header class="topbar">
        <h1>{{ titles[tab] }}</h1>
      </header>

      <main class="admin-content">
        <TiktokLinksManager v-if="tab === 'tiktok'" />
        <BannerImagesManager v-else-if="tab === 'banners'" />
        <ServicesManager v-else-if="tab === 'services'" />
        <ServiceCreateManager v-else-if="tab === 'new-service'" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'
import TiktokLinksManager from './TiktokLinksManager.vue'
import BannerImagesManager from './BannerImagesManager.vue'
import ServicesManager from './ServicesManager.vue'
import ServiceCreateManager from './ServiceCreateManager.vue'

const router = useRouter()
const tab = ref<'tiktok' | 'banners' | 'services' | 'new-service'>('tiktok')

const titles: Record<typeof tab.value, string> = {
  tiktok: 'TikTok Links',
  banners: 'Hero Banners',
  services: 'Manage Services',
  'new-service': 'Create Service',
}

async function logout() {
  await supabase.auth.signOut()
  router.replace('/admin/login')
}
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  background: #f6f9fd;
  font-family: 'Poppins', sans-serif;
  display: flex;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
  background: #012148;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 24px;
  position: sticky;
  top: 0;
  height: 100vh;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #c62828;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.brand-name {
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.nav button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: #cbd5e0;
  padding: 12px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.nav button:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.nav button.active {
  background: #c62828;
  color: white;
}

.nav-icon {
  font-size: 16px;
}

.logout-btn {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: none;
  padding: 12px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.16);
}

.content-area {
  flex: 1;
  min-width: 0;
}

.topbar {
  background: white;
  border-bottom: 1px solid #e0e6ed;
  padding: 22px 32px;
}

.topbar h1 {
  font-size: 20px;
  color: #012148;
  margin: 0;
}

.admin-content {
  padding: 30px 32px;
  max-width: 1100px;
}

@media (max-width: 780px) {
  .admin-page {
    flex-direction: column;
  }

  .sidebar {
    width: auto;
    height: auto;
    position: static;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  .nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .admin-content {
    padding: 20px 16px;
  }

  .topbar {
    padding: 16px;
  }
}
</style>
