//Icons
import { FaCalendar, FaClock, FaMessage, FaRocket } from "react-icons/fa6";

//Styles;
import styles from "./Infors.module.css";

function Infors({ releaseDate, runTime, genres, overview }) {
   return (
      <article className={styles.inforsContainer}>
         <div>
            <div className={styles.flexInfors}>
               <p className={styles.inforsSection}>
                  <strong>
                     <FaCalendar />
                     Release Date:
                  </strong>
                  <span>{releaseDate}</span>
               </p>
               <p className={styles.inforsSection}>
                  <strong>
                     <FaClock />
                     Time:
                  </strong>
                  <span>{`${runTime}min`}</span>
               </p>
            </div>
            <p className={styles.inforsSection}>
               <strong>
                  <FaRocket />
                  Genres:
               </strong>
               <span>{genres && genres.map((genre) => `${genre.name}, `)}</span>
            </p>
            <p className={styles.overview}>
               <strong>
                  <FaMessage />
                  Overview:
               </strong>
               <span>{overview}</span>
            </p>
         </div>
      </article>
   );
}
export default Infors;
