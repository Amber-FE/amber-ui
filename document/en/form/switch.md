# Switch

### 基本使用

::: demo
```html
<div class="switch-container">
	<amber-switch default-checked @change="handleChange"></amber-switch>
</div>
<script>
	export default {
		methods: {
			handleChange(value) {
				console.log(`amber-switch to ${value}`)
			}
		}
	}
</script>
```
::: 

### 不可用

::: demo
```html
<div class="switch-container">
	<amber-switch default-checked disabled></amber-switch>
</div>
```
::: 

### 两种大小

::: demo
```html
<div class="switch-container">
	<amber-switch default-checked></amber-switch>
	<br>
	<amber-switch default-checked size="small"></amber-switch>
</div>
```
:::

### API

#### Switch

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|defaultChecked | 初始是否选中 | boolean | false |  |
|disabled | 是否禁用 | boolean | false |  |
|checked | 指定当前是否选中 | boolean | false |  |
|size | 控件大小。可选default small | string | default |  |

#### Switch 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 变化时回调函数 | function(checked:Boolean,event:Event) |
