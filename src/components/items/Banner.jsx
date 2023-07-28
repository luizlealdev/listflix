import { useState, useEffect } from "react";
import styles from "./Banner.module.css";

//Skeleton loading
import { BannerSkeleton } from "./BannerSkeleton";

//Icon
import { FaStar } from "react-icons/fa";

function Banner({
   imageId: initialImageId,
   title: initialTitle,
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
   const title = bannerData?.title || initialTitle;
   const year = bannerData?.release_date?.slice(0, 4) || initialYear;
   const voteAverage = bannerData?.vote_average || initialVoteAverage;

   return (
      <>
         {fetchUrl !== undefined && isLoading && <BannerSkeleton />}
         {title && (
            <figure className={styles.bannerContainer}>
               <img
                  className={styles.bannerImg}
                  src={
                     imageId != null
                        ? `https://image.tmdb.org/t/p/original${imageId}`
                        : "https://i.ibb.co/d4F5nGV/no-image.png"
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
               </figcaption>
               <div className={styles.shadow}></div>
            </figure>
         )}
      </>
   );
}

export default Banner;