<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "userCard",
  props: ["user"],
  computed: {
    userUrl() {
      return `/user/${this.user._id}`;
    },
    aboutUrl() {
      return `/about`;
    },
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
};
</script>

<template lang="pug">
article.card
  img(:src="`https://picsum.photos/300/200?random=${user._id}`", alt="")
  <div class= "userDetail">
    h1 {{ user.name }}
    button.select-button(@click="fetchUser({ user })") Select

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
.select-button {
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

.select-button:hover {
  background-color: green;
  color: white;
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
  width: 200px;
  height: 100px;
}
</style>