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
    genre: {},
    newSong: '',
    newArtist: '',
    newGenre: '',
    error: '',
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
    SET_GENRE(state, data) {
      state.genre = data;
    },
    SET_NEWUSER(state, data) {
      state.users.unshift(data);
    },
    SET_NEWARTIST(state, data) {
      state.artists.unshift(data);
    },
    SET_NEWGENRE(state, data) {
      state.genres.unshift(data);
    },
    SET_ERROR(state, data) {
      state.error = data;
    }

  },

  actions: {
    async fetchArtists({
      commit
    }) {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/artist/all`);
      commit("SET_ARTISTS", result.data);
    },

    async fetchArtist({
      commit
    }, artistId) {
      if (!localStorage.artistId || localStorage.artistId != artistId)
        localStorage.artistId = artistId;
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/artist/${artistId}`);
      commit("SET_ARTIST", result.data);
    },

    async fetchUsers({
      commit
    }) {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/user/all`);
      commit("SET_USERS", result.data);
    },

    async fetchUser({
      commit
    }, userId) {
      if (!localStorage.userId || localStorage.userId != userId)
        localStorage.userId = userId;
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/user/${userId}`);
      commit("SET_USER", result.data);
    },

    async delUser({
      commit,
      dispatch
    }, id) {
      console.log(id);
      await axios
        .delete(`${process.env.VUE_APP_API_URL}/user/${id}`)
        .then(() => dispatch('fetchUsers'))
        .catch((err) => console.log(err));
    },

    async addUser({
      commit
    }, user) {
      await axios.post(`${process.env.VUE_APP_API_URL}/user`, user)
        .then(res => commit("SET_NEWUSER", res.data))
        .catch((err) => console.log(err));
    },

    async addArtist({
      commit
    }, artist) {
      await axios.post(`${process.env.VUE_APP_API_URL}/artist`, artist)
        .then(res => commit("SET_NEWARTIST", res.data))
        .catch((err) => console.log(err));
    },

    async addGenre({
      commit
    }, genre) {
      await axios.post(`${process.env.VUE_APP_API_URL}/genre`, genre)
        .then(res => commit("SET_NEWGENRE", res.data))
        .catch((err) => console.log(err));
    },

    async addSong({
      commit,
      dispatch
    }, songId) {
      let userId = this.state.user._id;
      let playlist = this.state.user.playlist;
      if (playlist.find(item => item._id === songId)) {
        const error = "This song is already on your playlist!";
        commit("SET_ERROR", error);
      } else {
        await axios({
            method: "post",
            url: `${process.env.VUE_APP_API_URL}/user/add-playlist`,
            data: {
              userId: userId,
              songId: songId,
            },
          })
          .then((res) => dispatch('fetchUser', userId))
          .catch((err) => console.log(err));
      }
    },


    async delSong({
      commit,
      dispatch
    }, songId) {
      console.log(songId);
      let userId = this.state.user._id;
      await axios({
          method: "post",
          url: `${process.env.VUE_APP_API_URL}/user/delete-playlist`,
          data: {
            userId: userId,
            songId: songId,
          },
        })
        .then((res) => dispatch('fetchUser', userId))
        .catch((err) => console.log(err));
    },

    async releaseSong({
      commit
    }, newSong) {
      await axios({
          method: "post",
          url: `${process.env.VUE_APP_API_URL}/artist/release`,
          data: {
            name: newSong.name,
            artistId: newSong.artistId,
            genreId: newSong.genreId,
          },
        })
        .then(() => console.log('ok'))
        .catch((err) => console.log(err));
      window.location.href = window.location.origin + `/artist`;
    },

    async fetchGenres({
      commit
    }, id) {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/genre/all`);
      commit("SET_GENRES", result.data);
    },

    async fetchGenre({
      commit
    }, id) {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/genre/${id}`);
      commit("SET_GENRE", result.data);
    },

    async logOut({
      commit
    }) {
      let data = {};
      localStorage.userId = null;
      commit("SET_USER", data);
    },

    async resetError({
      commit
    }) {
      let data = "";
      commit("SET_ERROR", data);
    }
  },
  modules: {},
});