<template>
  <div class="users-list">
    <UserItem
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :name="user.name"
      :email="user.email"
      :website="user.website"
      :city="user.address.city"
      :street="user.address.street"
    />
  </div>
</template>

<script>
import UserItem from "@/components/UserItem.vue"
import { mapGetters, mapActions } from "vuex"

export default {
  name: "UsersList",
  components: {
    UserItem,
  },
  computed: mapGetters(["users"]),
  methods: mapActions(["fetchUsers"]),
  mounted() {
    this.fetchUsers()
  },
}
</script>

<style scoped lang="scss">
.users-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
}
</style>
