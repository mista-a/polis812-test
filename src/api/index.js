import axios from "axios"
import { albumAPI } from "./album"
import { postAPI } from "./post"
import { userAPI } from "./user"

export const api = () => {
  const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  })

  return {
    user: userAPI(instance),
    album: albumAPI(instance),
    post: postAPI(instance),
  }
}
