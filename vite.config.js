import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: 'src/main.js',
            name: 'MyButtonWidget',
            fileName: (format) => `my-button-widget.${format}.js`,
            formats: ['umd']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        minify: 'terser'
    }
})