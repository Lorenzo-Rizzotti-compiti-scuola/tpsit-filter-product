// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/main.scss'],
    modules: ['@nuxtjs/color-mode', "nuxt-icon"],
    colorMode: {
        dataValue: "bs-theme",
    }
})
