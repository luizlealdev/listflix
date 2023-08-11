//Styles;
import styles from "./Infors.module.css";

function Infors({ releaseDate, runTime, genres, budget, revenue }) {
   return (
      <article className={styles.inforsContainer}>
         <span className={styles.title}>More information</span>
         <div className={styles.grid}>
            <div className={styles.section}>
               <span>Release Date</span>
               <p>
                  {releaseDate != null
                     ? releaseDate.replace(/-/g, "/")
                     : "No information"}
               </p>
            </div>
            <div className={styles.section}>
               <span>Runtime</span>
               <p>{runTime != 0 ? `${runTime}min` : "No information"}</p>
            </div>
            <div className={styles.section}>
               <span>Budget</span>
               <p>
                  {budget != null
                     ? `$${budget.toLocaleString("en-US")}`
                     : "No informations"}
               </p>
            </div>
            <div className={styles.section}>
               <span>Revenue</span>
               <p>
                  {revenue != null
                     ? `$${revenue.toLocaleString("en-US")}`
                     : "No informations"}
               </p>
            </div>
            <div className={styles.section}>
               <span>Genres</span>
               <p>
                  {genres.length > 0
                     ? genres.map(
                          (genre, i) =>
                             `${genre.name}${
                                i !== genres.length - 1 ? ", " : ""
                             }`
                       )
                     : "No informations"}
               </p>
            </div>
         </div>
      </article>
   );
}
export default Infors;
