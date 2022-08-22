<template>
  <nav class="page-nav">
    <UserNavButton :param="'список постов'" />
    <UserNavButton :param="'список альбомов'" />
  </nav>
</template>

<script>
import UserNavButton from "@/components/UserNavButton.vue"

export default {
  name: "UserNav",
  components: { UserNavButton },
  async mounted() {
    if (!this.$route.query.page) {
      this.$router.replace({
        path: this.$route.path,
        query: { page: "список постов" },
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.page-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
