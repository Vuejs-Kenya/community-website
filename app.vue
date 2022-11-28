<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer v-if="$route.path !== `/`" />
  </div>
</template>
