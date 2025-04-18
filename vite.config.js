import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [vue(), cssInjectedByJsPlugin()],
    build: {
        lib: {
            entry: 'src/main.js',
            name: 'MyButtonWidgetLib',
            fileName: (format) => `my-button-widget.${format}.js`,
            formats: ['umd'],
        },
        rollupOptions: {
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
        cssCodeSplit: false,
        minify: 'terser',
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production')
    }
})