import axios from 'axios'

export const apiConfig = () =>
  axios.create({
    baseURL: 'http://localhost:5000/',
  })
