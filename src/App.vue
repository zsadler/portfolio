<script>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
// TODO: import BreadcrumbNav from '@/components/BreadcrumbNav.vue'

export default {
  name: 'App',
  components: { RouterView, MainHeader, MainFooter }
}
</script>

<template>
  <main-header/>
  <main class="container" :class="this.$route">
      <router-view />
  </main>
  <main-footer/>
</template>
<style lang="scss">
</style>
