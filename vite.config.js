import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/layout/components',
      '@utils': '/src/ui/components',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
