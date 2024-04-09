import React, { useState } from "react";

const ReviewForm = ({ onReviewSubmit }) => {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit(review);
    setReview(""); // Reset the review input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="mb-3">
        <label htmlFor="reviewInput" className="form-label">
          Your Review
        </label>
        <textarea
          className="form-control"
          id="reviewInput"
          rows="3"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
