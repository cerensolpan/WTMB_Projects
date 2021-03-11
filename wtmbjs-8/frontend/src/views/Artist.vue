<script>
import { mapState, mapActions } from "vuex";
import ArtistCard from "@/components/artist-card.vue";
import NewCard from "@/components/new-card.vue";
import PlaylistCard from "@/components/playlist-card.vue";
import GenreCard from "@/components/genre-card.vue";

export default {
  name: "Artist",
  components: {
    ArtistCard,
    NewCard,
    PlaylistCard,
    GenreCard,
  },
  computed: {
    ...mapState(["artists", "genres"]),
  },
  methods: {
    ...mapActions(["fetchArtists", "fetchUser", "fetchGenres"]),
  },
  created() {
    this.fetchArtists();
    if (localStorage.userId) {
      this.fetchUser(localStorage.userId);
    }
    this.fetchGenres();
  },
};
</script>

<template lang="pug">
main
  section.title
    span Select your songs and add playlist
  section.columns
    section.playlist
      playlist-card
    section.new
      new-card(title="artist", cardType="ArtistCard")
    section.new
      new-card(title="genre", cardType="GenreCard")
  section.cards
    artist-card(v-for="artist in artists", :artist="artist", :key="artist._id")
  section.cards
    genre-card(v-for="genre in genres", :genre="genre", :key="genre._id")
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
  font-size: 25px;
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.columns {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
