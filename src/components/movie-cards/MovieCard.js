import React from 'react'; 
import './card-style.css';

const MovieCard = ({poster, title}) => {
  return (
    
    <div className='movie-card'>
      <img src={poster} alt='poster' className='poster'/>
      <h2 className='poster-title'>{title}</h2>
    </div>
  )
}

export default MovieCard;