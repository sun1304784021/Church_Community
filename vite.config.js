import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages 仓库路径：https://sun1304784021.github.io/Church_Community/
  base: '/Church_Community/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
})
