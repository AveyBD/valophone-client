import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const HomeReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://valophone.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-3xl text-primary font-bold text-center mt-7">
          Customer Review
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[...reviews]
            .reverse()
            .slice(0, 6)
            .map((review) => (
              <SingleReview key={review._id} review={review}></SingleReview>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
