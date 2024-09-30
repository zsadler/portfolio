<template>
  <div class="overlay" @click.self="closeSlotModal" :class="{ show: showSlotModal, dark: theme === 'dark', lite:  theme === 'lite' }">
  <div class="modal">
    <span class="close" @click.self="closeSlotModal">&times;</span>
    <h1>{{ slotModalHeading }}</h1>
    <div class="modal-content">
      <slot></slot>
      <div>
        <slot name="contactInfo"></slot>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import '@/assets/styles/modal.css'
export default {
    props: ['slotModalHeading', 'showSlotModal', 'theme'],
    methods: {
        closeSlotModal() {
            this.$emit('closeSlotModal')
        }
    }
}
</script>
