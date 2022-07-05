# Input 

### 基本使用


::: demo
```html
<div style="width:300px;">
	<amber-input placeholder="Basic usage"/>
</div>
```
::: 

### 前缀和后缀
::: demo
```html
<div style="width:300px;">
	<amber-input placeholder="Basic usage">
		<amber-icon slot="prefix" icon-class="a-yonghu3x" pointer color="rgba(0,0,0,.65)" size="14px"></amber-icon>
		<amber-icon slot="suffix" icon-class="a-wenhao3x" pointer color="rgba(0,0,0,.65)" size="14px"></amber-icon>
	</amber-input>
	<amber-input style="padding-top:20px;" prefix="￥" suffix="RMB" placeholder="Basic usage"/>
</div>
```
::: 


### 前置/后置标签
::: demo
```html
<div style="width:300px;">
	<amber-input placeholder="Basic usage">
		<amber-icon slot="addonAfter" icon-class="shezhi" pointer color="rgba(0,0,0,.65)" size="14px"></amber-icon>
	</amber-input>
	<amber-input style="padding-top:20px;" value="mySite" addonBefore="http://" addonAfter=".com" placeholder="Basic usage"/>
</div>
```
::: 

### 带移除图标
::: demo
```html
<div style="width:300px;">
	<amber-input placeholder="Basic usage" allow-clear></amber-input>
	<amber-input style="padding-top:20px;" allow-clear placeholder="Basic usage" type="textarea"/>
</div>
```
:::

### 搜索框
::: demo
```html
<div style="width:300px;">
	<amber-input placeholder="Basic usage" input-search></amber-input>
	<amber-input style="padding-top:20px;" input-search enter-button placeholder="Basic usage"/>
</div>
```
:::

### 三种大小
::: demo
```html
<div style="width:300px;">
	<amber-input placeholder="Basic usage" size="large"></amber-input>
	<amber-input style="padding-top:20px;" placeholder="Basic usage"/>
	<amber-input style="padding-top:20px;" size="small" placeholder="Basic usage"/>
</div>
```
:::

### 文本域
::: demo
```html
<div style="width:300px;">
	<amber-input placeholder="Basic usage" type="textarea"/>
</div>
```
:::

### 密码框
::: demo
```html
<div style="width:300px;">
	<amber-input placeholder="Basic usage" type="password"/>
</div>
```
:::

### API

#### Input

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|addonBefore | 带标签的input,设置前置标签 | string\|slot |  |  |
|addonAfter | 带标签的input,设置后置标签 | string\|slot |  |  |
|disabled | 是否禁用状态,默认值为false | boolean | false |  |
|maxLength | 最大长度 | Number |  |  |
|prefix | 带有前缀图标的input | string\|slot |  |  |
|suffix | 带有后缀图标的input | string\|slot |  |  |
|size | 控件大小。可选large default small | string | default |  |
|type | 声明input类型,通原生input标签的type属性 | string | text |  |
|value(v-model) | 输入框内容 | string |  |  |
|allowClear | 可以点击清楚图标删除内容 | boolean | false |  |

#### Input 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 输入框内容发生变化是的回调 | function(e) |
| focus | 输入框聚焦时的回调 | function(e) |
| blur | 输入框失焦时的回调 | function(e) |
| pressEnter | 按下回车的回调 | function(e) |

#### Input.TextArea
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|disabled | 是否禁用状态,默认值为false | boolean | false |  |
|maxLength | 最大长度 | Number |  |  |
|rows | 设置文本框行数 | Number | 3 |  |
|size | 控件大小。可选large default small | string | default |  |
|value(v-model) | 输入框内容 | string |  |  |
|allowClear | 可以点击清楚图标删除内容 | boolean | false |  |

#### Input.TextArea 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 输入框内容发生变化是的回调 | function(e) |
| pressEnter | 按下回车的回调 | function(e) |

#### Input.Search
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|inputSearch | 是否开启搜索状态 | boolean | false |  |
|enterButton | 是否有搜索按钮,可设置文字 | boolean | false |  |
|searchTitle | 搜索按钮文本设置 | string |  |  |

#### Input.Search 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| search | 点击搜索或按下回车键时的回调 | function(e) |

其余属性和 Input 一致。
