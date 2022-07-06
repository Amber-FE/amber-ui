# Tips 提示

:tada: 提示

### 示例
::: demo
```html
<amber-tips :icon-class="iconClass" :text="text" />
<script>
  export default {
    data() {
      return {
        text: "【温馨提示】资质审核通过后，收货地址不可更改，如有特殊情况请联系您的专属地区经理或平台客服",
        iconClass: "a-zhongxichengyao3x",
      };
    },
  };
</script>

```
:::
### Tips Attributes

| 参数       | 说明     | 类型   | 是否必要 | 默认值              |
| ---------- | -------- | ------ | -------- | ------------------- |
| type       | 类型     | string | 否       | warning 暂未实现    |
| text       | 文本内容 | string | 是       | -                   |
| icon-class | 图标名称 | string | 否       | a-xingzhuangjiehe2x |
| icon-color | 字体颜色 | string | 否       | #ED6A0C             |
