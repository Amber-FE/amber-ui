<template>
  <div class="amber-tabs-bar">
    <div class="amber-tabs-bar-container">
      <div>
        <div
          v-for="(name, i) in names"
          :key="name"
          class="amber-tab-item"
          ref="tabItem"
          :class="{
            'amber-tab-item-active': tabGround.currenNameKey === name,
            'amber-tab-item-disabled': disableds[i]
          }"
          @click="handerClick(name, i)"
        >
          {{ tabs[i] }}
        </div>
      </div>
      <div
        class="ant-tabs-ink-bar ant-tabs-ink-bar-animated"
        :style="tabItemStyle[tabGround.currenNameKey]"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AmberTabsBar',
  props: {
    names: {
      type: Array,
      default: () => []
    },
    tabs: {
      type: Array,
      default: () => []
    },
    disableds: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currenNameKey: '',
      tabItemStyle: {}
    }
  },
  computed: {
    classls() {
      return {}
    }
  },
  inject: ['tabGround'],
  created() {
    this.currenNameKey = this.currenName
  },
  mounted() {
    this.$refs.tabItem.forEach((d, i) => {
      this.$set(this.tabItemStyle, this.names[i], {
        width: `${d.offsetWidth}px`,
        transform: `translate3d(${d.offsetLeft}px, 0px, 0px)`
      })
    })
  },
  methods: {
    handerClick(name, i) {
      if (this.disableds[i]) return
      this.currenNameKey = name
      this.$emit('change', name, i)
    }
  }
}
</script>
