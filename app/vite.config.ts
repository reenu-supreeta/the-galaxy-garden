import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configures Vite with React and Tailwind CSS support.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
