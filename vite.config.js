import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // سطر استيراد التيلويند

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // تشغيل التيلويند داخل باقات الفيت
  ],
})
