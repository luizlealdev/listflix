import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//Hooks
import { useState, useEffect } from "react";
import { scrollElementHorizontally } from "../../utils/functions";

//Icons
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

//Styles;
import styles from "./Cast.module.css";

function Cast({ id }) {
   const [castData, setCastData] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
         method: "GET",
         headers: {
            accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQxNDVjMmRhZjAyNGY0OTg1MTcwY2U5MzJkYzc1MiIsInN1YiI6IjYzYWUxOWQ4N2VmMzgxMWY4ZGNkMDYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNozGWnwBIbnaMQMQQYd688m4FQDwT_wB-sHZDvSLLg",
         },
      })
         .then((res) => res.json())
         .then((data) => {
            setCastData(data);
            setIsLoading(false);
            console.log(data.cast);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <section className={styles.CastContainer}>
         <div className={styles.heading}>
            <span className={styles.title}>Cast</span>
            <div className={styles.scrollButtons}>
               <FaChevronLeft
                  onClick={() => scrollElementHorizontally("castGrid", -100)}
               />
               <FaChevronRight
                  onClick={() => scrollElementHorizontally("castGrid", 100)}
               />
            </div>
         </div>
         <div className={styles.castGrid} id="castGrid">
            {isLoading &&
               Array(10)
                  .fill(0)
                  .map((_, i) => (
                     <div className={styles.skeletonCastCard} key={i}>
                        <Skeleton style={{ width: "60px", height: "60px" }} />
                        <Skeleton
                           style={{
                              marginTop: "3px",
                              borderRadius: "8px",
                              width: "100%",
                              height: "13px",
                           }}
                        />
                     </div>
                  ))}
            {castData.cast &&
               castData.cast.slice(0, 15).map((profile) => (
                  <figure className={styles.castCard} key={profile.id}>
                     <div className={styles.castCardImgBox}>
                        <img
                           className={styles.castCardImg}
                           src={
                              profile.profile_path != null
                                 ? `https://image.tmdb.org/t/p/w132_and_h132_face${profile.profile_path}`
                                 : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                           }
                           alt={`${profile.name} Image`}
                        />
                     </div>
                     <figcaption className={styles.castInfo}>
                        <p className={styles.actorName}>{profile.name}</p>
                        <p className={styles.actorCharacter}>
                           {profile.character}
                        </p>
                     </figcaption>
                  </figure>
               ))}
            {castData.cast && castData.cast.length <= 0 && (
               <p>There is no information about the cast of this movie</p>
            )}
         </div>
         <span className={styles.shadow}></span>
      </section>
   );
}
export default Cast;
