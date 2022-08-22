export const userAPI = (instance) => ({
  async get() {
    const { data } = await instance.get("users")
    return data
  },

  async getOne(userId) {
    const { data } = await instance.get(`users/${userId}`)
    return data
  },
})
