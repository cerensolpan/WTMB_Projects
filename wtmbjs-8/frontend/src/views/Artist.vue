<script>
import { mapState, mapActions } from "vuex";
import ArtistCard from "@/components/artist-card.vue";
import NewArtist from "@/components/new-artist.vue";
import PlaylistCard from "@/components/playlist-card.vue";

export default {
  name: "Artist",
  components: {
    ArtistCard,
    NewArtist,
    PlaylistCard,
  },
  computed: {
    ...mapState(["artists", "artist"]),
  },
  methods: {
    ...mapActions(["fetchArtist", "fetchArtists", "fetchUser"]),
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
    span Select your songs and add playlist
  section.new
    new-artist
  section.cards.full
    section.card.half
      artist-card(
        v-for="artist in artists",
        :artist="artist",
        :key="artist._id"
      )
    section.playlist.half
      playlist-card
</template>

<style scoped>
main {
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

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
