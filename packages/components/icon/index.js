import '../../../themes/fonts/iconfont'
import Icon from './src/main.vue'

Icon.install = (Vue) => {
  Vue.component(Icon.name, Icon)
}

export default Icon
