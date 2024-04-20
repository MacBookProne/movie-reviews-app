//imports
import React from "react";
import Review from './Review';


//array of review data
const ReviewList = ({ reviews }) => {
    return (
        <div className="review-list">
            {reviews.map((review, index) => (
            <Review key={index} review={review} />
    ))}
        </div>
    );
};

export default ReviewList;