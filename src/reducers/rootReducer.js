const initState = {
  photos: [],
  photoId: "",
  search: "",
  page: 1,
  isLoading: false,
};

const rootReducer = (state = initState, action) => {
  if (action.type === "GET_PHOTO") {
    return {
      ...state,
      photoId: action.id,
    };
  } else if (action.type === "SET_PHOTOS") {
    return {
      ...state,
      photos: action.photos.data.results,
    };
  } else if (action.type === "SET_INIT_PAGE") {
    return {
      ...state,
      page: 1,
    };
  } 
  else if (action.type === "SET_LOADING_STATE") {
    return {
      ...state,
      photos: action.isLoading,
    };
  }
   else if (action.type === "SET_PAGE_NUMBER") {
    const pageWay = action.pageWay;
    if (pageWay === "NEXT") {
      return {
        ...state,
        page: state.page + 1,
      };;
    } else if (pageWay === "PREV") { //TODO: page number can not be 0!!!!
      return {
        ...state,
        page: state.page - 1,
      };
    }
  }
  return state;
};

export default rootReducer;
