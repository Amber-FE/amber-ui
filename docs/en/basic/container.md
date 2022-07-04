# Container 
Container components for layout to quickly set up the basic structure of a page:

`<amber-container>`：outer container. When a child element contains `<amber-header>` or `<amber-footer>` ，all child elements are vertically up and down, otherwise horizontally left and right.

`<amber-header>`：top column container.。

`<amber-aside>`：sidebar containers。

`<amber-main>`：primary area container。

`<amber-footer>`：bottom container。


:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<amber-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<amber-container>`。
:::


### 常见页面布局

::: demo
```html
<amber-container>
  <amber-header>Header</amber-header>
  <amber-main>Main</amber-main>
</amber-container>
<br>
<amber-container>
  <amber-header>Header</amber-header>
  <amber-main>Main</amber-main>
  <amber-footer>Footer</amber-footer>
</amber-container>
<br>
 <amber-container>
   <amber-aside width="200px">Aside</amber-aside>
  <amber-main>Main</amber-main>
</amber-container>
<br>
<amber-container>
  <amber-header>Header</amber-header>
  <amber-container>
    <amber-aside width="200px">Aside</amber-aside>
    <amber-main>Main</amber-main>
  </amber-container>
</amber-container>
<br>
<amber-container>
  <amber-header>Header</amber-header>
  <amber-container>
    <amber-aside width="200px">Aside</amber-aside>
    <amber-container>
      <amber-main>Main</amber-main>
      <amber-footer>Footer</amber-footer>
    </amber-container>
  </amber-container>
</amber-container>
<br>
<amber-container>
  <amber-aside width="200px">Aside</amber-aside>
  <amber-container>
    <amber-header>Header</amber-header>
    <amber-main>Main</amber-main>
  </amber-container>
</amber-container>
<br>
<amber-container>
  <amber-aside width="200px">Aside</amber-aside>
  <amber-container>
    <amber-header>Header</amber-header>
    <amber-main>Main</amber-main>
    <amber-footer>Footer</amber-footer>
  </amber-container>
</amber-container>

<style>
  .amber-header-container, .amber-footer-container {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .amber-aside-container{
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .amber-main-container {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .amber-container-container {
    margin-bottom: 40px;
  }
  
  .amber-container-container:nth-child(5) .amber-aside-container,
  .amber-container-container:nth-child(6) .amber-aside-container {
    line-height: 260px;
  }
  
  .amber-container-container:nth-child(7) .amber-aside-container {
    line-height: 320px;
  }
</style>

```
:::

### Container Attributes
| 参数   | 说明    | 类型    | 可选值    | 默认值      |
|-------|---------|---------|----------|------------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `amber-header` 或 `amber-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |
