const state = () => ({
  products: [],
})

const getters = {
  getProducts: (state) => state.products,
}

const mutations = {
  setProducts: (state, product) => {
    state.products = [...state.products, product]
  },
}

const actions = {
  addProduct({ commit }, payload) {
    commit('setProducts', payload)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          success: true,
        })
      }, 1000)
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
