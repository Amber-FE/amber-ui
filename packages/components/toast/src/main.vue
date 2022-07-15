<template>
  <div class="amber-toast">
    <div :class="className" :limit="limit" class="amber-toast-box">
      <AmberIcon :class="className + '--color'" :iconClass="`${icon[type]}`" />
      <span class="text" :class="className + '-text'" v-if="limit">{{ limitText }}</span>
      <span class="text" :class="className + '-text'" v-else>{{ text }}</span>
    </div>
  </div>
</template>

<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberToast',
  components: {
    AmberIcon
  },
  props: {
    type: {
      type: String, // succeed warning error
      default: 'warning'
    },
    limit: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '请输入提示文案'
    }
  },
  data() {
    return {
      icon: {
        success: 'a-check-circle-owancheng-xianbeifen2x',
        warning: 'a-xingzhuangjiehe2x',
        error: 'error'
      },
      limitText: ''
    }
  },
  computed: {
    className() {
      const className = []
      if (this.type) {
        className.push(this.type)
      }
      return className
    }
  },
  mounted() {
    if (this.limit) {
      this.limitText = this.text.slice(0, 20)
    }
  }
}
</script>
