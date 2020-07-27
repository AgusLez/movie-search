import React from 'react';
import './nav-style.css';

const Nav = ({handleSumbit}) => {

    return(
      <nav className='nav'>
        <div className='logo-container'>
          <img src={require('../../icons/movie-logo.png')} alt='home-logo' className='home-logo'/>
          <h3 className='title'>Movies</h3>
        </div>

        <form onSubmit= {handleSumbit}>
          <input
            type='text'
            className='input'
            placeholder='Buscar pelicula...'
          />
          <button className='button'>
            <img src={require('../../icons/search-icon.png')} alt='search' className='search-button'/>
          </button>
         </form> 
      </nav>
    )
  
}

export default Nav;