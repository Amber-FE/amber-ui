<template>
  <button
    :class="classes"
    :style="getButtonStyle"
    :disabled="disabled"
    type="button"
    @click="handleClick"
  >
    <amber-icon :color="color ? color : '#fff'" v-if="icon" :iconClass="icon" />
    <template v-if="loading">
      <div class="loading-container">
        <div class="spinner"></div>
      </div>
    </template>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
import AmberIcon from '../../icon/index'

const prefix = 'amber-button-container'

export default {
  name: 'AmberButton',
  components: {
    AmberIcon
  },
  props: {
    size: {
      // large、normal、small
      type: String,
      default: () => {
        return 'normal'
      }
    },
    type: {
      type: String,
      default: () => {
        return 'default'
      }
    },
    color: {
      type: [String, Boolean],
      default: () => {
        return false
      }
    },
    disabled: {
      type: [String, Boolean],
      default: () => {
        return false
      }
    },
    loading: {
      type: [Boolean],
      default: () => {
        return false
      }
    },
    plain: {
      type: [String, Boolean],
      default: () => {
        return false
      }
    },
    round: {
      type: [Boolean],
      default: () => {
        return false
      }
    },
    icon: {
      type: String,
      default: () => {
        return ''
      }
    },
    text: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  computed: {
    getButtonStyle() {
      // const plainColor = styles[`${this.type}_color`];
      return {
        color: `${this.color}`,
        background: `${this.plain ? '#FFFFFF' : ''}`,
        borderRadius: this.getButtonRadius()
      }
    },
    classes() {
      return {
        [`${prefix}`]: true,
        [`${prefix}--${this.type}`]: this.type,
        [`${prefix}--${this.size}`]: this.size,
        [`${prefix}--text`]: this.text,
        [`${prefix}--text--${this.type}`]: this.text,
        [`${prefix}--plain--${this.type}`]: this.plain
      }
    }
  },
  methods: {
    getButtonRadius() {
      if (this.round) {
        return '25px'
      }
      return '3px'
    },
    handleClick(e) {
      if (this.disabled) {
        return
      }
      this.$emit('click', e)
    }
  }
}
</script>
