import Vue from 'vue'
import Main from './main.vue'

const ModalContainer = Vue.extend(Main)

let seed = 1

const ModalBox = (options) => {
  let optionsCopy = options || {}
  if (typeof optionsCopy === 'string') {
    optionsCopy = {
      content: optionsCopy
    }
  }
  const id = `modal_${(seed += 1)}`
  const instance = new ModalContainer({
    data: optionsCopy
  })
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

const msgList = ['success', 'warning', 'info', 'error', 'confirm']
msgList.forEach((type) => {
  ModalBox[type] = (options) => {
    return ModalBox({
      type,
      ...options
    })
  }
})

export default ModalBox
