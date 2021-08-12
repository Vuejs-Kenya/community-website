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
</style>
