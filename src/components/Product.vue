<template>
  <div class="card_item">
    <img id="img" :src="product.image" v-if="product.image">
    <router-link :to="`/${product.id}`" id="name"><h4 class="name">{{product.name}}</h4></router-link>
    <p id="description">{{product.description}}</p>
    <div id="cost">{{product.cost}}</div>
    <input id="count" type="number" placeholder="Количество" v-model="count">
    <button id="button" @click="add(product, count)">Купить</button>
  </div>
</template>
<script>

export default {
  name: "Product",
  data(){
    return {
      count: 1
    }
  },
  props: ["product", "full"],
  methods: {
    add(item, count){
      this.$cardBus.$emit("add", item, parseInt(count))
    }
  }
}
</script>
<style lang="sass" scoped="true">
.card_item
  height: 100%
  display: grid
  grid-template-columns: 30% 1fr 1fr
  grid-template-rows: 40px 1fr 30px 30px
  
  grid-template-areas: "img name name" "img desctiption desctiption" "img cost cost" "img count butt"
  grid-gap: 10px
  #img
    width: 100%
    grid-area: img
  #name 
    grid-area: name
    font-size: 21px
    text-decoration: none
    color: black
    &:hover
      text-decoration: underline
  #description 
    grid-area: desctiption
  #cost 
    grid-area: cost
  #count 
    width: 100%
    grid-area: count
    text-align: end
    border: none
    &:focus
      outline: none
  #button 
    grid-area: butt

</style>