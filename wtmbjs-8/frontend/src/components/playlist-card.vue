<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PlaylistCard",
  components: {},
  computed: {
    ...mapState(["user","artists"]),
  },
  methods: {
    ...mapActions(["delSong","fetchArtists"]),
  },
};
</script>

<template lang="pug">
article
  section.playlist
    h2.userTitle {{ user.name }}'s Playlist
    li.playlist-songs(v-for="song in user.playlist", :key="song.name") {{song.artist.name}} - {{song.name}}
      <button class="button is-danger is-light is-small" @click="delSong(song._id)">x</button>
</template>

<style scoped>
.playlist-songs {
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.playlist {
  position: -webkit-sticky; /* Safari & IE */
  position: sticky;
  top: 40px;
  margin: 20px;
  background: #ccc2d6;
  padding: 40px;
  text-align: center;
  border: 2px solid grey;
  border-radius: 20px;
}

</style>