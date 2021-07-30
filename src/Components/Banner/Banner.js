import React, { useEffect, useState } from "react";
import "./Banner.css";
import "../RowPost/Rowpost.scss";
import axios from "../../API/axios";
import ModalVideo from "react-modal-video";
import { API_KEY, imageUrl } from "../../Constants/Constants";

function Banner() {
  const [movie, setmovie] = useState();
  const[ID,setlID]= useState();
  const[UrlID,setUrlID]= useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const randam = Math.floor(Math.random() * 20) + 1;
        setmovie(response.data.results[randam]);
        setlID(response.data.results[randam].id)
      });
  }, []);

  const movieTrailer=()=>
  {
   axios.get(`movie/${ID}/videos?api_key=${API_KEY}&language=en-US`).then(response=>
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
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="banner">
        <div className="content">
          <h1 className="title">{movie ? movie.title : ""}</h1>
          <div className="banner_buttons">
            <button className="button" onClick ={()=>movieTrailer()}>Play</button>
            <button className="button">My List</button>
          </div>
          <React.Fragment>
        <ModalVideo
        channel="youtube"
        youtube={{
            autoplay: 1,
            mute:1
          }}
        isOpen={isOpen}
        videoId={UrlID.key}
        onClose={() => setIsOpen(false)}
      />
    </React.Fragment>
          <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
