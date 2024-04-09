import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">

      <p>{review.text}</p>
      <small>Rating: {review.rating} stars</small>
    </div>
  );
};

export default Review;
