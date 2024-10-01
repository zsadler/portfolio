<template>
    <h2>{{ heading }}</h2>

    <form class="modal-content">
        <label>{{ inputLabel }}</label>
        <input type="text" >
        <button>{{ btnText }}</button>
    </form>
</template>

<script>
export default {
    name: 'SignUpNewsletterForm',
    data() {
        return {
            heading: 'Subscribe Now!',
            inputLabel: 'Enter Email Address:',
            btnText: 'Submit',
        }
    }
}
</script>
<style lang="scss">

</style>
