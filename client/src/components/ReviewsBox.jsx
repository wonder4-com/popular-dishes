import React from 'react';
import Review from './Review.jsx';

const ReviewsBox = ({ reviews }) => (
    <div>
    <div className="reviewsLength">
            Reviews ({reviews.length})
    </div>
        <div className="ReviewsInColumn">
        {reviews.map((review) => <Review data={review}/>)}
        </div>
    </div>
);

export default ReviewsBox;