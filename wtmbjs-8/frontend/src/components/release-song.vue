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
      genre: "",
      add_new_genre: null,
      errors: {},
      clicked: false,
    };
  },
  methods: {
    ...mapActions(["releaseSong", "fetchGenres", "addGenre"]),
    onSubmit(e) {
      e.preventDefault();
      this.errors = {};
      if (this.song == "") {
        this.errors.song = "Song required.";
      }
      let genreId;
      if (this.add_new_genre) {
        let newGenre = {
          name: this.add_new_genre,
        };
        this.addGenre(newGenre);
        setTimeout(() => {
          genreId = this.genres[0]._id;
        }, 1000);
      } else {
        genreId = this.genre;
      }
      setTimeout(() => {
        let newSong = {
          name: this.song,
          artistId: this.artist._id,
          genreId,
        };

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
      }, 1200);
    },
  },
  created() {
    this.fetchGenres();
  },
};
</script>

<template lang="pug">
article.container.is-inline
  form.is-flex.is-flex-direction-column.is-flex-wrap-wrap.is-align-content-center.is-justify-content-center.is-align-items-center.p-6(@submit.prevent="onSubmit")
    <h6 class="title mt-2 mb-2 is-6 ">{{ artist.name }} Release Song</h6>
      input.mt-2.mb-2(type="text",class="is-4  input  is-small is-rounded", v-model="song", placeholder="Type in song") 
      div.select.is-small.is-rounded 
        select.is-4(v-model="genre")
          option(disabled value="" selected="genre") Please select a genre
          option(value="add_new_genre") Add a new genre
          option(v-for="genre in genres", v-bind:value="genre._id") {{ genre.name }}
    input(type="text ",class="is-4 mt-2  input  is-small is-rounded", v-model="add_new_genre", v-if="genre==='add_new_genre'" placeholder="Type in genre")
    <input type="submit" value="Release Song" class="button mt-4 mb-2 is-small is-warning is-hovered">
  h3.add(v-if="clicked") 
  h3.add(v-if="JSON.stringify(this.errors) != '{}'") {{ errors }}
</template>

<style scoped>
.container {
  border-radius: 3px;
}

form {
  border: 1px solid grey;
  border-radius: 3px;
  margin: 0px;
  background: #ccc2d6;
}

.select,
.select select {
  width: 100%;
}
</style>
