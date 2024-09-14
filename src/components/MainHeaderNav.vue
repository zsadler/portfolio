<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="main-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'about' } ">About</RouterLink>
    <RouterLink :to="{ name: 'components' }">Components Portfolio</RouterLink>
  </nav>
</template>

<style scoped>
nav a {
  cursor: pointer;
}
</style>
