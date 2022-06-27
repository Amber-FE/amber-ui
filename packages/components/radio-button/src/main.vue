<template>
  <label @click="handleClick" class="amber-radio-button">
    <span :class="classes">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'AmberRadioButton',
  props: {
    value: {
      type: [String, Boolean, Object],
      default: ''
    },
    label: {
      type: [String, Boolean, Object],
      required: true,
      default: ''
    }
  },
  computed: {
    radioGroup() {
      const parent = this.$parent
      if (parent.$options.name === 'AmberRadioGroup') {
        return parent
      }
      return false
    },
    classes() {
      return {
        'amber-radio-button-item': true,
        'amber-radio-checked': this.modelValue === this.label
      }
    },
    modelValue() {
      return this.radioGroup ? this.radioGroup.value : this.value
    }
  },
  methods: {
    handleClick() {
      const result = this.label
      if (this.radioGroup) {
        this.radioGroup.onToggle(result)
      }
      this.$emit('change', result)
      this.$emit('input', result)
    }
  }
}
</script>
