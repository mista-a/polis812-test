import Vue from "vue"
import { api } from "../../api/index"

export default {
  state: {
    posts: [],
  },
  getters: {
    posts(state) {
      return state.posts
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, post) {
      state.posts.push(post)
    },
    updatePost(state, post) {
      Vue.set(state.posts, post.id - 1, post)
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const posts = await api().post.get()

      commit("updatePosts", posts)
    },
    async createPost({ commit, state }, { title, body }) {
      try {
        api().post.create()
      } catch (error) {
        console.error(error)
      }

      const id = state.posts[state.posts.length - 1].id + 1

      commit("createPost", { title, body, id })
    },
    async updatePost({ commit }, post) {
      try {
        api().post.update(post.id)
      } catch (error) {
        console.error(error)
      }

      commit("updatePost", post)
    },
  },
}
