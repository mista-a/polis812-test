<template>
  <div class="posts-section">
    <CreatePost />
    <div class="posts">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import PostItem from "./PostItem"
import CreatePost from "./CreatePost"

export default {
  name: "PostsList",
  components: {
    PostItem,
    CreatePost,
  },
  computed: mapGetters(["posts"]),
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  mounted() {
    this.fetchPosts()
  },
}
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
</style>
