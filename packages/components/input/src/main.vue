<template>
  <div
    class="amber-input-container"
    :class="{
      'amber-input-lg': size == 'large',
      'amber-input-sm': size == 'small'
    }"
  >
    <div
      v-if="inputType == 'textarea'"
      :class="{
        'amber-textarea-box': inputType == 'textarea'
      }"
    >
      <textarea
        class="amber-textarea"
        @input="onChange"
        @keyup="onPressEnter"
        :value="inputValue"
        :rows="rows"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxLength"
      ></textarea>
      <div class="amber-clear-button" v-if="allowClear && inputValue" @click="clearVal">
        <AmberIcon
          :pointer="true"
          color="rgba(0,0,0,.5)"
          icon-class="yichu"
          :size="size == 'large' ? '16px' : '14px'"
        />
      </div>
    </div>
    <div
      v-else
      class="amber-input-default"
      :class="{
        'amber-input-affix-before': hasAffixBefore,
        'amber-input-affix-after': hasAffixAfter || (inputSearch && !enterButton) || isPasswordBox,
        'amber-input-addon-before': hasAddonBefore,
        'amber-input-addon-after': hasAddonAfter || (inputSearch && enterButton)
      }"
    >
      <div class="amber-input-addonBefore" v-if="addonBefore && !$slots.addonBefore">
        {{ addonBefore }}
      </div>
      <div class="amber-input-addonBefore" v-if="$slots.addonBefore">
        <slot name="addonBefore"></slot>
      </div>

      <div class="amber-clear-box">
        <div class="amber-clear-button" v-if="allowClear && inputValue" @click="clearVal">
          <AmberIcon
            :pointer="true"
            color="rgba(0,0,0,.5)"
            icon-class="yichu"
            :size="size == 'large' ? '16px' : '14px'"
          />
        </div>

        <div style="position: relative">
          <div class="amber-input-prefix" v-if="prefix && !$slots.prefix">
            {{ prefix }}
          </div>
          <div class="amber-input-prefix" v-if="$slots.prefix">
            <slot name="prefix"></slot>
          </div>

          <input
            class="amber-input"
            @input="onChange"
            @focus="onFocus"
            @blur="onBlur"
            @keyup="onPressEnter"
            :value="inputValue"
            :type="inputType"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxLength"
          />

          <div class="amber-input-suffix" v-if="isPasswordBox" @click="changePasswordStatus">
            <AmberIcon
              v-if="couldSeePassword"
              icon-class="chakanmima"
              color="rgba(0,0,0,.65)"
              :size="size == 'large' ? '16px' : '14px'"
            />
            <AmberIcon
              v-if="!couldSeePassword"
              icon-class="yincangmima"
              color="rgba(0,0,0,.65)"
              :size="size == 'large' ? '16px' : '14px'"
            />
          </div>
          <div v-else>
            <div class="amber-input-suffix" v-if="inputSearch && !enterButton" @click="onSearch">
              <AmberIcon
                icon-class="a-fangdajing3x"
                pointer
                color="rgba(0,0,0,.65)"
                :size="size == 'large' ? '16px' : '14px'"
              />
            </div>
            <div v-if="!inputSearch">
              <div class="amber-input-suffix" v-if="suffix && !$slots.suffix">
                {{ suffix }}
              </div>
              <div class="amber-input-suffix" v-if="$slots.suffix">
                <slot name="suffix"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="amber-input-search" v-if="enterButton">
        <AmberButton class="amber-input-search-button" @click="onSearch">
          {{ searchTitle }}
        </AmberButton>
      </div>
      <div v-else>
        <div class="amber-input-addonAfter" v-if="addonAfter && !$slots.addonAfter">
          {{ addonAfter }}
        </div>
        <div class="amber-input-addonAfter" v-if="$slots.addonAfter">
          <slot name="addonAfter"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Emitter from '/mixins/emitter.js'
import AmberIcon from '../../icon/index'
import AmberButton from '../../button/index'

export default {
  name: 'AmberInput',
  mixins: [Emitter],
  components: {
    AmberIcon,
    AmberButton
  },
  props: {
    placeholder: String,
    prefix: {
      type: String,
      default: () => {
        return ''
      }
    },
    suffix: {
      type: String,
      default: () => {
        return ''
      }
    },
    addonBefore: {
      type: String,
      default: () => {
        return ''
      }
    },
    addonAfter: {
      type: String,
      default: () => {
        return ''
      }
    },
    size: {
      type: String,
      default: () => {
        return 'default'
      }
    },
    type: {
      type: String,
      default: () => {
        return 'text'
      }
    },
    inputSearch: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    searchTitle: {
      type: String,
      default: () => {
        return 'Search'
      }
    },
    enterButton: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    rows: {
      type: Number,
      default: () => {
        return 3
      }
    },
    maxLength: Number,
    value: {
      type: String,
      default: () => {
        return ''
      }
    },
    allowClear: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      hasAffixBefore: false, // 是否有前缀
      hasAffixAfter: false, // 是否有后缀
      hasAddonBefore: false, // 是否有前置标签
      hasAddonAfter: false, // 是否有后置标签
      isPasswordBox: false, // 是否为密码输入框
      couldSeePassword: false, // 密码可视状态
      inputValue: this.value,
      inputType: this.type
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {
    value(val) {
      this.inputValue = val
    }
  },
  mounted() {
    if (this.inputType !== 'textarea') {
      this.initValue()
    }
  },
  methods: {
    initValue() {
      this.hasAffixBefore = this.prefix || this.$slots.prefix
      this.hasAffixAfter = this.suffix || this.$slots.suffix
      this.hasAddonBefore = this.addonBefore || this.$slots.addonBefore
      this.hasAddonAfter = this.addonAfter || this.$slots.addonAfter
      this.isPasswordBox = this.inputType === 'password'
    },
    changePasswordStatus() {
      this.couldSeePassword = !this.couldSeePassword
      this.inputType = this.couldSeePassword ? 'text' : 'password'
    },
    onSearch(e) {
      this.$emit('search', e)
    },
    onChange(e) {
      // this.$emit('input',e.target.value);
      this.inputValue = e.target.value
      this.$emit('change', this.inputValue)

      this.dispatch('AmberFormItem', 'form-change', this.inputValue)
    },
    clearVal() {
      // this.$emit('input','');
      this.inputValue = ''
      this.$emit('change', '')
      this.dispatch('AmberFormItem', 'form-change', '')
    },
    onFocus(e) {
      this.$emit('focus', e)
    },
    onBlur(e) {
      this.$emit('blur', e)
      this.dispatch('AmberFormItem', 'form-blur', e)
    },
    onPressEnter(e) {
      if (e.code === 'Enter') {
        this.$emit('pressEnter', e)
      }
    }
  }
}
</script>
