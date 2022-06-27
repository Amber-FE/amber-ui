<template>
  <div
    class="amber-checkbox"
    :class="{
      'amber-checkbox--disabled': disabled
    }"
  >
    <input
      class="amber-checkbox--input"
      :checked="checkStatus"
      type="checkbox"
      @click.stop="handleClick"
    />
    <label class="amber-checkbox--label" @click.stop="handleClick">
      <template v-if="label">
        {{ label }}
      </template>
      <slot v-else></slot>
    </label>
  </div>
</template>

<script>
import Emitter from '/mixins/emitter.js'

export default {
  name: 'AmberCheckbox',
  mixins: [Emitter],
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  watch: {
    checked(val) {
      this.checkStatus = val
    }
  },
  // inject: ['checkboxGroup'],
  inject: {
    checkboxGroup: {
      default: () => {}
    }
  },
  data() {
    return {
      checkStatus: this.checked
    }
  },
  mounted() {
    if (this.checkboxGroup) {
      for (let i = 0; i < this.checkboxGroup.checkList.length; i += 1) {
        if (this.checkboxGroup.checkList[i] === this.label) {
          this.checkStatus = true
          break
        }
      }
    }
  },
  methods: {
    handleClick() {
      this.checkStatus = !this.checkStatus
      this.$emit('change', this.checkStatus)
      if (this.checkboxGroup) {
        if (!this.checkStatus) {
          for (let i = 0; i < this.checkboxGroup.checkList.length; i += 1) {
            if (this.checkboxGroup.checkList[i] === this.label) {
              this.checkboxGroup.checkList.splice(i, 1)
              break
            }
          }
        } else {
          this.checkboxGroup.checkList.push(this.label)
        }
      }
      this.dispatch('AmberFormItem', 'form-change', this.checkStatus)
    }
  }
}
</script>
