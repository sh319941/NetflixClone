import React, { useEffect, useState } from "react";
import axios from "../../API/axios";
import "./RowPost.css";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import ModalVideo from "react-modal-video";
import "../RowPost/Rowpost.scss";

function RowPostData(props) {
  const [movie, setMovie] = useState([]);
  const[UrlID,setUrlID]= useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`discover/movie?api_key=${API_KEY}&with_genres=${props.id}`)
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((err) => {
        //alert('Network Error')
      });
  }, []);

  const movieTrailer=(id)=>
  {
   axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>
    {
      if(response.data.results.length!==0)
      {
        setUrlID(response.data.results[0])
        setIsOpen(true)
      }
      else
      {
        alert('Trailer Not available')
      }
    }).catch((err) => {
      alert("Trailer Not Available");
    });
  }


  return (
    <div>
    <div className="posters">
      {movie.map((obj, index) => (
        <div key={index}>
          <h6>{obj.original_title}</h6>
          <img onClick ={()=>movieTrailer(obj.id)}
            className="smallposter"
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          ></img>

        </div>
      ))}
          </div>
          <React.Fragment>
        <ModalVideo
        channel="youtube"
        allow="autoplay"
        isOpen={isOpen}
        videoId={UrlID.key}
        onClose={() => setIsOpen(false)}
      />
    </React.Fragment>
    </div>
  );
}

export default RowPostData;
