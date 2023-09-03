import { useState, useEffect } from "react";
import styles from "./Banner.module.css";

//Skeleton loading
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//Icon
import { FaStar } from "react-icons/fa";

function Banner({
   imageId: initialImageId,
   title: initialTitle,
   overview: initialOverview,
   year: initialYear,
   voteAverage: initialVoteAverage,
   fetchUrl,
}) {
   const [isLoading, setIsLoading] = useState(true);
   const [bannerData, setBannerData] = useState({});

   useEffect(() => {
      if (typeof fetchUrl !== "undefined") {
         fetch(fetchUrl, {
            method: "GET",
            headers: {
               accept: "application/json",
               Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQxNDVjMmRhZjAyNGY0OTg1MTcwY2U5MzJkYzc1MiIsInN1YiI6IjYzYWUxOWQ4N2VmMzgxMWY4ZGNkMDYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNozGWnwBIbnaMQMQQYd688m4FQDwT_wB-sHZDvSLLg",
            },
         })
            .then((res) => res.json())
            .then((data) => {
               const result = data.results ? data.results[0] : data;
               setBannerData(result);
               setIsLoading(false);
            })
            .catch((err) => console.log(err));
      }
   }, [fetchUrl]);

   const imageId = bannerData?.backdrop_path || initialImageId;
   const title = bannerData?.title || bannerData?.name || initialTitle;
   const overview = bannerData.overview || initialOverview;
   const year = bannerData?.release_date?.slice(0, 4) || bannerData.first_air_date?.slice(0,4) || initialYear;
   const voteAverage = bannerData?.vote_average || initialVoteAverage;

   return (
      <>
         {fetchUrl !== undefined && isLoading && <Skeleton className={styles.bannerImg}/>}
         {title && (
            <figure className={styles.bannerContainer}>
               <img
                  className={styles.bannerImg}
                  src={
                     imageId != null
                        ? `https://image.tmdb.org/t/p/w500${imageId}`
                        : "https://i.ibb.co/Z1vrqbj/no-image-banner.jpg"
                  }
                  alt={`${title} Banner`}
               />
               <figcaption className={styles.bannerInfors}>
                  <div className={styles.topInfo}>
                     <p>
                        <FaStar />
                        {voteAverage && voteAverage.toString().length > 3
                           ? voteAverage.toString().slice(0, 3)
                           : voteAverage}
                     </p>
                     <p>{`(${year})`}</p>
                  </div>
                  <h1>{title}</h1>
                  <p className={styles.overview}>
                     {overview && overview.length >= 200
                        ? `${overview.slice(0, 200)}...`
                        : overview}
                  </p>
               </figcaption>
               <div className={styles.shadow}></div>
            </figure>
         )}
      </>
   );
}

export default Banner;
