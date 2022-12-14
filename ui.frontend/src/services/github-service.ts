import axios from 'axios'

const url = 'https://api.github.com/'

export default {

  listUsersBy (q: string) {
    return axios.get(`${url}search/users?q=${q}`).then((res: any) => res.data)
  },

  getUserBy (username: string) {
    return axios.get(`${url}users/${username}`).then((res: any) => res.data)
  },

  listRepositories (username: string) {
    return axios.get(`${url}users/${username}/repos`).then((res: any) => res.data)
  },

  listStarRepositories (username: string) {
    return axios.get(`${url}users/${username}/starred`).then((res: any) => res.data)
  }
}
