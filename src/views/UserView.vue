<template>
  <div class="user">
    <UserNav />
    <AlbumsList v-show="this.$route.query.page === 'список альбомов'" />
    <PostsList v-show="this.$route.query.page === 'список постов'" />
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
