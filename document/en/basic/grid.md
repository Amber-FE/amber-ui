# Grid 

### 基本使用

::: demo
```html
<amber-row>
	<amber-col :span="12">col-12</amber-col>
	<amber-col :span="12">col-12</amber-col>
</amber-row>
<amber-row>
	<amber-col :span="8">col-8</amber-col>
	<amber-col :span="8">col-8</amber-col>
	<amber-col :span="8">col-8</amber-col>
</amber-row>
<amber-row>
	<amber-col :span="6">col-6</amber-col>
	<amber-col :span="6">col-6</amber-col>
	<amber-col :span="6">col-6</amber-col>
	<amber-col :span="6">col-6</amber-col>
</amber-row>
```
::: 

### 对齐

::: demo
```html
<p>Align Top</p>
<amber-row justify="center" align="top">
	<amber-col :span="4">col-4</amber-col>
	<amber-col :span="4">col-4</amber-col>
	<amber-col :span="4">col-4</amber-col>
	<amber-col :span="4">col-4</amber-col>
</amber-row>

<p>Align Center</p>
<amber-row justify="space-around" align="middle">
	<amber-col :span="4">col-4</amber-col>
	<amber-col :span="4">col-4</amber-col>
	<amber-col :span="4">col-4</amber-col>
	<amber-col :span="4">col-4</amber-col>
</amber-row>

<p>Align Bottom</p>
<amber-row justify="space-between" align="bottom">
	<amber-col :span="4">col-4</amber-col>
	<amber-col :span="4">col-4</amber-col>
	<amber-col :span="4">col-4</amber-col>
	<amber-col :span="4">col-4</amber-col>
</amber-row>
```
::: 

### 间隔

::: demo
```html
<amber-row :gutter="16">
	<amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
	<amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
	<amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
	<amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
</amber-row>
```
:::

### 偏移

::: demo
```html
<amber-row :gutter="16">
	<amber-col :span="6" :offset="6">col-6</amber-col>
	<amber-col :span="6" :offset="6">col-6</amber-col>
</amber-row>
```
:::

### 响应式布局

::: demo
```html
<amber-row>
	<amber-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">col</amber-col>
	<amber-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">col</amber-col>
	<amber-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">col</amber-col>
</amber-row>
```
:::

### Flex填充

::: demo
```html
<amber-divider orientation="left">Percentage columns</amber-divider>
<amber-row>
	<amber-col :flex="2">2 / 5</amber-col>
	<amber-col :flex="3">3 / 5</amber-col>
</amber-row>
<amber-divider orientation="left">Fill rest</amber-divider>
<amber-row>
	<amber-col flex="100px">100px</amber-col>
	<amber-col flex="auto">auto</amber-col>
</amber-row>
<amber-divider orientation="left">Raw flex style</amber-divider>
<amber-row>
	<amber-col flex="1 1 200px">1 1 200px</amber-col>
	<amber-col flex="0 1 300px">0 1 300px</amber-col>
</amber-row>
```
:::

### API

#### Row

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|align | flex 布局下的垂直对齐方式：top middle bottom | string | top |  |
|gutter | 栅栏间隔 | number |  |  |
|justify | flex 布局下的水平排列方式：start end center space-around space-between | string | start |  |

#### Col

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
|flex | flex 布局填充 | string\|number |  |  |
|span | 栅格占位格数 | number |  |  |
|offset | 栅格左侧的间隔数 | number |  |  |
|xs | <576px 响应式栅格 | number |  |  |
|sm | ≥576px 响应式栅格 | number |  |  |
|md | ≥768px 响应式栅格 | number |  |  |
|lg | ≥992px 响应式栅格 | number |  |  |
|xl | ≥1200px 响应式栅格 | number |  |  |
