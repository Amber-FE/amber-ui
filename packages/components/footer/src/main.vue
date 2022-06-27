<template>
  <footer class="amber-footer-container" :style="`height:${height};`">
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'AmberFooter',
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
