import { useState, useEffect } from "react";
import { scrollElementHorizontally } from "../../utils/functions";

//Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//icons
import { FaPlay, FaChevronRight, FaChevronLeft } from "react-icons/fa6";

//Components
import Window from "../layout/Window";

//Styles
import styles from "./Videos.module.css";

function Videos({ id, type }) {
   const [videosData, setVideosData] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [showWindow, setShowWindow] = useState(false);
   const [videoInfo, setVideoInfo] = useState({});

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
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

   const windowState = (title = "N/A", url = "N/A") => {
      const info = {
         videoTitle: title,
         videoUrl: url,
      };
      setVideoInfo(info);
      setShowWindow((current) => !current);
      document.documentElement.style.overflow = "auto";
   };

   return (
      <>
         <section className={styles.videosContainer}>
            <div className={styles.heading}>
               <span className="title">
                  <span className="listHeadingFag"></span>
                  Videos
               </span>
               {videosData.results && videosData.results.length > 5 && (
                  <div className={styles.scrollButtons}>
                     <FaChevronLeft
                        onClick={() =>
                           scrollElementHorizontally("videosGrid", -200)
                        }
                     />
                     <FaChevronRight
                        onClick={() =>
                           scrollElementHorizontally("videosGrid", 200)
                        }
                     />
                  </div>
               )}
            </div>
            <div className={styles.videosGrid}>
               {isLoading &&
                  Array(15)
                     .fill(0)
                     .map((_, i) => (
                        <div className={styles.video} key={i}>
                           <Skeleton className={styles.imgBox} />
                           <Skeleton className={styles.videoTitle} />
                        </div>
                     ))}
            </div>
            <div className={`${styles.videosGrid} hideScrollBar`} id="videosGrid">
               {videosData.results &&
                  videosData.results.map((video) => {
                     {
                        if (video.site !== "Vimeo") {
                           return (
                              <figure key={video.id} className={styles.video}>
                                 <div className={styles.imgBox}>
                                    <img
                                       src={`https://i.ytimg.com/vi_webp/${video.key}/hqdefault.webp`}
                                       alt={`${video.name}`}
                                    />
                                    <span
                                       className={styles.playIcon}
                                       onClick={() =>
                                          windowState(video.name, video.key)
                                       }
                                    >
                                       <FaPlay />
                                    </span>
                                 </div>
                                 <figcaption className={styles.videoTitle}>
                                    {video.name}
                                 </figcaption>
                              </figure>
                           );
                        }
                     }
                  })}
            </div>
            {videosData.results && videosData.results.length <= 0 && (
               <p>There is no videos</p>
            )}
         </section>
         {showWindow && (
            <Window
               title={videoInfo.videoTitle}
               urlId={videoInfo.videoUrl}
               closeFunc={windowState}
            />
         )}
      </>
   );
}
export default Videos;
