import Home from '../views/Home/Home.vue'
import Error from '../views/Error/Error.vue'
import Login from '../views/Login/Login.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'

import VuexPersist from 'vuex-persist'

const components = [
  { name: 'home', component: Home },
  { name: 'error', component: Error },
  { name: 'login', component: Login },
  { name: 'profile', component: Profile },
  { name: 'search', component: Search },
  { name: '*', redirect: { name: 'error', params: { error: 404 } } }
]

const beforeEach = (isAuthenticated: boolean, to: any) => {
  console.log(isAuthenticated, to)
  if (
    !isAuthenticated &&
        (to.name !== 'login' && to.name !== 'error')
  ) {
    return { name: 'error', component: Error, params: { error: 401 } }
  } else if (isAuthenticated && to.name === 'login') {
    return { name: 'home', component: Home }
  } else {
    return to
  }
}

const updatePath = (route: any) => {
  const url = new URL(window.location.href)
  url.searchParams.set('route', route.name)
  const refresh = url.href
  window.history.pushState({ path: refresh }, '', refresh)
}

const getRoute = (route: any, isAuthenticated: boolean) => {
  let foundRoute: any = components.filter(r => r.name === route?.name)[0]
  if (!foundRoute) {
    const redirect = components.filter(r => r.name === '*')[0].redirect
    foundRoute = components.filter(r => r.name === redirect?.name)[0]
    foundRoute = { ...foundRoute, params: redirect?.params }
  } else {
    foundRoute = { ...foundRoute, params: route?.params }
  }
  return beforeEach(isAuthenticated, foundRoute)
}

const vuexLocalStorage = new VuexPersist({
  key: 'route',
  storage: window.localStorage
})

export default {
  plugins: [vuexLocalStorage.plugin],
  state () {
    return {
      routes: [],
      currentRoute: null,
      currentIndex: -1
    }
  },
  mutations: {
    to (state: any, { route, isAuthenticated }: any) {
      route.active = true
      route.index = state.routes.length
      state.currentIndex++

      state.routes.forEach((r: any) => { r.active = false })

      state.routes.splice(state.currentIndex, 0, route)

      state.currentRoute = getRoute(route, isAuthenticated)
      updatePath(state.currentRoute)
    },
    go (state: any, { index, isAuthenticated }: any) {
      const toIndex = state.currentIndex + index
      const route = state.routes[toIndex]
      if (route) {
        state.currentIndex = toIndex
        state.routes.forEach((r: any) => { r.active = false })
        route.active = true
        state.currentRoute = getRoute(route, isAuthenticated)
        updatePath(state.currentRoute)
      }
    }
  },
  actions: {
    to ({ commit, rootState }: any, route: any) {
      console.log(rootState)
      commit('to', { route, isAuthenticated: rootState.authStore.isAuthenticated })
    },
    go ({ commit, rootState }: any, index: number) {
      commit('go', { index, isAuthenticated: rootState.authStore.isAuthenticated })
    }
  },
  getters: {
    currentRoute: (state: any) => state.currentRoute
  }
}
