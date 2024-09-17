import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Répertoire de sortie des fichiers de build
  },
  resolve: {
    alias: {
      '@': '/src',  // Alias pour faciliter les imports depuis le dossier 'src'
    },
  },
})
