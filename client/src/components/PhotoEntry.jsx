import React from 'react';

const PhotoEntry = ({ photo }) => (
    <div>
        <img src={photo.url} className="photo" width="200"></img>
    <div className="photo-caption">{photo.caption}</div>
    </div>
);


export default PhotoEntry;