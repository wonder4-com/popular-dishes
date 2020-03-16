import React from 'react';

const PhotoEntry = ({ photo }) => (
    <div className="cropper">
        <img src={photo.url} className="photo"></img>
    <div className="photo-caption">{photo.caption}</div>
    </div>
);


export default PhotoEntry;