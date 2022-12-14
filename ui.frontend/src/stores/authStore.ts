import VuexPersist from 'vuex-persist'

const vuexLocalStorage = new VuexPersist({
  key: 'auth',
  storage: window.localStorage
})

export default {
  plugins: [vuexLocalStorage.plugin],
  state () {
    return {
      isAuthenticated: false
    }
  },
  mutations: {
    authenticate (state: any) {
      state.isAuthenticated = true
    },
    unauthenticate (state: any) {
      state.isAuthenticated = false
    }
  },
  actions: {
    authenticate ({ commit }: any, credentials: { username: string; password: string }) {
      const toDo = (credentials.username === 'admin' &&
                credentials.password === 'admin')
        ? 'authenticate'
        : 'unauthenticate'
      commit(toDo)
    },
    unauthenticate ({ commit }: any) {
      commit('unauthenticate')
    }
  },
  getters: {
    isAuthenticated: (state: any) => state.isAuthenticated
  }
}
