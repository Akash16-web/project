import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/project/', // Change this to your repo name 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

