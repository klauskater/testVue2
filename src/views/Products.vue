<template>
  <div>
    <div v-if="error">Извините, произошла ошибка. {{ errorMessage }}</div>
    <div v-if="loading"><Spinner /></div>
    <div class="wrapper" v-if="ready">
      <div v-for="item in items" :key="item.id" class="item">
        <Product :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product"
import Spinner from "@/components/Spinner"
import { mapState, mapActions } from "vuex"
import status from "@/mixins/status"

export default {
  name: "ProductsPage",
  mixins: [status],
  components: {
    Product,
    Spinner
  },
  data(){
    return {}
  },
  async created(){
    this.setLoading()
    try {
      await this.get_products()
      this.setReady()
    } catch (e) {
      console.log(e)
      this.setError(e.message)
    }
  },
  computed: {
    ...mapState({
        items: 'products',
      }),
  },
  methods: {
    ...mapActions(["get_products"])
  }
}
</script>
<style lang="sass" scoped>
.wrapper
  display: flex
  justify-content: space-between
  flex-wrap: wrap
.item
  width: 28%
  margin: 1.5%
  box-shadow: 0 0 10px rgba(0,0,0,0.5)
  border-radius: 5px
  padding: 10px
  @media screen and (max-width: 870px)
    width: 44%
  @media screen and (max-width: 680px)
    width: 94%

</style>