// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://54.191.47.252',
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
      },
    },
  },
});