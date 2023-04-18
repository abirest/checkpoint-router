import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ title, description, posterURL, rating,videoURL}) => {
  return (
    <Card className='card' style={{ width: '18rem', height:'47rem'}} > 
      <Card.Img className='image' variant="top" src={posterURL} style={{ width: '18rem' }}/>
      <Card.Body>
        <Card.Title className='title'style={{ width: '15rem' }}><h3>{title}</h3></Card.Title>
        <Card.Text className='description' style={{ width: '16.5rem' }}>{description}</Card.Text>
        <Card.Text className='rating' style={{ width: '15rem' }}>{`Rating: ${rating}`} </Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default MovieCard;