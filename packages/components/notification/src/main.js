import Vue from 'vue'
import Main from './main.vue'

const NotificationBox = Vue.extend(Main)

let seed = 1
let zIndex = 2001
const instances = []

const Notification = (options) => {
  const optionsCopy = options || {}
  const position = optionsCopy.position || 'topRight'
  const userOnClose = optionsCopy.onClose
  zIndex += 1
  const id = `notification_${(seed += 1)}`

  optionsCopy.onClose = () => {
    Notification.close(id, userOnClose)
  }

  const instance = new NotificationBox({
    data: optionsCopy
  })
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.dom = instance.$el
  instance.dom.style.zIndex = zIndex

  let verticalOffset = optionsCopy.offset || 0
  instances
    .filter((item) => item.position === position)
    .forEach((item) => {
      verticalOffset += item.$el.offsetHeight + 16
    })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

const typeList = ['success', 'warning', 'info', 'error', 'open']
typeList.forEach((type) => {
  Notification[type] = (options) => {
    return Notification({
      type,
      ...options
    })
  }
})

Notification.close = (id, userOnClose) => {
  let index = -1
  const len = instances.length
  const instance = instances.filter((item, i) => {
    if (item.id === id) {
      index = i
      return true
    }
    return false
  })[0]
  if (!instance) return

  if (typeof userOnClose === 'function') {
    userOnClose(instance)
  }
  instances.splice(index, 1)

  if (len <= 1) return
  const { position } = instance
  const removedHeight = instance.dom.offsetHeight
  for (let i = index; i < len - 1; i += 1) {
    if (instances[i].position === position) {
      instances[i].dom.style[instance.verticalProperty] = `${
        parseInt(instances[i].dom.style[instance.verticalProperty], 10) - removedHeight - 16
      }px`
    }
  }
}

export default Notification
