import React from "react";

const MovieList = (props) => {
    return (
      <div className='container-fluid movie-reviews'>
        <div className='row'>
          {props.movies.map((movie, index) => (
            <div key={index} className='col-md-4 col-lg-3 col-sm-6 mb-4'>
              <div className="card">
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <p className="card-rating">{movie.Rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default MovieList;
