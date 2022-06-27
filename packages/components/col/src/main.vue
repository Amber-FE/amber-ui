<template>
  <div class="amber-col" :class="classes" :style="[gutter, flexStyle]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AmberCol',
  props: {
    span: {
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    },
    xs: {
      type: Number,
      default: 0
    },
    sm: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
    },
    lg: {
      type: Number,
      default: 0
    },
    xl: {
      type: Number,
      default: 0
    },
    flex: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    classes() {
      return {
        [`amber-col-${this.span}`]: this.span !== 0,
        [`amber-col-offset-${this.offset}`]: this.offset !== 0,
        [`amber-col-xs-${this.xs}`]: this.xs !== 0,
        [`amber-col-sm-${this.sm}`]: this.sm !== 0,
        [`amber-col-md-${this.md}`]: this.md !== 0,
        [`amber-col-lg-${this.lg}`]: this.lg !== 0,
        [`amber-col-xl-${this.xl}`]: this.xl !== 0
      }
    },
    gutter() {
      const parent = this.$parent
      if (parent.$options.name === 'AmberRow') {
        return parent.gutterType
      }
      return {}
    },
    flexStyle() {
      if (this.flex) {
        return {
          flex: this.parseFlex(this.flex)
        }
      }
      return {}
    }
  },
  methods: {
    parseFlex(flex) {
      if (typeof flex === 'number') {
        return `${flex} ${flex} auto`
      }

      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        // 匹配类似100px格式数值
        return `0 0 ${flex}`
      }

      return flex
    }
  }
}
</script>

<style></style>
