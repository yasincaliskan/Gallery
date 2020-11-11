const initState = {
  photos: [],
  page: 1,
};

const rootReducer = (state = initState, action) => {
  if (action.type === "SET_PHOTOS") {
    return {
      ...state,
      photos: action.photos.data.results,
    };
  } else if (action.type === "SET_INIT_PAGE") {
    return {
      ...state,
      page: 1,
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
