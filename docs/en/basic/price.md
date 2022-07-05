# Price 
  
::: demo
```html
<h4>默认用法</h4>
<amber-price price="888888" />

<h4>小数点2位</h4>
<amber-price pointNumber="2" price="888888" />

<h4>单位展示</h4>
<amber-price unit="$" :show-unit="true" pointNumber="2" price="888888" />

<h4>千位分割</h4>
<amber-price :thousands="true" unit="$" :show-unit="true" pointNumber="2" price="888888" />

<h4>组合使用</h4>
<amber-price color="#3eaf7c" :thousands="true" :unit-scale="0.5" :show-unit="true" point-number="2" price="888888" />

```
:::

#### Price Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| price | 金额 | string | 是 | - |
| color | 颜色 | string | 否 | #000 |
| size | 字体大小 | string | 否 | 24px |
| unit | 单位 | string | 否 | ¥ |
| show-unit | 单位展示 | boolean | 否 | false |
| unit-scale | 单位展示比例 | number | 否 | 1 |
| thousands | 千分位分隔 | boolean | 否 | false |
| point-number | 小数点位数 | number | 否 | 0 |
