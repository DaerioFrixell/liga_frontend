import axios from "axios"

export const $host = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export const $fakehost = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

