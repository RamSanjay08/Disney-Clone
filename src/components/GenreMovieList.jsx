import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from '../components/MovieList'

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.genere.map(({id,name},index) => index<=16 && (
        <div key={id} className='p-2 px-8 md:px-16'>
          <h2 className='text-[20px] text-white font-bold'>{name}</h2>
         <MovieList genreId={id} index_={index}/>
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList