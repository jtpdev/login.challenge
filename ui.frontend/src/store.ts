import Vue from 'vue'
import Vuex from 'vuex'

import routeStore from './stores/routeStore'
import authStore from './stores/authStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    routeStore,
    authStore
  }
})

export default store
