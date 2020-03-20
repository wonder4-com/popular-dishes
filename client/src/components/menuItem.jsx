import React from 'react';
import Star from './star.jsx';
import Camera from './camera.jsx';

const MenuItem = ({ data }) => {
    return (
        <div className="menuItem">
            <div className="smallSquarePhoto">
                <img src={(data.photos.length > 0) ? data.photos[0].url : 'https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png'} ></img>
            </div>
            
            <div className="squarePhotoDescription"> 
                <div className="dish_name">
                {data.item.dish_name}
                </div>
                <div className="itemDescriptionSquare">
                    {data.item.description}
                </div>
                <Star className="star" /> <div className="numberReviews">{(data.item.review_count > 1) ? data.item.review_count + " reviews" : data.item.review_count + " review"}</div>
                { (data.photos.length) ?  <Camera className="camera" /> : null}
                <div className="numberPhotosSquareDescription">{(data.photos.length > 1) ? data.photos.length + " photos" : (data.photos.length === 0) ? null : data.photos.length + " photo"}</div>
            </div>
            <div className="itemPrice">
                ${data.item.price}
            </div>
        </div>
    )
}


export default MenuItem;