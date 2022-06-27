<template>
  <div class="amber-form-item" :class="labelAlign">
    <label
      :for="labelFor"
      :class="{
        'label-required': isRequired
      }"
      class="amber-form-item--label"
      v-if="label"
    >
      {{ label }}
    </label>
    <div
      class="amber-form-item--content"
      :class="{
        'is-error': isShowMes
      }"
      :style="getStyle"
    >
      <slot></slot>
      <transition name="zoom-in-top">
        <div class="amber-form-item--error" v-if="isShowMes">
          {{ message }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import Emitter from '/mixins/emitter.js'

export default {
  name: 'AmberFormItem',
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: String,
    for: String
  },
  inject: ['form'],
  data() {
    return {
      isRequired: false,
      message: '',
      isShowMes: false
    }
  },
  computed: {
    labelFor() {
      return this.for || this.prop
    },
    fieldValue() {
      return this.form.model[this.prop]
    },
    labelAlign() {
      const position = this.form.labelAlign
      if (position === 'right') {
        return 'label-align-right'
      }
      if (position === 'left') {
        return 'label-align-left'
      }
      return 'label-align-top'
    },
    getStyle() {
      return {
        'margin-left': this.form.inline && !this.prop ? '20px' : ''
      }
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch('AmberForm', 'form-add', this)
      // 初始值设置
      this.initialValue = this.fieldValue
      this.setRules()
    }
  },
  methods: {
    setRules() {
      // 设置具体需要监听的事件，并触发校验
      const rules = this.getRules()
      if (rules.length > 0) {
        rules.forEach((rule) => {
          if (rule.required !== undefined) {
            this.isRequired = rule.required
          }
        })
      }
      this.$on('form-blur', this.onFieldBlur)
      this.$on('form-change', this.onFieldChange)
    },
    getRules() {
      // 获取该表单对应的校验规则
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return formRules || []
    },
    getFilteredRule(trigger) {
      // 过滤出符合要求的rule规则
      const rules = this.getRules()
      return rules.filter((rule) => {
        return !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      })
    },
    /**
     * 校验表单数据
     * @param trigger 触发校验类型
     * @param callback 回调函数
     * */
    validate(trigger, cb) {
      // 具体的校验过程
      const rules = this.getFilteredRule(trigger)
      if (!rules || rules.length === 0) {
        return
      }
      // 使用 async-validator
      const validator = new AsyncValidator({ [this.prop]: rules })
      const model = { [this.prop]: this.fieldValue }
      validator.validate(model, { firstFields: true }, (errors) => {
        this.isShowMes = !!errors
        this.message = errors ? errors[0].message : ''
        if (cb) {
          cb(this.message)
        }
      })
    },
    resetField() {
      this.message = ''
      this.isShowMes = false
      this.form.model[this.prop] = this.initialValue
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      this.validate('change')
    }
  },
  // 组件销毁前，将实例从from的缓存中移除
  beforeDestroy() {
    this.dispatch('AmberForm', 'form-remove', this)
  }
}
</script>

<style></style>
