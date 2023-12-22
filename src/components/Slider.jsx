import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const Slider = () => {
  const [movieList,setMovieList] = useState([])
  const elementRef = useRef()
  const screenWidth = window.innerWidth

  useEffect(()=> {
    getTrendingMovies()
  },[])

  const getTrendingMovies =() => {
    GlobalApi.getTrendingMovies.then(resp=> {
      console.log(resp.data.results);
      setMovieList(resp.data.results)
    })}

    const sliderRight = (element) => {
      element.scrollLeft+=screenWidth-110
    }

    const SliderLeft = (element) => {
      element.scrollLeft-=screenWidth-110
    }

  return (
    <div>
      <IoIosArrowBack className='hidden md:block absolute text-white text-[30px] mx-8 mt-[200px] cursor-pointer' onClick={()=>SliderLeft(elementRef.current)}/>
      <IoIosArrowForward className='hidden md:block absolute text-white text-[30px] mx-8 mt-[200px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto px-16 py-4 w-full scrollbar-none scroll-smooth' ref={elementRef}> 
      {movieList.map((item,index) => (
        <img src={IMAGE_BASE_URL + item.backdrop_path} alt="" className='min-w-full md:h-[420px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' key={index}/>
      ))}
    </div>
    </div>
  )
}

export default Slider