<template>
  <span :style="styles" class="amber-tag-container" :class="className" @click="handleClick">
    <slot></slot>
    <span @click="closeTag">
      <AmberIcon
        v-if="closable"
        class="amber-tag-close"
        size="12px"
        :pointer="true"
        icon-class="a-cuo3x1"
      />
    </span>
  </span>
</template>
<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberTag',
  components: {
    AmberIcon
  },
  props: {
    type: {
      type: String, // "primary" || "info" || "warning" || "danger",
      default: () => {
        return ''
      }
    },
    closable: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String, // "dark" || "plain",
      default: () => {
        return 'plain'
      }
    },
    size: {
      type: String, // "medium" || "small" || "mini",
      default: 'medium'
    },
    // 新增一个可以自定义tag的样式
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    className() {
      const className = []
      className.push(`amber-tag-${this.size}`)
      if (this.type) {
        className.push(`amber-tag-${this.type}`)
      }

      if (this.effect) {
        className.push(`amber-tag-${this.effect}`)
      } else {
        className.push(`amber-tag-plain`)
      }

      return className
    }
  },
  methods: {
    closeTag(event) {
      event.stopPropagation()
      this.$emit('close', event)
    },
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
