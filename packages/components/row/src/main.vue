<template>
  <div class="amber-row" :class="[alignType, justifyType]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AmberRow',
  props: {
    justify: {
      type: String,
      default: () => {
        return ''
      }
    },
    align: {
      type: String,
      default: () => {
        return ''
      }
    },
    gutter: {
      type: Number,
      default: () => {
        return null
      }
    }
  },
  computed: {
    alignType() {
      return this.align ? `amber-row-${this.align}` : ''
    },
    justifyType() {
      return this.justify ? `amber-row-${this.justify}` : ''
    },
    gutterType() {
      if (this.gutter) {
        return {
          'padding-left': `${this.gutter / 2}px`,
          'padding-right': `${this.gutter / 2}px`
        }
      }
      return {}
    }
  }
}
</script>

<style></style>
