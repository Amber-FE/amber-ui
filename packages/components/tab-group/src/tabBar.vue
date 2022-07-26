<template>
  <div ref="tabItemContainer" class="amber-tabs-bar">
    <div class="amber-tabs-bar-container">
      <div
        v-if="isScroll"
        @click="prevBar"
        class="ant-tabs-tab-arrow ant-tabs-tab-arrow-prev"
        :class="{ 'ant-tabs-tab-arrow-disabled': scrolledWidth <= 0 }"
      >
        <
      </div>
      <div class="amber-tabs-bar-content">
        <div
          class="amber-tabs-bar-scroll"
          :style="{ transform: 'translate3d(-' + scrolledWidth + 'px, 0px, 0px)' }"
        >
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
          <div
            data-name="link"
            :class="className"
            :style="{
              width: `${
                tabItemStyle[tabGroundData.activeNameKey] &&
                tabItemStyle[tabGroundData.activeNameKey]['width']
              }px`,
              transform: `translate3d(${
                tabItemStyle[tabGroundData.activeNameKey] &&
                tabItemStyle[tabGroundData.activeNameKey]['offsetLeft']
              }px,
            0px, 0px)`
            }"
          ></div>
        </div>
      </div>
      <span
        v-if="isScroll"
        @click="nextBar"
        class="ant-tabs-tab-arrow ant-tabs-tab-arrow-next"
        :class="{
          'ant-tabs-tab-arrow-disabled': tabItemSumWidth <= scrolledWidth + tabItemGroundWidth
        }"
        >></span
      >
    </div>
    <div ref="tabItemExtra" class="amber-tabs-extra-content">
      <slot />
    </div>
  </div>
</template>
<script>
import AmberIcon from '../../icon/index'
import { getPropsData } from '../../../util/slots'
import { getBoxInfo } from '../../../util'

export default {
  name: 'AmberTabsBar',
  components: {
    AmberIcon
  },
  props: {},
  data() {
    return {
      tabItemStyle: {},
      tabItemGroundWidth: 0,
      tabItemSumWidth: 0,
      isScroll: false,
      scrolledWidth: 0
    }
  },
  computed: {
    className() {
      return {
        'ant-tabs-link-bar': true,
        'ant-tabs-link-bar-animated': this.tabGroundProps.animated
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
  mounted() {
    this.setTabItemStyle()
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
      let sumWidth = 0
      this.$nextTick(() => {
        if (this.$refs.tabItemGround) {
          this.tabItemGroundWidth = this.$refs.tabItemGround.offsetWidth
          Array.from(this.$refs.tabItemGround.children).forEach((d, i) => {
            const boxInfo = getBoxInfo(d)
            sumWidth += boxInfo.content.width + boxInfo.margin.left + boxInfo.margin.right
            this.$set(this.tabItemStyle, this.tabProps[i].name, {
              offsetLeft: boxInfo.offsetLeft,
              width: boxInfo.content.width
            })
          })
          this.tabItemSumWidth = sumWidth
          this.isScroll =
            sumWidth >=
            this.$refs.tabItemContainer.offsetWidth - this.$refs.tabItemExtra.offsetWidth
        }
      })
    },
    handerClick(name, i) {
      // if (this.tabProps[i].disabled || this.tabGroundData.activeNameKey === name) return
      this.setTabItemStyle()
      // 滚动状态 自动吸附
      if (this.isScroll) {
        if (this.tabItemStyle[name].offsetLeft < this.scrolledWidth) {
          this.scrolledWidth = this.tabItemStyle[name].offsetLeft
        }
        if (
          this.scrolledWidth + this.tabItemGroundWidth - this.tabItemStyle[name].offsetLeft <
          this.tabItemStyle[name].width
        ) {
          this.scrolledWidth =
            this.tabItemStyle[name].offsetLeft +
            this.tabItemStyle[name].width -
            this.tabItemGroundWidth
        }
      }
      this.$emit('change', name, i)
    },
    closeClick(porps, i) {
      this.setTabItemStyle()
      this.$emit('edit', porps.name, i)
    },
    prevBar() {
      if (this.scrolledWidth <= 0 || this.scrolledWidth - this.tabItemGroundWidth <= 0) {
        this.scrolledWidth = 0
        return
      }
      this.scrolledWidth -= this.tabItemGroundWidth
    },
    nextBar() {
      if (this.tabItemSumWidth <= this.scrolledWidth + this.tabItemGroundWidth) return
      this.scrolledWidth += this.tabItemGroundWidth
    }
  }
}
</script>
