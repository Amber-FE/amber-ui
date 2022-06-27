<template>
  <div class="amber-ps-container">
    <ul
      class="amber-ps-container-list"
      :style="`width:${list.length * gapWidth + 240}px;transition: all ${transitionTime}s;`"
    >
      <li
        :style="`width: ${
          hoverIndex === index ? imgWidth : gapWidth
        }px;transition: all ${transitionTime}s;`"
        @mouseover="hoverIndex = index"
        @mouseout="hoverIndex = -1"
        v-for="(item, index) in list"
        :key="index"
      >
        <img
          :style="`width:${imgWidth}px;height: ${imgHeight}px;`"
          @click="handlePreview(item)"
          :src="item.url"
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AmberPictureStretch',
  props: {
    gapWidth: {
      type: Number,
      default: () => {
        return 96
      }
    },
    imgWidth: {
      type: Number,
      default: () => {
        return 303
      }
    },
    imgHeight: {
      type: Number,
      default: () => {
        return 204
      }
    },
    transitionTime: {
      type: Number,
      default: () => {
        return 0.3
      }
    },
    pictureList: {
      // 图片列表
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // 图片列表
      list: this.pictureList,
      hoverIndex: -1
    }
  },
  methods: {
    handlePreview(item) {
      this.$emit('callback', item)
    }
  },
  watch: {
    pictureList(newVal) {
      if (newVal.length > 0) {
        this.list = newVal
      }
    }
  }
}
</script>
