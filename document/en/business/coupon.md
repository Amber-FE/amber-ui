# Coupon 

### 现金券(兰)
::: demo
```html
<AmberCoupon />
```
:::


### 满赠券(桔红)
::: demo
```html
<AmberCoupon type="fullMinus"  type-title="满赠折扣券" />
```
:::

### 包邮券(桔黄)
::: demo
```html
<AmberCoupon type="freeShip"></AmberCoupon>
```
:::


#### Coupon Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| type | 券类型 | string | 否 | default |
| typeTitle | 类型标题文字 | string | 否 | - |
| title | 券标题 | string | 否 | 代金券 |
| describe | 券描述 | string | 否 | - |
| time | 券有效期 | string | 否 | - |
| price | 券金额 | number/string | 是 | 存在right插槽 插槽优先 |
| icon | 券背景图标 | string | 否 | a-xingzhuangjiehe3x1 |
| beOverdue | 已使用或已过期 | Boolean | 否 | false |



#### Coupon Slots

| name | 说明 |
| --- | ---  |
| content | 券中间标题部分 |
| right | 券右侧部分金额折扣部分 |

#### Coupon Active

| name | 说明 | 返回值 |
| --- | ---  | ---  | 
| click | 券点击回调 | e |
