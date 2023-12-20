import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3"
const apiKey = "d20f3d07e092055066c6afc65a641a4a"
 const getTrendingMovies = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${apiKey}`)

 export default {
  getTrendingMovies
 }