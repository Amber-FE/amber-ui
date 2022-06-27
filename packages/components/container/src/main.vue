<template>
  <section class="amber-container-container" :class="isVertical ? 'isVertical' : ''">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'AmberContainer',
  props: {
    direction: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        // 如果传进来的是 vertical 竖排列
        return true
      }
      if (this.direction === 'horizontal') {
        // 如果传进来的是 horizontal 横排列
        return false
      }
      // 如果有插槽的话，查找每个插槽属性tag是不是header和footer,返回true否则false，没有插槽也返回false
      if (this.$slots || this.$slots.default) {
        return this.$slots.default.some((item) => {
          if (item.componentOptions && item.componentOptions.tag) {
            const { tag } = item.componentOptions
            return tag === 'amber-header' || tag === 'amber-footer'
          }
          return false
        })
      }
      return false
    }
  }
}
</script>
