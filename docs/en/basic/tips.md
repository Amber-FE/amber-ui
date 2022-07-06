# Tips

:tada: Hint

### Example
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
        tipsText: "Prompt copy, general prompt",
        successText: "Prompt copy, success prompt",
        warningText: "Prompt copy, early warning prompt (default)",
        dangerText: "Prompt copy, failure prompt"
      };
    },
  };
</script>

```
:::
### Tips Attributes

| Parameter  | Explain                     | Type   | Required | default             |
| ---------- | ----------------------------| ------ | -------- | --------------------|
| type       | tips/success/warning/danger | string | 否       | warning             |
| text       | prompt text message         | string | 是       | -                   |
