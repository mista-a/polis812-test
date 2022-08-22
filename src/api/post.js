export const postAPI = (instance) => ({
  async get(limit) {
    limit = limit ?? 4
    const { data } = await instance.get(`posts?_limit=${limit}`)
    return data
  },
  async create(post) {
    instance.post("posts", post)
  },
  async update(postId, post) {
    instance.put(`posts/${postId}`, post)
  },
})
