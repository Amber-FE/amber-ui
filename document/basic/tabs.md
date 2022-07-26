# Tabs 标签页

### 示例

### 基础用法

::: demo

```html
<amber-tabs :activeName="activeName" @change="change" @edit="edit">
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
  <amber-button slot="tabBarExtraContent" @click="add"> add tabs </amber-button>
</amber-tabs>
<script>
  export default {
    data() {
      const panes = Array(3)
        .fill(0)
        .map((v, i) => ({ tab: `Tab ${i}`, content: `Content of Tab ${i}`, name: `${i}` }))
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
        const activeName = `newTab${this.newTabIndex++}`
        panes.push({
          tab: 'New Tab',
          content: 'Content of new Tab',
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
