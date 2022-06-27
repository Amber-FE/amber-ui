<template>
  <div class="amber-time-picker">
    <amber-input
      class="amber-time-picker--input"
      :placeholder="placeholder"
      :allowClear="clearable"
      v-model="selectTimeVal"
      @focus="onfocushandle"
    >
      <amber-icon slot="prefix" icon-class="shijian" pointer color="rgba(0,0,0,.65)" size="14px" />
    </amber-input>
    <transition name="zoom-in-top">
      <div class="amber-time-picker--wrapper" v-if="timeSelectDisplay">
        <div class="amber-time-picker--body">
          <ul class="left list-wrapper">
            <li
              class="list-wrapper-item"
              v-for="(item, index) in timeData.hours"
              :key="index"
              @click.stop="selecthandle(1, item)"
            >
              {{ item }}
            </li>
          </ul>
          <ul class="mid list-wrapper">
            <li
              class="list-wrapper-item"
              v-for="(item, index) in timeData.minute"
              :key="index"
              @click.stop="selecthandle(2, item)"
            >
              {{ item }}
            </li>
          </ul>
          <ul class="right list-wrapper">
            <li
              class="list-wrapper-item"
              v-for="(item, index) in timeData.second"
              :key="index"
              @click.stop="selecthandle(3, item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AmberIcon from '../../icon/index'
import AmberInput from '../../input/index'

export default {
  name: 'AmberTimePicker',
  components: {
    AmberIcon,
    AmberInput
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
      selectTimeVal: '',
      timeSelectDisplay: false,
      timeData: {
        hours: [],
        minute: [],
        second: []
      }
    }
  },
  created() {
    const _this = this
    window.document.addEventListener('click', (e) => {
      const thisClassName = e.target.className
      if (
        _this.timeSelectDisplay &&
        (typeof thisClassName === 'object' ||
          (thisClassName.indexOf('amber-time-picker--body') < 0 &&
            thisClassName.indexOf('amber-input') < 0))
      ) {
        _this.timeSelectDisplay = false
      }
      e.stopPropagation()
    })
    this.getTimeList()
  },
  mounted() {
    if (this.value instanceof Date) {
      this.selectTimeVal = this.timeformat(this.value)
    } else if (this.value) {
      this.selectTimeVal = this.value
    }
  },
  methods: {
    getTimeList() {
      for (let i = 0; i < 24; i += 1) {
        const h = i <= 9 ? `0${i}` : i
        this.timeData.hours.push(h)
      }

      for (let j = 0; j < 60; j += 1) {
        const t = j <= 9 ? `0${j}` : j
        this.timeData.minute.push(t)
        this.timeData.second.push(t)
      }
    },
    onfocushandle() {
      this.timeSelectDisplay = true
    },
    selecthandle(type, item) {
      let arr = []
      if (this.selectTimeVal) {
        arr = this.selectTimeVal.split(':')
      } else {
        const d = new Date()
        const dd = this.timeformat(d)
        arr = dd.split(':')
      }
      arr[type - 1] = item
      this.selectTimeVal = `${arr[0]}:${arr[1]}:${arr[2]}`
      this.timeSelectDisplay = false
      this.$emit('change', this.selectTimeVal)
    },
    timeformat(date) {
      const h = date.getHours()
      const m = date.getMinutes()
      const s = date.getSeconds()
      const hh = h <= 9 ? `0${h}` : h
      const mm = m <= 9 ? `0${m}` : m
      const ss = s <= 9 ? `0${s}` : s
      return `${hh}:${mm}:${ss}`
    }
  }
}
</script>

<style></style>
