<template>
  <div
    class="amber-select-option"
    @click="handleClick"
    :class="{
      'amber-select-option--disabled': disabled,
      'amber-select-option--selected': getStatus
    }"
    :key="value"
  >
    <div class="amber-select-option-text">
      <slot></slot>
    </div>
    <amber-icon
      v-if="select.mode != 'default' && getStatus"
      icon-class="gouxuan"
      color="#1A9Dff"
      size="14px"
    />
  </div>
</template>
<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberSelectOption',
  components: {
    AmberIcon
  },
  props: {
    value: {
      type: [String, Number],
      default: () => {
        return ''
      }
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  computed: {
    select() {
      const parent = this.$parent
      if (parent.$options.name === 'AmberSelect') {
        return parent
      }
      return false
    },
    getStatus() {
      const arr = this.select._data.selectList.filter((item) => {
        return item.value === this.value && item.status
      })
      return arr.length > 0
    }
  },
  mounted() {
    this.select._data.cache.push({
      value: this.value,
      label: this.$slots.default[0].text,
      status: false
    })
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return
      }
      this.select.handleChange(this.value)
    }
  }
}
</script>
