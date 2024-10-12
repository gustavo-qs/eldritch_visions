import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "Eldritch Visions",
        short_name: "Eldritch AR",
        description: "A simple AR app for visualizing D&D stuff",
        theme_color: '#ffffff',
        display: 'standalone',
        start_url: '/eldritch_visions/'
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 15 * 1024 ** 2,
        cleanupOutdatedCaches: false,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']
      },
      registerType: 'autoUpdate',
      injectRegister: 'auto'
    })
  ],
  define: {
    'process.env': {}
  },
  base: '/eldritch_visions/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
