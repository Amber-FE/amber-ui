<template>
  <div class="amber-tree">
    <!-- 一级 -->
    <div class="amber-tree-box">
      <div class="amber-tree-firstManu" @click="isOpenHandle(1)">
        <!-- 一级菜单 -->
        <span class="amber-tree-firstManu-icon" type="checkbox">
          <amber-icon v-if="!isOpen" icon-class="xiangyou" />
          <amber-icon v-if="isOpen" icon-class="xiangxia" />
        </span>
        <input v-if="showCheckbox" type="checkbox" />
        <span>{{ data.title }}</span>
      </div>
      <!-- 展开 -->
      <amber-tree-node
        :class="[isOpen ? 'amber-open-node' : 'amber-close-node', 'amber-tree-seconedManu']"
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
        :show-checkbox="showCheckbox"
      />

      <!-- <div
        :class="[
          isOpen ? 'amber-open-node' : 'amber-close-node',
          'amber-tree-seconedManu',
        ]"
        v-for="(item, index) in data.children"
        :key="index"
      >
        <span>
          {{ item.title }}
        </span>
      </div> -->
    </div>
  </div>
</template>

<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberTreeNode',
  components: {
    AmberIcon
  },
  // 向外暴露的属性
  props: {
    title: {
      default: '',
      type: String
    },
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    // 是否展开或者关闭
    isOpenHandle(val) {
      if (val === 1) {
        this.isOpen = !this.isOpen
      }
      // console.log(this.isOpen, '打印 ')
    },
    getDate() {
      // console.log('拿到数据')
    }
  },
  mounted() {
    this.getDate()
  }
}
</script>

<style></style>
