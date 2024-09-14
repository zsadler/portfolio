<script>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'App',
  components: { MainHeader, MainFooter }
}
</script>

<template>
  <MainHeader/>
  <main class="container">
    <RouterView />
  </main>
  <MainFooter/>
</template>
