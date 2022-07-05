# Divider

#### Example

### Basic usage

::: demo

```html
<p>We climbed to the roof to watch the sunset</p>
<amber-divider></amber-divider>
<p>Sing the old days again</p>
<amber-divider dashed></amber-divider>
```

:::

### Vertical partition

::: demo

```html
<div style="display: flex">
  <span>Sun WuKong</span>
  <amber-divider type="vertical"></amber-divider>
  <span>Zhu Bajie</span>
  <amber-divider type="vertical" dashed></amber-divider>
  <span>Sha Wujing</span>
</div>
```

:::

### Separate text content usage

::: demo

```html
<amber-divider>With Text</amber-divider>
Your health
<amber-divider dashed>Dashed Text</amber-divider>
My health
<amber-divider orientation="right">Right Text</amber-divider>
Everyone is healthy together
<amber-divider orientation="left" dashed>Left Text</amber-divider>
```

:::

### API

| Parameter   | Explain          | Type    | Optional value      | Default value|
| ----------- | ---------------- | ------- | ------------------- | ---------- |
| type        | Horizontal or vertical| string  | horizontal/vertical | horizontal |
| dashed      | Dotted line      | boolean | boolean             | false      |
| orientation | Text position    | string  | left/right          | center     |
