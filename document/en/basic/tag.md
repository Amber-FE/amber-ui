# Tag 

#### 示例

### 基础用法
::: demo
```html
<amber-tag>默认</amber-tag>
<amber-tag type="primary">主色</amber-tag>
<amber-tag type="warning">提示色</amber-tag>
<amber-tag type="danger">警告色</amber-tag>

```
:::

### 可移除标签
::: demo
```html
<amber-tag closable>默认</amber-tag>
<amber-tag type="primary" closable>主色</amber-tag>
<amber-tag type="warning" closable>提示色</amber-tag>
<amber-tag type="danger" closable>警告色</amber-tag>

```
:::


### 不同尺寸
> Tag 组件提供三种尺寸，可以在不同场景下选择合适的按钮尺寸， 默认`medium`大小。<br />

::: demo
```html
<amber-tag type="primary" closable>默认中等标签</amber-tag>
<amber-tag type="primary" size="small" closable>小型标签</amber-tag>
<amber-tag size="mini" type="primary" closable>超小标签</amber-tag>

```
:::

### 不同主题
> Tag 组件提供了两个不同的主题：`dark` 和 `plain` <br />


::: demo
```html
<amber-tag effect="dark" closable>默认</amber-tag>
<amber-tag effect="dark" type="primary" closable>主色</amber-tag>
<amber-tag effect="dark" type="warning" closable>提示色</amber-tag>
<amber-tag effect="dark" type="danger" closable>警告色</amber-tag>
<br />
<br />
<amber-tag closable>默认</amber-tag>
<amber-tag type="primary" closable>主色</amber-tag>
<amber-tag type="warning" closable>提示色</amber-tag>
<amber-tag type="danger" closable>警告色</amber-tag>

```
:::

#### Tag Attributes


| 参数 | 说明 | 类型 | 是否必要 | 可选值 |默认值 |
| --- | ---  | --- |  ---    | --- |--- |
| type | 类型 | string | 否 | default/primary/warning/danger |default |
| effect | 主题 | string | 否 | dark/plain |plain |
| closable | 是否可关闭 | boolean | 否 | - |false |
| size | 尺寸 | string | 否 | medium/small/mini |medium |
| styles | 自定义样式 | Object | 否 | - | {} |



#### Tag Active

| name | 说明 | 返回值 |
| --- | ---  | ---  | 
| click | 点击 Tag 时触发的事件 | event |
| close | 关闭 Tag 时触发的事件 | event |
