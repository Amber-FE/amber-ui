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

function getPropsData(vnode, value) {
  const propsData = vnode.componentOptions.propsData || {}
  if (value) return propsData[value]
  return propsData
}

function insetPropsData(vnode, props) {
  // eslint-disable-next-line no-param-reassign
  vnode.componentOptions.propsData = { ...getPropsData(vnode), ...props }
  return vnode
}

export { removeEmpty, isTag, getPropsData, insetPropsData }
