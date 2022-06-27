<template>
  <div class="amber-time-select">
    <amber-input
      class="amber-time-select--input"
      :placeholder="placeholder"
      :allowClear="clearable"
      @focus="onfocushandle"
      @blur="onblurhandle"
      @change="onClearHandle"
      v-model="selectTimeVal"
    >
      <amber-icon slot="prefix" icon-class="shijian" pointer color="rgba(0,0,0,.65)" size="14px" />
    </amber-input>
    <transition name="zoom-in-top">
      <div class="amber-time-select--wrapper" v-if="timeSelectDisplay">
        <ul class="amber-time-select--body">
          <li
            class="amber-time-select--item"
            v-for="(item, index) in timeList"
            :key="index"
            @click.stop="selectTime(item)"
            :class="{ active: item.time === selectTimeVal }"
          >
            {{ item.time }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import AmberInput from '../../input/index'
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberTimeSelect',
  components: {
    AmberInput,
    AmberIcon
  },
  props: {
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '选择时间'
    },
    pickerOptions: {
      type: Object,
      default: () => {
        return null
      }
    },
    value: {
      type: [Date, String],
      default: ''
    }
  },
  model: {
    prop: 'value'
  },
  data() {
    return {
      options: this.pickerOptions || {},
      timeList: [],
      selectTimeVal: '',
      timeSelectDisplay: false
    }
  },
  watch: {
    value() {
      // console.log('1111111111111',val);
    }
  },
  created() {
    const _this = this
    window.document.addEventListener('click', (e) => {
      const thisClassName = e.target.className
      if (
        _this.timeSelectDisplay &&
        (typeof thisClassName === 'object' ||
          (thisClassName.indexOf('amber-time-select--body') < 0 &&
            thisClassName.indexOf('amber-input') < 0))
      ) {
        _this.timeSelectDisplay = false
      }
      e.stopPropagation()
    })
  },
  mounted() {
    this.splitTime()
    if (this.value instanceof Date) {
      const h = this.value.getHours()
      const m = this.value.getMinutes()
      const t = h * 60 + m
      this.selectTimeVal = this.timeFormat(this.findlastTime(t))
    } else if (this.value) {
      const t = this.getTimeNumber(this.value)
      this.selectTimeVal = this.timeFormat(this.findlastTime(t))
    }
  },
  methods: {
    splitTime() {
      const reg = /^[0-9]*$/
      const st = reg.test(this.options.start) ? this.options.start : '09:00'
      const et = reg.test(this.options.end) ? this.options.end : '18:00'
      const step = reg.test(this.options.step) ? this.options.step : '00:30'
      const startNum = this.getTimeNumber(st)
      const endNum = this.getTimeNumber(et)
      const stepNum = this.getTimeNumber(step)

      const len = Math.ceil((endNum - startNum) / stepNum) + 1
      for (let i = 0; i < len; i += 1) {
        const tt = startNum + i * stepNum
        this.timeList.push({
          time: this.timeFormat(tt),
          timeNum: tt
        })
      }
    },
    getTimeNumber(input) {
      const arr = input.toString().split(':')
      return parseInt(arr[0], 10) * 60 + parseInt(arr[1], 10)
    },
    timeFormat(val) {
      const h = Math.floor(val / 60)
      const m = val % 60
      const hh = h < 10 ? `0${h}` : h
      const mm = m < 10 ? `0${m}` : m
      return `${hh}:${mm}`
    },
    findlastTime(t) {
      let inputVal = t
      const reg = /^[0-9]*$/
      const step = reg.test(this.options.step) ? this.options.step : '00:30'
      const stepNum = this.getTimeNumber(step)
      const diff = inputVal % stepNum
      if (diff > stepNum / 2) {
        inputVal = inputVal - diff + stepNum
      } else {
        inputVal -= diff
      }
      return inputVal
    },
    onfocushandle() {
      this.timeSelectDisplay = true
    },
    onblurhandle() {
      // this.timeSelectDisplay = false;
    },
    onClearHandle() {
      if (this.clearable) {
        this.timeSelectDisplay = false
      }
    },
    selectTime(item) {
      this.selectTimeVal = item.time
      this.timeSelectDisplay = false
      this.$emit('change', item.time)
    }
  },
  destroyed() {
    window.document.removeEventListener('click', () => {})
  }
}
</script>

<style></style>
