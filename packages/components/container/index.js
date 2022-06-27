import Container from './src/main.vue'

Container.install = (Vue) => {
  Vue.component(Container.name, Container)
}

export default Container
