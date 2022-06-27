<template>
  <div>
    <amber-tree-node
      v-for="(item, index) in treeData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    />
  </div>
</template>

<script>
import AmberTreeNode from './node.vue'

export default {
  name: 'AmberTree',
  components: { AmberTreeNode },
  props: {
    // 接收传过来的数据
    data: {
      type: Array,
      default() {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      treeData: []
    }
  },
  methods: {
    treeList() {
      // console.log('初始化数据了')
      // console.log(this.data)
      this.treeData = this.data
    }
  },
  mounted() {
    this.treeList()
  }
}
</script>

<style></style>
