import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../API/axios";
import { API_KEY} from "../../Constants/Constants";
import RowpostData from "./RowPostData";
import Originals from './Originals';
function RowPost() {
  const [moviecategory, setmoviecategory] = useState([]);
  useEffect(() => {
    axios
      .get(
        `genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setmoviecategory(response.data.genres);
      })
      .catch((err) => {
        alert('Network Error')
      });

  }, []);
  return (
    <div className="row">
      {/* <Originals/> */}
      {moviecategory.map((obj, index) => (
        <div key ={index}>
          <h3>{obj.name}</h3>
          <RowpostData id={obj.id}/>
        </div>
      ))}
    </div>
  );
}

export default RowPost;
