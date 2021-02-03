<script>
// @ is an alias to /src
import UserCard from "@/components/user-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    UserCard,
  },
  computed: {
    ...mapState(["user", "users"]),
  },
  methods: {
    ...mapActions(["fetchUser", "fetchUsers"]),
  },
  created() {
    this.fetchUsers();
  },
};
</script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

<template lang="pug">
main.bg
  section
    h1 Please select user and go to to create playlist
    h1 Selected User: {{ user.name }}
  section.cards
    user-card(v-for="user in users", :user="user")
</template>

<style scoped>
section {
  padding: 40px 0;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
</style>



