import React from 'react';
import PhotoBox from './PhotoBox.jsx';
// import ReviewsBox from './ReviewsBox.jsx';
import SmallDescription from './smallDescription.jsx';

const PopUpComponent = ({ item, photos }) => (
    <div>
        <PhotoBox photos={photos} />
        <SmallDescription item={item}/>
    </div>
);

export default PopUpComponent;


// put back into line 10 later
//<ReviewsBox reviews={reviews} />