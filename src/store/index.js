import { createStore } from 'vuex'
export default createStore({
  state: {
    user: null,
    product: null
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user  ;
    },
    setProduct: (state, product) => {
      state.product= product  ;
    }
  },
  actions: {
    login: async (context, payload) => {
      const {email, password} = payload;
      const response = await   fetch(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
      const userData =await response.json();
      context.commit("setUser",userData[0]);
    },
    ShowProducts: async (context) => {
      fetch('http://localhost:3000/products')
    .then((response) => response.json())
    .then((product) => context.commit("setProduct",product))
    }
  },
  modules: {
  }
})
