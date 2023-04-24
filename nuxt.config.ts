export default {
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss','@nuxtjs/color-mode'],
  content: {
    highlight: {
      theme: {
        default: 'material-palenight',
        dark: 'github-dark',
      },
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
    },
  },
  colorMode: {
    classSuffix: ''
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
}
