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
      const path=window.location.href+"/release";
      window.open(path, "_blank");
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
      router-link.link(:to="{ path: 'artist/release' }") Release Song
    span.songs(v-for="song in artist.songs", :song="song", :key="song._id") {{ song.name }}
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

.songs {
  margin-left: 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: #8783d1;
  text-decoration: none;
}

.link:hover {
  background-color: #8783d1;
  color: white;
}
</style>