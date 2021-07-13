import axios from 'axios'
import { BASE_URL } from './env'
// eslint-disable-next-line import/first
axios.defaults.baseURL = { BASE_URL }
exports.setHeader = (headers) =>
  new Promise((resolve, reject) => {
    axios.defaults.headers = headers
    axios.defaults.timeout = 10000
    resolve()
    reject()
  })

exports.API_LANGUAGES = `${BASE_URL}`
