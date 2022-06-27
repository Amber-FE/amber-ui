<template>
  <div :class="getInputNumberClass" :disabled="disabled">
    <span @click.stop="decreaseVal" class="amber-input-number-container-decrease"
      ><amber-icon
        :style="getInputNumberLeftStyle"
        :size="iconSize"
        icon-class="jiantou_down"
        class="left"
        :disabled="disabled"
        :color="color"
        pointer
    /></span>
    <span @click.stop="increaseVal" class="amber-input-number-container-increase"
      ><amber-icon
        :style="getInputNumberRightStyle"
        :size="iconSize"
        icon-class="jiantou_up"
        class="right"
        :disabled="disabled"
        :color="color"
        pointer
    /></span>
    <amber-input
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      :value="currentVal"
      :disabled="disabled"
      :size="size"
    />
  </div>
</template>

<script>
import AmberInput from '../../input/index'
import AmberIcon from '../../icon/index'

const prefix = 'amber-input-number-container'
export default {
  name: 'amber-input-number',
  components: { AmberInput, AmberIcon },
  data() {
    return {
      val: `${this.value}`,
      myVal: null
    }
  },
  props: {
    value: {
      // 绑定值
      type: Number,
      default: () => 0
    },
    min: {
      type: Number,
      default: () => -Infinity
    },
    max: {
      type: Number,
      default: () => Infinity
    },
    step: {
      type: Number,
      default: () => 1
    },
    size: {
      // small large default
      type: String,
      default: () => 'default'
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    color: {
      // 增加和减少的颜色
      type: [String, Boolean],
      default: false
    }
  },

  computed: {
    iconSize() {
      if (this.size === 'small') {
        return '24px'
      }
      if (this.size === 'default') {
        return '32px'
      }
      if (this.size === 'large') {
        return '40px'
      }
      return '32px'
    },
    currentVal: {
      get() {
        if (this.myVal) {
          return this.myVal
        }
        const Val = this.val
        return Val
      },
      set() {
        this.val = this.currentVal
      }
    },
    getInputNumberClass() {
      return {
        [`${prefix}`]: true,
        [`${prefix}--${this.size}`]: this.size
      }
    },
    getInputNumberRightStyle() {
      return {
        cursor: this.val >= this.max ? 'not-allowed' : 'pointer'
      }
    },
    getInputNumberLeftStyle() {
      return {
        cursor: this.val <= this.min ? 'not-allowed' : 'pointer'
      }
    }
  },
  watch: {
    val: {
      immediate: true,
      handler() {
        this.getCurrentVal()
        this.currentVal = this.val
        this.myVal = null
      }
    }
  },
  methods: {
    getCurrentVal() {
      if (this.val >= this.max) {
        this.val = `${this.max}`
      } else if (this.val <= this.min) {
        this.val = `${this.min}`
      } else if (this.disabled) {
        this.val = `${this.value}`
      }
    },
    onChange(v) {
      const oldVal = Number(this.val)
      if (v.match(/(-?)\d+/g)) {
        this.val = v
          .match(/(-?)\d+/g)
          .splice(0, 1)
          .join()
      } else {
        this.val = 0
      }
      this.getCurrentVal()
      this.$emit('change', oldVal, Number(this.val))
    },
    onBlur(e) {
      e.target.value = this.val
      this.$emit('blur', e)
    },
    onFocus(e) {
      this.$emit('focus', e)
    },
    decreaseVal() {
      if (this.disabled) return
      const oldVal = Number(this.val)
      this.val = `${this.val - this.step}`
      this.getCurrentVal()
      if (oldVal !== Number(this.val)) {
        this.$emit('change', oldVal, Number(this.val))
      }
    },
    increaseVal() {
      if (this.disabled) return
      const oldVal = Number(this.val)
      this.val = `${Number(this.val) + this.step}`
      this.getCurrentVal()
      if (oldVal !== Number(this.val)) {
        this.$emit('change', oldVal, Number(this.val))
      }
    }
  }
}
</script>

<style></style>
