<template>
<<<<<<< HEAD
  <div class="amber-pagination-container"></div>
</template>

<script>
export default {
  name: 'AmberPagination'
=======
  <ul class="amber-pagination">
    <li class="amber-pagination-head">
      <span>共{{ total }}条，每页</span>
      <div class="select">
        <amber-select v-model="pageSize" @change="handleChange()">
          <amber-select-option v-for="(item, i) in pageSizes" :key="i" :value="item">{{
            item
          }}</amber-select-option>
        </amber-select>
        <span>条</span>
      </div>
    </li>
    <li class="amber-pagination-item" @click="goPrevPage">
      <AmberIcon class="prev-icon" iconClass="jiantou_left" />
    </li>
    <li
      class="amber-pagination-item"
      @click="changePage(1)"
      :class="{ active: selectPage == 1 }"
      v-if="pageCount > 0"
    >
      1
    </li>
    <li class="amber-pagination-item" v-if="showPrevMore" @click="currentPageSub">
      <span>...</span>
    </li>
    <li
      class="amber-pagination-item"
      v-for="item in pagers"
      :key="item"
      :class="{ active: item == selectPage }"
      @click="changePage(item)"
    >
      {{ item }}
    </li>
    <li class="amber-pagination-item" v-if="showNextMore" @click="currentPageAdd">
      <span>...</span>
    </li>
    <li
      class="amber-pagination-item"
      @click="changePage(pageAll)"
      v-if="pageCount > 1"
      :class="{ active: selectPage == pageAll }"
    >
      {{ pageAll }}
    </li>
    <li class="amber-pagination-item" @click="goNextPage()">
      <AmberIcon class="prev-icon" iconClass="jiantou_right" />
    </li>
    <li class="amber-pagination-footer" v-if="isJump">
      <span>跳至</span>
      <input
        class="page-input"
        v-model="pageCurrent"
        @blur="changeCurrent"
        @keyup.enter="changeCurrent"
      />页
    </li>
  </ul>
</template>

<script>
import AmberIcon from '../../icon/index'
import AmberSelect from '../../select/index'
import AmberSelectOption from '../../select-option/index'

export default {
  name: 'AmberPagination',
  componens: {
    AmberIcon,
    AmberSelect,
    AmberSelectOption
  },
  props: {
    // 总页码数量
    pageCount: {
      type: Number,
      default: 10
    },
    // 总条目数
    total: {
      type: [Number, String],
      default: 100
    },
    // 每页显示条数选择器的选项设置
    pageSizes: {
      type: Array,
      default: () => {
        return ['10', '20', '30', '50', '100']
      }
    },
    isJump: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pageSize: this.pageSizes[0],
      selectPage: 1,
      pageAll: this.pageCount,
      showPrevMore: false,
      showNextMore: false,
      pageCurrent: 1
    }
  },
  methods: {
    handleChange() {
      this.pageAll = Math.ceil(this.total / this.pageSize)
      console.log(this.pageAll)
    },
    changePage(item) {
      this.selectPage = item
      this.pageCurrent = item
    },
    goNextPage() {
      this.selectPage += 1
      if (this.selectPage >= this.pageAll) {
        this.selectPage = this.pageAll
      }
      this.pageCurrent = this.selectPage
    },
    goPrevPage() {
      this.selectPage -= 1
      if (this.selectPage <= 1) {
        this.selectPage = 1
      }
      this.pageCurrent = this.selectPage
    },
    currentPageAdd() {
      this.selectPage += 5
      if (this.selectPage >= this.pageAll) this.selectPage = this.pageAll
      this.pageCurrent = this.selectPage
    },
    currentPageSub() {
      this.selectPage -= 5
      if (this.selectPage <= 1) this.selectPage = 1
      this.pageCurrent = this.selectPage
    },
    changeCurrent() {
      this.pageCurrent = Math.floor(this.pageCurrent)
      this.selectPage = this.pageCurrent
      if (this.selectPage <= 1) {
        this.selectPage = 1
        this.pageCurrent = 1
      }
      if (this.selectPage >= this.pageAll) {
        this.selectPage = this.pageAll
        this.pageCurrent = this.pageAll
      }
    }
  },
  computed: {
    pagers() {
      // 当总页数超过这个值的时候会进行折叠
      const pagerCount = 7
      const halfPagerCount = (pagerCount - 1) / 2
      // 当前页数
      const currentPage = this.selectPage
      const pageCount = this.pageAll

      let showPrevMore = false
      let showNextMore = false
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true
        }
      }

      const pageArray = []
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2)
        for (let i = startPage; i < pageCount; i += 1) {
          pageArray.push(i)
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i += 1) {
          pageArray.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i += 1) {
          pageArray.push(i)
        }
      } else {
        for (let i = 2; i < pageCount; i += 1) {
          pageArray.push(i)
        }
      }

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.showPrevMore = showPrevMore
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.showNextMore = showNextMore

      console.log(this.showPrevMore, this.showNextMore)
      console.log(pageArray)
      return pageArray
    }
  },
  mounted() {
    this.pageAll = Math.ceil(this.total / this.pageSize)
  }
>>>>>>> main
}
</script>
