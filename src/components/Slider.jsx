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
    <div className='flex overflow-x-auto px-16 py-4 w-full scrollbar-none'> 
      {movieList.map((item,index) => (
        <img src={IMAGE_BASE_URL + item.backdrop_path} alt="" className='min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md' key={index}/>
      ))}
    </div>
  )
}

export default Slider