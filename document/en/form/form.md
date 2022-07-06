# Form 

### 基本使用

::: demo
```html
<amber-form class="demo-ruleForm" ref="form" :model="formData" :rules="rules">
	<amber-form-item label="name" prop="name">
		<amber-input placeholder="请输入姓名" v-model="formData.name"></amber-input>
	</amber-form-item>
	<amber-form-item label="Email" prop="email">
		<amber-input placeholder="请输入Email" v-model="formData.email"></amber-input>
	</amber-form-item>
	<amber-form-item label="Switch" prop="isOpen">
		<amber-switch v-model="formData.isOpen"></amber-switch>
	</amber-form-item>
	<amber-form-item label="Radio" prop="radioValue">
		<amber-radio label="a" v-model="formData.radioValue">单选A</amber-radio>
		<amber-radio label="b" v-model="formData.radioValue">单选B</amber-radio>
		<amber-radio label="c" v-model="formData.radioValue">单选C</amber-radio>
	</amber-form-item>
	<amber-form-item label="select" prop="selectValue">
		<amber-select placeholder="请选择名称" v-model="formData.selectValue">
			<amber-select-option value='1'>Jack</amber-select-option>
			<amber-select-option value='2'>Lucy</amber-select-option>
			<amber-select-option value='3'>yiminghe</amber-select-option>
		</amber-select>
	</amber-form-item>
	<amber-form-item label="checkbox" prop="checkList">
		<amber-checkbox-group v-model="formData.checkList">
			<amber-checkbox label="a"></amber-checkbox>
			<amber-checkbox label="b"></amber-checkbox>
			<amber-checkbox label="c"></amber-checkbox>
		</amber-checkbox-group>
	</amber-form-item>
	<amber-form-item label="textarea" prop="textValue">
		<amber-input placeholder="请输入详情" v-model="formData.textValue" type="textarea"></amber-input>
	</amber-form-item>
	<amber-form-item>
		<amber-button type="primary" @click="submit('form')">提交</amber-button>
		<amber-button @click="reset('form')">重置</amber-button>
	</amber-form-item>
</amber-form>
<script>
	export default {
		data(){
			return {
				formData: {
					name: '',
					email: '',
					isOpen: false,
					radioValue: 'a',
					selectValue: '',
					textValue: '',
					checkList: ['a']
				},
				rules: {
					name : [{ required: true, message: '不能为空', trigger: 'blur' }],
					email: [
						{ required: true, message: '不能为空', trigger: 'blur'},
						{ type: 'email', message: '格式不正确', trigger: 'blur' }
					],
					selectValue: [
						{ required: true, message: '请选择下拉选项', trigger: 'change' }
					],
					checkList: [
						{ required: true, message: '请勾选复选选项', trigger: 'change', min: 1, type: 'array' }
					]
				}
			}
		},
		methods: {
			submit(formName) {
				this.$refs[formName].validate((valid) => {
					if (!valid) {
						console.log('提交失败')
					} else {
						console.log('提交成功')
					}
				})
			},
			reset(formName) {
				console.log('重置表单',this.formData);
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
```
::: 

### 行内表单

::: demo
```html
<amber-form inline ref="form" :model="formData" :rules="rules">
	<amber-form-item label="name" prop="name">
		<amber-input placeholder="请输入姓名" v-model="formData.name"></amber-input>
	</amber-form-item>
	<amber-form-item label="Email" prop="email">
		<amber-input placeholder="请输入Email" v-model="formData.email"></amber-input>
	</amber-form-item>
	<amber-form-item>
		<amber-button type="primary" @click="submit('form')">提交</amber-button>
		<amber-button @click="reset('form')">重置</amber-button>
	</amber-form-item>
</amber-form>
<script>
	export default {
		data(){
			return {
				formData: {
					name: '',
					email: '',
				},
				rules: {
					name : [{ required: true, message: '不能为空', trigger: 'blur' }],
					email: [
						{ required: true, message: '不能为空', trigger: 'blur'},
						{ type: 'email', message: '格式不正确', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			submit(formName) {
				this.$refs[formName].validate((valid) => {
					if (!valid) {
						console.log('提交失败')
					} else {
						console.log('提交成功')
					}
				})
			},
			reset(formName) {
				console.log('重置表单',this.formData);
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
```
::: 

### 对齐方式

::: demo
```html
<amber-radio-group v-model="radioValue" @change="handleRadioChange">
  <amber-radio-button label="right">右对齐</amber-radio-button>
  <amber-radio-button label="left">左对齐</amber-radio-button>
  <amber-radio-button label="top">顶部对齐</amber-radio-button>
</amber-radio-group>
<amber-form class="demo-ruleForm" style="padding-top: 30px" :labelAlign="labelPosition" ref="form" :model="formData" :rules="rules">
	<amber-form-item label="name" prop="name">
		<amber-input placeholder="请输入姓名" v-model="formData.name"></amber-input>
	</amber-form-item>
	<amber-form-item label="Email" prop="email">
		<amber-input placeholder="请输入Email" v-model="formData.email"></amber-input>
	</amber-form-item>
	<amber-form-item>
		<amber-button type="primary" @click="submit('form')">提交</amber-button>
		<amber-button @click="reset('form')">重置</amber-button>
	</amber-form-item>
</amber-form>
<script>
	export default {
		data(){
			return {
				formData: {
					name: '',
					email: '',
				},
				rules: {
					name : [{ required: true, message: '不能为空', trigger: 'blur' }],
					email: [
						{ required: true, message: '不能为空', trigger: 'blur'},
						{ type: 'email', message: '格式不正确', trigger: 'blur' }
					]
				},
				labelPosition: 'right',
				radioValue: 'right'
			}
		},
		methods: {
			submit(formName) {
				this.$refs[formName].validate((valid) => {
					if (!valid) {
						console.log('提交失败')
					} else {
						console.log('提交成功')
					}
				})
			},
			reset(formName) {
				console.log('重置表单',this.formData);
				this.$refs[formName].resetFields();
			},
			handleRadioChange(value) {
				console.log(value)
				this.radioValue = value
				this.labelPosition = this.radioValue
			}
		}
	}
</script>
```
:::
 
### API

#### Form

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|model | 表单数据对象 | object |  |  |
|rules | 表单校验规则 | object |  |  |
|inline | 行内表单模式 | boolean | false |  |
|labelAlign | 表单标签模式 | string | right |  |

#### FormItem

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|label | 标签文本 | string |  |  |
|prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string |  |  |
