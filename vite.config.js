import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  base: './', // التعديل ده بيخلي الملفات تتقرأ من أي مسار فرعي أوتوماتيكياً!
  plugins: [
    react(),
    tailwindcss(),
  ],
})
