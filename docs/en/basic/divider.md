# Divider

#### 示例

### 基础用法
::: demo
```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
<AmberDivider></AmberDivider>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
<AmberDivider dashed></AmberDivider>
<AmberDivider type="vertical"></AmberDivider>
<AmberDivider type="vertical" dashed></AmberDivider>

```
:::

### 分隔文字内容用法
::: demo
```html
<AmberDivider>With Text</AmberDivider>
你健康 我健康
<AmberDivider dashed>Dashed Text</AmberDivider>
大家一块健康
<AmberDivider orientation="right">Right Text</AmberDivider>
<AmberDivider orientation="left" dashed>Left Text</AmberDivider>

```
:::

### API

| 参数        | 说明            | 类型   |       可选值           |   默认值     |
| ----------- | -------------- | ------ | ---------------------- | ----------- |
| type        | 水平或垂直类型  | string |   horizontal/vertical  |   horizontal  |
| dashed      | 是否虚线        | boolean|        boolean         |    false     |
| orientation | 分割线文字的位置 | string |        left/right     |    center     |
