<template>
  <div class="container">
    <nav class="nav">
      <router-link class="nav-link" :to="{ name: 'Object' }">
        Object
      </router-link>
      <router-link class="nav-link" :to="{ name: 'Array' }">
        Array
      </router-link>
      <router-link class="nav-link" :to="{ name: 'Form' }">
        Form
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "bootstrap";
</style>
