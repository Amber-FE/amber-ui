# 更换主题

使用[CSS 自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)实现换肤效果
您可以通过修改这些变量，达到变换样式的需求。

#### 更改
你可以通过api或者直接通过css覆盖的形式对root上的css变量的进行替换

```js
document.documentElement.style.setProperty('--color-primary', '#3267ea');
```

#### 变量
```css
:root {
  --color-primary: #1A9Dff;
  --color-primary-end: #3267EA;
  --color-warning: #ed6a0c;
  --color-danger: #D40000;
  --color-disabled: #dadada;
  --color-text: #cccccc;
  --theme-transition: 1s
}
```