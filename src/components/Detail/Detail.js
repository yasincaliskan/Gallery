import React from "react";
import "./detail.css";

const Detail = ({ photoDetail }) => {

  return (
    <div className="photo-detail">
      <img id="photo-detail" src={photoDetail.data.urls.regular} alt="" />
      <div className="detail-container">
        <div className="user">
          <img src={photoDetail.data.user.profile_image.large} alt="" />
          <h3>{photoDetail.data.user.first_name}</h3>
          <h1>{photoDetail.data.alt_description}</h1>
        </div>
      </div>
    </div>
  );
};

export default Detail;
