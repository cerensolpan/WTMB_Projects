<script>
import { mapState, mapActions } from "vuex";
import Button from "./button.vue";

export default {
  name: "ArtistCard",
  props: ["artist"],
  components: { Button },
  computed: {
    ...mapState(["song", "error"]),
  },
  watch: {
    error: function(newErr, oldErr) {
      if (this.error != "") {
        this.showAlert();
      }
    },
  },
  methods: {
    ...mapActions(["addSong", "release", "fetchArtist", "resetError"]),
    showAlert() {
      this.$swal(this.error);
      this.resetError();
    },
  },
};
</script>

<template lang="pug">
<div class="columns">
  <div class="column">
    <h6 class="title is-6"> {{ artist.name }} </h6>
    span(@click="fetchArtist(artist._id)")
      <router-link class="button is-small is-link is-light" :to="{ path: 'artist/release' }" > Release Song </router-link>
    span.songs(v-for="song in artist.songs", :song="song", :key="song._id") 
      span.songName {{ song.name }}
      span(@click="addSong(song._id)")
        Button
  </div>
</div>
</template>

<style scoped>
.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 20px auto;
  background: #ccc2d6;
  padding: 40px;
  border: 2px solid grey;
  border-radius: 20px;
  word-break: break-word;
  width: 21%;
  min-width: 200px;
  padding: 10px;
}

.title {
  margin-bottom: 10px;
}

.songs {
  margin-left: 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.songName {
  text-align: left;
}
</style>
