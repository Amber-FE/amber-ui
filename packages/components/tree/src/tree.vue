<template>
  <div class="amber-tree-container">
    <div class="amber-tree-select" :style="getTreeContainer" @click="isShow = !isShow">
      <div class="amber-tree-select-icon">
        <amber-icon v-if="!isShow" icon-class="jiantou_down"></amber-icon>
        <amber-icon v-if="isShow" icon-class="jiantou_up"></amber-icon>
      </div>
      <!-- 选择单个 -->
      <div v-if="!multiple && !showCheckbox" class="amber-tree-select-text">{{ label }}</div>
      <!-- 选择多个 -->
      <div v-if="multiple && !showCheckbox" class="amber-tree-select-text">
        <span v-for="item in checkList" :key="item" class="amber-tree-select-text-span"
          ><span>{{ item }} </span>
          <span @click.stop="del(item)">
            <amber-icon icon-class="yichu" color="rgba(0,0,0,.25)" pointer size="14px" /> </span
        ></span>
      </div>
      <!-- 选择多个 checkbox -->
      <div v-if="multiple && showCheckbox" class="amber-tree-select-text">
        <span v-for="item in checkList" :key="item" class="amber-tree-select-text-span"
          ><span>{{ item }} </span>
          <span @click.stop="del(item)">
            <amber-icon icon-class="yichu" color="rgba(0,0,0,.25)" pointer size="14px" /> </span
        ></span>
      </div>
    </div>
    <div class="amber-tree-container-node" :style="getTreeContainer" v-if="isShow">
      <amber-checkbox-group v-model="checkList">
        <amber-tree-node
          v-for="(item, index) in treeData"
          :key="index"
          :data="item"
          :showCheckbox="showCheckbox"
          @onClick.stop="onClick"
          @onChange="onChange"
          :multiple="multiple"
        />
      </amber-checkbox-group>
    </div>
  </div>
</template>

<script>
import AmberTreeNode from './node.vue'
import AmberIcon from '../../icon'
import AmberCheckboxGroup from '../../checkbox-group'

export default {
  name: 'AmberTree',
  components: { AmberTreeNode, AmberIcon, AmberCheckboxGroup },
  props: {
    // 接收传过来的数据
    multiple: {
      type: Boolean,
      default: false
    },

    data: {
      type: Array,
      default() {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    vWidth: {
      type: String,
      default: '240px'
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    defaultLabel: {
      type: String,
      default: ''
    },
    defaultCheckList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      treeData: [],
      nodeShow: true,
      placeholder: '',
      label: this.defaultLabel,
      isShow: false,
      checkList: this.defaultCheckList
    }
  },
  computed: {
    getTreeContainer() {
      return {
        width: this.vWidth
      }
    }
  },
  methods: {
    del(item) {
      const index = this.checkList.indexOf(item)
      this.checkList.splice(index, 1)
      this.isShow = false
    },
    onChange() {
      this.$emit('change', this.checkList)
    },
    onClick(e) {
      if (!this.multiple && !this.showCheckbox) {
        if (this.label !== e.target.innerText) {
          this.label = e.target.innerText
          this.$emit('change', this.label)
          return
        }
        if (this.label === e.target.innerText) {
          this.label = ''
          this.$emit('change', this.label)
        }
      }
      if (this.multiple && !this.showCheckbox) {
        if (!this.checkList.includes(e.target.innerText)) {
          this.checkList.push(e.target.innerText)
          this.$emit('change', this.checkList)
          return
        }
        if (this.checkList.includes(e.target.innerText)) {
          const index = this.checkList.indexOf(e.target.innerText)
          this.checkList.splice(index, 1)
          this.$emit('change', this.checkList)
        }
      }
    },
    treeList() {
      this.treeData = this.data
    },
    init() {
      window.document.addEventListener('click', (e) => {
        const thisClassName = e.target.className
        if (
          this.isShow &&
          typeof thisClassName === 'string' &&
          thisClassName.indexOf('amber-tree-select') < 0
        ) {
          this.isShow = false
        }
      })
    }
  },
  mounted() {
    this.treeList()
    this.init()
  }
}
</script>

<style></style>
