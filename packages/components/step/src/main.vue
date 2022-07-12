<template>
  <div :class="stepClasses">
    <div class="amber-step-item-group">
      <div class="amber-step-item-container" @click="stepClick" :style="itemStyle">
        <div class="amber-step-item-icon">
          <slot name="icon">
            <AmberIcon
              v-if="finallyState === 'finish'"
              size="24px"
              icon-class="a-check-circle-owancheng-xianbeifen2x"
            />
            <div
              v-else-if="
                finallyState === 'wait' || finallyState === 'process' || finallyState === 'disabled'
              "
              class="amber-step-item-icon-number"
            >
              {{ stepIndex + 1 }}
            </div>
            <AmberIcon
              v-else-if="finallyState === 'error'"
              size="24px"
              icon-class="a-xingzhuangjiehe3x"
            />
          </slot>
        </div>
        <div class="amber-step-item-content">
          <div class="amber-step-item-content-title">{{ title }}</div>
          <div class="amber-step-item-content-description">{{ description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberStep',
  props: {
    stepIndex: Number,
    title: {
      type: String,
      require: true,
      default: ''
    },
    'sub-title': {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    status: String
  },
  components: {
    AmberIcon
  },
  inject: {
    stepGroup: {
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {
    finallyState() {
      let state = this.status
      if (this.disabled) state = 'disabled'
      if (!state) {
        if (this.stepIndex > this.stepGroup.current) {
          state = 'wait'
        } else if (this.stepIndex === this.stepGroup.current) {
          state = this.stepGroup.status || 'process'
        } else {
          state = 'finish'
        }
      }
      return state
    },
    stepClasses() {
      return {
        'amber-step': true,
        'amber-step-item': true,
        [`amber-step-item-${this.finallyState}`]: true
      }
    },
    itemStyle() {
      return {
        cursor: this.stepGroup.$listeners.change ? 'pointer' : 'inherit'
      }
    }
  },
  methods: {
    stepClick() {
      if (this.disabled) return
      if (this.stepGroup.$listeners.change) this.stepGroup.$listeners.change(this.stepIndex)
    }
  }
}
</script>
