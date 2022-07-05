# Notification 

### 基本使用

::: demo
```html
<div class="modal-container">
	<amber-button @click="openNotification" type="primary">Open the notification box</amber-button>
</div>
<script>
	export default {
		methods: {
			openNotification() {
				this.$notification.open({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second'
				})
			}
		}
	}
</script>

```
:::

### 自定义样式

::: demo
```html
<div class="modal-container">
	<amber-button @click="openNotification" type="primary">Open the notification box</amber-button>
</div>
<script>
	export default {
		methods: {
			openNotification() {
				this.$notification.open({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second',
					className: 'myClass'
				})
			}
		}
	}
</script>
<style>
	.myClass {
		width: 600px;
		margin-right: 60px;
	}
</style>
```
:::

### 位置

::: demo
```html
<div class="modal-container">
	<amber-button @click="openNotification('topLeft')">topLeft</amber-button>
	<amber-button @click="openNotification('topRight')">topRight</amber-button>
	<amber-button @click="openNotification('bottomLeft')">bottomLeft</amber-button>
	<amber-button @click="openNotification('bottomRight')">bottomRight</amber-button>
</div>
<script>
	export default {
		methods: {
			openNotification(position) {
				this.$notification.open({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second',
					position: position
				})
			}
		}
	}
</script>
```
:::

### 带图标的通知提醒框

::: demo
```html
<div class="modal-container">
	<amber-button @click="openNotification('success')">Success</amber-button>
	<amber-button @click="openNotification('info')">Info</amber-button>
	<amber-button @click="openNotification('warning')">Warning</amber-button>
	<amber-button @click="openNotification('error')">Error</amber-button>
</div>
<script>
	export default {
		methods: {
			openNotification(type) {
				this.$notification[type]({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second'
				})
			}
		}
	}
</script>
```
:::

### 自动关闭取消

::: demo
```html
<div class="modal-container">
	<amber-button @click="openNotification" type="primary">Open the notification box</amber-button>
</div>
<script>
	export default {
		methods: {
			openNotification(type) {
				this.$notification.open({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second',
					duration: 0
				})
			}
		}
	}
</script>
```
:::

### API

包括:
+ Notification.open
+ Notification.success
+ Notification.error
+ Notification.warning
+ Notification.confirm

#### Notification

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|className | 自定义class | string |  |  |
|title | 标题 | string |  |  |
|content | 内容 | string |  |  |
|duration | 自定关闭时长 | number | 4.5 |  |
|visible(v-model) |提示框是否可见 | boolean | false |  |
|position | 提示框显示位置,可选 topLeft topRight bottomLeft bottomRight | string | topRight |  |

#### Notification 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
|onClose | 点击默认关闭按钮时出发回调函数 | function(e) |  |  |
