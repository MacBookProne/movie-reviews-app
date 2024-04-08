import React from "react";
import AddRatings from "./AddRatings";
import "../App.css";

const MovieList = (props) => {
  return (
    <div className="container-fluid movie-reviews">
      <div className="row">
        {props.movies.map((movie, index) => (
          <div key={index} className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="image-container">
                {" "}
                {/* This div wraps the image and overlay */}
                <img
                  src={movie.Poster}
                  className="card-img-top img-fluid"
                  alt={`Poster of ${movie.Title}`}
                />
              </div>
              <div
                className="card-body"
                onClick={() => props.handleRatingsClick(movie)}
              >
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
              </div>
              <div className="overlay">
                <AddRatings />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
