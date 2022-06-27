<template>
  <div style="display: flex; width: 446px" class="amber-coupon-container" @click="couponClick">
    <div
      class="amber-coupon-container-left"
      :style="`width:317px;height:97px;background:${bgColor};position: relative;`"
    >
      <div class="cro_right_top"></div>
      <div class="cro_right_bottom"></div>
      <div class="amber-coupon-container-left-icon">
        <AmberIcon size="74px" :iconClass="icon" />
      </div>
      <div class="amber-coupon-container-left-type" :style="`background: ${bgType};`">
        <div :style="`width: 14px; margin: 0 auto;line-height: 16px;color:${color}`">
          {{ couponType }}
        </div>
      </div>
      <div class="amber-coupon-container-left-content">
        <div v-if="!$slots.content" class="amber-coupon-container-left-content-box">
          <p class="title" :style="`color:${color}`">{{ title }}</p>
          <p class="desc" :style="`color:${color}`">{{ describe }}</p>
          <p class="desc" :style="`color:${color}`">{{ time }}</p>
        </div>
        <slot name="content"></slot>
      </div>
    </div>
    <div
      class="amber-coupon-container-right"
      :style="`width:127px;height:97px;border-left:${borderRight};background:${bgRightColor};border-top-right-radius:8px;border-bottom-right-radius:8px;position: relative;`"
    >
      <div class="cro_left_top"></div>
      <div class="cro_left_bottom"></div>
      <div class="amber-coupon-container-right-content">
        <div v-if="!$slots.right" class="price">
          <AmberPrice
            :color="color"
            :thousands="true"
            :unit-scale="0.5"
            :size="36"
            :show-unit="true"
            :price="price"
          />
          <!-- <AmberButton size="small" round><span :style="`font-size: 14px;font-weight: 500;color: ${bgRightColor};`">立即使用</span></AmberButton> -->
        </div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import AmberIcon from '../../icon/index'
import AmberPrice from '../../price/index'

export default {
  name: 'AmberCoupon',
  components: {
    AmberIcon,
    AmberPrice
  },
  props: {
    typeTitle: String,
    type: {
      type: String,
      default: () => {
        return 'default'
      }
    },
    title: {
      type: String,
      default: () => {
        return '代金券'
      }
    },
    describe: {
      type: String,
      default: () => {
        return '这里是描述的描述'
      }
    },
    time: {
      type: String,
      default: () => {
        return '这里是有效期'
      }
    },
    price: {
      type: [Number, String],
      default: () => {
        return '300'
      }
    },
    icon: {
      type: String,
      default: () => {
        return 'a-xingzhuangjiehe3x1'
      }
    },
    beOverdue: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      color: '',
      bgColor: '',
      borderRight: '',
      bgRightColor: '',
      couponType: '',
      bgType: '',
      default: {
        bgColor: 'linear-gradient(90deg, #00BCFF 0%, #008DFC 100%)',
        borderRight: '2px dashed #ffffff',
        bgRightColor: '#008DFC',
        couponType: '现金券',
        bgType: '#00a7fd',
        color: '#FFFFFF'
      },
      fullMinus: {
        bgColor: 'linear-gradient(90deg, #E54D60 0%, #FE6C34 100%)',
        borderRight: '2px dashed #ffffff',
        bgRightColor: '#FE6C34',
        couponType: '满赠现金券',
        bgType: '#FE6C34',
        color: '#FFFFFF'
      },
      freeShip: {
        bgColor: 'linear-gradient(90deg, #FF6800 0%, #FCA300 100%)',
        borderRight: '2px dashed #ffffff',
        bgRightColor: '#FCA300',
        couponType: '包邮券',
        bgType: '#FCA300',
        color: '#FFFFFF'
      }
    }
  },
  created() {
    this.initType()
  },
  methods: {
    initType() {
      const theme = this[this.type]
      Object.keys(theme).forEach((key) => {
        this[key] = theme[key]
      })
      if (this.typeTitle) {
        this.couponType = this.typeTitle
      }
      if (this.beOverdue) {
        this.bgColor = 'linear-gradient(90deg, #eeeeee 0%, #e8e8e8 100%)'
        this.borderRight = '2px dashed #ffffff'
        this.bgRightColor = '#e8e8e8'
        this.color = '#999999'
        this.bgType = '#e8e8e8'
      }
    },
    couponClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
