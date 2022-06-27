import Card from './src/main.vue'

Card.install = (Vue) => {
  Vue.componet(Card.name, Card)
}
export default Card
