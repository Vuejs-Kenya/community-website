<template>
  <div>
    <Landing />
    <Joinus />
  </div>
</template>

<script>
const Landing = () =>
  import(/*webpackChunkName: "Landing"*/ '@/components/Landing')
const Joinus = () =>
  import(/*webpackChunkName: "Joinus"*/ '@/components/Joinus')
export default {
  components: {
    Landing,
    Joinus,
  },
}
</script>