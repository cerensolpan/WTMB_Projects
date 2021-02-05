<script>
import { mapActions } from "vuex";
export default {
  name: "newUser",
  data() {
    return {
      user: "",
      clicked: false,
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    onSubmit() {
      let newUser = {
        name: this.user,
      };
      this.addUser(newUser);
      this.user = "";
    },
  },
};
</script>

<template lang="pug">
article.container
  form(@submit.prevent="onSubmit")
    h3.title Add a new user
    input(type="text", v-model="user", placeholder="Type in your username")
    input.button(
      type="submit",
      value="Submit",
      @click="() => (clicked = true)"
    )
  h3.add(v-if="clicked") This user is added.
</template>

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 20px;
  width: 250px;
  height: 150px;
}
input[type="text"] {
  flex: 8;
  padding: 10px;
  border: 1px solid #a38b00;
  outline: 0;
  margin: 10px auto;
}
input[type="submit"] {
  color: green;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid green;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.container {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}
.title {
  margin: 0 auto;
  width: 200px;
  text-align: center;
  color: #2c3e50;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
}

.title:hover {
  color: cornflowerblue;
}
.add {
  text-align: center;
  font-size: 15px;
}
</style>