<template>
    <nav class="main-nav">
        <router-link v-for="slug in rootLevelSlugs" :key="slug.name" :to="slug.path">{{ slug.navName }}</router-link>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import ROUTES_CONFIG from '@/data/routesConfig.json'

export default {
    name: 'MainHeaderNav',
    components: { RouterLink },
    data() {
        return {
            slugs: ROUTES_CONFIG.routes
        }
    },
    computed: {
        rootLevelSlugs() {
            return this.slugs.filter(slug => slug.root === 'home')
        }
    }
}
</script>

<style lang="scss">
nav a {
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    .active {
        font-weight: bold;
        background-color: #000;
    }
}
</style>
