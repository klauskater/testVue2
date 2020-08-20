<template>
  <div>
    <div v-if="error">Извините, произошла ошибка. {{ errorMessage }}</div>
    <div v-if="loading"><Spinner/></div>
    <div v-if="ready" class="container">
      <Product :product="product" :full="true"/>
    </div>
  </div>
</template>
<script>
import Product from "@/components/Product"
import Spinner from "@/components/Spinner"
import { mapActions } from "vuex"
import status from "@/mixins/status"

export default {
  name: "ProductPage",
  mixins: [status],
  components: {
    Product,
    Spinner
  },
  data(){
    return {
    }
  },
  async created(){
    const id = this.$route.params.productid
    this.setLoading()
    try {
      await this.get_product(id)
      this.setReady()
    } catch (e) {
      console.log(e)
      this.setError(e.message)
    }
  },
  computed: {
    product(){
      return this.$store.getters.getProductById(this.$route.params.productid)
    }
  },
  methods: {
    ...mapActions(["get_product"]),
    add(item, count){
      this.$cardBus.$emit("add", item, parseInt(count))
    }
  }
}
</script>
<style lang="sass">

</style>