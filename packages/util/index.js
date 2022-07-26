export function transformPx(px) {
  const n = Number(px.replace('px', ''))
  if (n.isNaN) return 0
  return n
}

function processMargin(params) {
  let arr = params.split(' ')
  switch (arr.length) {
    case 1:
      arr = new Array(4).fill(arr[0])
      break
    case 2:
      arr = [...arr, ...arr]
      break
    case 3:
      arr = [arr[0], arr[1], arr[2], arr[1]]
      break

    default:
      break
  }
  return {
    top: transformPx(arr[0]),
    right: transformPx(arr[1]),
    bottom: transformPx(arr[2]),
    left: transformPx(arr[3])
  }
}

export function getBoxInfo(dom) {
  if (!dom) return {}
  const { margin, padding, borderWidth } = window.getComputedStyle(dom)
  const box = dom.getBoundingClientRect()
  return {
    content: box,
    margin: processMargin(margin),
    padding: processMargin(padding),
    border: transformPx(borderWidth),
    offsetLeft: dom.offsetLeft,
    offsetRight: dom.offsetRight
  }
}

export function getArrayIndex(arr, obj) {
  let i = arr.length
  // eslint-disable-next-line no-plusplus
  while (i--) {
    if (arr[i] === obj) {
      return i
    }
  }
  return -1
}

export const a = 1
