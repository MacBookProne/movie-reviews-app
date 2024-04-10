import React, { useState } from "react";

const ReviewForm = ({ onReviewSubmit }) => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]); // State to hold submitted reviews

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit(review); // Assuming you want to keep this for additional side effects
    setReviews((prevReviews) => [...prevReviews, review]); // Add the current review to the reviews array
    setReview(""); // Reset the review input after submission
  };

  return (
    <>
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
      <div className="reviews-list">
        {reviews.map((submittedReview, index) => (
          <div key={index} className="review">
            <p>{submittedReview}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewForm;
