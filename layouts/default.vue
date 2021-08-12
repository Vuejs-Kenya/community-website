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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

:root{
  --green: #09B868;
  --red: #CA1215;
  --white: #ffffff;
  --black: #000000;
  --gray-100: #ECECEC;
}

html{
  font-family: 'Poppins', sans-serif;
}
</style>
