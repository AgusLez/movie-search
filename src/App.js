import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/nav/Nav';
import Filter from './components/filters/Filter';
import MovieCard from './components/movie-cards/MovieCard';

const App = () => {
  const [movie, setMovie] = useState([]);

  const handleSumbit = async (event) => {
    event.preventDefault()
    const title = event.target[0].value
    const url= 'http://www.omdbapi.com/?i=tt3896198&apikey=4281aec3'

    try{
      const res = await axios.get(url, {
      params: {
        s:title
      }
    })
    setMovie(res.data.Search)}
    catch(error){
      setMovie([])
      console.log('owo', error);
    } 
  }

  return(
    <div className={'main'}>
    
      <Nav handleSumbit={handleSumbit}/>

      <div className='content-container'>
        <div className='filter-container'>
          <Filter name='Género'/>
        </div>

        <div className='movie-container'>
          {
            movie.length && (
              movie.map(item => <MovieCard key={item.imdbID} poster={item.Poster} title={item.Title}/>)
            )
          }
        </div>
      </div>
    </div> 
  )
}

export default App;