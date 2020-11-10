export const setPhoto = (photo) => {
  return {
    type: "SET_PHOTO",
    photo: photo,
  };
};

export const setPhotos = (photos) => {
  return {
    type: "SET_PHOTOS",
    photos: photos,
  };
};
