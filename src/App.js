
import React, { useState } from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MovieTrailer from './Components/MovieTrailer';
import { movieData } from './Data';


const App = () => {
  const [movies, setMovies] = useState(movieData);

  const [filterCriteria, setFilterCriteria] = useState({ title: '', rating: '' });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (filterCriteria) => {
    setFilterCriteria(filterCriteria);
  };
  
  const [showAddMovie, setShowAddMovie] = useState(false); // set initial state for showing add movie modal

  const handleCloseAddMovie = () => setShowAddMovie(false); // function to handle closing add movie modal
  const handleShowAddMovie = () => setShowAddMovie(true); // function to handle showing add movie modal

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterCriteria.title.toLowerCase()) &&
      movie.rating >= filterCriteria.rating
    );
  });

  return (
    
    <Container>
      
    <Routes>
        <Route path="/:id" element={<MovieTrailer/>} />
    </Routes>
      <Row>
        <Col>
        <Button variant="primary" onClick={handleShowAddMovie}>
        Add Movie
      </Button>
      <AddMovie 
        movies={movies}
        setMovies={setMovies}
        visible={showAddMovie}
        handleClose={handleCloseAddMovie}
      />
      </Col>
      </Row>
      <Row>
        <Col>
          <Filter onFilter={handleFilter} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieList movies={filteredMovies} />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddMovie onAddMovie={handleAddMovie} />
        </Col>
      </Row>
    
  
    </Container>
  );
};

export default App;

