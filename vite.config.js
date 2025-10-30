// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: set base to your repository name for GitHub Pages project sites
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',   // <-- change to EXACTLY your repo name
})