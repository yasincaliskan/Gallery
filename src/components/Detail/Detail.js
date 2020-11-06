// import React, { Component } from "react";
// import axios from "axios";
// import "./detail.css";
// import Photo from "./Photo";

// class Detail extends Component {
//   state = {
//     photo: {},
//   };

//   componentDidMount() {
//     const photoId = this.props.photoId;
//     axios.get(`https://api.unsplash.com/photos/${photoId}`, {
//         headers: {
//           Authorization:
//             "Client-ID Mm0ZkI5cVVOTWwfBKLCoQHmrUEC1Ecao15N1xsl6hN0",
//         },
//       })
//       .then((resultPhoto) => {
//         console.log("will mount: " + resultPhoto);
//         this.setState({
//           photo: resultPhoto,
//         });
//       });
//   }

//   render() {
//     // const returnDetail = this.state.photo == "undefined" ? "Loading" : <Photo photo={this.state.photo} />;
//     return (
//       // {returnDetail}
//       <div></div>
//     );
//   }
// }
// export default Detail;
