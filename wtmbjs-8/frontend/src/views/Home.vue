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
    span Please create a new user or select a user, then go to Artist and Genre page for creating a playlist
    h3.selected(v-if="JSON.stringify(user) != '{}'") Selected User: {{ user.name }}
      button(@click="logOut") Remove the selected user
    h3(v-else) Please select a user
  section.new
    new-user
  section.cards
    user-card(v-for="user in users", :user="user")
</template>

<style scoped>
section {
  padding: 10px 0;
  margin-top: 20px;
}

.selected {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
  margin: 10px;
}

button:hover {
  background-color: #8783d1;
  color: white;
}
</style>
