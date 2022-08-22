<template>
  <form class="create-post" @submit="addPost">
    <div class="create-post-top">
      <input class="title-input" v-model="title" placeholder="Title" />
      <button class="create-post-button" @click="addPost">
        Create new post
      </button>
    </div>
    <textarea
      placeholder="Body"
      class="body-textarea"
      rows="6"
      v-model="body"
      @keydown.enter.exact="addPost"
      @keydown.enter.shift.exact.prevent="body += '\n'"
    />
  </form>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "CreatePost",
  data() {
    return {
      title: "",
      body: "",
    }
  },
  methods: {
    ...mapActions(["createPost"]),
    addPost(e) {
      if (this.title.length & this.body.length) {
        e.preventDefault()
        this.createPost({ title: this.title, body: this.body })
        this.title = this.body = ""
      }
      e.preventDefault()
    },
  },
}
</script>

<style lang="scss" scoped>
.create-post {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.create-post-top {
  display: flex;
  gap: 10px;
}
.title-input {
  font-weight: 600;
}
.create-post-button {
  padding: 10px;
  color: white;
  background: rgb(54, 54, 54);
  border-radius: 10px;
  transition: background 0.3s;
  white-space: nowrap;
  &:hover {
    background: rgb(85, 85, 85);
  }
  &:active {
    scale: 0.98;
  }
}
</style>
