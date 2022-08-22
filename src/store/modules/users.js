import { api } from "../../api/index"

export default {
  state: {
    users: [],
  },
  getters: {
    users(state) {
      return state.users
    },
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const users = await api().user.get()

      commit("updateUsers", users)
    },
  },
}
