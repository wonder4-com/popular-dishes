import React from 'react';
import Star from './star.jsx';

const StarBox = (props) => {
    var string = "rating-" + props.rating;
    var arr = [0,1,2,3,4];
    return (
        <div className="fiveStars">
        {arr.map((box, i) => (i < props.rating) ? <Star className={string}/> : <Star className="no-rating"/>)}
        </div>
    )
}


export default StarBox;