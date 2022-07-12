<template>
  <div class="amber-select-container" :class="classesSize">
    <div
      class="amber-select-box"
      @click.stop="display()"
      :class="{
        'amber-select--open': selectListDisplay,
        'amber-select--disabled': disabled,
        'amber-select-mode--default': mode == 'default',
        'amber-select-mode--tags': mode == 'tags',
        'amber-select-mode--multiple': mode == 'multiple'
      }"
      :disabled="disabled"
    >
      <div class="amber-select-search" v-if="showSearch">
        <input
          :placeholder="placeholder"
          :value="selectVal"
          @input="onChange"
          :class="{ 'amber-select-search--color': selectListDisplay }"
        />
      </div>
      <div
        unselectable="on"
        :class="{
          'amber-select--placeholder': !selectVal,
          'amber-select--text': selectVal
        }"
        v-else-if="!showSearch && mode == 'default'"
      >
        {{ selectVal ? selectItem.label : placeholder }}
      </div>
      <div v-else class="amber-select-input">
        <input :placeholder="placeholder" v-if="currentSelectList.length == 0" />
        <ul class="selected-list-container">
          <li
            class="selected-list-container-item"
            v-for="(item, index) in currentSelectList"
            :key="index"
            @click.stop="del(item)"
          >
            <div class="selected-list-container-item-content">
              {{ item.label }}
            </div>
            <span class="selected-list-container-item-remove">X</span>
          </li>
        </ul>
      </div>
      <div class="amber-select-icon">
        <amber-icon
          v-if="!hasSuffixIcon && !showSearch && mode == 'default'"
          class="amber-select--icon"
          icon-class="jiantou_down"
          color="rgba(0,0,0,.25)"
          :class="{ 'amber-icon--up': selectListDisplay }"
        />
        <div
          class="amber-select--icon"
          :class="{ 'amber-icon--up': selectListDisplay }"
          v-if="hasSuffixIcon"
        >
          <slot name="suffixIcon"></slot>
        </div>
      </div>
      <div class="amber-select-clear" v-if="allowClear && selectVal" @click.stop="clear">
        <amber-icon
          class="amber-select-clear--button"
          icon-class="yichu"
          color="rgba(0,0,0,.25)"
          pointer
          size="14px"
        />
      </div>
    </div>
    <div
      ref="select-list"
      class="amber-select-list"
      :class="{ 'amber-select-list-open': selectListDisplay }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Emitter from '/mixins/emitter.js'
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberSelect',
  mixins: [Emitter],
  components: {
    AmberIcon
  },
  props: {
    placeholder: String,
    value: {
      type: [String, Array],
      default: () => {
        return ''
      }
    },
    defaultValue: {
      type: [String, Array, Number],
      default: () => {
        return ''
      }
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    size: {
      type: String,
      default: () => {
        return 'default'
      }
    },
    allowClear: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    labelInValue: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    mode: {
      // 'default' | 'multiple' | 'tags'
      type: String,
      default: () => {
        return 'default'
      }
    },
    showSearch: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      selectListDisplay: false,
      hasSuffixIcon: false,
      cache: [],
      currentSelectList: [],
      selectList: [],
      selectValList: [],
      selectItem: {},
      selectVal: this.value || this.defaultValue
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    changeVal() {
      return this.value
    },
    classesSize() {
      return {
        'amber-select-size--default': this.size === 'default',
        'amber-select-size--small': this.size === 'small',
        'amber-select-size--large': this.size === 'large'
      }
    }
  },
  watch: {
    changeVal(newVal) {
      const timer = setInterval(() => {
        if (this.cache.length > 0) {
          clearInterval(timer)
          this.selectList = [].concat(this.cache)
          this.cache = []
          this.selectVal = newVal
          this.getSelectData(this.selectVal)
        }
      }, 10)
    },
    value(val) {
      this.selectVal = val
    }
  },
  mounted() {
    this.init()
    this.selectList = [].concat(this.cache)
    this.cache = []
    if (this.selectVal) {
      if (this.selectVal instanceof Array) {
        const arr = [].concat(this.selectVal)
        arr.forEach((item) => {
          this.getSelectData(item)
        })
        this.sortSelectList()
      } else {
        this.getSelectData(this.selectVal)
      }
    }
  },
  methods: {
    init() {
      /* 监听click事件，点击下拉选择框以外的元素，自动收缩下拉框 */
      window.document.addEventListener('click', (e) => {
        const thisClassName = e.target.className
        if (
          this.selectListDisplay &&
          thisClassName.indexOf('amber-select-box') < 0 &&
          thisClassName.indexOf('amber-select-list') < 0 &&
          thisClassName.indexOf('amber-select-option') < 0
        ) {
          this.selectListDisplay = false
        }
        e.stopPropagation()
      })
      this.hasSuffixIcon = !!this.$slots.suffixIcon
    },
    onChange(e) {
      this.$emit('search', e.target.value)
      this.selectVal = e.target.value
      if (this.selectVal) {
        this.selectListDisplay = true
      } else {
        this.selectListDisplay = false
      }
    },
    display() {
      if (this.disabled) {
        return
      }
      if (this.showSearch && !this.selectVal) {
        return
      }
      this.selectListDisplay = !this.selectListDisplay
    },
    clear() {
      this.selectVal = ''
      if (this.mode === 'default') {
        this.selectItem = {}
      } else {
        this.currentSelectList = []
        this.selectValList = []
      }
      this.selectList.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.status = false
      })
    },
    del(e) {
      this.delItem(e)
      const arr = [].concat(this.selectValList)
      this.$emit('change', arr)
    },
    delItem(e) {
      // 删除选中项
      e.status = !e.status
      this.sortSelectList()
    },
    handleChange(e) {
      let rVal
      this.getSelectData(e)
      this.selectVal = e
      if (this.mode === 'default') {
        rVal = this.labelInValue
          ? { value: this.selectItem.value, label: this.selectItem.label }
          : e
        this.display()
      } else {
        this.sortSelectList()
        rVal = [].concat(this.selectValList)
      }
      this.$emit('change', rVal)
      this.dispatch('AmberFormItem', 'form-change', this.selectVal)
    },
    getSelectData(value) {
      this.selectList.forEach((item) => {
        if (item.value === value) {
          // eslint-disable-next-line no-param-reassign
          item.status = !item.status
          if (this.mode === 'default') {
            this.selectItem = Object.assign(item)
          }
        } else if (this.mode === 'default') {
          // eslint-disable-next-line no-param-reassign
          item.status = false
        }
      })
    },
    getSelectValue() {
      const arr = []
      for (let i = 0; i < this.selectList.length; i += 1) {
        if (this.selectList[i].status) {
          arr.push(this.selectList[i].value)
        }
      }
      this.selectValList = [].concat(arr)
    },
    sortSelectList() {
      this.selectList.sort((a, b) => b.status - a.status)
      this.currentSelectList = this.selectList.filter((item) => {
        return item.status
      })
      this.getSelectValue()
    }
  },
  destroyed() {
    window.document.removeEventListener('click', () => {})
  }
}
</script>

<style></style>
