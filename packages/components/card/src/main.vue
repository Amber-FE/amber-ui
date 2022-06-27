<template>
  <div class="amber-card" :style="styles">
    <div class="amber-card-container" @click="contentClick">
      <!-- 商品图片 -->
      <div @click.stop="imgClick" class="amber-card-container-pic">
        <div v-if="smallImg" class="amber-card-container-smallPic">
          <img v-if="smallImg.match(/\.(jpeg|jpg|gif|png)$/) != null" :src="smallImg" alt="" />
          <amber-icon
            size="22px"
            :iconClass="smallImg"
            v-if="!(smallImg.match(/\.(jpeg|jpg|gif|png)$/) != null)"
          ></amber-icon>
        </div>
        <div class="label-box">
          <div class="kongxiao" v-if="kongxiao">
            <tag
              :styles="{
                padding: '2px 5px',
                borderRadius: ' 0 5px',
                background: '#2994FF',
                color: '#fff'
              }"
              size="12px"
              >控销</tag
            >
          </div>
          <div class="self" v-if="self">
            <tag
              :styles="{
                padding: '2px 5px',
                borderRadius: ' 0 5px',
                background: '#F91F1D',
                color: '#fff'
              }"
              size="12px"
              >自有</tag
            >
          </div>
        </div>
        <img :src="list.img_url" alt="" class="amber-card-container-goodsPic" />
      </div>
      <!-- 商品内容 -->
      <div class="amber-card-container-goodsInfo">
        <div class="amber-card-container-goodsInfo-name">{{ list.popname }}</div>
        <div class="amber-card-container-goodsInfo-p">
          <span class="amber-card-container-goodsInfo-span">规</span>
          <span>{{ list.specpack + '*' + list.wholenum + list.produnitname }}/件</span>
        </div>
        <div class="amber-card-container-goodsInfo-p">
          <span class="amber-card-container-goodsInfo-span">效</span>
          <span>有效期起于{{ list.validsdate }}</span>
        </div>
        <div class="amber-card-container-goodsInfo-p">
          <span class="amber-card-container-goodsInfo-span">厂</span>
          <span>{{ list.manuname }}</span>
        </div>
        <div class="goods-price">
          <span class="goods-price-yuan">￥</span
          ><amber-price color="#E62F2A" :price="list.tavatpriceD" :pointNumber="2"></amber-price>
        </div>
      </div>
      <!--底部活动内容  -->
      <div class="activity-content">
        <div class="one-price">
          <span class="maoli">
            毛利率{{ (list.tavatpriceD / list.srpriceD).toFixed(2) * 100 }}%
          </span>
          <span class="line">|</span>
          <span class="one-price-price">零售价￥{{ list.srpriceD.toFixed(2) || '' }}</span>
        </div>
        <div class="activity-content-tag">
          <tag
            :styles="{ padding: '2px 5px' }"
            size="10px"
            v-for="(item, index) in list.labelNames"
            :key="index"
            type="danger"
            >{{ item }}</tag
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '../../tag/index'
import AmberPrice from '../../price/index'
import AmberIcon from '../../icon/index'

export default {
  name: 'amber-card',
  components: {
    Tag,
    AmberPrice,
    AmberIcon
  },
  data() {
    return {
      // list: this.goodsInfo
    }
  },
  computed: {
    list() {
      return this.merge({ ...this.goodsInfo }, { ...this.props } || {})
    }
  },
  props: {
    goodsInfo: {
      type: Object,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    smallImg: {
      type: String,
      default: ''
    },
    kongxiao: {
      type: Boolean,
      default: false
    },
    self: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    merge(...target) {
      // console.log(target)
      for (let i = 0, j = target.length; i < j; i += 1) {
        const source = target[i] || {}
        for (const prop in source) {
          // eslint-disable-next-line no-prototype-builtins
          if (source.hasOwnProperty(prop)) {
            const value = source[prop]
            // eslint-disable-next-line no-prototype-builtins
            // eslint-disable-next-line no-prototype-builtins
            if (value !== undefined && !target.hasOwnProperty(value)) {
              // eslint-disable-next-line no-param-reassign
              target[prop] = value
            }
            // eslint-disable-next-line no-prototype-builtins
            if (value !== undefined && target.hasOwnProperty(value)) {
              // eslint-disable-next-line no-param-reassign
              target[prop] = target[value]
            }
          }
        }
      }

      return target
    },
    // 图片点击事件
    imgClick(e) {
      this.$emit('imgClick', e)
    },
    // 卡片除图片的点击事件
    contentClick(e) {
      this.$emit('contentClick', e)
    }
  }
}
</script>

<style></style>
