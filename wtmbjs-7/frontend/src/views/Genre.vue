<script>
import { mapState, mapActions } from "vuex";
import ItemCard from "@/components/item-card.vue";
export default {
  name: "Genre",
  components: {
    ItemCard,
  },
  computed: {
    ...mapState(["user", "genres"]),
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
    h1 Select your songs and add playlist
  section.cards
    section.card
      item-card(v-for="item in genres", :item="item", :key="item._id")
    section.playlist
      h2 {{ user.name }}'s Playlist
        h5(v-for="song in user.playlist", :key="song.name") {{ song.name }}
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

.cards {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.playlist {
  width: 400px;
  margin: 100px 20px;
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
