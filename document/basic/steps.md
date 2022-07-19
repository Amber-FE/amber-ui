# Steps 步骤条

::: tip
`<amber-steps>` 的子元素只能是 `<amber-step>`
:::

### 示例

### 基础用法

::: demo

```html
<amber-steps :current="1">
  <amber-step title="公平" description="辅助说明" />
  <amber-step title="公平" description="辅助说明"></amber-step>
  <amber-step title="还是 ** 的公平" description="辅助说明" />
</amber-steps>
```

:::

### 自定义图标

::: demo

```html
<amber-steps :current="0">
  <amber-step title="请客">
    <template v-slot:icon
      ><amber-icon size="32px" :pointer="true" color="#5d82a6" icon-class="a-putongshipin3x"
    /></template>
  </amber-step>
  <amber-step title="斩首">
    <template v-slot:icon
      ><amber-icon size="32px" :pointer="true" color="#5d82a6" icon-class="a-zhongxichengyao3x"
    /></template>
  </amber-step>
  <amber-step title="收下当 *">
    <template v-slot:icon
      ><amber-icon size="32px" :pointer="true" color="#5d82a6" icon-class="a-bianzu313x"
    /></template>
  </amber-step>
</amber-steps>
```

:::

### 错误步骤

::: demo

```html
<amber-steps :current="1" status="error">
  <amber-step title="请客" description="简单吃点" />
  <amber-step title="斩首" description="县长" />
  <amber-step title="收下当 *" description="宝石" />
</amber-steps>
```

:::

### 竖直方向的步骤条

::: demo

```html
<amber-steps direction="vertical" :current="current">
  <amber-step title="公平" description="辅助说明" />
  <amber-step title="公平" description="辅助说明"></amber-step>
  <amber-step title="还是 ** 的公平" description="辅助说明" />
</amber-steps>
<script>
  export default {
    data() {
      return {
        current: 0
      }
    },
    methods: {
      onChange(current) {
        this.current = current
      }
    }
  }
</script>
```

:::

### 可点击的步骤条

::: demo

```html
<amber-steps :current="current" @change="onChange">
  <amber-step title="公平" description="辅助说明" />
  <amber-step title="公平" description="辅助说明"></amber-step>
  <amber-step title="还是 ** 的公平" description="辅助说明" />
</amber-steps>
<hr />
<amber-steps direction="vertical" :current="current" @change="onChange">
  <amber-step title="公平" description="辅助说明" />
  <amber-step title="公平" description="辅助说明"></amber-step>
  <amber-step title="还是 ** 的公平" description="辅助说明" />
</amber-steps>
<script>
  export default {
    data() {
      return {
        current: 0
      }
    },
    methods: {
      onChange(current) {
        this.current = current
      }
    }
  }
</script>
```

:::

### API

#### StepGroup 整体步骤条

| 参数      | 说明                                                                        | 类型   | 默认值     | 版本 |
| --------- | --------------------------------------------------------------------------- | ------ | ---------- | ---- |
| current   | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态 | string | 0          |      |
| status    | 指定当前步骤的状态，可选 wait process finish error                          | string | process    |      |
| direction | 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向        | string | horizontal |      |

#### StepGroup 事件

| 参数   | 说明               | 默认值            | 版本 |
| ------ | ------------------ | ----------------- | ---- |
| change | 点击切换步骤时触发 | (current) => void |      |

#### Step 步骤条内的每一个步骤

| 参数        | 说明                                                                 | 类型    | 默认值     | 版本 |
| ----------- | -------------------------------------------------------------------- | ------- | ---------- | ---- |
| title       | 标题                                                                 | string  | -          |      |
| sub-title   | 子标题                                                               | string  | -          |      |
| description | 步骤的详情描述，可选                                                 | string  | -          |      |
| disabled    | 禁用点击                                                             | boolean | false      |      |
| status      | 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向 | string  | horizontal |      |
