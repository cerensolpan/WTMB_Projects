<script>
import { mapState, mapActions } from "vuex";
import ArtistCard from "@/components/artist-card.vue";
import NewArtist from "@/components/new-artist.vue";

export default {
  name: "Artist",
  components: {
    ArtistCard,
    NewArtist,
  },
  computed: {
    ...mapState(["user", "artists", "artist"]),
  },
  methods: {
    ...mapActions(["fetchArtist", "fetchArtists", "delSong", "fetchUser"]),
  },
  created() {
    this.fetchArtists();
    if (localStorage.userId) {
      this.fetchUser(localStorage.userId);
    }
  },
};
</script>

<template lang="pug">
main
  section.title
    h1 Select your songs and add playlist
  section.new
    new-artist
  section.cards
    section.card
      artist-card(
        v-for="artist in artists",
        :artist="artist",
        :key="artist._id"
      )
    section.playlist
      h2.userTitle {{ user.name }}'s Playlist
        h5(v-for="song in user.playlist", :key="song.name") {{ song.name }}
          = ' '
          button(@click="delSong(song._id)") X
</template>

<style scoped>
main {
  font-family: "Indie Flower", cursive;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.title {
  margin: 20px;
}

.userTitle {
  position: -webkit-sticky; /* Safari & IE */
  position: sticky;
  top: 40px;
}

.cards {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.playlist {
  width: 400px;
  margin: 0px 20px;
  background: white;
  padding: 40px;
  text-align: center;
  border: 2px solid grey;
  border-radius: 20px;
}
h4 {
  display: flex;
  flex-direction: row;
  text-align: center;
}
</style>
