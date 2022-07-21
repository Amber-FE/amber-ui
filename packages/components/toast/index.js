import Toast from './src/main.vue'

Toast.install = (Vue) => {
  Vue.component(Toast.name, Toast)
}

export default Toast
