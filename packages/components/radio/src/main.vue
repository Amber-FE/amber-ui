<template>
  <div class="amber-radio-container">
    <label @click="handleClick" :class="lClasses"></label>
    <span @click="handleClick" :class="sClasses">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import Emitter from '/mixins/emitter.js'

export default {
  name: 'AmberRadio',
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Boolean, Object],
      required: true,
      default: ''
    },
    value: {
      type: [String, Boolean, Object],
      default: ''
    },
    disabled: {
      type: [String, Boolean],
      default: () => {
        return false
      }
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    lClasses() {
      return {
        'amber-radio-icon': true,
        'amber-radio-checked': this.label === this.value,
        'amber-radio-un-checked': this.label !== this.value,
        'amber-radio-icon--disabled': this.disabled || this.disabled === ''
      }
    },
    sClasses() {
      return {
        'amber-radio-label': true,
        'amber-radio-label--disabled': this.disabled || this.disabled === ''
      }
    }
  },
  methods: {
    handleClick() {
      const result = this.label
      this.$emit('change', result)
      this.$emit('input', result)
      this.dispatch('AmberFormItem', 'form-change', result)
    }
  }
}
</script>
