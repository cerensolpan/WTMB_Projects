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
      h6(v-for="song in genre.songs", :song="song", :key="song._id") {{ song.name }}
        = ' '
        button(@click="addSong(song._id)") +
  </div>
</template>

<style scoped>
.card {
  display: flex;
  width: 400px;
  margin: 0px auto;
  background: white;
  padding: 40px;
  text-align: center;
  border: 2px solid grey;
  border-radius: 20px;
}
</style>