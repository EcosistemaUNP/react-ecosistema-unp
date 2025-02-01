import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'
import dtsPlugin from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dtsPlugin({ include: ['lib'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    copyPublicDir: false
  },
})
