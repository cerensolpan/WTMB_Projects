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
    }, artistId) {
      if (!localStorage.artistId || localStorage.artistId != artistId)
        localStorage.artistId = artistId;
      const result = await axios.get(`http://localhost:3000/artist/${artistId}/json`);
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

    async addUser({
      commit
    }, user) {
      await axios.post('http://localhost:3000/user', user)
        .then(res => commit("SET_NEWUSER", res.data))
        .catch((err) => console.log(err));
    },
    async addArtist({
      commit
    }, artist) {
      await axios.post('http://localhost:3000/artist', artist)
        .then(res => commit("SET_NEWARTIST", res.data))
        .catch((err) => console.log(err));
    },

    async addGenre({
      commit
    }, genre) {
      await axios.post('http://localhost:3000/genre', genre)
        .then(res => commit("SET_NEWGENRE", res.data))
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

    async releaseSong({
      commit
    }, newSong) {
      let artistId = this.state.artist._id;
      let genreId = this.state.genre._id;
      await axios({
          method: "post",
          url: "http://localhost:3000/artist/release",
          data: {
            name: newSong.name,
            artistId: newSong.artistId,
            genreId: newSong.genreId,

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

    async fetchGenre({
      commit
    }, id) {
      const result = await axios.get(`http://localhost:3000/genre/${id}`);
      commit("SET_GENRE", result.data);
    },
  },
  modules: {},
});