import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../App.css";

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
    onFilter({ title: event.target.value, rating: ratingFilter });
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(event.target.value);
    onFilter({ title: titleFilter, rating: event.target.value });
  };

  return (
    <div className='filter'>
      <Navbar className="header" variant="dark" >
              
                <Navbar.Brand href="/">Movies List </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link>
                    <NavLink className="navlink" exact to="/">Movies</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink className="navlink" exact to="/about">About</NavLink>
                </Nav.Link>
                <Nav.Link>             
                </Nav.Link>   
                </Nav>
                <Container/>
      <input type="text" placeholder="Filter by title" value={titleFilter} onChange={handleTitleFilterChange} />
      <input type="number" placeholder="Filter by rating" value={ratingFilter} onChange={handleRatingFilterChange} />
    
  
    </Navbar>
    </div>
  );
};

export default Filter;