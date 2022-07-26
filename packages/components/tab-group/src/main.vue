<template>
  <div class="amber-tabs">
    <AmberTabsBar @change="tabBarClick" @edit="closeClick">
      <slot name="tabBarExtraContent" />
    </AmberTabsBar>
    <div ref="tabsContent" :class="className" :style="tabsContentStyle">
      <slot />
    </div>
  </div>
</template>

<script>
import AmberTabsBar from './tabBar.vue'
import { removeEmpty } from '../../../util/slots'

export default {
  name: 'AmberTabs',
  components: {
    AmberTabsBar
  },
  props: {
    activeName: String,
    type: {
      type: String,
      default: 'line'
    },
    animated: {
      type: Boolean,
      default: true
    },
    tabBarStyle: {
      type: Object,
      defalut: () => {}
    }
  },
  data() {
    return {
      defaultSolts: [],
      tabBarExtraContentSolts: [],
      activeNameKey: '',
      activeNameIndex: 0
    }
  },
  provide() {
    return {
      tabGroundData: this.$data,
      tabGroundProps: this.$props
    }
  },
  computed: {
    className() {
      return {
        'amber-tabs-content': true,
        'amber-tabs-content-animated': this.animated
      }
    },
    tabsContentStyle() {
      return {
        marginLeft: `-${this.activeNameIndex * 100}%`
      }
    }
  },
  created() {
    this.initSlots()
  },
  beforeUpdate() {
    this.initSlots()
  },
  methods: {
    initSlots() {
      this.defaultSolts = removeEmpty(this.$slots.default)
      this.tabBarExtraContentSolts = removeEmpty(this.$slots.tabBarExtraContent)
    },
    tabBarClick(name, i) {
      this.activeNameKey = name
      this.activeNameIndex = i
      this.$emit('change', name)
    },
    closeClick(activeName, i) {
      this.$emit('edit', activeName, i)
    }
  }
}
</script>
