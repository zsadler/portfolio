<template>
    <div>
        <h1>{{ $route.params.slug }} {{ $route.params.id }} Component </h1>
        <router-view />
    </div>
</template>
<script>
import routesData from '@/data/routesConfig.json';
export default {
    props: {
        id: { type: String, required: true },
        slug: { type: String, required: true }
    },
    component() {
        const parentComponentId = routesData.find(route => route.id === this.componentId)
        return parentComponentId.components.find(component => component.slug === this.slug)
    }
}
</script>
