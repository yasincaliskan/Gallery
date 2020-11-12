import axios from "axios";

export const getPhotos = async (query, page, collection, callback) => {
  await axios
    .get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        collection,
      },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_PHOTO_API_KEY}`,
      },
    })
    .then((resultPhotos) => {
      callback(resultPhotos);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPhoto = async (photoId, callback) => {
  await axios
    .get(`https://api.unsplash.com/photos/${photoId}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_PHOTO_API_KEY}`,
      },
    })
    .then((resultPhoto) => {
      callback(resultPhoto.data);
    });
};
