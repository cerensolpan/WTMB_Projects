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
      errors: {},
      clicked: false,
    };
  },
  methods: {
    ...mapActions(["releaseSong", "fetchGenres"]),
    onSubmit(e) {
      e.preventDefault();
      let newSong = {
        name: this.song,
        artistId: this.artist._id,
        genreId: this.genre,
      };
      console.log(newSong);
      this.errors = {};
      if (this.song == "") {
        this.errors.song = "Song required.";
      }
      // if (!this.artist) {
      //   this.errors.artist = "Artist required.";
      // }
      if (!this.genre) {
        this.errors.genre = "Genre required.";
      }
      if (JSON.stringify(this.errors) === "{}") {
        this.releaseSong(newSong);
        this.clicked = true;
        this.song = "";
        this.genre = {};
        this.errors = {};
      } else {
        this.clicked = false;
      }
    },
  },
  created() {
    this.fetchGenres();
  },
};
</script>

<template lang="pug">
article.container
  form(@submit.prevent="onSubmit")
    //- h3.title {{ artist.name }} Release Song 
    <h5 class="title is-5">{{ artist.name }} Release Song</h5>
    input(type="text", v-model="song", placeholder="Type in song") 
    select(v-model="genre")
      option(v-for="genre in genres", v-bind:value="genre._id") {{ genre.name }}
    input.button(type="submit", value="Submit")
  h3.add(v-if="clicked") This song is released.
  h3.add(v-if="JSON.stringify(this.errors) != '{}'") {{ errors }}
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
  margin-right: 10px;
}

input[type="submit"] {
  color: #8783d1;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #8783d1;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #8783d1;
  color: white;
}
.container {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  text-align: left;
  padding: 20px;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}
/* .title {
  margin: 0 auto;
  width: 200px;
  text-align: center;
  color: #2c3e50;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
} */

.title:hover {
  color: cornflowerblue;
}
.add {
  text-align: center;
  font-size: 15px;
  color: #8783d1;
}
</style>