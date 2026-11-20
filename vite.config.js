import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  
  server: {
    allowedHosts: ['5tydm5-5173.csb.app'], // Add your host here
  },
});
