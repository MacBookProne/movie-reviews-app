import React, { useState } from 'react';
import AddRatings from './AddRatings';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie, updateMovie }) => {

  // Function to handle rating submission
  const handleRating = (rating) => {
    updateMovie(movie.id, { ...movie, rating });
  };

  // Function to handle review submission
  const handleReviewSubmit = (reviewText) => {
    const newReview = { text: reviewText, rating: movie.rating };
    updateMovie(movie.id, { ...movie, reviews: [...movie.reviews, newReview] });
  };

  return (
    <div className="movie">
      {/* Movie content */}
      <AddRatings onRating={handleRating} />
      <ReviewForm onReviewSubmit={handleReviewSubmit} />
      <ReviewList reviews={movie.reviews} />
    </div>
  );
};
