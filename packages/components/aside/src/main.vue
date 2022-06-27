<template>
  <aside class="amber-aside-container" :style="`width:${width};`">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: 'AmberAside',
  props: {
    width: {
      type: String,
      default: () => {
        return '300px'
      }
    }
  }
}
</script>
