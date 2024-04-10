import React, { useState } from "react";

const AddRatings = ({ onRating }) => {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);

  // Handle click on a star
  const handleClick = (star) => {
    setRating(star); // Update the rating
    onRating(star); // Pass the rating
  };

  return (
    <>
  <span className="mr-2">Add a Rating: </span>
  <div style={{ display: 'flex' }}>
    {stars.map((star, index) => (
      <svg
        className="bi bi-star-fill"
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={star <= rating ? "Gold" : "Grey"}
        viewBox="0 0 16 16"
        style={{ cursor: "pointer", marginLeft: "2px" }}
        onClick={() => handleClick(star)}
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.184-4.327c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.388 2.256z"/>

      </svg>
    ))}
  </div>
</>
  );
};
export default AddRatings;
