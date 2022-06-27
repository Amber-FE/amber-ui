import InfiniteScroll from './src/main.js'

InfiniteScroll.install = (Vue) => {
  Vue.directive(InfiniteScroll.name, InfiniteScroll)
}
export default InfiniteScroll
