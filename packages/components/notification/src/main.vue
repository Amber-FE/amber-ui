<template>
  <transition name="slide" @after-leave="handleAfterLeave">
    <div
      class="amber-notification-container"
      :class="[positionClass, className]"
      :style="positionStyle"
      v-show="visible"
    >
      <div class="icon" v-if="type != 'open'">
        <amber-icon :icon-class="iconClass" size="21px" :color="iconColor" />
      </div>
      <div class="amber-notification-content">
        <div class="amber-notification-content--title">{{ title }}</div>
        <div class="amber-notification-content--description">
          {{ content }}
        </div>
      </div>
      <div class="amber-notification-close" @click="close">
        <amber-icon icon-class="a-cuo3x1" pointer size="14px" color="rgba(0,0,0,.45)" />
      </div>
    </div>
  </transition>
</template>

<script>
import AmberIcon from '../../icon/index'

// const typeMap = {
//   success: 'success',
//   info: 'info',
//   warning: 'warning',
//   error: 'error',
//   open: 'open',
// }

export default {
  components: {
    AmberIcon
  },
  data() {
    return {
      visible: false,
      duration: 4.5,
      timer: null,
      className: '',
      position: 'topRight',
      type: '',
      title: '',
      content: '',
      onClose: null,
      verticalOffset: 0,
      iconClass: '',
      iconColor: ''
    }
  },
  computed: {
    positionClass() {
      return this.position.indexOf('Right') > -1 ? 'right' : 'left'
    },
    verticalProperty() {
      return /^top/.test(this.position) ? 'top' : 'bottom'
    },
    positionStyle() {
      return {
        [this.verticalProperty]: `${this.verticalOffset}px`
      }
    }
  },
  mounted() {
    this.removeTimer()
    this.addTimer()
    this.init()
  },
  methods: {
    init() {
      switch (this.type) {
        case 'info':
        case 'confirm': {
          this.iconClass = 'a-error-circle-otishi-xianbeifen'
          this.iconColor = '#1890ff'
          break
        }
        case 'success': {
          this.iconClass = 'a-check-circle-owancheng-xianbeifen2x'
          this.iconColor = '#52c41a'
          break
        }
        case 'warning': {
          this.iconClass = 'a-error-circle-otishi-xianbeifen'
          this.iconColor = '#faad14'
          break
        }
        case 'error': {
          this.iconClass = 'error'
          this.iconColor = '#f5222d'
          break
        }
        default: {
          break
        }
      }
    },
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    removeTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    addTimer() {
      if (this.duration === 0) {
        return
      }
      this.timer = setTimeout(() => {
        this.close()
      }, this.duration * 1000)
    },
    close() {
      this.removeTimer()
      this.visible = false
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    }
  }
}
</script>
