// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
    app: {
        baseURL: '/alerts-app-nuxt3/',
        pageTransition: {
            name: 'fade-enter-transition',
            mode: 'out-in',
        },
    },

    build: {
        transpile: ['vue-toastification'],
    },

    routeRules: {
        '/pagesearch/pagecsr': { ssr: false },
    },

    css: ['@/assets/styles/main.scss'],

    modules: ['@pinia/nuxt'],

    plugins: ['@/plugins/emitter.ts'],

    test: {
        globals: true,
        environment: 'jsdom',
    },

    vite: {
        plugins: [
            svgLoader({
                svgoConfig: {
                    multipass: true,
                },
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "sass:math";
                        @import "@/assets/styles/variables";
                        @import "@/assets/styles/functions";
                        @import "@/assets/styles/mixins";
                        `,
                },
            },
        },
    },
});
