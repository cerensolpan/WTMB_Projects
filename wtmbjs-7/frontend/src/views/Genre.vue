<script>
import { mapState, mapActions } from "vuex";
import GenreCard from "@/components/genre-card.vue";
import NewGenre from "@/components/new-genre.vue";
import PlaylistCard from "@/components/playlist-card.vue";

export default {
  name: "Genre",
  components: {
    GenreCard,
    NewGenre,
    PlaylistCard,
  },
  computed: {
    ...mapState(["genres"]),
  },
  methods: {
    ...mapActions(["fetchGenres", "fetchUser"]),
  },
  created() {
    this.fetchGenres();
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
    new-genre
  section.cards
    section.card
      genre-card(v-for="genre in genres", :genre="genre", :key="genre._id")
    section.playlist
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
