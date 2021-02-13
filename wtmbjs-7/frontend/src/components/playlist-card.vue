<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PlaylistCard",
  components: {},
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["delSong"]),
  },
};
</script>

<template lang="pug">
article
  section.playlist
    h2.userTitle {{ user.name }}'s Playlist
    li.playlist-songs(v-for="song in user.playlist", :key="song.name") {{ song.name }}
      = ' '
      button(@click="delSong(song._id)") X
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

button {
  color: #682c2c;
}
</style>