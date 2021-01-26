<script>
export default {
  name: "ArtistCard",
  props: ["artist"],
  computed: {
    artistUrl() {
      return `/artist/${this.artist._id}`;
    },
  },
};
</script>

<template lang="pug">
article.card
  img(:src="`https://picsum.photos/300/200?random=${artist._id}`", alt="")
  h2.card-title 
    router-link(:to="artistUrl") {{ artist.name }}
  p {{ artist.songs }}
</template>

<style scoped>
.card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}
</style>