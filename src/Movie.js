import React,{Component} from 'react';
import Axios from 'axios';
import {GLOBAL} from './Global';
import star from './star.png'




class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            hasDetails: false,        
          };
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick()
    {

            Axios.get(`${GLOBAL.BASE_URL}movie/popular?api_key=${GLOBAL.API_KEY}&language=en-US&page=1`)
            .then(res => {
            this.setState({
                movies: res.data.results,
                hasDetails: true
            })
            });
    }

    render() { 
        let image = `https://image.tmdb.org/t/p/w500${this.props.imagePath}`;
        if(this.state.hasDetails)
        return (
            <div className="poster-details">
                    <img className="poster" src={image} />
                    <h2 className="movieTitle">{this.props.title}</h2>
                    <p className="rating"><img className="star" src={star}/> {this.props.voteAverage}/10</p>
                    <p className="overview">{this.props.overview}</p>
            </div>
        );
        else{
            return ( 
                <div className="poster-details">
                        <img className="poster" src={image}/>
                        <h2 className="movieTitle">{this.props.title}</h2>
                        <p className="rating"><img className="star" src={star}/> {this.props.voteAverage}/10</p>
                        <button onClick={this.handleClick}>See Details</button>
                </div>);
            }
        }
    }
 
export default Movie;