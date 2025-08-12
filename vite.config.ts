import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Если сайт НЕ в корне домена, замени base на свой префикс, напр. '/react/'.
const BASE = '/'

export default defineConfig({
    plugins: [react()],
    base: BASE,
    build: {
        outDir: 'html/dist',     // билд ляжет рядом с index.php
        assetsDir: 'assets',     // js/css/img -> html/dist/assets/...
        emptyOutDir: true,
        manifest: true,          // нужен для index.php
        rollupOptions: {
            input: '/src/main.tsx' // точка входа
        }
    }
})

