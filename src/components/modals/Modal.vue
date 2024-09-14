<script>
import '@/assets/styles/modal.css';
export default {
  props: ['heading', 'inputLabel', 'btnText', 'showModal', 'theme'],
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<template>
  <div class="overlay" @click.self="closeModal" :class="{ show: showModal, dark: theme === 'dark', lite:  theme === 'lite' }">
  <div class="modal">
    <span class="close" @click.self="closeModal">&times;</span>
    <h1>{{ heading }}</h1>
    <form class="modal-content">
      <label>{{ inputLabel }}</label>
      <input type="text" >
      <button>{{ btnText }}</button>
    </form>
  </div>
  </div>
</template>
