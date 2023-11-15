// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Certifique-se de que corresponde ao diretório especificado no "vercel.json"
  },
});
