# Tabs 标签页

### Example

### basic use

::: demo

```html
<template>
  <div>
    <amber-tabs activeName="1" @change="callback">
      <amber-tab name="1" tab="Tab 1"> Content of Tab Pane 1 </amber-tab>
      <amber-tab name="2" tab="Tab 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo perferendis qui
        perspiciatis, cumque vero tenetur corporis exercitationem sunt minus consequuntur non ipsam
        ea maxime, est recusandae numquam animi incidunt.
      </amber-tab>
      <amber-tab name="3" tab="Tab 3"> Content of Tab Pane 3 </amber-tab>
    </amber-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      callback(name) {
        console.log(name)
      }
    }
  }
</script>
```

:::

### Don't use tab animation

::: demo

```html
<template>
  <div>
    <amber-tabs activeName="1" @change="callback" :animated="false">
      <amber-tab name="1" tab="Tab 1"> Content of Tab Pane 1 </amber-tab>
      <amber-tab name="2" tab="Tab 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo perferendis qui
        perspiciatis, cumque vero tenetur corporis exercitationem sunt minus consequuntur non ipsam
        ea maxime, est recusandae numquam animi incidunt.
      </amber-tab>
      <amber-tab name="3" tab="Tab 3"> Content of Tab Pane 3 </amber-tab>
    </amber-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      callback(name) {
        console.log(name)
      }
    }
  }
</script>
```

:::

### Tab disable

::: demo

```html
<template>
  <div>
    <amber-tabs activeName="1" @change="callback">
      <amber-tab name="1" tab="Tab 1"> Content of Tab Pane 1 </amber-tab>
      <amber-tab name="2" tab="Tab 2" disabled> Content of Tab Pane 2 </amber-tab>
      <amber-tab name="3" tab="Tab 3"> Content of Tab Pane 3 </amber-tab>
    </amber-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      callback(name) {
        console.log(name)
      }
    }
  }
</script>
```

:::

### tab icon

::: demo

```html
<template>
  <div>
    <amber-tabs activeName="1" @change="callback">
      <amber-tab name="1" tab="Tab 1">
        <span slot="tab">
          <amber-icon size="14px" :pointer="true" color="#5d82a6" icon-class="a-bianzu313x" />
          Tab 1
        </span>
        Tab 1
      </amber-tab>
      <amber-tab name="2" tab="Tab 2" disabled> Content of Tab Pane 2 </amber-tab>
      <amber-tab name="3" tab="Tab 3">
        <span slot="tab">
          <amber-icon
            size="14px"
            :pointer="true"
            color="#5d82a6"
            icon-class="a-jisutuikuanbeifen3x"
          />
          Tab Pane 3
        </span>
        Content of Tab Pane 3
      </amber-tab>
    </amber-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      callback(name) {
        console.log(name)
      }
    }
  }
</script>
```

:::

### Swipe tabs to accommodate more tabs

::: demo

```html
<template>
  <div>
    <amber-tabs activeName="1" @change="callback">
      <amber-tab v-for="i in 30" :key="i" :name="`${i}`" :tab="`Tab ${i}`">
        Content of Tab Pane {{i}}
      </amber-tab>
    </amber-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      callback(name) {
        console.log(name)
      }
    }
  }
</script>
```

:::

### Additional content

::: demo

```html
<template>
  <div>
    <amber-tabs activeName="1" @change="callback">
      <amber-tab name="1" tab="Tab 1"> Content of Tab Pane 1 </amber-tab>
      <amber-tab name="2" tab="Tab 2"> Content of Tab Pane 2 </amber-tab>
      <amber-tab name="3" tab="Tab 3"> Content of Tab Pane 3 </amber-tab>
      <amber-button slot="tabBarExtraContent"> Additional content </amber-button>
    </amber-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      callback(name) {
        console.log(name)
      }
    }
  }
</script>
```

:::

### card tab

::: demo

```html
<template>
  <div>
    <amber-tabs type="card" activeName="1" @change="callback">
      <amber-tab name="1" tab="Tab 1"> Content of Tab Pane 1 </amber-tab>
      <amber-tab name="2" tab="Tab 2"> Content of Tab Pane 2 </amber-tab>
      <amber-tab name="3" tab="Tab 3"> Content of Tab Pane 3 </amber-tab>
    </amber-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      callback(name) {
        console.log(name)
      }
    }
  }
</script>
```

:::

### Dynamic tabs

::: demo

```html
<amber-tabs type="line" :activeName="activeName" @change="change" @edit="edit">
  <amber-tab
    v-for="pane in panes"
    :key="pane.name"
    :name="pane.name"
    :tab="pane.tab"
    :disabled="pane.disabled"
    :closable="pane.closable"
  >
    {{ pane.content }}
  </amber-tab>
  <amber-button slot="tabBarExtraContent" @click="add"> 增加 Tab </amber-button>
</amber-tabs>
<script>
  export default {
    data() {
      const panes = Array(3)
        .fill(0)
        .map((v, i) => ({ tab: `Tab ${i}`, content: `Tab内容 ${i}`, name: `${i}` }))
      return {
        activeName: panes[0].name,
        panes,
        newTabIndex: 0
      }
    },
    methods: {
      change(activeName) {
        console.log(activeName)
      },
      edit(activeName) {
        console.log(activeName)
        const panes = this.panes.filter((pane) => pane.name !== activeName)
        this.panes = panes
        this.activeName = panes[0].name || null
      },
      add() {
        const panes = this.panes
        const activeName = `新Tab ${this.newTabIndex++}`
        panes.push({
          tab: '新Tab',
          content: '新Tab内容',
          name: activeName,
          closable: true
        })
        this.panes = panes
        this.activeName = activeName
      }
    }
  }
</script>
```

:::

### API

#### tabs

| parameter   | illustrate                                     | type    | Defaults | Version |
| ----------- | ---------------------------------------------- | ------- | -------- | ------- |
| activeName  | The key that currently activates the tab panel | string  | -        |         |
| type        | Specifies the form of the current tab          | string  | line     |         |
| animated    | Whether to use animation to switch Tabs        | boolean | true     |         |
| tabBarStyle | style object for the tab bar                   | object  | -        |         |

### event

| parameter | illustrate                             | Defaults                | Defaults |
| --------- | -------------------------------------- | ----------------------- | -------- |
| change    | switch panel callback                  | Function(activeName) {} |          |
| edit      | Callbacks for adding and deleting tabs | (activeName): void      |          |

### tabs.tab

| parameter | illustrate                  | type    | Defaults | Version |
| --------- | --------------------------- | ------- | -------- | ------- | --- |
| name      | corresponding to activeName | string  | -        |         |
| tab       | Tab header display text     | string  | slot     | -       |     |
| disabled  | Whether to disable Tabs     | boolean | false    |         |
| closable  | Whether tabs can be deleted | object  | false    |         |
