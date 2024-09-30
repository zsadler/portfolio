<template>
  <div class="ui card">
    <h3 class="ui header">
      <v-icon name="bi-github" title="Github" scale="1.5"/>GitHub Profile: {{ profile.login }}</h3>
    <div class="image">
    <a class="header" :href="profile.html_url">
      <img :src="profile.avatar_url" :alt="profilePicAlt" height="250" width="250"></a>
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
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiGithub } from 'oh-vue-icons/icons'

addIcons(BiGithub)

export default {
  name: 'GithubUserCard',
  components: { "v-icon": OhVueIcon },
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
      this.profile = await axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
            // console.log(response.data);
            return response.data
        }).catch(error => {
            console.error(error)
        });
    this.profilePicAlt = this.getProfilePicAltText();
  }
}
</script>
<style scoped>
.about .card img {
  width: 100%;
  min-width: 200px;
}
</style>
