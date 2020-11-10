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
        Authorization: "Client-ID Mm0ZkI5cVVOTWwfBKLCoQHmrUEC1Ecao15N1xsl6hN0",
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
  console.log(photoId);
  await axios
    .get(`https://api.unsplash.com/photos/${photoId}`, {
      headers: {
        Authorization: "Client-ID Mm0ZkI5cVVOTWwfBKLCoQHmrUEC1Ecao15N1xsl6hN0",
      },
    })
    .then((resultPhoto) => {
      console.log(resultPhoto);
      callback(resultPhoto.data);

    });
};
