<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "GenreCard",
  props: ["genre"],
  components: {},
  computed: {
    ...mapState([]),
  },
  methods: {
    ...mapActions(["addSong"]),
  },
};
</script>

<template lang="pug">
<div class="columns">
  <div class="column">
  <h6 class="title is-6"> {{ genre.name }} </h6>
    span.genres(v-for="song in genre.songs", :song="song", :key="song._id") {{ song.name }}
      <button class="button is-link is-light is-small" @click="addSong(song._id)"><i class="fas fa-plus" style="color:black" ></i></button>
  </div>
</div>
</template>

<style scoped>
.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 20px auto;
  background: #ccc2d6;
  padding: 40px;
  border: 2px solid grey;
  border-radius: 20px;
  word-break: break-word;
  width: 21%;
  min-width: 200px;
  padding: 10px;
}

.genres {
  margin-left: 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  text-align: left;
}

button {
  margin-left: 1rem;
  width: 30px;
}
</style>
