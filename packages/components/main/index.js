import Main from './src/main.vue'

Main.install = (Vue) => {
  Vue.component(Main.name, Main)
}

export default Main
