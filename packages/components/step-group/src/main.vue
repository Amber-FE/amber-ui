<script>
export default {
  name: 'AmberStepGroup',
  props: {
    current: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default: 'process'
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  provide() {
    return {
      stepGroup: this
    }
  },
  render(h) {
    const children = this.$slots.default || []
    const isStep = children
      .filter((child) => child.tag)
      .every(
        (item) =>
          item.componentOptions &&
          item.componentOptions.tag &&
          item.componentOptions.tag === 'amber-step'
      )
    if (!isStep) return h(null)
    return h(
      'div',
      { class: `amber-step-group amber-step-group-${this.direction}` },
      children
        .filter((child) => child.tag)
        .map((child, i) => {
          const type = child.componentOptions ? child.componentOptions.tag : child.tag
          return h(
            type,
            {
              ...child.data,
              props: {
                ...child.componentOptions.propsData,
                stepIndex: i
              }
            },
            child.componentOptions.children
          )
        })
    )
  }
}
</script>
