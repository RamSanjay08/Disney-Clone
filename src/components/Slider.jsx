import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const Slider = () => {
  const [movieList,setMovieList] = useState([])

  useEffect(()=> {
    getTrendingMovies()
  },[])

  const getTrendingMovies =() => {
    GlobalApi.getTrendingMovies.then(resp=> {
      console.log(resp.data.results);
      setMovieList(resp.data.results)
    })
  }


  return (
    <div> 
      {movieList.map((item,index) => (
       <div key={index}>
       <h1>{item.title}</h1>
        <img src={IMAGE_BASE_URL + item.backdrop_path} alt="" className='min-w-full h-[400px] object-cover'/>
       </div>
      ))}
    </div>
  )
}

export default Slider