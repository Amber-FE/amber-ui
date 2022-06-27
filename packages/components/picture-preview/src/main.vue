<template>
  <div v-show="show" class="amber-pv-container">
    <div class="amber-pv-container-content">
      <img :src="images[images_index].url" />
      <div class="amber-pv-container-toolbar">
        <div :class="images_index === 0 ? 'disable' : ''" @click="handlePreviewBack">上一张</div>
        <div
          :class="images_index >= images.length - 1 ? 'disable' : ''"
          @click="handlePreviewForward"
        >
          下一张
        </div>
      </div>
    </div>
    <div class="amber-pv-container-close" @click="handlePreviewClose">
      <AmberIcon :pointer="true" size="20" icon-class="a-cuo3x1" />
    </div>
  </div>
</template>
<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberPicturePreview',
  components: {
    AmberIcon
  },
  props: {
    show: {
      // 是否显示
      type: [String, Boolean],
      default: () => {
        return false
      }
    },
    imageIndex: {
      // 默认展示图
      type: Number,
      default: () => {
        return 0
      }
    },

    pictureList: {
      // 图片数组
      type: Array,
      required: true
    }
  },
  data() {
    return {
      images_index: this.imageIndex,
      images: this.pictureList
    }
  },
  methods: {
    handlePreviewForward() {
      this.images_index += 1
    },
    handlePreviewBack() {
      this.images_index -= 1
    },
    handlePreviewClose() {
      this.$emit('close')
    }
  },
  watch: {
    imageIndex(newVal) {
      const maxLen = this.pictureList.length - 1
      if (newVal > maxLen) {
        this.images_index = maxLen
      } else {
        this.images_index = newVal
      }
    },
    pictureList(newVal) {
      this.images = newVal
    }
  }
}
</script>
