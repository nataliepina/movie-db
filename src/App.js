import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Movie from './Movie';
import moviedb from'./moviedb.png'
import {GLOBAL} from './Global';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount()
  {
    Axios.get(`${GLOBAL.BASE_URL}movie/popular?api_key=${GLOBAL.API_KEY}&language=en-US&page=1`)
    .then(res =>
    {  
      this.setState({
        movies: res.data.results
      });
    });
    
  }

  render() {
    return (
      <div className="movie-list-wrapper">
       <img className="movie-logo" src={moviedb}/>
        <div class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#tv">Tv Shows</a>
          <a href="#discover">More</a>
        </div>
        <header>
          <div className="title">
            <h1>Popular Titles</h1>
          </div>
        </header>
        { 
          this.state.movies.map(movie => {
            return (
            <div className="movie-poster">
              <Movie 
                key={movie.id} 
                id={movie.id} 
                title={movie.title} 
                voteAverage={movie.vote_average} 
                imagePath={movie.poster_path}
                overview={movie.overview}
              />
            </div>)
          })
          }
      </div>
    );
  }
}

export default App;
