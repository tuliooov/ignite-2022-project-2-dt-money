import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ignite-2022-project-2-dt-money',
  server: {
    port: 3000
  }
})
