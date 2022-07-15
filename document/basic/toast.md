# Toast 轻提示

### 基础用法
* 成功提示
::: demo
```html
<div style="display: flex; justify-content: space-around;">
  <amber-toast type="success" :text="text"></amber-toast>
  <amber-toast type="success" :text="limitText" limit></amber-toast>
</div>


<script>
  export default {
    data() {
      return {
        text: '成功提示文案',
        limitText: '文案显示区域最多显示20个字，不信你数一下看看'
      }
    }
  }
</script>

```
:::

* 错误提示
::: demo
```html
<div style="display: flex; justify-content: space-around;">
  <amber-toast type="error" :text="text"></amber-toast>
  <amber-toast type="error" :text="limitText" limit></amber-toast>
</div>


<script>
  export default {
    data() {
      return {
        text: '错误提示文案',
        limitText: '文案显示区域最多显示20个字，不信你数一下看看'
      }
    }
  }
</script>

```
:::

* 警告提示(默认)
::: demo
```html
<div style="display: flex; justify-content: space-around;">
  <amber-toast type="warning" :text="text"></amber-toast>
  <amber-toast type="warning" :text="limitText" limit></amber-toast>
</div>


<script>
  export default {
    data() {
      return {
        text: '警告提示文案',
        limitText: '文案显示区域最多显示20个字，不信你数一下看看'
      }
    }
  }
</script>

```
:::

### Toast Attributes

| 参数       | 说明      | 类型   | 可选值 | 默认值              |
| ---------- | -------- | ------ | -------- | -------------------|
| type       | 类型      | string | success/warning/error | warning |
| text       | 提示信息  | string | -       | -                    |
| limit      | 提示信息字数限制20个字以内  | boolean | -       | fasle   |
