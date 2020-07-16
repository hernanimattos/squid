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
        loader: false,
        nextUrl: '',
        medias: [],
        count: '',
        qtd: 5
      },
      mutations: {
        getMedias(state, payload) {
          state.medias = payload;
        },
        getNextUrl(state, payload) {
          state.nextUrl = payload
        },
        setQtd(state, payload) {
          state.qtd = payload
        },
        loaderStatus(state, payload) {
          state.loader = payload
        }
      },
      actions: {
        async getMedias({
          commit
        }, {
          qtd
        }) {
          commit('loaderStatus', true)

          try {
            const {
              data: {
                medias,
                pagination
              }
            } = await HTTP.get(`/test?count=${qtd}`)
            const {
              next_url
            } = pagination;

            commit('getMedias', medias)
            commit('getNextUrl', next_url)
            commit('setQtd', qtd)
            commit('loaderStatus', false)

            return Promise.resolve(medias)
          } catch (error) {
            return Promise.reject(error)
          }
        },
        async getNextPage({
          commit
        }, {
          url,
          qtd
        }) {
          commit('loaderStatus', true)
          try {
            const {
              data: {
                medias,
                pagination: {
                  next_url
                }
              }
            } = await HTTP.get(`/test?count=${qtd}`, {
              next_url: url
            })
            commit('setQtd', qtd)
            commit('getMedias', medias)
            commit('getNextUrl', next_url)
            commit('loaderStatus', false)


            return Promise.resolve(medias)
          } catch (error) {
            return Promise.reject(error)
          }
        }
      },
      getters: {
        parseNextUrl(state) {
          return encodeURIComponent(state.nextUrl)
        },
        addQtd(state) {
          let newQtd = state.qtd + 5;
          return newQtd
        }
      }
    }
  }
})
