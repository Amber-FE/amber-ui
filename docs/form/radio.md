# Radio 单选框


::: demo
```html

<h4>基础用法</h4>
<div class="radio-item">
  <amber-radio label="a" v-model="radioValue">单选A</amber-radio>
  <amber-radio label="b" v-model="radioValue">单选B</amber-radio>
  <amber-radio label="c" v-model="radioValue">单选C</amber-radio>
</div>

<h4>禁用</h4>
<div class="radio-item">
  <amber-radio disabled label="a" v-model="radioValue">单选A</amber-radio>
  <amber-radio disabled label="b" v-model="radioValue">单选B</amber-radio>
  <amber-radio disabled label="c" v-model="radioValue">单选C</amber-radio>
</div>

<h4>按钮组</h4>
<amber-radio-group v-model="radioButtonValue" @change="handleRadioChange">
  <amber-radio-button label="a1">变帅</amber-radio-button>
  <amber-radio-button label="b1">变强</amber-radio-button>
  <amber-radio-button label="c1">有钱</amber-radio-button>
</amber-radio-group>

<script>
  export default {
    data() {
      return {
        radioValue: 'a',
        radioButtonValue: 'a1'
      }
    },
    methods: {
      handleRadioChange(value) {
        console.log(value)
        this.radioButtonValue = value
      }
    }
  }
</script>
```
:::