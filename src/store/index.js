import Vue from 'vue'
import Vuex from 'vuex'

import HTTP from '../provider'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    test: {
      namespaced: true,
      state: {
        nextUrl: '',
        medias: [],
        count: ''
      },
      mutations: {
        getMedias(state, payload) {
          state.media = payload;

        }
      },
      actions: {
        async getMedias({
          commit
        }) {

          try {
            const medias = await HTTP.get('/test')
            commit('getUsers', medias)
            return Promise.resolve(medias)
          } catch (error) {
            return Promise.reject(error)
          }
        }
      },
    }
  }
})
