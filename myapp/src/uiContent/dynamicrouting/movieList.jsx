import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";

export default function MovieList() {
  
    const[movies,setMovies]=useState([])
  
//     const movies = [
//     {
//       id: "1",
//       movie: "pushpa",
//       cast: ["AA", "RASHMIKA", "SUKUMAR", "FAFA"],
//       image:
//         "https://static.toiimg.com/thumb/msid-88517653,imgsize-46146,width-400,resizemode-4/88517653.jpg",
//     },
//     {
//       id: "2",
//       movie: "DEVARA",
//       cast: ["NTR", "JAHNAVI", "SHIVA", "PRAKASH RAJ"],
//       image:
//         "https://static.moviecrow.com/marquee/devara-review---quite-a-boring-tale/235197_thumb_665.jpg",
//     },
//     {
//       id: "3",
//       movie: "OG",
//       cast: ["PSPK", "Priyanka", "Sujith", "Prabhas"],
//       image:"https://www.hindustantimes.com/ht-img/img/2024/02/06/1600x900/OG_Release_Date_1707219303126_1707219320068.jpg"
//     },
//     {
//       id: "4",
//       movie: "SALAAR",
//       cast: ["PRABHAS", "SHRUTHI", "PRASHANTH NEEL", "PRUDHVI RAJ"],
//       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0p7b7LjUZPic6uzQpOSXOVH1w2bVEXwJWsw&s"
//     },
//     {
//       id: "5",
//       movie: "kanguva",
//       cast: ["suriya", "disha", "karthi"],
//       image:"https://m.media-amazon.com/images/M/MV5BMzBiZDAxY2EtNDc0NS00Y2E0LTk1MGQtODU3MzRmOTVlOTk3XkEyXkFqcGc@._V1_.jpg"
//     },
//   ];

    useEffect(()=>{


        axios.get('https://fakestoreapi.com/products').then((res)=>
        setMovies(res.data))
    },[])
  return (
    <div>
        
      {movies.length>0?(movies.map((a, b) => (
        <ul>
          <li key={b}>
            
            <Link to={`/movies/${a.id}`}> {a.title}</Link>
          </li>
        </ul>
      ))):<Spinner/>}
    </div>
  );
}
