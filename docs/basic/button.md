# Button 按钮
常用的操作按钮。

::: demo
```html
<h4>按钮类型</h4>
<amber-button>默认按钮</amber-button>
<amber-button type="primary">主色调</amber-button> 
<amber-button type="warning">提示按钮</amber-button>
<amber-button type="danger">警示按钮</amber-button>

<h4>按钮大小</h4>
<amber-button type="primary" size="small">小按钮</amber-button>
<amber-button type="primary" size="normal">中按钮</amber-button>
<amber-button type="primary" size="large">大按钮</amber-button>

<h4>图标按钮</h4>
<amber-button icon="a-yanjing3x" type="primary">图标按钮</amber-button> 

<h4>圆角按钮</h4>
<amber-button  type="primary" size="small" round>圆角按钮</amber-button> 
<amber-button  type="primary" size="normal" round>圆角按钮</amber-button> 
<amber-button  type="primary" size="large" round>圆角按钮</amber-button> 

<h4>圆形按钮</h4>
<amber-button  type="primary" size='small' circle>圆形按钮</amber-button>
<amber-button  type="primary" size='normal' circle>圆形按钮</amber-button>
<amber-button  type="primary" size='large' circle>圆形按钮</amber-button>

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
<amber-button @click="click" loading type="primary">主色调</amber-button>

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

| 字段  | 说明                                                                                      | 类型    | 默认值 |
| ----- | ----------------------------------------------------------------------------------------- | ------- | ------ |
| type  | 按钮类型，可选类型包含：default、primary、warning、danger  | String  | -      |
| size | 按钮大小为三种类型 small、normal、large                                                        | String | normal   |
| disabled | 禁用按钮，禁用状态下按钮不可点击。                                                           | Boolean | false  |
| plain | 通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。                           | Boolean  | false    |
| text | 是否是单纯的文字按钮	                                                                          | Boolean  | false    |
| icon  | 按钮前的图标，参考Icon组件                                                                     | String  | -      |
| color | 自定义颜色，包含文字与图片颜色                                                                  | String  | -      |
| loading | 加载状态                                                                  | Boolean  | false |
| round | 圆角按扭                                                                  | Boolean  | false |
| circle | 圆形按钮                                                                   | Boolean  | false |
