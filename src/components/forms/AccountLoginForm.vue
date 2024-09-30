<template>
<div class="account-login">
    <h1>Account Login</h1>
    <form class="account-login__form" @submit.prevent="login">
        <div class="form-group">
            <label for="username">Username</label>
            <input v-model="username" type="text" name="username" class="input" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" name="password" class="input" required>
        </div>
        <button type="submit" class="btn">Login</button>
    </form>
</div>
</template>
<script>
export default {
    name: 'AccountLogin',
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            window.user = this.username
            const redirectPath = this.$route.query.redirect || '/protected'
            this.$router.push(redirectPath)
        }
    },
}
</script>

<style lang="scss">

</style>
