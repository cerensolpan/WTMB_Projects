<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "GenreCard",
  props: ["genre"],
  components: {},
  computed: {
    ...mapState([]),
  },
  methods: {
    ...mapActions(["addSong"]),
  },
};
</script>

<template lang="pug">
article.card
  <div class= "genreDetail">
    h2 {{ genre.name }}
    span.genres(v-for="song in genre.songs", :song="song", :key="song._id") {{ song.name }}
      = ' '
      button(@click="addSong(song._id)") +
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  background: #ccc2d6;
  padding: 40px;
  border: 2px solid grey;
  border-radius: 20px;
  word-break: break-word;
}

.genres {
  margin-left: 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

button {
  color: #8783d1;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #8783d1;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: #8783d1;
  color: white;
}
</style>