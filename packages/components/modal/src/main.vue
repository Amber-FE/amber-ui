<template>
  <div class="amber-modal-container" :style="getStyle">
    <div
      class="amber-modal-mask"
      :class="{
        'amber-mask--visible': visible,
        'amber-mask--hide': !visible
      }"
      @click="handleCancel"
    ></div>
    <div
      class="amber-modal-content"
      :class="[
        {
          'amber-modal--visible': visible,
          'amber-modal--hide': !visible
        },
        wrapClassName
      ]"
      :style="{ width: changeWidth }"
      @animationend="animationend"
    >
      <div class="amber-modal-content-header">
        <div class="title">{{ title }}</div>
        <div class="closeBtn" @click.stop="handleCancel">
          <amber-icon icon-class="a-cuo3x1" pointer size="14px" color="rgba(0,0,0,.45)" />
        </div>
      </div>
      <div class="amber-modal-content-body">
        <slot></slot>
      </div>
      <div class="amber-modal-content-footer">
        <template v-if="!hasFooter">
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
        <slot name="footer" v-if="hasFooter"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AmberIcon from '../../icon/index'
import AmberButton from '../../button/index'

export default {
  name: 'AmberModal',
  model: {
    prop: 'visible'
  },
  components: {
    AmberIcon,
    AmberButton
  },
  props: {
    cancelText: {
      // 取消按钮文本
      type: String,
      default: () => {
        return '取消'
      }
    },
    closable: {
      // 是否显示关闭按钮
      type: Boolean,
      default: () => {
        return true
      }
    },
    visible: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    mask: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    maskClosable: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    okText: {
      type: String,
      default: () => {
        return '确定'
      }
    },
    zIndex: {
      type: Number,
      default: () => {
        return 1000
      }
    },
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    destroyOnClose: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    width: {
      type: [String, Number],
      default: () => {
        return ''
      }
    },
    wrapClassName: {
      type: String,
      default: () => {
        return ''
      }
    },
    confirmLoading: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    okButtonDisabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    cancelButtonDisabled: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      animateEnd: false,
      displayStatus: false,
      hasFooter: false,
      changeWidth: ''
    }
  },
  computed: {
    getStyle() {
      return {
        display: this.displayStatus ? '' : 'none'
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.hasFooter = this.$slots.footer
      if (typeof this.width === 'string') {
        this.changeWidth = this.width
      } else {
        this.changeWidth = `${this.width}px`
      }
    },
    handleCancel(e) {
      this.$emit('cancel', e)
    },
    handleOk(e) {
      this.$emit('ok', e)
    },
    animationend() {
      if (!this.visible) {
        this.displayStatus = false
      }
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.displayStatus = true
      }
    }
  }
}
</script>

<style></style>
