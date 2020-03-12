import React from 'react';
import Review from './Review.jsx';

const ReviewsBox = ({ Reviews }) => (
    <div>
        {Reviews.map((review) => <Review data={review}/>)}
    </div>
);

export default ReviewsBox;