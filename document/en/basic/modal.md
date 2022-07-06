# Modal 

### 基本使用

::: demo
```html
<div class="modal-container">
	<amber-button @click="showModal" type="primary">Open Modal</amber-button>
	<div class="modal-container-item">
		<amber-modal
			:visible="visible"
			title="title"
			@cancel="handleCancel"
			@ok="handleOk"
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</amber-modal>
	</div>
</div>
<script>
	export default {
		data() {
			return {
				visible: false,
			}
		},
		methods: {
			showModal() {
				this.visible = true
			},
			handleOk() {
				this.visible = false;
			},
			handleCancel() {
				this.visible = false;
			}
		}
	}
</script>

```
:::

### 自定义页脚

::: demo
```html
<div class="modal-container">
	<amber-button @click="showModal" type="primary">Open Modal with customized footer</amber-button>
	<div class="modal-container-item">
		<amber-modal
			:visible="visible"
			title="title"
			@cancel="handleCancel"
			@ok="handleOk"
		>
			<template #footer>
				<amber-button size="small" @click.stop="handleCancel">Return</amber-button>
				<amber-button size="small" type="primary" @click.stop="handleOk">Submit</amber-button>
			</template>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</amber-modal>
	</div>
</div>
<script>
	export default {
		data() {
			return {
				visible: false,
			}
		},
		methods: {
			showModal() {
				this.visible = true
			},
			handleOk() {
				this.visible = false;
			},
			handleCancel() {
				this.visible = false;
			}
		}
	}
</script>
```
:::

### 自定模态宽度

::: demo
```html
<div class="modal-container">
	<amber-button @click="showModal" type="primary">Open Modal of 1000px width</amber-button>
	<div class="modal-container-item">
		<amber-modal
			:visible="visible"
			title="title"
			@cancel="handleCancel"
			@ok="handleOk"
			width="1000px"
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</amber-modal>
	</div>
</div>
<script>
	export default {
		data() {
			return {
				visible: false,
			}
		},
		methods: {
			showModal() {
				this.visible = true
			},
			handleOk() {
				this.visible = false;
			},
			handleCancel() {
				this.visible = false;
			}
		}
	}
</script>
```
:::

### 全屏

::: demo
```html
<div class="modal-container">
	<amber-button @click="showModal" type="primary">Open Modal</amber-button>
	<div class="modal-container-item">
		<amber-modal
			:visible="visible"
			title="title"
			@cancel="handleCancel"
			@ok="handleOk"
			width="100%"
			wrap-class-name="full-modal"
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</amber-modal>
	</div>

</div>
<script>
	export default {
		data() {
			return {
				visible: false,
			}
		},
		methods: {
			showModal() {
				this.visible = true
			},
			handleOk() {
				this.visible = false;
			},
			handleCancel() {
				this.visible = false;
			}
		}
	}
</script>
<style>
	.full-modal {
		top: 0 !important;
		max-height: initial !important;
		height: 100%;
	}
	.amber-modal-content-body {
		flex: 1 1 0%;
	}
</style>
```
:::

### 异步关闭

::: demo
```html
<div class="modal-container">
	<amber-button @click="showModal" type="primary">Open Modal</amber-button>
	<div class="modal-container-item">
		<amber-modal
			:visible="visible"
			title="title"
			:confirm-loading="confirmLoading"
			@cancel="handleCancel"
			@ok="handleOk"
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</amber-modal>
	</div>
</div>
<script>
	export default {
		data() {
			return {
				visible: false,
				confirmLoading: false
			}
		},
		methods: {
			showModal() {
				this.visible = true
			},
			handleOk() {
				this.confirmLoading = true;
				setTimeout(()=>{
					this.confirmLoading = false
					this.visible = false
				},2000)
			},
			handleCancel() {
				this.visible = false;
			}
		}
	}
</script>

```
:::

### 信息提示

::: demo
```html
<div class="modal-container">
	<!-- <amber-space> -->
		<amber-button @click="info">Info</amber-button>
		<amber-button @click="success" type="primary">Success</amber-button>
		<amber-button @click="error" type="danger">Error</amber-button>
		<amber-button @click="warning" type="warning">Warning</amber-button>
	<!-- </amber-space> -->
</div>
<script>
	export default {
		methods: {
			info() {
				this.$info({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second'
				})
			},
			success() {
				this.$success({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second'
				})
			},
			error() {
				this.$error({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second'
				})
			},
			warning() {
				this.$warning({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second'
				})
			}
		}
	}
</script>

```
:::

### 确认对话框

::: demo
```html
<div class="modal-container">
	<amber-button @click="confirm" type="primary">Confirm</amber-button>
	<amber-button @click="deleteItem">Delete</amber-button>
	<amber-button @click="disabledItem">Show Disabled</amber-button>
</div>
<script>
	export default {
		methods: {
			confirm() {
				this.$confirm({
					title: 'Do you want to delete these items?',
					content: 'When clicked the OK button, this dialog will be closed after 1 second',
					onOk: () => {
						console.log('ok')
					},
					onCancel: () => {
						console.log('onCancel')
					}
				})
			},
			deleteItem() {
				this.$confirm({
					title: 'Are you sure delete this task?',
					content: 'Some descriptions',
					okText: 'Yes',
					cancelText: 'No',
					onOk: () => {
						console.log('ok')
					},
					onCancel: () => {
						console.log('onCancel')
					}
				})
			},
			disabledItem() {
				this.$confirm({
					title: 'Are you sure delete this task?',
					content: 'Some descriptions',
					okButtonDisabled: true,
					onOk: () => {
						console.log('ok')
					},
					onCancel: () => {
						console.log('onCancel')
					}
				})
			}
		}
	}
</script>

```
:::

### API

#### Modal

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|cancelText | 取消按钮文字 | string | 取消 |  |
|closable | 是否显示右上角关闭按钮 | boolean | false |  |
|confirmLoading | 确定按钮 loading | boolean | false |  |
|mask | 是否展示遮罩 | boolean | true |  |
|visible(v-model) | 对话框是否可见 | boolean | false |  |
|maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
|okText | 确认按钮文字 | string | 确定 |  |
|title | 标题 | string |  |  |
|width | 宽度 | string\|number |  |  |
|wrapClassName | 对话框外层容器类名 | string |  |  |
|okButtonDisabled | 确定按钮是否禁用 | boolean | false |  |
|cancelButtonDisabled | 取消按钮是否禁用 | boolean | false |  |

#### Modal 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| cancel | 关闭对话框的回调 | function(e) |
| ok | 点击确定回调 | function(e) |

#### Modal.method()

包括:
+ Modal.info
+ Modal.success
+ Modal.error
+ Modal.warning
+ Modal.confirm
以上均为一个函数，参数为object，具体属性如下:

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|cancelText | 取消按钮文字 | string | 取消 |  |
|confirmLoading | 确定按钮 loading | boolean | false |  |
|okText | 确认按钮文字 | string | 确定 |  |
|title | 标题 | string |  |  |
|content | 内容 | string |  |  |
|okButtonDisabled | 确定按钮是否禁用 | boolean | false |  |
|cancelButtonDisabled | 取消按钮是否禁用 | boolean | false |  |
|onCancel | 取消回调 | function |  |  |
|onOk | 确定回调 | function |  |  |
