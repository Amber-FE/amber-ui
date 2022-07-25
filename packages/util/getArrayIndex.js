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
