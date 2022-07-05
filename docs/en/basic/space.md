# Space 

### 基本使用

::: demo
```html
<div class="space-container">
	<div class="space-container-item">
		<amber-space>
			<amber-button type="primary" @click.native="handleClick">主色调</amber-button>
			<amber-button type="warning">提示按钮</amber-button>
			<amber-button type="danger">警示按钮</amber-button>
		</amber-space>
	</div>
</div>
<script>
  export default {
    methods: {
      handleClick(e) {
        console.log("点击了按钮", e)
      }
    }
  }
</script>
```
::: 

### 垂直间距

::: demo
```html
<div class="space-container">
	<div class="space-container-item">
		<amber-space direction="vertical">
			<amber-button type="primary">主色调</amber-button>
			<amber-button type="warning">提示按钮</amber-button>
			<amber-button type="danger">警示按钮</amber-button>
		</amber-space>
	</div>
</div>
```
::: 

### 间距大小

::: demo
```html
<div class="space-container">
	<div class="space-container-item">
		<amber-space size="12px">
			<amber-radio label="a" v-model="radioValue" @change="handleRadioChange">单选A</amber-radio>
			<amber-radio label="b" v-model="radioValue" @change="handleRadioChange">单选B</amber-radio>
			<amber-radio label="c" v-model="radioValue" @change="handleRadioChange">单选C</amber-radio>
		</amber-space>
	</div>
</div>
<script>
  export default {
    data() {
      return {
        radioValue: 'a'
      }
    },
    methods: {
		handleRadioChange(value) {
			this.radioValue = value
		}
    }
  }
</script>
```
::: 

### API

#### Space

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| direction | 间距方向。可选horizontal vertical | string | horizontal |  |
| size | 间距大小 | string | 8px |  |
