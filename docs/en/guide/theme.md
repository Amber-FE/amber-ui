#  theme

Use/CSS custom attributes (https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) realize the skin effect
You can modify these variables to change styles.

#### change
You can replace CSS variables on root via the API or directly via CSS overrides

```js
document.documentElement.style.setProperty('--color-primary', '#3267ea');
```

#### variables
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
` ` `
