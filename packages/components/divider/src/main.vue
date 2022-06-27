<template>
  <div class="amber-divider" :class="className" role="separator">
    <div class="amber-divider-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmberDivider',
  props: {
    type: {
      type: String, // vertical
      default: () => {
        return 'horizontal'
      }
    },
    dashed: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    orientation: {
      type: String, // left right
      default: () => {
        return ''
      }
    }
  },
  computed: {
    className() {
      const className = []
      if (this.type) {
        className.push(this.type)
      }
      if (this.dashed) {
        className.push('dashed')
      }
      if (this.orientation) {
        className.push(this.orientation)
      }
      return className
    }
  }
}
</script>
