//Styles;
import styles from "./DetailsBanner.module.css";

function DetailsBanner({ imageId, title, year, voteAverage }) {
   return (
      <figure className={styles.detailsBannerContainer}>
         <img
            className={styles.detailsBannerImg}
            src={`https://image.tmdb.org/t/p/original${imageId}`}
            alt={`${title} Banner`}
         />
         <figcaption className={styles.details}>
            <h1 className={styles.detailsTitle}>{title}</h1>
            <h3 className={styles.detailsReleaseDate}>{year}</h3>
            <p className={styles.detailsVoteContainer}>
               <h3>{voteAverage}</h3>
               <span> /10</span>
            </p>
         </figcaption>
         <div className={styles.shadow}></div>
      </figure>
   );
}
export default DetailsBanner;
