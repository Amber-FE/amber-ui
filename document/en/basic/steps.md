# Steps 

:::tip
Child elements of `<amber-steps>` can only be `<amber-step>`
:::

### Example

### Basic usage

::: demo

```html
<amber-steps :current="1">
  <amber-step title="fair" description="Auxiliary Instructions" />
  <amber-step title="fair" description="Auxiliary Instructions"></amber-step>
  <amber-step title="still fucking fair" description="Auxiliary Instructions" />
</amber-steps>
```

:::

### custom icon

::: demo

```html
<amber-steps :current="0">
  <amber-step title="dinner">
    <template v-slot:icon
      ><amber-icon size="32px" :pointer="true" color="#5d82a6" icon-class="a-putongshipin3x"
    /></template>
  </amber-step>
  <amber-step title="beheaded">
    <template v-slot:icon
      ><amber-icon size="32px" :pointer="true" color="#5d82a6" icon-class="a-zhongxichengyao3x"
    /></template>
  </amber-step>
  <amber-step title="accept it as a dog">
    <template v-slot:icon
      ><amber-icon size="32px" :pointer="true" color="#5d82a6" icon-class="a-bianzu313x"
    /></template>
  </amber-step>
</amber-steps>
```

:::

### wrong step

::: demo

```html
<amber-steps :current="1" status="error">
  <amber-step title="dinner" description="eat simple" />
  <amber-step title="beheaded" description="county magistrate" />
  <amber-step title="accept it as a dog" description="gem" />
</amber-steps>
```

:::

### vertical step bar

::: demo

```html
<amber-steps direction="vertical" :current="current">
  <amber-step title="fair" description="Auxiliary Instructions" />
  <amber-step title="fair" description="Auxiliary Instructions"></amber-step>
  <amber-step title="still fucking fair" description="Auxiliary Instructions" />
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

### Clickable Step Bar

::: demo

```html
<amber-steps :current="current" @change="onChange">
  <amber-step title="fair" description="Auxiliary Instructions" />
  <amber-step title="fair" description="Auxiliary Instructions"></amber-step>
  <amber-step title="still fucking fair" description="Auxiliary Instructions" />
</amber-steps>
<hr />
<amber-steps direction="vertical" :current="current" @change="onChange">
  <amber-step title="fair" description="Auxiliary Instructions" />
  <amber-step title="fair" description="Auxiliary Instructions"></amber-step>
  <amber-step title="still fucking fair" description="Auxiliary Instructions" />
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

#### StepGroup

| parameter | illustrate                                                                                                                 | type   | Defaults   | Version |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | ------ | ---------- | ------- |
| current   | Specifies the current step, counting from 0. In child Step elements, the status can be overridden via the status attribute | string | 0          |         |
| status    | Specifies the status of the current step, optional wait process finish error                                               | string | process    |         |
| direction | Specifies the step bar direction. Currently supports horizontal (horizontal) and vertical (vertical) two orientations      | string | horizontal |         |

#### StepGroup

| parameter | illustrate                              | Defaults          | Defaults |
| --------- | --------------------------------------- | ----------------- | -------- |
| change    | Triggered when a toggle step is clicked | (current) => void |          |

#### Step

| parameter   | illustrate                                                                                                            | type    | Defaults   | Version |
| ----------- | --------------------------------------------------------------------------------------------------------------------- | ------- | ---------- | ------- |
| title       | title                                                                                                                 | string  | -          |         |
| sub-title   | subheading                                                                                                            | string  | -          |         |
| description | Detailed description of the step, optional                                                                            | string  | -          |         |
| disabled    | disable click                                                                                                         | boolean | false      |         |
| status      | Specifies the step bar direction. Currently supports horizontal (horizontal) and vertical (vertical) two orientations | string  | horizontal |         |
