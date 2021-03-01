<script>
import { mapState, mapActions } from "vuex";
import ReleaseSong from "@/components/release-song.vue";

export default {
  name: "Release",
  components: {
    ReleaseSong,
  },
};
</script>

<template lang="pug">
main
  section.card
    release-song
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
