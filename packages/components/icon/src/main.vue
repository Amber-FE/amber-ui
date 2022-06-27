<template>
  <svg :class="classes" aria-hidden="true" :style="iconStyle">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
const prefix = 'amber-svg-icon'
export default {
  name: 'AmberIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    color: {
      // 字体颜色
      type: [String, Boolean],
      default: false
    },
    size: {
      type: String,
      default: '20px'
    },
    pointer: {
      // 默认不开启鼠标手状
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconStyle() {
      return {
        color: `${this.color}`,
        width: `${this.size}`,
        height: `${this.size}`,
        cursor: `${this.pointer ? 'pointer' : 'default'}`
      }
    },
    classes() {
      return {
        [`${prefix}`]: true,
        [`${prefix}--color`]: !this.color
      }
    },
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>
