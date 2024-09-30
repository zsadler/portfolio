<template>
    <v-icon :name="name" :title="title" :scale="scale" :fill="fill || 'currentColor'" />
</template>
<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import * as icons from 'oh-vue-icons/icons';

export default {
    name: 'ResumeTechStackIcons',
    components: { 'v-icon': OhVueIcon },
    props: {
        icon: Object
    },
    data() {
        return {
            id: this.icon.id,
            name: this.icon.name,
            title: this.icon.title,
            fill: this.icon.fill,
            scale: 2.5
        }
    },
    created() {
        const iconName = this.icon.id;
        if (icons[iconName]) {
            addIcons(icons[iconName]);
        } else {
            console.error('Error loading icon:', iconName);
        }
    }
}
</script>
<style scoped>

</style>
