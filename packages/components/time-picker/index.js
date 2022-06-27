import TimePicker from './src/main.vue'

TimePicker.install = (Vue) => {
  Vue.component(TimePicker.name, TimePicker)
}

export default TimePicker
