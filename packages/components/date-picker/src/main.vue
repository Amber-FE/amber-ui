<template>
  <div class="amber-date-picker-container">
    <amber-input
      class="amber-date-picker--input"
      :placeholder="placeholder"
      :allowClear="clearable"
      @focus="displayRL"
      @blur="onblurhandle(selectDate.date)"
      @change="onClearHandle"
      v-model="selectDate.date"
    >
      <amber-icon slot="prefix" icon-class="rili" pointer color="rgba(0,0,0,.65)" size="14px" />
    </amber-input>
    <transition name="zoom-in-top">
      <div class="amber-date-picker--wrapper" v-if="datePickerDisplay">
        <div class="amber-date-picker--header">
          <div class="amber-date-picker--prev" @click.stop="prevMouth">
            <amber-icon icon-class="jiantou_left" color="rgba(0,0,0,.25)" pointer />
          </div>
          <div class="amber-date-picker--next" @click.stop="nextMouth">
            <amber-icon icon-class="jiantou_right" color="rgba(0,0,0,.25)" pointer />
          </div>
          <span class="amber-date-picker--date" v-if="datePicker">
            {{ datePicker.year }}年 {{ datePicker.month }}月
          </span>
        </div>
        <div class="amber-date-picker--body">
          <table>
            <tbody>
              <tr>
                <th @click.stop="">日</th>
                <th @click.stop="">一</th>
                <th @click.stop="">二</th>
                <th @click.stop="">三</th>
                <th @click.stop="">四</th>
                <th @click.stop="">五</th>
                <th @click.stop="">六</th>
              </tr>
              <tr
                class="amber-date-table--row"
                v-for="(days, index) in datePickerList"
                :key="index"
              >
                <td
                  @click.stop="selectDay(item)"
                  v-for="(item, index) in days"
                  :key="index"
                  :class="[
                    item.type === -1 ? 'prev-mouth' : item.type === 0 ? 'available' : 'next-mouth',
                    {
                      active:
                        item.showDate == selectDate.day &&
                        item.month == selectDate.month &&
                        datePicker.year == selectDate.year &&
                        item.type === 0,
                      current:
                        item.showDate == new Date().getDate() &&
                        item.month == new Date().getMonth() + 1 &&
                        datePicker.year == new Date().getFullYear()
                    }
                  ]"
                >
                  <div>
                    <span>{{ item.showDate }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="amber-date-picker--footer">
					<amber-button>取消</amber-button>
					<amber-button type="primary">确定</amber-button>
				</div> -->
      </div>
    </transition>
  </div>
</template>

<script>
// import AmberButton from '../../button/index'
import AmberIcon from '../../icon/index'
import AmberInput from '../../input/index'
// import Emitter from '/mixins/emitter.js'

export default {
  name: 'AmberDatePicker',
  components: {
    // AmberButton,
    AmberIcon,
    AmberInput
  },
  props: {
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: '选择日期'
    },
    value: {
      type: [Array, Date],
      default: null
    }
  },
  model: {
    prop: 'value'
  },
  data() {
    return {
      datePickerDisplay: false,
      datePicker: {}, // 日历数据
      datePickerList: [],
      selectDate: {
        day: null,
        month: null,
        year: null,
        date: ''
      }
    }
  },
  created() {
    /* 监听click事件，点击下拉选择框以外的元素，自动收缩下拉框 */
    const _this = this
    window.document.addEventListener('click', (e) => {
      const thisClassName = e.target.className
      if (
        _this.datePickerDisplay &&
        (typeof thisClassName === 'object' ||
          (thisClassName.indexOf('amber-date-picker--body') < 0 &&
            thisClassName.indexOf('amber-date-picker--date') < 0 &&
            thisClassName.indexOf('amber-input') < 0))
      ) {
        _this.datePickerDisplay = false
      }
      e.stopPropagation()
    })
  },
  mounted() {
    let d
    let year
    let month
    if (this.value) {
      if (this.value instanceof Date) {
        d = this.value
        year = d.getFullYear()
        month = d.getMonth() + 1
        this.selectDate.day = d.getDate()
        this.selectDate.month = month
        this.selectDate.year = year
        this.selectDate.date = this.dateFormat(d)
      } else if (this.value instanceof Array) {
        const reg = /^(\d{4})-(\d{2})-(\d{2})$/
        if (reg.test(this.value[0])) {
          d = new Date(this.value[0])
          year = d.getFullYear()
          month = d.getMonth() + 1
          this.selectDate.day = d.getDate()
          this.selectDate.month = month
          this.selectDate.year = year
          this.selectDate.date = this.dateFormat(d)
        }
      }
    }
    this.datePicker = this.getDatePicker(year, month)
    this.datePickerList = this.sliceArr(this.datePicker.days, 7)
  },
  methods: {
    displayRL() {
      this.datePickerDisplay = !this.datePickerDisplay
    },
    onblurhandle(str) {
      const reg = /^(\d{4})-(\d{2})-(\d{2})$/
      if (reg.test(str)) {
        const d = new Date(str)
        this.selectDate.day = d.getDate()
        this.selectDate.month = d.getMonth() + 1
        this.selectDate.year = d.getFullYear()
        this.selectDate.date = str
      }
    },
    onClearHandle() {
      if (this.clearable) {
        this.selectDate = {
          day: null,
          month: null,
          year: null,
          date: ''
        }
      }
    },
    getDatePicker(yearVal, monthVal) {
      const ret = []
      let year = yearVal
      let month = monthVal
      if (!year || !month) {
        const today = new Date()
        year = today.getFullYear()
        month = today.getMonth() + 1
      }
      const firstDay = new Date(year, month - 1, 1) // 获取当月第一天
      const firstDayWeekDay = firstDay.getDay() // 获取星期几，才好判断排在第几列
      year = firstDay.getFullYear()
      month = firstDay.getMonth() + 1

      const lastDayOfLastMouth = new Date(year, month - 1, 0) // 获取最后一天
      const lastDateOfLastMouth = lastDayOfLastMouth.getDate()

      const preMouthDayCount = firstDayWeekDay - 1
      const lastDay = new Date(year, month, 0)
      const lastDate = lastDay.getDate()

      const line = Math.ceil((lastDate + firstDayWeekDay) / 7)

      for (let i = 0; i < 7 * line; i += 1) {
        const date = i - preMouthDayCount
        let showDate = date
        let thisMonth = month
        let type = 0

        // 上个月
        if (date <= 0) {
          thisMonth = month - 1
          showDate = lastDateOfLastMouth + date
          type = -1
        } else if (date > lastDate) {
          // 下个月
          thisMonth = month + 1
          showDate -= lastDate
          type = 1
        }

        if (thisMonth === 0) {
          thisMonth = 12
        }

        if (thisMonth === 13) {
          thisMonth = 1
        }

        ret.push({
          month: thisMonth,
          date,
          showDate,
          type
        })
      }

      return {
        year,
        month,
        days: ret
      }
    },
    sliceArr(arr, num) {
      const result = []
      for (let i = 0; i < arr.length; i += num) {
        result.push(arr.slice(i, i + num))
      }
      return result
    },
    dateFormat(date) {
      let ret = ''
      const padding = (num) => {
        if (num <= 9) {
          return `0${num}`
        }
        return num
      }

      ret += `${date.getFullYear()}-${padding(date.getMonth() + 1)}-${padding(date.getDate())}`

      return ret
    },
    prevMouth() {
      // 获取上一个月数据
      const year = this.datePicker.month - 1 > 0 ? this.datePicker.year : this.datePicker.year - 1
      const month = this.datePicker.month - 1 > 0 ? this.datePicker.month - 1 : 12
      this.updateDate(year, month)
    },
    nextMouth() {
      // 获取下一个月数据
      const year = this.datePicker.month + 1 <= 12 ? this.datePicker.year : this.datePicker.year + 1
      const month = this.datePicker.month + 1 <= 12 ? this.datePicker.month + 1 : 1
      this.updateDate(year, month)
    },
    selectDay(item) {
      this.selectDate.day = item.showDate
      this.selectDate.month = item.month
      this.selectDate.year = this.datePicker.year
      const date = new Date(this.selectDate.year, this.selectDate.month - 1, this.selectDate.day)
      this.selectDate.date = this.dateFormat(date)
      this.displayRL()
      if (item.type !== 0) {
        this.updateDate(this.datePicker.year, item.month)
        this.datePicker = this.getDatePicker(this.datePicker.year, item.month)
      }
    },
    updateDate(year, month) {
      this.datePicker = this.getDatePicker(year, month)
      this.datePickerList = this.sliceArr(this.datePicker.days, 7)
    }
  },
  destroyed() {
    window.document.removeEventListener('click', () => {})
  }
}
</script>

<style></style>
