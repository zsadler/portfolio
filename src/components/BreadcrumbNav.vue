<template>
  <div v-for="crumb in crumbs" :key="crumb.id" class="breadcrumb">
    <router-link :to="crumb.path">{{ crumb.name }}</router-link>
    <span v-if="crumb.id !== crumbs[crumbs.length - 1].id"> > </span>
  </div>
</template>

<script>

import { RouterLink } from 'vue-router'
export default {
    name: 'BreadcrumbNav',
    components: { RouterLink },
    data() {
        return {
            crumbs: this.$route.matched.map((route, index) => {
                return {
                    id: index,
                    name: route.meta.breadcrumbName
                }
            })
        }
    }

}
</script>
