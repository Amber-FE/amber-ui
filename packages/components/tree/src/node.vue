<template>
  <div class="amber-tree-node">
    <!-- 一级 -->
    <div class="amber-tree-node-box">
      <div class="amber-tree-firstMenu" @click.stop="isOpenHandle(1)">
        <!-- 一级菜单 -->
        <span class="amber-tree-firstMenu-icon" type="checkbox">
          <amber-icon class="amber-tree-node-label" v-if="!isOpen" icon-class="jiantou_right" />
          <amber-icon class="amber-tree-node-label" v-if="isOpen" icon-class="jiantou_down" />
        </span>
        <!-- <input v-if="showCheckbox" type="checkbox" class="amber-tree-checkbox" />
         -->
        <span
          v-if="!showCheckbox && !multiple"
          @click.stop="onClick"
          class="amber-tree-node-label"
          >{{ data.label }}</span
        >
        <span
          v-if="!showCheckbox && multiple"
          @click.stop="onClick"
          class="amber-tree-node-label"
          >{{ data.label }}</span
        >
        <amber-checkbox
          :label="data.label"
          :checked="data.checked"
          @change="onChange()"
          v-if="showCheckbox && multiple"
        >
        </amber-checkbox>
      </div>
      <!-- 展开 -->
      <div>
        <amber-tree-node
          :class="[isOpen ? 'amber-open-node' : 'amber-close-node', 'amber-tree-seconedMenu']"
          v-for="(item, index) in children"
          :key="index"
          :data="item"
          :show-checkbox="showCheckbox"
          @onClick.stop="onClick"
          @onChange="onChange()"
          :multiple="multiple"
        />
      </div>

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
import AmberCheckbox from '../../checkbox'

export default {
  name: 'AmberTreeNode',
  components: {
    AmberIcon,
    AmberCheckbox
  },
  // 向外暴露的属性
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    children() {
      return this.data[this.childrenKey]
    }
  },
  methods: {
    onChange(e) {
      this.$emit('onChange', e)
    },
    onClick(e) {
      this.$emit('onClick', e)
    },
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
