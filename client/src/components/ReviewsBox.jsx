import React from 'react';
import Review from './Review.jsx';

const ReviewsBox = ({ reviews }) => (
    <div>
        {reviews.map((review) => <Review data={review}/>)}
    </div>
);

export default ReviewsBox;