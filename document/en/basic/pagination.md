# Pagination 

### Basic usage
For the basic pager display, the default total data is 100, and each page displays 10.
::: demo
```html
<amber-pagination></amber-pagination>

```
:::

### Jump show
Pager display, you can add the isjump attribute to show the jump function.</br>
Bind the total attribute to display the total number of data pieces. Bind pagesizes to control the option setting of the number of displays per page selector.
::: demo
```html
<amber-pagination isJump :total="500" :pageSizes="pageSizes"></amber-pagination>
<script>
  export default {
    data() {
      return {
        pageSizes: ['10', '50', '80', '100']
      }
    }
  }
</script>
```
:::

| parameter  |   explain            | type          | defalut |
| ---------- | -------------------- | --------------| ------- |
|total       | Total number of data | string/number | 100     |
|pageSizes   | Display number selector per page | string[] | ['10', '20', '30', '50', '100']  |
|isJump      | Show jump function   | Boolean       | false   |
