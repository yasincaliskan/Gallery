export const setPhotoId = (photoId) => {
  return {
    type: "SET_PHOTO_ID",
    photoId: photoId,
  };
};

export const setPhotos = (photos) => {
  return {
    type: "SET_PHOTOS",
    photos: photos,
  };
};
