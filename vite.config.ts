import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: ['emotory-pwa-logo-192.png', 'emotory-pwa-logo-512.png'],
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fastly\.jsdelivr\.net\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'external-fonts',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
      manifest: {
        name: 'Emotory',
        short_name: 'Emotory',
        description: '아동 감정 동화',
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          { src: 'emotory-pwa-logo-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'emotory-pwa-logo-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          {
            src: 'emotory-pwa-logo-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
})
