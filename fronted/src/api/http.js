import axios from 'axios'

const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})
// axios.defaults.withCredentials = true

export default http
