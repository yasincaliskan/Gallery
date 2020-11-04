import React from 'react';
import Gallery from './Gallery';
import './photolist.css';

const PhotoList = ({photos}) => {
    const photoList = photos.map(photo => {
        return (
            <Gallery key={photo.id} photo={photo} />
        )
    });
    return (
        <div className="gallery-container">
            {photoList}
        </div>
    )
}

export default PhotoList;
