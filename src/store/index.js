import Vue from 'vue'
import Vuex from 'vuex'
import {loginService} from '../services/login-service'
Vue.use(Vuex)

export const store= new Vuex.Store({
  state: {
    loggedInUser: {}
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser
    }
  },

  mutations: {
    setUser(state, { user }) {
      state.loggedInUser = user;
  },
  resetUser(state){
    state.loggedInUser = {}
  }
  },
  actions: {
    async login({ commit }, { userCred }) {
      try {
        const user = await loginService.login(userCred);
        commit({ type: 'setUser', user })
        return user;
      } catch (err) {
        console.log('userStore: Error in login', err)
        throw err
      }
    },
    logout({commit}) {
      commit({type:'resetUser'})
    }
  },
  modules: {
  }
})
