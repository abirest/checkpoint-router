import React from 'react'
import '../App.css';
import { Link, useParams } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import {movieData} from '../Data';
import YouTube from 'react-youtube'

const MovieTrailer = () => {
    const {id} = useParams();
   let idmovie = Number(id);
    const movie = movieData.find(el => el.id === idmovie);
     
    return (
        <div>
            <Button style={{background: "transparent"}} variant="secondary"> 
                <Link  exact to="/"> Go Back to Home Page </Link> 
            </Button>
            <div className="ContentModal">
                <img className="poster" src={movie.posterURL} alt="poster" />
            
            <div className="ContentModal_about">
             
             <YouTube videoId={movie.videoURL}  />
            <span className="ContentModal_title">Title : {movie.title} ({movie.date}) </span>

            </div>
            </div>
            <div className="ContentModal_description">
                
                   <p> {movie.description}</p>
                  </div>
            
        </div>
    );
};

export default MovieTrailer