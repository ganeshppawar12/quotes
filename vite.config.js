import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/s
export default defineConfig({
  plugins: [react()],
  base : "/quotes/",
})
