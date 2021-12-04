<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
const Header = () =>
  import(/*webpackChunkName: "Header"*/ '@/components/Header')
const Footer = () =>
  import(/*webpackChunkName: "Footer"*/ '@/components/Footer')
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: calc(10px + 0.35vw);
  line-height: calc(0.25rem +1em);
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  background-color: aliceblue;
}
html:focus-within {
  scroll-behavior: smooth;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
