import PicturePreview from './src/main.vue'

PicturePreview.install = (Vue) => {
  Vue.component(PicturePreview.name, PicturePreview)
}

export default PicturePreview
