<script>
// @ is an alias to /src
import UserCard from "@/components/user-card.vue";
import NewUser from "@/components/new-user.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    UserCard,
    NewUser,
  },
  computed: {
    ...mapState(["user", "users"]),
  },
  methods: {
    ...mapActions(["fetchUser", "fetchUsers", "addUser", "logOut"]),
  },
  created() {
    this.fetchUsers();
    if (localStorage.userId) {
      this.fetchUser(localStorage.userId);
    }
  },
};
</script>

<template lang="pug">
main
  section
    h1 Please create a new user or select a user, then go to create playlist

    h3(v-if="JSON.stringify(user) != '{}'") Selected User: {{ user.name }}
    h3(v-else) Please select a user
    button(@click="logOut") Remove the selected user
  section.new
    new-user
  section.cards
    user-card(v-for="user in users", :user="user")
</template>

<style scoped>
section {
  padding: 10px 0;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.select-button {
  color: #abd7ed;
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
  background-color: #abd7ed;
  color: white;
}
</style>
