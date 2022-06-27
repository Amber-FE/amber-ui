import Coupon from './src/main.vue'

Coupon.install = (Vue) => {
  Vue.component(Coupon.name, Coupon)
}

export default Coupon
