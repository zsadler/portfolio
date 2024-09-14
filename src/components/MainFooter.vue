<script setup>
import { ref, onMounted } from 'vue';

const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>

<template>
  <footer>
    <div><i class="fa fa-copyright" aria-hidden="true"></i> Copyright {{ currentYear }}</div>
    <div>All Rights Reserved. Zoe Sadler-Jasmin</div>
  </footer>
</template>

<style scoped>

</style>
