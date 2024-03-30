// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-lodash",
    "nuxt-svgo"
  ],
  svgo: {
    autoImportPath: "./assets/images/icons",
    componentPrefix: "i",
  },
  app: {
    head: {
      title: "Trang tin tức",
      meta: [
        {
          charset: "utf8",
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          hid: "apple-mobile-web-app-status-bar-style",
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "apple-mobile-web-app-title", content: "Trang tin tức" },
        {
          hid: "description",
          content: "Trang tin tức",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700&display=swap",
        },
        { rel: "preconnect", href: `https://fonts.googleapis.com` },
        { rel: "preconnect", href: `https://fonts.gstatic.com` },
      ],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" },
      ],
    },
  },
  imports: {
    autoImport: true,
  },
  plugins: ["~/plugins/string-plugins.js"],
});
