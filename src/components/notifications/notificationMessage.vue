<template>
    <!-- Types: info, warning, error, success -->
    <div class="notification-message ui message" :class="msgType" v-if="show">
      <i class="close icon" @click="closeNotification"></i>
      <div class="header">
        {{ header }}
      </div>
      <slot>Go to the <b>special offers</b> page to see now.</slot>
    </div>
</template>
<script>
export default {
  name: 'NotificationMessage',
  props: {
    msgType: {
      type: String,
      default: 'success'
    },
    header: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    closeNotification() {
      this.show = false;
    }
  }
}
</script>
