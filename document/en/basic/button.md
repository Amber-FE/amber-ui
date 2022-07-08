# Button 

Commonly used action buttons.

### size
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

### Button width adaptive
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

### disabled
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
        console.log('click')
      }
    }
  }
</script>
```

:::

### API

| field     | explain                                                                        | type    | default |
| -------- | --------------------------------------------------------------------------- | ------- | ------ |
| type     | The value can be Default, Primary, Warning, or Danger                   | String  | -      |
| size     | There are three types of button sizes: Small, Normal, and large                                   | String  | normal |
| disabled | Disable button. In the disabled state, the button cannot be clicked.                                          | Boolean | false  |
| plain    | Use the plain property to set the button to a plain button, whose text is the color of the button and whose background is white 。 | Boolean | false  |
| text     | Is it just a text button                                                     | Boolean | false  |
| icon     | For the Icon before the button, refer to the Icon component                                               | String  | -      |
| color    | The Icon before the button, refer to the Icon component to customize the color, including text and picture colors                                              | String  | -      |
| loading  | loading state                                                                  | Boolean | false  |
