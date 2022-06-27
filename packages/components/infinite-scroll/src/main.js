/** * 控制程序的执行的间隔 * @param {*} fn 要执行的程序 * @param {*} delay 时间间隔 */
function throttle(fn, delay) {
  let timerId
  return () => {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      fn()
      timerId = null
    }, delay)
  }
}
// 找出scroll对应的容器
function getScrollContainer(el) {
  let container = el
  while (container) {
    if ([window, document, document.documentElement].includes(container)) {
      return window
    }
    if (
      container.style.overflow === 'auto' ||
      container.style.overflow === 'scroll' ||
      container.style.overflowY === 'auto' ||
      container.style.overflowY === 'scroll'
    ) {
      return container
    }
    container = container.parentNode
  }
  return container
}

const attributes = {
  disabled: {
    type: Boolean,
    default: false
  },
  distance: {
    type: Number,
    default: 0
  },
  delay: {
    type: Number,
    default: 200
  }
}
// 滚动条滚动事件
function scrollBottom(e, el, binding, vm) {
  let value = el.getAttribute('infinite-scroll-disabled')
  let distance = el.getAttribute('infinite-scroll-distance')
  // console.log(distance)
  distance = distance ? vm[distance] || distance : attributes.distance.default
  // console.log(distance, value)
  value = value ? vm[value] : attributes.disabled.default
  // console.log(value)
  if (value) {
    return
  }
  if (e === window) {
    const height = window.document.body.scrollHeight
    // console.log(height)
    if (height - (e.scrollY + e.innerHeight) <= distance) {
      binding.value()
    }
  }
  if (e.scrollHeight - e.scrollTop - e.offsetHeight <= distance) {
    binding.value()
  }
}
export default {
  name: 'infinite-scroll',
  inserted(el, binding, vnode) {
    // console.log(getComputedStyle(el, null))
    // console.dir(el, binding, vnode.elm.offsetTop)
    const vm = vnode.context
    const container = getScrollContainer(el)
    let delay = container.getAttribute('infinite-scroll-delay')
    delay = delay ? vm[delay] || delay : attributes.delay.default
    const onScroll = throttle(() => scrollBottom(container, el, binding, vm), delay)
    // console.log(container)
    container.addEventListener('scroll', onScroll)
  },
  unbind(el, binding, vnode) {
    const vm = vnode.context
    const container = getScrollContainer(el)
    let delay = container.getAttribute('infinite-scroll-delay')
    delay = delay ? vm[delay] || delay : attributes.delay.default
    const onScroll = throttle(() => scrollBottom(container, el, binding, vm), delay)
    // console.log(container)
    container.removeEventListener('scroll', onScroll)
  }
}
