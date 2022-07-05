# Icon 
  :tada: 图标

#### 示例
::: demo
```html
<div style="display: flex;justify-content: space-evenly;">
  <amber-icon size="32px" icon-class="UP" />
  <amber-icon size="32px" color="#3eaf7c" icon-class="a-yanjing3x" />
  <amber-icon size="32px" icon-class="a-shouqi3x" />
  <amber-icon size="32px" :pointer="true" color="#5d82a6" icon-class="a-bianzu313x" />
  <amber-button icon="a-bianzubeifen2" type="primary">图标按钮</amber-button> 
</div>

```
:::

#### 图标列表
<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <amber-icon size="32px" class="icon iconfont icon-a-xingzhuangjiehe3x1" :icon-class="name" />
      <span class="icon-name">{{name}}</span>
    </span>
  </li>
</ul>

#### API


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| icon-class | 图标名称 | string | 是 | - |
| color | 字体颜色 | string | 否 | #000 |
| size | 字体大小 | string | 否 | 20px |
| pointer | 鼠标图标 | boolean | 否 | false |
