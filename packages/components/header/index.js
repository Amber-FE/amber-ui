import Header from './src/main.vue'

Header.install = (Vue) => {
  Vue.component(Header.name, Header)
}

export default Header
