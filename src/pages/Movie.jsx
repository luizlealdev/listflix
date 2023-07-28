import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Styles
import styles from "./Movie.module.css";

//Components
import Banner from "../components/items/Banner";
import Infors from "../components/details/Infors";
import Cast from "../components/details/Cast";
import List from "../components/items/List";

//Skeleton Loading components
import { BannerSkeleton } from "../components/items/BannerSkeleton";
import { InforsSkeleton } from "../components/details/InforsSkeleton";

function Movie() {
   const { name, id } = useParams();
   const [movieData, setMovieData] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   let titleName = name[0].toUpperCase() + name.substr(1);
   titleName = titleName.replace("-", " ")
   document.title = `${titleName} - ListFlix`;

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}`, {
         method: "GET",
         headers: {
            accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQxNDVjMmRhZjAyNGY0OTg1MTcwY2U5MzJkYzc1MiIsInN1YiI6IjYzYWUxOWQ4N2VmMzgxMWY4ZGNkMDYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNozGWnwBIbnaMQMQQYd688m4FQDwT_wB-sHZDvSLLg",
         },
      })
         .then((res) => res.json())
         .then((data) => {
            setMovieData(data);
            setIsLoading(false);
            console.log(data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div>
         {isLoading && (
            <>
               <BannerSkeleton />
               <InforsSkeleton />
            </>
         )}
         {Object.values(movieData).length > 0 && (
            <>
               <Banner
                  imageId={movieData.backdrop_path}
                  title={movieData.title}
                  year={movieData.release_date.slice(0, 4)}
                  voteAverage={
                     movieData.vote_average.toString().length > 3
                        ? movieData.vote_average.toString().slice(0, 3)
                        : movieData.vote_average.toString()
                  }
               />
               <Infors
                  releaseDate={movieData.release_date}
                  runTime={movieData.runtime}
                  genres={movieData.genres}
                  overview={movieData.overview}
               />
            </>
         )}
         <Cast id={id} />
         <List
            title="Similar content"
            fetchUrl={`https://api.themoviedb.org/3/movie/${id}/similar`}
            quantityItems={15}
         />
      </div>
   );
}
export default Movie;
