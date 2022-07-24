<template>
  <div class="container">
    <nav class="nav">
      <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "bootstrap";
</style>
