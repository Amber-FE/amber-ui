<template>
  <div class="amber-tabs">
    <AmberTabsBar
      :currenName="currenNameKey"
      :names="names"
      :tabs="tabs"
      :disableds="disableds"
      @change="tabBarClick"
    ></AmberTabsBar>
    <div
      ref="tabsContent"
      class="amber-tabs-content amber-tabs-content-animated"
      :style="tabsContentStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import AmberTabsBar from './tabBar.vue'
import { removeEmpty, getPropsData } from '../../../util/slots'

export default {
  name: 'AmberTabs',
  components: {
    AmberTabsBar
  },
  props: {
    currenName: String
  },
  data() {
    return {
      defaultSolts: [],
      currenNameKey: '',
      currenNameIndex: 0
    }
  },
  provide() {
    return {
      tabGround: this.$data
    }
  },
  computed: {
    names() {
      return this.defaultSolts.map((solt) => getPropsData(solt, 'name'))
    },
    tabs() {
      return this.defaultSolts.map((solt) => getPropsData(solt, 'tab'))
    },
    disableds() {
      return this.defaultSolts.map((solt) => {
        const disable = getPropsData(solt, 'disabled')
        return disable || disable === ''
      })
    },
    tabsContentStyle() {
      return {
        marginLeft: `-${this.currenNameIndex * 100}%`
      }
    }
  },
  created() {
    this.defaultSolts = removeEmpty(this.$slots.default)
    this.currenNameKey = this.currenName || this.names[0]
  },
  methods: {
    tabBarClick(name, i) {
      this.currenNameKey = name
      this.currenNameIndex = i
    }
  }
}
</script>
