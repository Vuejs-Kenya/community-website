<template>
  <div class="landing w-full bg-center bg-no-repeat bg-cover object-cover">
    <p class="text-5xl text-center pt-16 tracking-wider">
      Where Vue.js Developers connect, <br />
    </p>
    <p class="text-5xl text-center pt-3 tracking-wider">
      Collaborate & Learn Together
    </p>
    <div class="upcoming pt-20 text-center">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        class="py-2.5 px-4 text-xl rounded-md bg-black text-white hover:bg-white hover:text-black"
        >Upcoming Events</a
      >
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        class="py-2 px-4 ml-3 text-xl rounded-md border-2 border-gray-900 hover:text-white hover:border-white"
        >Join Our Telegram</a
      >
    </div>
    <div
      class="subscription-form lg:w-2/5 md:w-2/4 sm:w-2/4 sm:mt-11 h-52 bg-white flex rounded justify-center items-center shadow-2xl"
    >
      <!-- be the first to know section -->
      <div class="text-center text-black">
        <h2 class="text-2xl font-bold tracking-wider leading-10">
          Be The First To Know
        </h2>
        <p class="tracking-wid text-xl leading-10">
          Join our newsletter. 700 people already subscribed !
        </p>
        <form method="post" @submit.prevent="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            class="py-2 px-4 shadow-lg mr-0 rounded-sm focus-none"
          />
          <button
            type="submit"
            class="py-2 px-4 bg-black text-white ml-0 shadow-xl text-lg rounded"
          >
            Subscribe
          </button>
          <p class="text-gray-400 py-3">No spam. Unsubscribe anytime</p>
        </form>
      </div>
      <!-- end of be the first to know section -->
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
  background-image: url('../assets/img/vuejskenyahero.jpg');
  box-shadow: inset 0 0 0 1000px rgba(9, 184, 104, 0.82);
  height: 30rem;
}
.subscription-form {
  margin: 0 auto;
  margin-top: 7rem;
}
</style>
