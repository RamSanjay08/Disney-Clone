import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3"
const apiKey = "d20f3d07e092055066c6afc65a641a4a"
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

 const getTrendingMovies = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${apiKey}`)

 const getMoviesByGenreId = (id)=> axios.get(`${movieByGenreBaseURL}&with_genres=${id}`)

 export default {
  getTrendingMovies,
  getMoviesByGenreId
 }