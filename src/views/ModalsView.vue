<template>
  <button @click="toggleSlotModal">{{ slotModalBtnText }}</button>
  <button @click="toggleSubscribeModal">{{ modalBtnText }}</button>

  <teleport to=".modals">
    <SlotTemplateModal :slotModalHeading="slotModalHeading" :showSlotModal="showSlotModal" :theme="theme" @closeSlotModal="toggleSlotModal">
      <template v-slot:contactInfo>
        <a href="#" class="btn">Hire Me</a>
        <a href="#" class="btn">Interview Me</a>
      </template>
    </SlotTemplateModal>
  </teleport>
  <teleport to=".modals">
    <Modal :heading="modalHeading" :inputLabel="inputLabel" :btnText="btnText" :showModal="showModal" :theme="theme" @closeModal="toggleSubscribeModal"/>
  </teleport>
</template>

<script>
import SlotTemplateModal from '@/components/modals/SlotTemplateModal.vue'
import Modal from '@/components/modals/Modal.vue'

export default {
  name: 'Modals',
  components: {Modal, SlotTemplateModal },
  data() {
    return {
      modalBtnText: 'Open Simple Modal!',
      modalHeading: 'Subscribe Now!',
      inputLabel: 'Enter Email Address:',
      btnText: 'Submit',
      slotModalBtnText: 'Open Slot Modal!',
      slotModalHeading: 'Modal Header!',
      showSlotModal: false,
      theme: 'dark',
      showModal: false
    }
  },
  methods: {
    toggleSubscribeModal() {
      this.showModal = !this.showModal;
    },
    toggleSlotModal() {
      this.showSlotModal = !this.showSlotModal;
    }
  }
}
</script>
