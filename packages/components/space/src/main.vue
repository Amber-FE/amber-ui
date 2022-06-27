<template>
  <div class="amber-space-container">
    <div
      class="amber-space-container-item"
      :class="dirClassType"
      :style="styleType"
      v-for="(vNode, index) in elementList"
      :key="index"
    >
      <RenderDom :vNode="vNode" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'AmberSpace',
  props: {
    size: {
      type: String,
      default: () => {
        return '8px'
      }
    },
    direction: {
      type: String,
      default: () => {
        return 'horizontal'
      }
    },
    align: {
      type: String,
      default: () => {
        return 'center'
      }
    }
  },
  components: {
    RenderDom: {
      props: {
        vNode: [Array, String, Object, Number]
      },
      render(h) {
        if (typeof this.vNode === 'object') {
          return this.vNode
        }
        return h('div', this.vNode)
      }
    }
  },
  computed: {
    dirClassType() {
      return this.direction === 'horizontal' ? 'amber-space--horizontal' : 'amber-space--vertical'
    },
    styleType() {
      const type = this.direction === 'horizontal' ? 'margin-right' : 'margin-bottom'
      return {
        [type]: this.size
      }
    }
  },
  data() {
    return {
      elementList: []
    }
  },
  created() {
    this.elementList = this.$slots.default.filter((item) => {
      return item.tag
    })
  }
  // render(h) {
  // 	let spaceType = this.direction === 'horizontal' ? 'amber-space-container-item amber-space--horizontal' : 'amber-space-container-item amber-space--vertical'
  // 	let styleObj = this.direction === 'horizontal' ? {marginRight: this.size} : {marginBottom: this.size}
  // 	return h(
  // 		'div',
  // 		{
  // 			class: 'amber-space-container',
  // 		},
  // 		this.elementList.map(function(item){
  // 			return h(
  // 				'div',
  // 				{
  // 					class: spaceType,
  // 					style: styleObj
  // 				},
  // 				[
  // 					item.componentOptions ?
  // 					h(
  // 						item.componentOptions.tag,
  // 						{
  // 							style: item.data ? item.data.staticStyle : '',
  // 							props: item.componentOptions.propsData ? item.componentOptions.propsData : {},
  // 							on: {
  // 								'click': (e) => {
  // 									console.log(item)
  // 									console.log('1111111',e)
  // 									// item.context.handleClick()
  // 								},
  // 								'change': (e) => {
  // 									console.log(item)
  // 									console.log('1111111',e)
  // 									item.componentOptions.listeners.change(e)
  // 								}
  // 							}
  // 						},
  // 						item.componentOptions.children
  // 					)
  // 					:
  // 					h(
  // 						item.tag,
  // 						{
  // 							style: item.data ? item.data.staticStyle : ''
  // 						},
  // 						item.children
  // 					)
  // 				]
  // 			)
  // 		})
  // 	)
  // }
}
</script>

<style></style>
