<template>
  <div v-for="crumb in crumbs" :key="crumb.id" class="breadcrumb">
    <router-link :to="crumb.path">{{ crumb.name }}</router-link>
    <span v-if="crumb.id !== crumbs[crumbs.length - 1].id"> > </span>
  </div>
</template>

<script>
export default {

}
</script>
