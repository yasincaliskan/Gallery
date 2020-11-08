export const setPhotos = (photos) => {
  return {
    type: "SET_PHOTOS",
    photos: photos,
  };
};

export const setPageNumber = (pageWay) => {
  return {
    type: "SET_PAGE_NUMBER",
    pageWay: pageWay,
  };
};

export const setInitPage = () => {
  return {
    type: "SET_INIT_PAGE"
  };
};

export const setLoader = (isLoading) => {
  return {
    type: "SET_LOADING_STATE",
    isLoading: isLoading,
  };
};
