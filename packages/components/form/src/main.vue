<template>
  <form class="amber-form" :class="{ 'amber-form-inline': inline }">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'AmberForm',
  props: {
    model: {
      // 表单绑定数据
      type: Object
    },
    rules: {
      // 表达校验规则
      type: Object
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelAlign: {
      type: String,
      default: 'right'
    }
  },
  provide() {
    return {
      form: this
    }
  },
  data() {
    return {
      fields: [] // 保存组件中的表单实例，方便获取表单实例来判断各表单的校验情况
    }
  },
  created() {
    this.$on('form-add', (field) => {
      if (field) {
        this.fields.push(field)
      }
    })

    this.$on('form-remove', (field) => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  },
  methods: {
    resetFields() {
      this.fields.forEach((field) => field.resetField())
    },
    validate(cb) {
      return new Promise((resolve) => {
        let valid = true
        let count = 0
        this.fields.forEach((field) => {
          field.validate('', (error) => {
            if (error) {
              valid = false
            }
            // eslint-disable-next-line no-plusplus
            if (++count === this.fields.length) {
              resolve(valid)
              if (typeof cb === 'function') {
                cb(valid)
              }
            }
          })
        })
      })
    }
  }
}
</script>

<style></style>
