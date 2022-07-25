function removeEmpty(slots) {
  if (!slots || slots.length <= 0) return []
  return slots.filter((slot) => slot.tag)
}

function isTag(slots, tag) {
  return removeEmpty(slots).every(
    (item) =>
      item.componentOptions && item.componentOptions.tag && item.componentOptions.tag === tag
  )
}

function getPropsData(vNodes) {
  if (!vNodes) return []
  return vNodes.map((v) => v.componentOptions.propsData || {})
}

function insetPropsData(vnode, props) {
  // eslint-disable-next-line no-param-reassign
  vnode.componentOptions.propsData = { ...getPropsData(vnode), ...props }
  return vnode
}

const renderDom = {
  name: 'RenderDom',
  props: {
    vNode: [Array, String, Object, Number]
  },
  render(h) {
    if (typeof this.vNode === 'object') {
      return this.vNode
    }
    return h('div', this.vNode)
  }
}

export { removeEmpty, isTag, getPropsData, insetPropsData, renderDom }
