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
    h6.selected.title.is-6.m-2(v-if="JSON.stringify(user) != '{}'") Selected User: {{ user.name }}
      button(@click="logOut" class="button is-small is-link is-light m-2") Remove the selected user
    <h6 class="title is-6 m-2" v-else>Please select a user</h6>
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
</style>
