<template>
  <div class="amber-pr-container">
    <div class="amber-pr-container-list" :style="`width: ${width}px;height: ${height}px`">
      <div
        v-if="list.length > 0"
        @click="array_swap_forward(list, 1)"
        class="amber-pr-container-list-left-arrow"
      >
        <amber-icon :pointer="true" color="#fff" size="12" icon-class="left" />
      </div>
      <!-- 左侧列表 -->
      <div class="amber-pr-container-list-wrapper">
        <img
          :style="`width:${imgWidth}px;height:${imgHeight}px;left: ${
            gapWidth * index
          }px;filter: blur(${1 / (index + 1)}px);`"
          v-for="(item, index) in left_list"
          :key="index"
          :src="item.url"
          @click="handleItemClick(item)"
        />
      </div>
      <!-- 大图 -->
      <div
        v-if="select_img.url"
        class="amber-pr-container-list-current"
        :style="`width: ${bigWidth}px;height: ${bigHeight}px`"
      >
        <img @click="handleBigImgClick(select_img)" :src="select_img.url" />
      </div>
      <!-- 右侧列表 -->
      <div class="amber-pr-container-list-wrapper">
        <img
          :style="`width:${imgWidth}px;height:${imgHeight}px;right: ${
            gapWidth * index
          }px;;filter: blur(${1 / (index + 1)}px);`"
          v-for="(item, index) in right_list"
          :key="index"
          :src="item.url"
          @click="handleItemClick(item)"
        />
      </div>
      <div
        v-if="list.length > 0"
        @click="array_swap_back(list, 1)"
        class="amber-pr-container-list-right-arrow"
      >
        <amber-icon :pointer="true" color="#fff" size="12" icon-class="right" />
      </div>
    </div>
    <div class="amber-pr-container-footer" :style="`width: ${width}px;`">
      <span
        :class="select_img.name === item.name ? 'amber-pr-container-footer__select' : ''"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>
<script>
import AmberIcon from '../../icon/index'

export default {
  name: 'AmberPictureRotation',
  components: {
    AmberIcon
  },
  props: {
    width: {
      // 宽度
      type: Number,
      default: () => {
        return 960
      }
    },
    height: {
      // 高度
      type: Number,
      default: () => {
        return 300
      }
    },
    bigWidth: {
      // 大图宽度
      type: Number,
      default: () => {
        return 600
      }
    },
    bigHeight: {
      // 大图宽度
      type: Number,
      default: () => {
        return 250
      }
    },
    imgWidth: {
      // 列表图片宽度
      type: Number,
      default: () => {
        return 300
      }
    },
    imgHeight: {
      // 列表图片高度
      type: Number,
      default: () => {
        return 200
      }
    },
    gapWidth: {
      // 间距
      type: Number,
      default: () => {
        return 88
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
      // 预览图片
      preview_url: '',
      // 左列表
      left_list: [],
      // 右列表
      right_list: [],
      // 当前下标
      current_inx: 0,
      select_img: {
        url: '',
        name: ''
      }
    }
  },
  created() {
    if (this.list.length > 0) {
      this.imageListSegmentation()
    }
    // this.list.length > 0 && this.imageListSegmentation()
  },
  methods: {
    handleItemClick(item) {
      const itemInx = this.list.findIndex((el) => el.name === item.name)
      let wNum = this.current_inx - itemInx
      while (wNum > 1) {
        this.array_swap_forward(this.list)
        wNum -= 1
      }

      while (wNum <= 0) {
        this.array_swap_back(this.list)
        wNum += 1
      }
      this.$emit('callback', item)
    },
    handleBigImgClick(item) {
      this.$emit('handleBigImgCallback', item)
    },
    // 图片数组分配
    imageListSegmentation() {
      const current = (this.list.length / 2) >> 0
      this.current_inx = current
      this.select_img = this.list[current - 1]
      this.left_list = this.list.slice(0, current - 1)
      this.right_list = this.list.slice(current, this.list.length).reverse()
    },
    // 往前
    array_swap_forward(arr) {
      let temp
      for (let i = 0; i < arr.length; i += 1) {
        temp = arr[arr.length - 1]
        // eslint-disable-next-line no-param-reassign
        arr[arr.length - 1] = arr[i]
        // eslint-disable-next-line no-param-reassign
        arr[i] = temp
      }
      this.imageListSegmentation()
    },
    // 后退
    array_swap_back(arr) {
      arr.push(arr.shift())
      this.imageListSegmentation()
    }
  },
  watch: {
    pictureList(newVal) {
      if (newVal.length > 0) {
        this.list = newVal
        this.imageListSegmentation()
      }
    }
  }
}
</script>
