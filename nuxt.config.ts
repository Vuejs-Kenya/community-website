export default {
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
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
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
}
