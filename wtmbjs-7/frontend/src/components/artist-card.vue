<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ArtistCard",
  props: ["artist"],
  components: {},
  computed: {
    ...mapState(["song"]),
  },
  methods: {
    ...mapActions(["addSong", "release", "fetchArtist"]),
    openNewTab: function () {
      window.open("http://localhost:8080/artist/release", "_blank");
    },
  },
};
</script>

<template lang="pug">
article.card
  <div class= "artistDetail">
    h2 {{ artist.name }}
      = ' '
      button.release(@click="fetchArtist(`${artist._id}`)")
        router-link(:to="{ path: 'artist/release' }") Release Song
      h6(v-for="song in artist.songs", :song="song", :key="song._id") {{ song.name }}
        = ' '
        button(@click="addSong(song._id)") +
  </div>
</template>

<style scoped>
.card {
  display: flex;
  width: 400px;
  margin: 0px auto;
  background: #abd7ed;
  padding: 40px;
  text-align: center;
  border: 2px solid grey;
  border-radius: 20px;
}

.release {
  color: green;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid green;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 5px;
}

.release:hover {
  background-color: green;
  color: white;
}
</style>