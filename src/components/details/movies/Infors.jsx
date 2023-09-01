//Styles;
import styles from "./Infors.module.css";

function Infors({
  releaseDate,
  runTime,
  genres,
  budget,
  revenue,
  productionCompanies,
}) {
  return (
    <article className={styles.inforsContainer}>
      <div className="title">
        <span className="listHeadingFag">.</span>
        More information
      </div>
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
      </div>
      <div className={styles.grid}>
        <div className={styles.section}>
          <span>Genres</span>
          <p className={styles.flexItems}>
            {genres.length > 0
              ? genres.map((genre, i) => (
                <p key={genre.id}>{genre.name}</p>
              ))
              : "No informations"}
          </p>
        </div>
        <div className={styles.section}>
          <span>Production Companies</span>
          <p className={styles.flexItems}>
            {productionCompanies.length > 0
              ? productionCompanies
                .slice(0, 5).map((companie, i) => (
                  <p key={companie.id}>{companie.name}</p>
                ))
              : "No informations"}
          </p>
        </div>
      </div>
    </article>
  );
}
export default Infors;
