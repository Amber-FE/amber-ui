import StepGroup from './src/main.vue'

StepGroup.install = (Vue) => {
  Vue.component(StepGroup.name, StepGroup)
}

export default StepGroup
