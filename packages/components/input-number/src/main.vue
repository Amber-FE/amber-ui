<template>
  <div class="amber-input-number">
    <div class="amber-input-number-container" :class="getContainerClass">
      <div class="amber-input-number-container-input" :class="getInputClass">
        <amber-input
          v-model="val"
          :disabled="disabled"
          @blur="onblur"
          @focus="onfocus"
          @change="onchange"
        ></amber-input>
      </div>
      <div class="jiantou">
        <div class="jiantou-down" :style="getDownStyle" @click="decrease">
          <amber-icon
            size="16px"
            :disabled="disabled"
            :style="getDownStyle"
            iconClass="jiantou_down"
          ></amber-icon>
        </div>
        <div class="jiantou-up" :style="getUpStyle" @click="increase">
          <amber-icon
            size="16px"
            :disabled="disabled"
            :style="getUpStyle"
            iconClass="jiantou_up"
          ></amber-icon>
        </div>
      </div>
    </div>
    <div class="amber-input-number-tip" v-if="isShowTip">
      <div v-if="!isShowRange" class="amber-input-number-tip-text">当前值为：{{ val }}</div>
      <div v-if="isShowRange" class="amber-input-number-tip-text">
        <div class="tip-show-range" v-if="min !== -Infinity && max !== Infinity">
          请输入<span class="tip-number">{{ min }}~{{ max }}</span
          >之间的数值
        </div>
        <div class="tip-show-range" v-if="min === -Infinity && max !== Infinity">
          请输入小于<span class="tip-number">{{ max }}</span
          >的数值
        </div>
        <div class="tip-show-range" v-if="min !== -Infinity && max === Infinity">
          请输入大于<span class="tip-number">{{ min }}</span
          >的数值
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Big from 'big.js'
import AmberInput from '../../input/index'
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberInputNumber',
  components: {
    AmberInput,
    AmberIcon
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      val: `${this.value}`,
      isShowRange: false
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: () => -Infinity
    },
    max: {
      type: Number,
      default: () => Infinity
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    step: {
      type: Number,
      default: () => 1
    },
    precision: {
      type: Number,
      default: () => 0
    },
    size: {
      type: String,
      default: () => 'small'
    },
    isShowTip: {
      type: Boolean,
      default: () => false
    }
  },
  watch: {
    val: {
      handler(newVal) {
        this.getCurrentVal(newVal)
      },
      immediate: true
    }
  },
  computed: {
    getInputClass() {
      return {
        [`amber-input-number-container-input-${this.size}`]: this.size
      }
    },
    getContainerClass() {
      return {
        [`amber-input-number-container-${this.size}`]: this.size
      }
    },
    getprecision() {
      if (`${this.step}`.includes('.')) {
        const index = `${this.step}`.indexOf('.')
        return `${this.step}`.slice(index + 1).length
      }
      return this.precision
    },
    getDownStyle() {
      return {
        cursor: this.val <= this.min || this.disabled ? 'not-allowed' : 'pointer',
        backgroundColor: this.disabled ? 'rgba(204,204,204,.2)' : 'FFF'
      }
    },
    getUpStyle() {
      return {
        cursor: this.val >= this.max || this.disabled ? 'not-allowed' : 'pointer',
        backgroundColor: this.disabled ? 'rgba(204,204,204,.2)' : 'FFF'
      }
    }
  },
  methods: {
    getCurrentVal(newVal) {
      if (newVal > this.max) {
        this.isShowRange = true
        this.val = `${this.max.toFixed(this.getprecision)}`
        return
      }
      if (newVal < this.min) {
        this.isShowRange = true
        this.val = `${this.min.toFixed(this.getprecision)}`
        return
      }
      this.isShowRange = false
      this.val = `${Number(newVal).toFixed(this.getprecision)}`
    },
    onchange(newVal) {
      this.getCurrentVal(`${newVal}`)
      this.$emit('change', Number(this.val))
    },
    increase() {
      if (this.disabled || this.val >= this.max) {
        if (this.val >= this.max) {
          this.isShowRange = true
        }
        return
      }
      // this.val = `${Number(this.val) + this.step}`
      const bigA = new Big(Number(this.val))
      this.val = bigA.plus(this.step).toString()
      this.val = `${Number(this.val).toFixed(this.getprecision)}`
      this.isShowRange = false
      this.$emit('change', Number(this.val))
    },
    decrease() {
      if (this.disabled || this.val <= this.min) {
        if (this.val <= this.min) {
          this.isShowRange = true
        }
        return
      }
      // this.val = `${this.val - this.step}`
      const bigA = new Big(Number(this.val))
      this.val = bigA.minus(this.step).toString()
      this.val = `${Number(this.val).toFixed(this.getprecision)}`
      this.isShowRange = false
      this.$emit('change', Number(this.val))
    },
    onblur(e) {
      const newVal = e.target.value
      // 去掉非数字和前面多的0
      if (newVal.trim().match(/^(-?)\d*(.?)\d+$/g)) {
        this.val = newVal
          .trim()
          .match(/^(-?)\d*(.?)\d+$/g)
          .splice(0, 1)
          .join()
        if (this.val >= 1) {
          this.val = this.val.replace(/^\b(0+)/gi, '')
        }
        if (this.val <= -1) {
          this.val = this.val.replace(/^\b(0+)/gi, '')
        }
      } else {
        const a = 0
        this.val = a.toFixed(this.getprecision)
      }
      this.getCurrentVal(this.val)
      e.target.value = this.val
      this.$emit('blur', e)
    },
    onfocus(e) {
      this.$emit('focus', e)
    }
  }
}
</script>

<style></style>
