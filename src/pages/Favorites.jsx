import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import { MovieCard } from '../components/MovieCard'

export const Favorites = () => {

  const {favorites}=useMovieContext()

  if(favorites.length>0){
    return(
      <div className='favorites'>
        <h2>Your Favorites</h2>
        <div className='movies-grid'>
          {favorites.map( movie => (<MovieCard movie={movie} key={movie.id}/>)
          )}
        </div>
      </div>
    )    
  }

  return (
    <div className='favorites-empty'>
      <h2>No Favorite movies yet!!</h2>
      <p>Start adding movies to your favorites and they wil appear here...</p>
    </div>
  )
}
