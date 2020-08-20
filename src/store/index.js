import Vue from "vue";
import Vuex from "vuex"
import products from "../data/data"

Vue.use(Vuex)

function resolveAfter3s(data){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(data)
    },1000)
  })
}

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    getProductById: state => id => {
      return state.products.find(item => item.id === id)
    }
  },
  mutations: {
    SET_PRODUCTS(state, products){
      state.products = products
    },
    ADD_PRODUCT(state, product){
      state.products.push(product)
    }
  },
  actions: {
    async get_products({commit}){
      const {data} = await resolveAfter3s(products)
      commit('SET_PRODUCTS', data)
    },
    async get_product({state, commit}, id){
      const tmpProduct = state.products.find(item => item.id === id)
      if(tmpProduct !== undefined)
        return

      // Получение единичного продукта.
      const {data} = await resolveAfter3s({data: products.data.find(item => item.id === id)})
      commit('ADD_PRODUCT', data)
    }
  },
  modules: {}
});
