<script>
// @ is an alias to /src
import ArtistCard from "@/components/artist-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    ArtistCard,
  },
  computed: {
    ...mapState(["artists", "counter"]),
  },
  methods: {
    ...mapActions(["fetchArtists", "incrementCounter"]),
  },
  created() {
    this.fetchArtists();
  },
};
</script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

<template lang="pug">
main 
  section
    artist-card(v-for="artist in artists", :artist="artist")
  section
    button.increment-button(@click="incrementCounter") Increment
    div {{ counter }}
</template>

<style scoped>
section {
  padding: 40px 0;
}

.increment-button {
  color: green;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid green;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}

.increment-button:hover {
  background-color: green;
  color: white;
}
</style>



