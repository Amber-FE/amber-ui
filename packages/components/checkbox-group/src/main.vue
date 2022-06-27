<template>
  <div class="amber-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AmberCheckboxGroup',
  props: {
    checkList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  provide() {
    return {
      checkboxGroup: this
    }
  },
  model: {
    prop: 'checkList'
  }
}
</script>

<style></style>
