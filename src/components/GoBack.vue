<template>
    <button @click="goBack">{{ message }}</button>
</template>

<script>
export default {
    name: 'GoBack',
    props: {
        message: {
            type: String,
            default: 'Go Back'
        }
    },
    methods: {
        goBack() {
            this.$router.back()
        }
    }
}
</script>
