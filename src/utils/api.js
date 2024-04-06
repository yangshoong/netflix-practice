import axios from"axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL:"https://api.themoviedb.org/3"
  heders:{
    Accept:'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
})

export default api;