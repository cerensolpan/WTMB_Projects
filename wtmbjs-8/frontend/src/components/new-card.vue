<script>
import { mapActions } from "vuex";
export default {
  name: "newCard",
  props: ["title", "cardType"],
  data() {
    return {
      artist: "",
      genre: "",
    };
  },
  methods: {
    ...mapActions(["addArtist", "addGenre"]),
    onSubmit() {
      if (this.cardType === "ArtistCard") {
        let newArtist = {
          name: this.artist,
        };
        this.addArtist(newArtist);
        this.artist = "";
      } else if (this.cardType === "GenreCard") {
        let newGenre = {
          name: this.genre,
        };
        this.addGenre(newGenre);
        this.genre = "";
      }
    },

    alertAdd() {
      if (this.cardType === "ArtistCard") {
        this.$swal("This artist is added.");
      } else if (this.cardType === "GenreCard") {
        this.$swal("This genre is added.");
      }
    },
  },
};
</script>

<template lang="pug">
article.container
  form(@submit.prevent="onSubmit")
    <h6 class="title is-6"> Add a new {{title}} </h6>
    <input class="input is-small" v-if="cardType === 'ArtistCard'" v-model="artist" type="text" placeholder="Type in artist name" size=small>
    <input class="input is-small" v-if="cardType === 'GenreCard'" v-model="genre" type="text" placeholder="Type in genre name">
    <input type="submit" value="Submit" class="button is-small is-link is-light" @click="alertAdd()">
</template>

<style scoped>
.container {
  display: inline-block;
  justify-content: center;
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  position: relative;
}

.title,
.input,
.button {
  margin: 0.2rem;
}

form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 20px;
}
</style>
