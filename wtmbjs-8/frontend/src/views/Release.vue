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
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 90vh;
}
</style>
