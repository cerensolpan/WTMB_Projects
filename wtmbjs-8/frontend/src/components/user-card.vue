<script>
import { mapActions } from "vuex";
export default {
  name: "userCard",
  props: ["user"],
  methods: {
    ...mapActions(["fetchUser", "delUser"]),
    gotoPlaylist(){
      this.$router.push('/artist'); 
    }
  },
};
</script>

<template lang="pug">
article.card
  img(:src="`https://picsum.photos/300/200?random=${user._id}`", alt="")
  <div class= "userDetail">
    h1 {{ user.name }}
    button.select-button(@click="fetchUser(`${user._id} `); gotoPlaylist()") Select
    button.delete-button(@click="delUser(`${user._id}`)") Delete
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
}

button {
  color: #8783d1;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #8783d1;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin: 2px;
}

button:hover {
  background-color: #8783d1;
  color: white;
}
</style>