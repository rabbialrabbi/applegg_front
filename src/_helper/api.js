import axios from 'axios'

let api =   axios.create({
  baseURL: 'http://localhost:8002/api',
  headers: {
    'Content-Type': 'application/json',
  }
})

export default api
