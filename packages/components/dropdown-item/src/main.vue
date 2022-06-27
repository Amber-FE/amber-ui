<template>
  <div class="amber-dropdown-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'AmberDropdownItem',
  props: {
    name: {
      type: String,
      default: () => {
        return ''
      }
    },
    command: {
      type: String,
      default: () => {
        return ''
      }
    }
  }
}
</script>
