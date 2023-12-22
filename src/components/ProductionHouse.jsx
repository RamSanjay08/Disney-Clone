import React from 'react'
import Disney from '../assets/images/disney.png'
import Marvel from '../assets/images/marvel.png'
import NationalG from '../assets/images/nationalG.png'
import Pixar from '../assets/images/pixar.png'
import StarWar from '../assets/images/starwar.png'
import DisneyVid from '../assets/videos/disney.mp4'
import MarvelVid from '../assets/videos/marvel.mp4'
import NationalVid from '../assets/videos/national-geographic.mp4'
import PixarVid from '../assets/videos/pixar.mp4'
import StarwarVid from '../assets/videos/star-wars.mp4'

const ProductionHouse = () => {

  const ProductionHouseList = [
    {
      id: 1,
      image: Disney,
      video: DisneyVid
    },
    {
      id: 2,
      image: Marvel,
      video: MarvelVid
    },
    {
      id: 3,
      image: NationalG,
      video: NationalVid
    },
    {
      id: 4,
      image: Pixar,
      video: PixarVid
    },
    {
      id: 5,
      image: StarWar,
      video: StarwarVid
    }
  ]

  return (
    <div className='flex gap-2 md:gap-5 p-2 px:5 md:px-16'>
      {ProductionHouseList.map(({id,image,video}) => (
        <div key={id} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 duration-300 transition-all ease-in-out cursor-pointer shadow-xl shadow-black'>
          <img src={image} className='w-full z-[1]' />
          <video src={video} autoPlay loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50' /> 
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse