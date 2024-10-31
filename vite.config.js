import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://xara-cio.github.io/react-rick-and-morty",
  plugins: [react()],
})
