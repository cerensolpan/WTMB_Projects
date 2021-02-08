<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ReleaseSong",
  computed: {
    ...mapState(["genres", "artist"]),
  },
  data() {
    return {
      song: "",
      genre: {},
      clicked: false,
    };
  },
  methods: {
    ...mapActions(["releaseSong", "fetchGenres", "fetchArtist"]),
    onSubmit() {
      let newSong = {
        name: this.song,
        artistId: this.artist._id,
        genreId: this.genre,
      };
      this.releaseSong(newSong);
      console.log(newSong);

      // if (this.song && this.artist && this.genre) {
      //   return true;
      // }

      // this.errors = [];

      // if (!this.song) {
      //   this.errors.push("Song required.");
      // }
      // if (!this.artist) {
      //   this.errors.push("Artist required.");
      // }
      // if (!this.genre) {
      //   this.errors.push("Genre required.");
      // }

      // e.preventDefault();
    },
  },
  created() {
    this.fetchGenres();
    if (localStorage.artistId) {
      this.fetchArtist(localStorage.artistId);
    }
  },
};
</script>

<template lang="pug">
article.container
  form(@submit.prevent="onSubmit")
    h3.title {{ artist.name }} Release Song
    input(type="text", v-model="song", placeholder="Type in song") 
    select(v-model="genre")
      option(v-for="genre in genres", v-bind:value="genre._id") {{ genre.name }}
    input.button(
      type="submit",
      value="Submit",
      @click="() => (clicked = true)"
    )
  h3.add(v-if="clicked") This song is released.
</template>

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 20px;
  width: 250px;
  height: 150px;
}
input[type="text"] {
  flex: 8;
  padding: 10px;
  border: 1px solid #a38b00;
  outline: 0;
  margin: 10px auto;
}
select {
  flex: 8;
  padding: 10px;
  border: 1px solid #a38b00;
  outline: 0;
  margin: 10px auto;
}
input[type="submit"] {
  color: green;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid green;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.container {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}
.title {
  margin: 0 auto;
  width: 200px;
  text-align: center;
  color: #2c3e50;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
}

.title:hover {
  color: cornflowerblue;
}
.add {
  text-align: center;
  font-size: 15px;
}
</style>