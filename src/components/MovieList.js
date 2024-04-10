import React from "react";
import AddRatings from "./AddRatings";
import ReviewForm from "./ReviewForm";
import "../App.css";

const MovieList = (props) => {
  const handleReviewSubmit = (movieId, review) => {
    console.log(`Review for movie ${movieId}: ${review}`);
  };

  const handleRating = (rating) => {
    console.log(`Rating: ${rating}`);
  };

  return (
    <div className="container-fluid movie-reviews">
      <div className="row">
        {props.movies.map((movie, index) => (
          <div key={index} className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="image-container">
                {" "}
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
                <AddRatings onRating={handleRating} />
                <ReviewForm
                  movieId={movie.id}
                  onReviewSubmit={handleReviewSubmit}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
