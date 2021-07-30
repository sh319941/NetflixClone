// import React, { useEffect, useState } from "react";
// import axios from "../../API/axios";
// import { API_KEY, imageUrl } from "../../Constants/Constants";
// import ModalVideo from "react-modal-video";
// import "../Video/popup.scss";
// import "./RowPost.css";
// import Popup from "../Video/popup";
// function Originals() {
//   const [original, setOriginal] = useState([]);
//   const [UrlID, setUrlID] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`discover/tv?api_key=${API_KEY}&with_networks=213&page=2`)
//       .then((response) => {
//         setOriginal(response.data.results);
//       })
//       .catch((err) => {
//         alert("Network Error");
//       });
//   }, []);

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: { autoplay: 0 },
//   };
//   const movieTrailer = (id) => {
//     axios
//       .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
//       .then((response) => {
//         if (response.data.results.length !== 0) {
//           setUrlID(response.data.results[0]);
//           setIsOpen(true)
//          // <Popup videoId={UrlID.key}/>;
//         } else {
//           alert("Trailer Not Available");
//         }
//       }).catch((err) => {
//         alert("Trailer Not Available");
//       });
//   };

//   return (
//     <div className="row">
//       <h2>Netflix Originals</h2>
//       <div className="posters">
//         {original.map((obj, index) => (
//           <img
//             onClick={() => movieTrailer(obj.id)}
//             className="poster"
//             alt=""
//             src={`${imageUrl + obj.backdrop_path}`}
//           ></img>
//         ))}
//       </div>
//       <React.Fragment>
//       <ModalVideo
//         channel="youtube"
//         allow="autoplay"
//         isOpen={isOpen}
//         videoId={UrlID.key}
//         onClose={() => setIsOpen(false)}
//       />
//     </React.Fragment>
//     </div>
//   );
// }

// export default Originals;
