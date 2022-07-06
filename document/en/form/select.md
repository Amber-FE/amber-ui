# Select 

### 基本使用

::: demo
```html
<div class="select-container">
	<div class="select-container-item">
		<amber-select placeholder="Basic usage" @change="handleChange">
			<amber-select-option value='1'>Jack</amber-select-option>
			<amber-select-option value='2'>Lucy</amber-select-option>
			<amber-select-option value='3'>yiminghe</amber-select-option>
		</amber-select>
	</div>
	<div class="select-container-item">
		<amber-select placeholder="Basic usage" disabled>
			<amber-select-option value='1'>Jack</amber-select-option>
			<amber-select-option value='2'>Lucy</amber-select-option>
			<amber-select-option value='3'>yiminghe</amber-select-option>
		</amber-select>
	</div>
	<div class="select-container-item">
		<amber-select placeholder="Basic usage">
			<amber-select-option value='1'>Jack</amber-select-option>
			<amber-select-option value='2' disabled>Lucy</amber-select-option>
			<amber-select-option value='3'>yiminghe</amber-select-option>
		</amber-select>
	</div>
</div>
<script>
	export default {
		methods: {
			handleChange(value) {
				console.log('selected value', value)
			}
		}
	}
</script>
```
::: 

### 标签

::: demo
```html
<div class="select-container">
	<div class="select-container-item">
		<amber-select placeholder="Basic usage" @change="handleChange" mode="tags">
			<amber-select-option value='1'>Jack</amber-select-option>
			<amber-select-option value='2'>Lucy</amber-select-option>
			<amber-select-option value='3'>yiminghe</amber-select-option>
		</amber-select>
	</div>
</div>
<script>
	export default {
		methods: {
			handleChange(value) {
				console.log('selected value', value)
			}
		}
	}
</script>
```
:::

### 联动

::: demo
```html
<div class="select-container">
	<div class="select-container-item">
		<amber-select placeholder="Basic usage" @change="handleChange" :default-value="provinceData[0]">
			<amber-select-option v-for="item in provinceData" :key="item" :value="item">{{item}}</amber-select-option>
		</amber-select>
	</div>
	<div class="select-container-item">
		<amber-select placeholder="Basic usage" v-model="secondCity">
			<amber-select-option v-for="item in cities" :key="item" :value="item">{{item}}</amber-select-option>
		</amber-select>
	</div>
</div>
<script>
	const provinceData = ['Zhejiang', 'Jiangsu'];
	const cityData = {
		Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
		Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
	};
	export default {
		data() {
		    return {
				provinceData,
				cityData,
				cities: cityData[provinceData[0]],
				secondCity: cityData[provinceData[0]][0],
		    };
		},
		methods: {
			handleChange(value) {
				console.log('selected value', value)
				this.cities = cityData[value];
				this.secondCity = cityData[value][0];
			}
		}
	}
</script>
```
:::

### 搜索框

::: demo
```html
<div class="select-container">
	<div class="select-container-item">
		<amber-select placeholder="Basic usage" :value="value" @change="handleChange" @search="handleSearch" show-search>
			<amber-select-option v-for="item in arr" :key="item" :value="item">{{item}}</amber-select-option>
		</amber-select>
	</div>
</div>
<script>
	const dataList = ['Jack','Lucy','yiminghe','a1','a2','b1','b2','c1','c2']
	export default {
		data(){
			return {
				arr:[],
				value:''
			}
		},
		methods: {
			handleChange(value) {
				console.log('selected value', value)
			},
			handleSearch(value){
				console.log('input value',value)
				if(value){
					this.arr = dataList.filter((item,index)=>{
						return item.indexOf(value) >= 0;
					})
				}else{
					this.arr = []
				}
			}
		}
	}
</script>
```
:::

### 三种大小

::: demo
```html
<div class="select-tab-switch">
	<div class="select-tab-switch-container">
		<div class="item" :class="{'active':size=='small'}" @click="handleChange('small')">small</div>
		<div class="item" :class="{'active':size=='default'}" @click="handleChange('default')">default</div>
		<div class="item" :class="{'active':size=='large'}" @click="handleChange('large')">large</div>
	</div>
</div>
<div class="select-container">
	<div class="select-container-item">
		<amber-select placeholder="Basic usage" :size="size">
			<amber-select-option value='1'>Jack</amber-select-option>
			<amber-select-option value='2'>Lucy</amber-select-option>
			<amber-select-option value='3'>yiminghe</amber-select-option>
		</amber-select>
	</div>
</div>
<script>
	export default {
		data (){
			return {
				size:'default'
			}
		},
		methods: {
			handleChange(value) {
				this.size = value;
			}
		}
	}
</script>
```
::: 

### 多选

::: demo
```html
<div class="select-container">
	<div class="select-container-item">
		<amber-select placeholder="Basic usage" @change="handleChange" mode="multiple" :default-value="['1','2']">
			<amber-select-option value='1'>Jack</amber-select-option>
			<amber-select-option value='2'>Lucy</amber-select-option>
			<amber-select-option value='3'>yiminghe</amber-select-option>
		</amber-select>
	</div>
</div>
<script>
	export default {
		methods: {
			handleChange(value) {
				console.log('selected value', value)
			}
		}
	}
</script>
```
:::

### 获取选项文本

::: demo
```html
<div class="select-container">
	<div class="select-container-item">
		<amber-select placeholder="Basic usage" @change="handleChange" label-in-value>
			<amber-select-option value='1'>Jack</amber-select-option>
			<amber-select-option value='2'>Lucy</amber-select-option>
			<amber-select-option value='3'>yiminghe</amber-select-option>
		</amber-select>
	</div>
</div>
<script>
	export default {
		methods: {
			handleChange(value) {
				console.log('selected value', value)
			}
		}
	}
</script>
```
:::

### 后缀图标

::: demo
```html
<div class="select-container">
	<div class="select-container-item">
		<amber-select placeholder="Basic usage">
			<amber-icon slot="suffixIcon" icon-class="a-tuichu3x" pointer color="rgba(0,0,0,.65)" size="20px"></amber-icon>
			<amber-select-option value='1'>Jack</amber-select-option>
			<amber-select-option value='2'>Lucy</amber-select-option>
			<amber-select-option value='3'>yiminghe</amber-select-option>
		</amber-select>
	</div>
</div>
```
:::

### API

#### Select

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|placeholder | 选择框默认文字 | string |  |  |
|value(v-model) | 指定当前选中条目 | string\|string[] |  |  |
|defaultValue | 指定默认选中条目 | string\|string[] |  |  |
|disabled | 是否禁用状态,默认值为false | boolean | false |  |
|size | 控件大小。可选large default small | string | default |  |
|allowClear | 支持清楚 | boolean | false |  |
|labelInValue | 是否把每个选项的 label 包装到 value 中 | boolean | false |  |
|mode | 设置 Select 的模式为多选或标签。可选default multiple tags | string | default |  |
|showSearch | 使单选模式可搜索 | boolean | false |  |

#### Select 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中 option 时,调用此函数 | function(value) |
| search | 文本框值变化时回调 | function(value) |

#### Option props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|value | 默认根据此属性值进行筛选 | string |  |
|disabled | 是否禁用 | boolean | false |
