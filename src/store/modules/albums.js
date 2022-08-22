import { api } from "../../api/index"

export default {
  state: {
    albums: [],
  },
  getters: {
    albums(state) {
      return state.albums
    },
  },
  mutations: {
    updateAlbums(state, albums) {
      state.albums = albums
    },
  },
  actions: {
    async fetchAlbums({ commit }) {
      const albums = await api().album.get()

      commit("updateAlbums", albums)
    },
  },
}
