<template>
  <div class="post">
    <div class="text" v-show="!editMode">
      <span class="title">{{ post.title }}</span>
      <p class="body">{{ post.body }}</p>
    </div>
    <div class="edit-inputs" v-show="editMode">
      <input class="edit-input unite-input" v-model="editTitle" />
      <textarea class="edit-textarea unite-input" rows="5" v-model="editBody" />
    </div>
    <button class="edit-button" @click="toggleEditMode">
      <img
        class="edit-icon"
        src="../assets/edit-icon.svg"
        alt="edit"
        v-show="!editMode"
      />
      <img
        class="edit-icon"
        src="../assets/check-icon.svg"
        alt="edit"
        v-show="editMode"
      />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "PostItem",
  props: ["post"],
  data() {
    return {
      editMode: false,
      editTitle: this.post.title,
      editBody: this.post.body,
    }
  },
  methods: {
    ...mapActions(["updatePost"]),
    toggleEditMode() {
      if (this.editMode) {
        this.updatePost({
          id: this.post.id,
          title: this.editTitle,
          body: this.editBody,
        })
      }

      this.editMode = !this.editMode
    },
  },
}
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  gap: 10px;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
}
.title {
  font-weight: 600;
}
.edit-inputs {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-radius: 5px;
}
.unite-input {
  border: none;
  &:focus {
    outline: none;
  }
}
.edit-input {
  font-weight: 600;
}
.edit-button {
  display: flex;
  align-items: center;
  margin-left: auto;
  border-radius: 25px;
  width: 44px;
  height: 44px;
  padding: 10px;
  transition: background-color 0.25s;
  &:hover {
    background-color: rgb(218, 218, 218);
  }
}
</style>
