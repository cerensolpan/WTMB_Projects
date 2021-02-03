<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ItemCard",
  props: ["item"],
  components: {},
  computed: {
    ...mapState([]),
  },
  methods: {
    ...mapActions(["addSongsToPlaylist"]),
  },
};
</script>

<template lang="pug">
article.card
  <div class= "itemDetail">
    h2 {{ item.name }}
      h6(v-for="song in item.songs", :song="song", :key="song._id") {{ song.name }}
        = ' '
        button(@click="addSongsToPlaylist(song._id)") +
  </div>
</template>

<style scoped>
.card {
  display: flex;
  width: 400px;
  margin: 100px auto;
  background: white;
  padding: 40px;
  text-align: center;
  border: 2px solid grey;
  border-radius: 20px;
}
</style>