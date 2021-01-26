<script>
// @ is an alias to /src
import ArtistCard from "@/components/artist-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Artist",
  components: {
    ArtistCard,
  },
  computed: {
    ...mapState(["artist"]),
  },
  methods: {
    ...mapActions(["fetchArtist"]),
  },
  created() {
    this.fetchArtist(this.$route.params.id);
  },
};
</script> 

<template lang="pug">
main 
  section
    artist-card(:artist="artist")
</template>