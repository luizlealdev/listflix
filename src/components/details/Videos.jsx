import { useState, useEffect } from "react";

//icon
import { FaPlay } from "react-icons/fa6";

//Styles
import styles from "./Videos.module.css";

function Videos({ id }) {
   const [videosData, setVideosData] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
         method: "GET",
         headers: {
            accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQxNDVjMmRhZjAyNGY0OTg1MTcwY2U5MzJkYzc1MiIsInN1YiI6IjYzYWUxOWQ4N2VmMzgxMWY4ZGNkMDYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNozGWnwBIbnaMQMQQYd688m4FQDwT_wB-sHZDvSLLg",
         },
      })
         .then((res) => res.json())
         .then((data) => {
            setVideosData(data);
            setIsLoading(false);
            console.log(data.results);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <section className={styles.videosContainer}>
         <span className={styles.title}>Videos</span>
         <div className={styles.videosGrid}>
            {videosData.results &&
               videosData.results.map((video) => (
                  <figure key={video.id} className={styles.video}>
                     <div className={styles.imgBox}>
                        <img
                           src={`https://i.ytimg.com/vi_webp/${video.key}/hqdefault.webp`}
                           alt={`${video.name}`}
                        />

                        <span className={styles.playIcon}>
                           <FaPlay />
                        </span>
                     </div>
                     <figcaption className={styles.videoTitle}>
                        {video.name}
                     </figcaption>
                  </figure>
               ))}
         </div>
         <span className={styles.shadow}></span>
      </section>
   );
}
export default Videos;
