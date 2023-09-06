import React, { useEffect, useState } from 'react';

function StarRating({ rating }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < rating; i++) {
      starElements.push(
        <img
          key={i}
          alt=""
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      );
    }
    setStars(starElements);
  }, [rating]);

  return <div className="star-wrapper">{stars}</div>;
}

export default StarRating;
