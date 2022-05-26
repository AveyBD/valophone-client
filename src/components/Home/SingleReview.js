import React from "react";

const SingleReview = ({ review }) => {
  console.log(review);
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          {review.rating} out of 5<div class="badge badge-secondary">NEW</div>
        </h2>
        <p>{review.review}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">{review.time}</div>
          <div class="badge badge-outline">{review.reviewer}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
