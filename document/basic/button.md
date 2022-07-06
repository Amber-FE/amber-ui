# Button 按钮

常用的操作按钮。

### 按钮大小
按钮大小分三种类型
- 大号按钮
- 中号按钮（默认）
- 小号按钮

::: demo
```html
<amber-button type="primary" size="small">小按钮</amber-button>
<amber-button type="primary" size="normal">中按钮</amber-button>
<amber-button type="primary" size="large" style="width: 126px">大按钮</amber-button>
```
:::

### 按钮宽度自适应
并列按钮有两种使用方式：
- 根据文字内容，按钮宽度自适应：
   小按钮固定间距为8px；中按钮为16px；大按钮为24px。
- 其中，小、中、大按钮最小宽度分别为：58px、74px、96px
::: demo
```html
<amber-button type="primary" size="small">小按钮</amber-button>
<amber-button type="primary" size="normal">中按钮</amber-button>
<amber-button type="primary" size="large">大按钮</amber-button>
```
:::

### 按钮分类
::: demo
```html
<amber-button plain="true" type="default">朴素按钮</amber-button>
<amber-button plain="true" type="primary">朴素按钮</amber-button>
<amber-button plain="true" type="warning">朴素按钮</amber-button>
<amber-button plain="true" type="danger">朴素按钮</amber-button>
<br/><br/>
<amber-button>默认按钮</amber-button>
<amber-button type="primary">主要按钮</amber-button>
<amber-button type="warning">提示按钮</amber-button>
<amber-button type="danger">警示按钮</amber-button>
<br/><br/>
<amber-button text>文字链接</amber-button>
<amber-button text type="primary">文字链接</amber-button>
<amber-button text type="warning">文字链接</amber-button>
<amber-button text type="danger">文字链接</amber-button>
<br/><br/>
<amber-button icon="a-yonghu3x" type="primary">图标按钮</amber-button>
<amber-button icon="a-yonghu3x" type="warning">图标按钮</amber-button>
<amber-button icon="a-yonghu3x" type="danger">图标按钮</amber-button>
<amber-button type="primary" loading>加载按钮</amber-button>
<br/><br/>
<amber-button type="primary" size="small" round>圆角按钮</amber-button>
<amber-button type="primary" size="normal" round>圆角按钮</amber-button>
<amber-button type="primary" size="large" round>圆角按钮</amber-button>
```
:::


<!-- <h4>按钮类型</h4>
<amber-button>默认按钮</amber-button>
<amber-button type="primary">主色调</amber-button>
<amber-button type="warning">提示按钮</amber-button>
<amber-button type="danger">警示按钮</amber-button>
<h4>图标按钮</h4>
<amber-button icon="a-yanjing3x" type="primary">图标按钮</amber-button>

<h4>圆角按钮</h4>
<amber-button type="primary" size="small" round>圆角按钮</amber-button>
<amber-button type="primary" size="normal" round>圆角按钮</amber-button>
<amber-button type="primary" size="large" round>圆角按钮</amber-button>

<h4>朴素按钮</h4>
<amber-button>默认按钮</amber-button>
<amber-button plain="true" type="primary">主色调</amber-button>
<amber-button plain="true" type="warning">提示按钮</amber-button>
<amber-button plain="true" type="danger">警示按钮</amber-button>

<h4>文字按钮</h4>
<amber-button text>默认按钮</amber-button>
<amber-button text type="primary">主色调</amber-button>
<amber-button text type="warning">提示按钮</amber-button>
<amber-button text type="danger">警示按钮</amber-button>

<h4>禁用状态</h4>
<amber-button @click="click" disabled>默认按钮</amber-button>

<h4>加载状态</h4>
<amber-button @click="click" loading type="primary"></amber-button> -->

### 禁用状态
::: demo
```html
<amber-button plain="true" type="default" disabled>朴素按钮</amber-button>
<br/><br/>
<amber-button disabled>默认按钮</amber-button>
<amber-button type="primary" disabled>主按钮</amber-button>
<amber-button type="warning" disabled>提示按钮</amber-button>
<amber-button type="danger" disabled>警示按钮</amber-button>



<script>
  export default {
    mounted() {
      console.log(this.$icon)
    },
    methods: {
      click() {
        console.log('按钮点击')
      }
    }
  }
</script>
```

:::

### API

| 字段     | 说明                                                                        | 类型    | 默认值 |
| -------- | --------------------------------------------------------------------------- | ------- | ------ |
| type     | 按钮类型，可选类型包含：default、primary、warning、danger                   | String  | -      |
| size     | 按钮大小为三种类型 small、normal、large                                     | String  | normal |
| disabled | 禁用按钮，禁用状态下按钮不可点击。                                          | Boolean | false  |
| plain    | 通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。 | Boolean | false  |
| text     | 是否是单纯的文字按钮                                                        | Boolean | false  |
| icon     | 按钮前的图标，参考 Icon 组件                                                | String  | -      |
| color    | 自定义颜色，包含文字与图片颜色                                              | String  | -      |
| loading  | 加载状态                                                                    | Boolean | false  |
