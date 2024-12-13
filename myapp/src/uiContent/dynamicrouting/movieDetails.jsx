import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../profile/profileCard";
import axios from "axios";
import Spinner from "react-bootstrap/esm/Spinner";

export default function MovieDetails() {
  // const movies = [
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

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);
  const { id } = useParams();
  console.log(id)
  console.log(movies, "helloooooooooooo");

  const movie = movies.find((a, b) => a.id == id);
  console.log(movie);

    if(!movie){return(<Spinner/>)}
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
     
      <ProfileCard img={movie.image} title={movie.title} />
    </div>
  );
}
