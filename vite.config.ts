import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    reactRouter(), // ✅ 핵심: Remix-like file routing + Meta/Links 지원
    tsconfigPaths(),
  ],
});
