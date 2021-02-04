import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artists: [],
    artist: {},
    users: [],
    user: {},
    genres: [],
  },
  mutations: {
    SET_ARTISTS(state, data) {
      state.artists = data;
    },
    SET_ARTIST(state, data) {
      state.artist = data;
    },
    SET_USERS(state, data) {
      state.users = data;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SET_GENRES(state, data) {
      state.genres = data;
    },
    DEL_SONG(state, data) {
      state.user = data;
    },
  },

  actions: {
    async fetchArtists({
      commit
    }) {
      const result = await axios.get("http://localhost:3000/artist/all");
      commit("SET_ARTISTS", result.data);
    },

    async fetchArtist({
      commit
    }, id) {
      const result = await axios.get(`http://localhost:3000/artist/${id}/json`);
      commit("SET_ARTIST", result.data);
    },

    async fetchUsers({
      commit
    }, id) {
      const result = await axios.get(`http://localhost:3000/user/all`);
      commit("SET_USERS", result.data);
    },

    async fetchUser({
      commit
    }, userId) {
      if (!localStorage.userId || localStorage.userId != userId)
        localStorage.userId = userId;
      const result = await axios.get(`http://localhost:3000/user/${userId}`);
      commit("SET_USER", result.data);
    },

    async delUser({
      commit
    }, id) {
      console.log(id);
      await axios
        .delete(`http://localhost:3000/user/${id}`)
        .then((res) => location.reload())
        .catch((err) => console.log(err));
    },

    async addSong({
      commit
    }, songId) {
      let userId = this.state.user._id;
      await axios({
          method: "post",
          url: "http://localhost:3000/user/add-playlist",
          data: {
            userId: userId,
            songId: songId,
          },
        })
        .then((res) => location.reload())
        .catch((err) => console.log(err));
    },

    async delSong({
      commit
    }, songId) {
      console.log(songId);
      let userId = this.state.user._id;
      await axios({
          method: "post",
          url: "http://localhost:3000/user/delete-playlist",
          data: {
            userId: userId,
            songId: songId,
          },
        })
        .then((res) => location.reload())
        .catch((err) => console.log(err));
    },

    async fetchGenres({
      commit
    }, id) {
      const result = await axios.get(`http://localhost:3000/genre/all`);
      commit("SET_GENRES", result.data);
    },
  },
  modules: {},
});