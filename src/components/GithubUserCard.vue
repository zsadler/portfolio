<template>
  <div class="ui card">
    <h3 class="ui header">GitHub Profile: {{ profile.login }}</h3>
    <div class="image">
    <a class="header" :href="profile.html_url">
      <img :src="profile.avatar_url" :alt="profilePicAlt"></a>
    </div>
    <div class="content">
      <a class="header" :href="profile.html_url"> {{ profile.name }}</a>
      <div class="meta">
        <span class="date">Joined in {{ new Date(profile.created_at).getFullYear() }}</span>
      </div>
    </div>
    <div class="extra content">
      <a  :href="profile.html_url + '?tab=followers'">
        <i class="user icon"></i>
        {{ profile.followers }} Followers
      </a>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'GithubUserCard',
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      profile: {},
      profilePicAlt: null
    }
  },
  methods: {
    getProfilePicAltText() {
      return this.profile.name + '\'s GitHub profile photo'
    }
  },
  async created() {
    const username = this.username;
    const response = await axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        // console.log(response.data);
        return response.data
      }).catch(error => {
        console.error(error)
      });
    this.profile = response;
    this.profilePicAlt = this.getProfilePicAltText();
  }
}
</script>
<style scoped>
.about .card img {
  max-width: 230px;
  width: 100%;
  min-width: 200px;
}
</style>
