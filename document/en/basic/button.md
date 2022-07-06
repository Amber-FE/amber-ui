# Button 按钮

Commonly used action buttons.

### 按钮大小
There are three types of button sizes
- Large button
- Medium button（default）
- Small button

::: demo
```html
<amber-button type="primary" size="small">Small button</amber-button>
<amber-button type="primary" size="normal">Medium button</amber-button>
<amber-button type="primary" size="large" style="width: 126px">Large button</amber-button>
```
:::

### 按钮宽度自适应
The side-by-side button can be used in two ways:
- According to the text content, the button width is adaptive:
  Small buttons have a fixed spacing of 8px; medium buttons are 16px; large buttons are 24px.
- Among them, the minimum width of small, medium and large buttons are: 58px, 74px, 96px
::: demo
```html
<amber-button type="primary" size="small">Small button</amber-button>
<amber-button type="primary" size="normal">Medium button</amber-button>
<amber-button type="primary" size="large">Large button</amber-button>
```
:::

### 按钮分类
::: demo
```html
<amber-button plain="true" type="default">Plain button</amber-button>
<amber-button plain="true" type="primary">Plain button</amber-button>
<amber-button plain="true" type="warning">Plain button</amber-button>
<amber-button plain="true" type="danger">Plain button</amber-button>
<br/><br/>
<amber-button>Default button</amber-button>
<amber-button type="primary">Main button</amber-button>
<amber-button type="warning">Hint button</amber-button>
<amber-button type="danger">Alert button</amber-button>
<br/><br/>
<amber-button text>Text link</amber-button>
<amber-button text type="primary">Text link</amber-button>
<amber-button text type="warning">Text link</amber-button>
<amber-button text type="danger">Text link</amber-button>
<br/><br/>
<amber-button icon="a-yonghu3x" type="primary">Icon button</amber-button>
<amber-button icon="a-yonghu3x" type="warning">Icon button</amber-button>
<amber-button icon="a-yonghu3x" type="danger">Icon button</amber-button>
<amber-button type="primary" loading>Loading button</amber-button>
<br/><br/>
<amber-button type="primary" size="small" round>Rounded button</amber-button>
<amber-button type="primary" size="normal" round>Rounded button</amber-button>
<amber-button type="primary" size="large" round>Rounded button</amber-button>
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
<amber-button plain="true" type="default" disabled>Plain button</amber-button>
<br/><br/>
<amber-button disabled>Default button</amber-button>
<amber-button type="primary" disabled>Main button</amber-button>
<amber-button type="warning" disabled>Hint button</amber-button>
<amber-button type="danger" disabled>Alert button</amber-button>



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
