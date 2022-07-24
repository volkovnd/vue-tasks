<template>
  <div class="container">
    <nav class="nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "bootstrap";
</style>
