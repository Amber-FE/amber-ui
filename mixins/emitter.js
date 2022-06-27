export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let { name } = parent.$options
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }
      // eslint-disable-next-line prefer-spread
      if (parent) parent.$emit.apply(parent, [eventName].concat(params))
    },
    boradcast(componentName, eventName, params) {
      this.$children.forEach((child) => {
        const { name } = child.$options
        if (name === componentName) {
          // eslint-disable-next-line prefer-spread
          child.$emit.apply(child, [eventName].concat(params))
        } else {
          this.broadcast.apply(child, [componentName, eventName].concat([params]))
        }
      })
    }
  }
}
