<template>
  <header class="amber-header-container" :style="`height:${height};`">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'AmberHeader',
  props: {
    height: {
      type: String,
      default: () => {
        return '60px'
      }
    }
  }
}
</script>
