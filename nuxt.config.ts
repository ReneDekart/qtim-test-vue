// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['@/assets/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/_colors.scss" as *;',
                },
            },
        },
    },
    modules: ['@nuxt/image', '@nuxt/ui'],
    image: {      
    },
    typescript: {
        typeCheck: true,
    },
    ssr: true,
});
