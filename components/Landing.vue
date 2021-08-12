<template>
  <div class="landing w-full bg-center bg-no-repeat bg-cover object-cover">
    <h3 class="text-5xl text-center pt-16 tracking-wider font-bold">
      Where Vue.js Developers connect, <br />
      Collaborate & Learn Together
    </h3>
    <div class="upcoming pt-20 text-center">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        class="
          py-2.5
          px-4
          text-xl
          rounded-md
          bg-black
          text-white
          hover:bg-white
          hover:text-black
        "
        >Upcoming Events</a
      >
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        class="
          py-2
          px-4
          ml-3
          text-xl
          rounded-md
          border-2 border-gray-900
          hover:text-white
          hover:border-white
        "
        >Join Us on Telegram</a
      >
    </div>
    <div
      class="
        subscription-form
        lg:w-2/5
        md:w-2/4
        sm:w-2/4
        sm:mt-11
        h-52
        bg-white
        flex
        rounded
        justify-center
        items-center
        shadow-lg
      "
    >
      <div class="text-center">
        <h2 class="text-2xl">
          Be The First To Know
        </h2>
        <p class="pb-3">
          Join our newsletter. 700 people already subscribed!
        </p>
        <form method="post" @submit.prevent="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            class="py-2 px-4 shadow-md mr-0 rounded-sm focus-none"
          />
          <button
            type="submit"
            class="py-2 px-4 bg-black text-white ml-0 shadow-md text-lg"
          >
            Subscribe
          </button>
          <p class="text-gray-500 py-3">No spam. Unsubscribe anytime</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
}
</script>

<style scoped>
.landing {
  background: url('../assets/img/vuejskenyahero.jpg');
  background-size: cover;
  height: 30rem;
}
.subscription-form {
  margin: 0 auto;
  margin-top: 7rem;
}
</style>
