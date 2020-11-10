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


