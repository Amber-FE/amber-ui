import dataPicker from './src/main.vue'

dataPicker.install = (Vue) => {
  Vue.component(dataPicker.name, dataPicker)
}

export default dataPicker
