<template>
  <div class="amber-dropdown-container">
    <div class="amber-dropdown-box">
      <span>{{ name }}</span>
      <div class="amber-dropdown-icon"></div>
    </div>
    <div ref="dropdown-list" class="amber-dropdown-view">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AmberDropdown',
  props: {
    name: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      reference_list: []
    }
  },
  mounted() {
    if (this.$slots.default) {
      this.reference_list = this.$slots.default
    }
    this.reference_list.forEach((element) => {
      if (element.data) {
        element.elm.addEventListener(
          'click',
          (e) => this.dropdownItemClick(element.componentInstance.command, e),
          false
        )
      }
    })
  },
  methods: {
    dropdownItemClick(value) {
      this.$refs['dropdown-list'].style.display = 'none'
      setTimeout(() => {
        this.$refs['dropdown-list'].style.display = 'block'
      })
      this.$emit('command', value)
    }
  },
  beforeDestroy() {
    this.reference_list.forEach((element) => {
      if (element.data) {
        element.elm.removeEventListener(
          'click',
          (e) => this.dropdownItemClick(element.componentInstance.command, e),
          false
        )
      }
    })
  }
}
</script>
