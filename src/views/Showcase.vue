<template>
  <div>
    <div class="busket">
      <button class="spike" @click="()=> showBusket = !showBusket">🛒 {{$root.busketCount}}</button>
      <div class="wrapperBusket" v-show="showBusket">
        <Busket />
        <button @click="$router.push({ path: '/busket' })">перейти в корзину</button>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import Busket from "@/components/Busket.vue"

export default {
  name: "Main",
  components: {
    Busket
  },
  data(){
    return {
      showBusket: false
    }
  }
}
</script>
<style lang="sass" scoped>
.busket
  position: fixed
  right: 5px
  top: 80px
  .spike
    float: right
  .wrapperBusket
    text-align: end
    width: 50vw
    background: white
    box-shadow: 0 0 10px rgba(0,0,0,0.5)
    border-radius: 5px
    padding: 8px
    @media screen and (max-width: 870px)
      width: 90vw
    & > *
      text-align: start
</style>