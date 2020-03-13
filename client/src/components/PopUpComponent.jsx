import React from 'react';
import PhotoBox from './PhotoBox.jsx';
import ReviewsBox from './ReviewsBox.jsx';
import SmallDescription from './smallDescription.jsx';

const PopUpComponent = ({ item, photos, reviews }) => (
    <div>
        <PhotoBox photos={photos} />
        <SmallDescription item={item}/>
        <ReviewsBox reviews={reviews} />
    </div>
);

export default PopUpComponent;

