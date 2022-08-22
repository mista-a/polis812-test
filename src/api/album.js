export const albumAPI = (instance) => ({
  async get(limit) {
    limit = limit ?? 5
    const { data } = await instance.get(`albums?_limit=${limit}`)
    return data
  },

  async getPhotos(limit) {
    limit = limit ?? 300
    const { data } = await instance.get(`photos?_limit=${limit}`)
    return data
  },
})
