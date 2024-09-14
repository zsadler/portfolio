<script>
import Resume from '@/components/Resume.vue'
import GithubUserCard from '@/components/GithubUserCard.vue'

export default {
  name: 'App',
  components: { Resume, GithubUserCard }
}
</script>
<template>

  <h1>About Me</h1>
  <div class="about">
    <div class="about__github-profile">
      <GithubUserCard username="zsadler" />
    </div>
    <div class="about__intro">
      <p>My name is Zoe and I am a web developer. My journey started as a web designer and I gradually fell in love with
        programming. Here's my journey.</p>
      <p>The short-stack: Full-Stack Javascript Developer, Vue.js enthusiast, Salesforce Commerce Cloud Developer and eCommerce Development Manager.</p>
    </div>
  </div>
  <Resume />
</template>

<style>
.about {
  display: grid;
  grid-template-columns: 1fr 75%;
  align-items: center;
  gap: 1rem;
}
.about__github-profile {
  width: 230px;
}
</style>
