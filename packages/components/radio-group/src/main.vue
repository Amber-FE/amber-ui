<template>
  <div class="amber-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AmberRadioGroup',
  props: {
    value: {
      type: [String, Object],
      required: true,
      default: ''
    }
  },
  methods: {
    onToggle(value) {
      this.$emit('change', value)
    }
  }
}
</script>
