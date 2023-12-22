import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HrMovieCard from './HrMovieCard';

const MovieList = ({genreId,index_}) => {
  const [movieList,setMovieList] = useState([])
  const elementRef = useRef(null)

  useEffect(()=> {
    getMoviesByGenreId()
  },[])

  const getMoviesByGenreId = () => {
    GlobalApi.getMoviesByGenreId(genreId).then(response => {
      // console.log(response.data.results);
      setMovieList(response.data.results)
    })
  }

  const sliderRight = (element) => {
    element.scrollLeft+=500
  }

  const sliderLeft = (element) => {
    element.scrollLeft-=500
  }

  return (
    <div className='relative'>
        <IoIosArrowBack className={`hidden md:block absolute text-white text-[50px] p-2 z-10 mt-[150px] cursor-pointer`} onClick={()=>sliderLeft(elementRef.current)}/>
    <div ref={elementRef} className='flex gap-8 overflow-x-auto scrollbar-none scroll-smooth py-5 px-3' >
      {movieList.map((item,index) => (
        <>
        {index_%3==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item} key={index} />}
        </>
        ))}
    </div>
        <IoIosArrowForward className='hidden md:block absolute text-white text-[50px] mt-[150px] z-10 cursor-pointer right-0 top-0 p-2' onClick={()=>sliderRight(elementRef.current)}/>
    </div>
  )
}

export default MovieList