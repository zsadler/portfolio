<template>
    <h2>Components</h2>
    <h3>Working Examples</h3>
    <ul>
        <li v-for="slug in componentLevelSlugs" :key="slug.name">
            <router-link :to="slug.path">{{ slug.navName }}</router-link>
        </li>
    </ul>
    <h3>Coming Soon!</h3>
    <ul>
        <li>Slider</li>
        <li>Weather</li>
    </ul>
</template>

<script>
import { RouterLink } from 'vue-router'
import ROUTES_CONFIG from '@/data/routesConfig.json'

export default {
    name: 'ComponentsView',
    components: { RouterLink },
    data() {
        return {
            slugs: ROUTES_CONFIG.routes
        }
    },
    computed: {
        componentLevelSlugs() {
            return this.slugs.filter(slug => slug.root === 'components')
        }
    }
}
</script>

<style scoped>

</style>
