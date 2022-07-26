<template>
  <div :class="classls">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AmberTab',
  props: {
    name: String,
    tab: String,
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  inject: ['tabGroundData', 'tabGroundProps'],
  computed: {
    classls() {
      return {
        'amber-tab': true,
        'amber-tab-active': this.tabGroundData.activeNameKey === this.name
      }
    }
  }
}
</script>
