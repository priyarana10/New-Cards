import React from 'react';
import "./Gener.css";

const Gener = ({ movies }) => {
  return (
    <div className="container">
      <div className="main">
        {movies.map((movie) => (
          <div className="lists" key={movie.name}> 
            <img src={movie.images} alt={movie.name} className="photos" />
            <h3 className="names">{movie.name}</h3>
            <p className="years">{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gener;