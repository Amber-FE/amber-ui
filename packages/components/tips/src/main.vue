<template>
  <div class="amber-tips-container">
    <div :class="className">
      <span :class="className + '-wrapper'" class="wrapper">
        <AmberIcon :class="className + '-wrapper--color'" :iconClass="`${iconMap[type]}`" />
        <span>{{ text }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberTips',
  components: {
    AmberIcon
  },
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String, // "tips" || "success" || "warning" || "danger",
      default: () => {
        return 'warning'
      }
    }
  },
  data() {
    return {
      iconMap: {
        tips: 'a-xingzhuangjiehe3x',
        success: 'a-check-circle-owancheng-xianbeifen2x',
        warning: 'a-xingzhuangjiehe2x',
        danger: 'error'
      }
    }
  },
  computed: {
    className() {
      const className = []
      if (this.type) {
        className.push(`amber-tips-container-${this.type}`)
      }
      return className
    }
  }
}
</script>
