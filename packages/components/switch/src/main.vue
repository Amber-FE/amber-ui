<template>
  <div class="amber-switch-container">
    <div class="amber-switch-container-item" :class="classesSize">
      <input
        type="checkbox"
        class="switch"
        :disabled="disabled"
        :checked="checkStatus"
        @click="handleClick"
        :class="{ disabled: disabled }"
      />
    </div>
  </div>
</template>

<script>
import Emitter from '/mixins/emitter.js'

export default {
  name: 'AmberSwitch',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    defaultChecked: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    checked: {
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
  computed: {
    classesSize() {
      return {
        'amber-switch-size--default': this.size === 'default',
        'amber-switch-size--small': this.size === 'small'
      }
    }
  },
  data() {
    return {
      checkStatus: this.checked || this.defaultChecked
    }
  },
  methods: {
    handleClick(e) {
      this.checkStatus = !this.checkStatus
      this.$emit('change', this.checkStatus, e)
      this.dispatch('AmberFormItem', 'form-change', this.checkStatus)
    }
  }
}
</script>
