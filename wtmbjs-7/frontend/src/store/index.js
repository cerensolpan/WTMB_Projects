import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    artists: [],
    artist: {}
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },
    SET_ARTISTS(state, data) {
      state.artists = data
    },
    SET_ARTIST(state, data) {
      state.artist = data
    }
  },
  actions: {
    incrementCounter({
      commit,
      state
    }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchArtists({
      commit
    }) {
      const result = await axios.get('http://localhost:3000/artist/all/json')
      commit('SET_ARTISTS', result.data)
    },
    async fetchArtist({
      commit
    }, id) {
      const result = await axios.get(`http://localhost:3000/artist/${id}/json`)
      commit('SET_ARTIST', result.data)
    }
  },
  modules: {}
})