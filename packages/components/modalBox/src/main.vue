<template>
  <div class="amber-modal-container">
    <transition name="fade">
      <div class="amber-modal-mask" v-show="visible"></div>
    </transition>
    <transition name="zoom" @after-leave="handleAfterLeave">
      <div class="amber-modalBox-content" v-show="visible">
        <div class="amber-modalBox-content-top">
          <div class="icon" v-if="type">
            <amber-icon :icon-class="iconClass" size="21px" :color="iconColor" />
          </div>
          <div class="title">
            {{ title }}
          </div>
          <div class="content" :class="typeClass">
            {{ content }}
          </div>
        </div>
        <div class="amber-modalBox-content-bottom">
          <template v-if="type === 'confirm'">
            <amber-button size="small" :disabled="cancelButtonDisabled" @click.stop="handleCancel">
              {{ cancelText }}
            </amber-button>
            <amber-button
              size="small"
              :disabled="okButtonDisabled || confirmLoading"
              type="primary"
              @click.stop="handleOk"
            >
              <div class="loading-container">
                <div class="spinner" :style="{ display: confirmLoading ? '' : 'none' }"></div>
                {{ okText }}
              </div>
            </amber-button>
          </template>
          <template v-else>
            <amber-button size="small" type="primary" @click.stop="handleCancel">
              知道了
            </amber-button>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AmberIcon from '../../icon/index'
import AmberButton from '../../button/index'

const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
  confirm: 'confirm'
}

export default {
  components: {
    AmberIcon,
    AmberButton
  },
  data() {
    return {
      visible: false,
      type: '',
      iconClass: '',
      iconColor: '',
      confirmLoading: false,
      cancelText: '取消',
      okText: '确定',
      okButtonDisabled: false,
      cancelButtonDisabled: false,
      onOk: () => {},
      onCancel: () => {}
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    typeClass() {
      return this.type ? `amber-content-${typeMap[this.type]}` : ''
    }
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
    handleCancel() {
      this.visible = false
      if (this.type === 'confirm') {
        this.onCancel()
      }
    },
    handleOk() {
      this.visible = false
      if (this.type === 'confirm') {
        this.onOk()
      }
    }
  }
}
</script>

<style></style>
