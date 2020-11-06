const initState = {
  photos: [],
  photoId: "",
  search: "",
  page: 1,
};

const rootReducer = (state = initState, action) => {
  if (action.type === "GET_PHOTO") {
    return {
      ...state,
      photoId: action.id,
    };
  } else if (action.type === "SET_PHOTOS") {
    const photos = action.photos;
    return {
      ...state,
      photos: photos.data.results,
    };
  }
  return state;
};



export default rootReducer;
