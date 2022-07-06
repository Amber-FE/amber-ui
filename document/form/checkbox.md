# Checkbox 多选框

### 基本使用

::: demo
```html
<amber-checkbox @change="onChange">Checkbox</amber-checkbox>
<script>
  export default {
    methods: {
      onChange(e) {
        console.log(e)
      }
    }
  }
</script>
```
::: 

### 不可用

::: demo
```html
<amber-checkbox disabled @change="onChange">Checkbox</amber-checkbox>
<amber-checkbox disabled v-model="checked" @change="onChange">Checkbox</amber-checkbox>
<script>
  export default {
	data() {
		return {
			checked: true,
		}
	},
	mounted(){
		setTimeout(()=>{
			this.checked = false
		},2000)
	},
    methods: {
      onChange(e) {
        console.log(e)
      }
    }
  }
</script>
```
::: 

### 多选框组

::: demo
```html
<amber-checkbox-group v-model="checkList">
	<amber-checkbox label="a"></amber-checkbox>
	<amber-checkbox label="b"></amber-checkbox>
	<amber-checkbox label="c"></amber-checkbox>
	<amber-checkbox label="禁用" disabled></amber-checkbox>
	<amber-checkbox label="选中且禁用" disabled></amber-checkbox>
</amber-checkbox-group>
<script>
  export default {
    data() {
    	return {
    		checkList: ['a','选中且禁用'],
    	}
    },
  }
</script>
```
::: 

### API

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|disabled | 是否禁用 | boolean | false |  |
|checked | 是否勾选 | boolean | false |  |

#### Checkbox 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 变化时回调函数 | function(checked:Boolean) |