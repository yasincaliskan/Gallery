import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import Gallery from "./Gallery";
import "./photolist.css";

const PhotoList = ({ photos, getDetail, getPagination, getPhotoId }) => {
  //   if (photos.length > 0) {
  //     const mypagination = (
  //       <div className="pagination">
  //         <Pagination getPagination={getPagination} />
  //       </div>
  //     );
  //   }
  const num1 = 5;
  return (
    <div>
      <div className="gallery-container">
        {photos.map((photo) => (
          <Gallery
            key={photo.id}
            photo={photo}
            getDetail={getDetail}
            getPhotoId={getPhotoId}
          />
        ))}
      </div>
      <div className="pagination">
        <Pagination getPagination={getPagination} />
      </div>
    </div>
  );
};

export default PhotoList;
