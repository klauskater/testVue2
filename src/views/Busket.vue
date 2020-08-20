<template>
  <div class="wrapper">
    <Busket />
  </div>
</template>
<script>
import Busket from "@/components/Busket.vue"

export default {
  name: "busketPage",
  components: {
    Busket
  }
}
</script>
<style lang="sass" scoped>
.wrapper
  padding: 20px
</style>