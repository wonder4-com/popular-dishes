import React from 'react';
import PhotoBox from './PhotoBox.jsx';
// import ReviewsBox from './ReviewsBox.jsx';
import SmallDescription from './smallDescription.jsx';

const PopUpComponent = ({ item, photos }) => (
    <div className="itemDescription">
        <PhotoBox photos={photos} />
        <div className="smallDescription">
            <SmallDescription item={item}/>
        </div>
    </div>
);

export default PopUpComponent;


// put back into line 10 later
//<ReviewsBox reviews={reviews} />