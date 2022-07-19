# Pagination 分页器

### 基础用法
基础的分页器展示，默认总数据为100条，每一页显示10条。
::: demo
```html
<amber-pagination @getCurrentPage="getCurrentPage"></amber-pagination>
<script>
  export default {
    methods: {
      getCurrentPage(val) {
        console.log('当前页码为',val)
      }
    }
  }
</script>
```
:::

### 跳转展示
分页器展示，可以通过添加isJump属性来展示跳转功能。</br>
绑定total属性来显示总数据条数。绑定pageSizes来控制每页显示个数选择器的选项设置。</br>
在输入框中写入需要跳转的页码后让输入框失焦或按下回车键即可跳转到对应的页码。
::: demo
```html
<amber-pagination isJump :total="500" :pageSizes="pageSizes" @getCurrentPage="getCurrentPage"></amber-pagination>
<script>
  export default {
    data() {
      return {
        pageSizes: ['10', '50', '80', '100']
      }
    },
    methods: {
      getCurrentPage(val) {
        console.log('当前页码为',val)
      }
    }
  }
</script>
```
:::

### Pagination Attribute  
| 参数   |   说明    | 类型 | 默认值 |
| ----- | --------- | ------ | --- | --- |
|total  | 数据总条数 | string/number | 100 |
|pageSizes | 每页显示个数选择器 | string[] | ['10', '20', '30', '50', '100']  |
|isJump | 展示跳转功能 | Boolean | false  |

### Pagination Active
| 事件名 | 说明 | 返回值 |
| ---- | ---  | ---  | 
| getCurrentPage | 页码更新时触发的事件 | 当前页码 |

