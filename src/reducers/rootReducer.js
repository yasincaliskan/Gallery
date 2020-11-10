const initState = {
  photos: [],
  photo: {},
  search: "",
  page: 1,
  isLoading: false,
};

const rootReducer = (state = initState, action) => {
  if (action.type === "SET_PHOTO") {
    console.log(action.photo);
    return {
      ...state,
      photo: action.photo,
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
  } else if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "SET_LOADED") {
    return {
      ...state,
      isLoading: false,
    };
  } else if (action.type === "SET_PAGE_NUMBER") {
    const pageWay = action.pageWay;
    if (pageWay === "NEXT") {
      return {
        ...state,
        page: state.page + 1,
      };
    } else if (pageWay === "PREV") {
      if (state.page === 1) {
        return {
          ...state,
          page: 1,
        };
      } else {
        return {
          ...state,
          page: state.page - 1,
        };
      }
    }
  }
  return state;
};

export default rootReducer;
