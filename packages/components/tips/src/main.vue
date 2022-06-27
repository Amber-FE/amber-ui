<template>
  <div class="amber-tips-container">
    <span class="amber-tips-container-wrapper">
      <AmberIcon class="amber-tips-container-wrapper--color" :iconClass="iconClass" />
      <span>{{ text }}</span>
    </span>
  </div>
</template>
<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberTips',
  components: {
    AmberIcon
  },
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => {
        return 'warning'
      }
    },
    iconColor: {
      type: String,
      default: () => {
        return '#ED6A0C'
      }
    },
    iconClass: {
      // 宽度
      type: String,
      default: () => {
        return 'a-xingzhuangjiehe2x'
      }
    }
  }
}
</script>
