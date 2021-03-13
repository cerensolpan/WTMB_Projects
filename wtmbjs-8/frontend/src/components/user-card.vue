<script>
import { mapActions } from "vuex";
export default {
  name: "userCard",
  props: ["user"],
  methods: {
    ...mapActions(["fetchUser", "delUser"]),
    gotoPlaylist() {
      this.$router.push("/artist");
    },
  },
};
</script>

<template lang="pug">
article.card
  img(:src="`https://picsum.photos/300/200?random=${user._id}`", alt="")
  <div class= "userDetail">
    h1.mb-2 {{ user.name }}
    button.select-button(@click="fetchUser(`${user._id} `); gotoPlaylist()",class="button is-small is-link is-light mb-2") Select
    button.delete-button(@click="delUser(`${user._id}`)",class="button is-small is-link is-light") Delete
  </div>
</template>

<style scoped>
img {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-right: 20px;
}

.userDetail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
}

h1 {
  margin: 0;
}

.button,
.button button {
  width: 100%;
}

.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 20px;
  background: #ccc2d6;
}
</style>
