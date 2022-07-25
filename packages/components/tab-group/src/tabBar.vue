<template>
  <div class="amber-tabs-bar">
    <div class="amber-tabs-bar-container">
      <div ref="tabItemGround">
        <div
          v-for="(props, i) in tabProps"
          :key="props.name"
          class="amber-tab-item"
          ref="tabItem"
          :class="{
            'amber-tab-item-active': tabGroundData.activeNameKey === props.name,
            'amber-tab-item-disabled': props.disabled || props.disabled === ''
          }"
          :style="tabGroundProps.tabBarStyle"
          @click="handerClick(props.name, i)"
        >
          {{ props.tab }}
          <i
            v-if="props.closable || props.closable === ''"
            @click="closeClick(props, i)"
            class="amber-tab-close-x"
          >
            <amber-icon :size="'10'" :iconClass="'a-cuo3x1'" color="#ccc" />
          </i>
        </div>
      </div>
      <div :class="className" :style="tabItemStyle[tabGroundData.activeNameKey]"></div>
    </div>
    <div class="amber-tabs-extra-content">
      <slot />
    </div>
  </div>
</template>
<script>
import AmberIcon from '../../icon/index'
import { getPropsData } from '../../../util/slots'

export default {
  name: 'AmberTabsBar',
  components: {
    AmberIcon
  },
  props: {},
  data() {
    return {
      tabItemStyle: {}
    }
  },
  computed: {
    className() {
      return {
        'ant-tabs-ink-bar': true,
        'ant-tabs-ink-bar-animated': this.tabGroundProps.animated
      }
    },
    tabProps() {
      const tabProps = getPropsData(this.tabGroundData.defaultSolts)
      return tabProps
    }
  },
  inject: ['tabGroundData', 'tabGroundProps'],
  watch: {
    tabGroundProps: {
      immediate: true,
      deep: true,
      handler() {
        this.setTabItemStyle()
        this.initActiveName()
      }
    }
  },
  methods: {
    initActiveName() {
      const index = this.tabProps.findIndex(
        (props) => props.name === this.tabGroundProps.activeName
      )
      const activeNameKey = this.tabProps[index].disabled
        ? null
        : this.tabGroundProps.activeName || this.tabProps[0].name
      const activeNameIndex = this.tabProps[index].disabled ? null : index
      this.$emit('change', activeNameKey, activeNameIndex)
    },
    setTabItemStyle() {
      this.$nextTick(() => {
        if (this.$refs.tabItemGround)
          Array.from(this.$refs.tabItemGround.children).forEach((d, i) => {
            this.$set(this.tabItemStyle, this.tabProps[i].name, {
              width: `${d.offsetWidth}px`,
              transform: `translate3d(${d.offsetLeft}px, 0px, 0px)`
            })
          })
      })
    },
    handerClick(name, i) {
      if (this.tabProps[i].disabled || this.tabGroundData.activeNameKey === name) return
      this.setTabItemStyle()
      this.$emit('change', name, i)
    },
    closeClick(porps, i) {
      this.$emit('edit', porps.name, i)
    }
  }
}
</script>
