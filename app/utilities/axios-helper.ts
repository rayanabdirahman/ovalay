import axios from 'axios'
export default (token: string | null) => axios.create({
  headers: {
    'Authorization': `Bearer ${token}`
  }
})