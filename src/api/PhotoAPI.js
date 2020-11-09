import axios from "axios";
import { connect } from "react-redux";
import { setPhotos } from '../actions/searchActions';

const getPhotos = (query, page, collections) => {
  axios
    .get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        collections,
      },
      headers: {
        Authorization: "Client-ID Mm0ZkI5cVVOTWwfBKLCoQHmrUEC1Ecao15N1xsl6hN0",
      },
    })
    .then((resultPhotos) => {
      this.props.setPhotos(resultPhotos);
    })
    .catch((error) => {
      console.log(error);
    });
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPhotos: (photos) => dispatch(setPhotos(photos)),

    // setLoader: (isLoading) => dispatch(setLoader(isLoading)),
  };
};

export default connect(null, mapDispatchToProps)(getPhotos);
