import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
   build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libs into their own chunk
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'], // if used
          'vendor-lenis': ['lenis'],          // if used
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})