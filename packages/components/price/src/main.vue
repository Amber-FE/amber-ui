<template>
  <div class="amber-price" :style="`color:${color}; font-size:${size}px;`">
    <span :style="`font-size:${size * unitScale}px;`" v-if="showUnit">
      {{ unit }}
    </span>
    {{ value }}
  </div>
</template>
<script>
export default {
  name: 'AmberPrice',
  props: {
    price: {
      type: [Number, String],
      default: () => {
        return '88888888.00'
      }
    },
    thousands: {
      type: [String, Boolean],
      default: () => {
        return false
      }
    },
    pointNumber: {
      type: [Number, String],
      default: () => {
        return 0
      }
    },
    color: {
      type: String,
      default: () => {
        return '#666'
      }
    },
    size: {
      type: [Number],
      default: () => {
        return 24
      }
    },
    showUnit: {
      type: [String, Boolean],
      default: () => {
        return false
      }
    },
    unit: {
      type: String,
      default: () => {
        return '¥'
      }
    },
    unitScale: {
      type: Number,
      default: () => {
        return 1
      }
    }
  },
  data() {
    return {
      value: this.price,
      point: this.pointNumber
    }
  },
  created() {
    if (this.value) {
      this.init()
    }
    // this.value && this.init()
  },
  methods: {
    init() {
      if (typeof this.value === 'string') this.value = Number(this.value)
      if (typeof this.point === 'string') this.point = Number(this.point)
      // 保留小数位
      this.value = this.value.toFixed(this.point)
      // 千分位分隔
      if (this.thousands) this.value = this.numFormat(this.value)
    },
    numFormat(num) {
      // eslint-disable-next-line no-param-reassign
      num = num.toString().split('.') // 分隔小数点
      const arr = num[0].split('').reverse() // 转换成字符数组并且倒序排列
      let res = []
      for (let i = 0, len = arr.length; i < len; i += 1) {
        if (i % 3 === 0 && i !== 0) {
          res.push(',') // 添加分隔符
        }
        res.push(arr[i])
      }
      res.reverse() // 再次倒序成为正确的顺序
      if (num[1]) {
        // 如果有小数的话添加小数部分
        res = res.join('').concat(`.${num[1]}`)
      } else {
        res = res.join('')
      }
      return res
    },
    transformDecimal(number, i) {
      let decimalNum = null
      // 先转换为数值型
      let num = Number(number)
      // 判断是否为数值型
      if (!Number.isNaN(num)) {
        // 切分整数与小数
        const arr = num.toString().split('.')
        // 是小数且小数位大于保留个数
        if (arr.length > 1 && arr[1].length > i) {
          // 小数部分字符串
          const decimal = arr[1].slice(i, i + 1)
          // toFixed 有 bug，四舍六入五随机
          // 当四舍五入的数为 5，给其 + 1
          if (decimal === '5') {
            // 这里可能会存在 0.1 ** 5 = 0.000010000000000000003 但不影响四舍五入
            num += 0.1 ** (i + 1)
          }
          decimalNum = num.toFixed(i)
        } else {
          decimalNum = num
        }
        // decimalNum = Number(decimalNum);
      }

      return decimalNum
    }
  },
  watch: {
    price(newVal) {
      if (newVal) {
        this.value = newVal
        this.init()
      }
    }
  }
}
</script>
