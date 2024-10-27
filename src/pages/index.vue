<script setup lang="ts">

</script>

<template>
    <h1>Welcome Home</h1>
    <RouterLink :to="{ name: '/components/[id]', params: {'id': 1} }">Go to Components</RouterLink>
</template>

<style scoped>

</style>