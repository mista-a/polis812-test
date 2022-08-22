<template>
  <div class="user">
    <UserNav />
    <AlbumsList v-if="this.$route.query.page === 'список альбомов'" />
    <PostsList v-else />
  </div>
</template>

<script>
import AlbumsList from "@/components/AlbumsList.vue"
import PostsList from "@/components/PostsList.vue"
import UserNav from "@/components/UserNav.vue"

export default {
  name: "UserView",
  components: { AlbumsList, PostsList, UserNav },
}
</script>

<style lang="scss" scoped></style>
