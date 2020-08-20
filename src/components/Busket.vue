<template>
  <div>
    <table>
      <tr v-for="item in items" :key="item.id">
        <td><img :src="item.image" v-if="item.image"></td>
        <td><h4 class="name">{{item.name}}</h4></td>
        <td>{{item.cost}} x {{item.count}}</td>
        <td width="67">
          <button @click="remove(item.id)">Удалить</button>
        </td>
      </tr>
    </table>
    <p class="allCost">Итог: {{ allCost }}</p>
  </div>
</template>
<script>
export default {
  name: "Busket",
  data(){
    return {
      items: []
    }
  },
  created(){
    this.$cardBus.$on("add", this.add)
    this.$cardBus.$on("remove", this.remove)
  },
  destroed(){
    this.$cardBus.$off("add")
    this.$cardBus.$off("remove")
  },
  mounted() {
    if (localStorage.busket) {
      this.items = JSON.parse(localStorage.busket)
    }
  },
  computed:{
    allCost(){
      return this.items.reduce((accumulator, item) => accumulator + (item.count * parseInt(item.cost)), 0)
    }
  },
  watch:{
    items(newItems) {
      localStorage.busket = JSON.stringify(newItems)

      this.$root.busketCount = this.items.reduce((accumulator, item) => accumulator + (item.count || 0), 0)
    }
  },
  methods: {
    add(item, count=1){
      const localItem = this.items.find(i=>i.id === item.id)
      if(localItem){
        localItem.count += count
      } else {
        const copyItem = Object.assign({}, item)
        copyItem.count = count
        this.items.push(copyItem)
      }
    },
    remove(id){
      const index = this.items.findIndex(i=>i.id === id)
      if(!~index) return

      this.items.splice(index, 1)
    }
  }
} 
</script>
<style lang="sass" scoped>
table
  width: 100%
  tr
    td
      vertical-align: middle
.allCost
  text-align: end
</style>