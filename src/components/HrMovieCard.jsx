import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const HrMovieCard = ({ movie }) => {
  
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in cursor-pointer'>
    <img src={IMAGE_BASE_URL + movie.backdrop_path} alt="" className="w-[110px] md:w-[260px] rounded-lg hover:border-[4px] text-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer"/>
    <h2 className="w-[100px] md:w-[260px] text-white font-bold mt-3">{movie.title}</h2>
  </section>
  )
}

export default HrMovieCard