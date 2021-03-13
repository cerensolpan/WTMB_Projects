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

    alertAdd() {
      this.$swal("This user is added.");
    },
  },
};
</script>

<template lang="pug">
article.container
  form(@submit.prevent="onSubmit")
    <h6 class="title is-6 mb-2"> Add a new user </h6>
    input(type="text",class="input is-small is-rounded mb-2", v-model="user", placeholder="Type in your username")
    <input type="submit" value="Submit" class="button is-small is-link is-light" @click="alertAdd()">
</template>

<style scoped>
.container {
  display: inline-block;
  text-align: left;
  border-radius: 3px;
  min-width: 200px;
}

form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 0px;
}
</style>
