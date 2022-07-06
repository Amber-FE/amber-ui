# Tips 提示

:tada: 提示

### 示例
::: demo
```html
<amber-tips iconColor :text="tipsText" type="tips" />
<amber-tips :text="successText" type="success" />
<amber-tips :text="warningText" type="warning" />
<amber-tips :text="dangerText" type="danger" />

<script>
  export default {
    data() {
      return {
        tipsText: "提示文案，常规提示",
        successText: "提示文案，成功提示",
        warningText: "提示文案，预警提示(默认)",
        dangerText: "提示文案，失败提示"
      };
    },
  };
</script>

```
:::
### Tips Attributes

| 参数       | 说明     | 类型   | 是否必要 | 默认值              |
| ---------- | -------- | ------ | -------- | -------------------|
| type       | 类型     | string | 否       | warning             |
| text       | 提示信息 | string | 是       | -                   |
