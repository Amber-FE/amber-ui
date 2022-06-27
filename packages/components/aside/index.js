import Aside from './src/main.vue'

Aside.install = (Vue) => {
  Vue.component(Aside.name, Aside)
}

export default Aside
