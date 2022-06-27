<template>
  <div class="amber-rate-container">
    <!-- icon -->
    <span
      v-for="(item, index) in rateMax"
      :key="index"
      @mouseout="resetCurrentVal()"
      @mousemove="setCurrentVal(item)"
      @click="getCurrentVal(item)"
    >
      <AmberIcon
        class="amber-icon"
        :color="color[item - 1]"
        :iconClass="classes[item - 1]"
        :pointer="disabled ? false : true"
      ></AmberIcon>
    </span>
    <!-- 辅助文字 -->
    <span class="rate-text" :style="getTextColor" v-if="showText | showScore">{{ text }}</span>
  </div>
</template>

<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberRate',
  components: {
    AmberIcon
  },
  data() {
    return {
      hoverIndex: -1,
      currentIndex: this.value,
      currentVal: this.value,
      highVal: this.highThreshold,
      lowVal: this.lowThreshold
    }
  },
  props: {
    value: {
      type: Number,
      default: () => 0
    },
    max: {
      type: Number,
      default: () => 5
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    lowThreshold: {
      type: Number,
      default: () => 2
    },
    highThreshold: {
      type: Number,
      default: () => 4
    },
    colors: {
      type: [Array, Object],
      default: () => ['#F7BA2A', '#F7BA2A', '#F7BA2A']
    },
    voidColor: {
      type: String,
      default: () => '#C6D1DE'
    },
    disabledVoidColor: {
      type: String,
      default: () => '#EFF2F7'
    },
    iconClasses: {
      type: [Array, Object],
      default: () => ['aixin', 'aixin', 'aixin']
    },
    voidIconClasses: {
      type: String,
      default: () => 'a-shoucang3x'
    },
    showText: {
      type: Boolean,
      default: () => false
    },
    showScore: {
      type: Boolean,
      default: () => false
    },
    textColor: {
      type: String,
      default: () => '#1F2D3D'
    },
    texts: {
      type: Array,
      default: () => ['极差', '失望', '一般', '满意', '非常满意']
    }
  },
  computed: {
    rateMax() {
      if (!Array.isArray(this.colors) && !Array.isArray(this.iconClasses)) {
        // 获取对象的最后一个键
        const arr = Object.keys(this.colors).reverse()
        return Number(arr[0])
      }
      return this.max
    },
    getTextColor() {
      if (this.showText || this.showScore) {
        return {
          color: this.textColor
        }
      }
      return ''
    },
    activeClass() {
      return this.setActive(this.iconClasses)
    },
    inActiveClass() {
      return this.voidIconClasses
    },
    activeColor() {
      return this.setActive(this.colors)
    },

    inActiveColor() {
      return this.voidColor
    },
    color() {
      return this.getActive(this.activeColor, this.inActiveColor)
    },
    classes() {
      return this.getActive(this.activeClass, this.inActiveClass)
    },
    text() {
      if (this.showText) {
        return this.texts[this.currentIndex - 1]
      }
      if (this.showScore) {
        return this.currentIndex
      }
      return ''
    }
  },
  watch: {},
  methods: {
    getActive(active, inActive) {
      const classArr = []
      let i = 0
      for (; i < this.currentIndex; i += 1) {
        classArr.push(active)
      }
      for (; i <= this.rateMax; i += 1) {
        classArr.push(inActive)
      }
      return classArr
    },
    setActive(arr) {
      if (Array.isArray(arr)) {
        if (this.currentIndex <= this.lowVal) {
          return arr[0]
        }
        if (this.currentIndex < this.highVal) {
          return arr[1]
        }
        return arr[2]
      }
      const arrKeys = Object.keys(arr)

      if (typeof arr[arrKeys[0]] === 'object') {
        let first = arrKeys[0]

        first = arr[arrKeys[0]].excluded ? first - 1 : first
        if (this.currentIndex <= first) {
          return arr[arrKeys[0]].value
        }
      } else if (this.currentIndex <= arrKeys[0]) {
        return arr[arrKeys[0]]
      }
      if (typeof arr[arrKeys[1]] === 'object') {
        let second = arrKeys[1]
        second = arr[arrKeys[1]].excluded ? second - 1 : second
        if (this.currentIndex <= second) {
          return arr[arrKeys[1]].value
        }
      } else if (this.currentIndex <= arrKeys[1]) {
        return arr[arrKeys[1]]
      }
      return arr[arrKeys[2]]
    },
    setCurrentVal(item) {
      if (this.disabled) {
        return
      }
      this.hoverIndex = item
      this.currentIndex = item
    },
    resetCurrentVal() {
      if (this.disabled) {
        return
      }
      this.hoverIndex = -1
      this.currentIndex = this.currentVal
    },
    getCurrentVal(item) {
      if (this.disabled) {
        return
      }
      if (item === this.currentVal) {
        this.currentVal = 0
      } else {
        this.currentVal = item
      }
      this.$emit('change', item)
    }
  }
}
</script>

<style></style>
