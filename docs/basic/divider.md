
# Divider

#### 示例

### 基础用法
::: demo
```html
<p>我们爬到楼顶去看夕阳</p>
<amber-divider></amber-divider>
<p>再唱起从前的时光</p>
<amber-divider dashed></amber-divider>

```
:::

### 基础用法
::: demo
```html
<div style="display: flex">
  <span>熏悟空</span>
  <amber-divider type="vertical"></amber-divider>
  <span>居八戒</span>
  <amber-divider type="vertical" dashed></amber-divider>
  <span>沙悟净</span>
</div>

```
:::


### 分隔文字内容用法
::: demo
```html
<amber-divider>With Text</amber-divider>
你健康 
<amber-divider dashed>Dashed Text</amber-divider>
我健康
<amber-divider orientation="right">Right Text</amber-divider>
大家一块健康
<amber-divider orientation="left" dashed>Left Text</amber-divider>

```
:::

### API

| 参数        | 说明            | 类型   |       可选值           |   默认值     |
| ----------- | -------------- | ------ | ---------------------- | ----------- |
| type        | 水平或垂直类型  | string |   horizontal/vertical  |   horizontal |
| dashed      | 是否虚线        | boolean|        boolean        |    false    |
| orientation | 分割线文字的位置 | string |       left/right      |    center    |
