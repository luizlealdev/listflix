//Styles;
import styles from "./Infors.module.css";

function Infors({
  releaseDate,
  status,
  type,
  genres,
  createdBy,
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
          <span>Serie type</span>
          <p>{type != 0 ? type : "No information"}</p>
        </div>
        <div className={styles.section}>
          <span>Status</span>
          <p>
            {status != null
              ? status
              : "No informations"}
          </p>
        </div>
        <div className={styles.section}>
          <span>Created By</span>
          <p className={styles.flexItems}>
            {createdBy.length > 0
              ? createdBy.map((creator, i) => (
                <p key={creator.id}>{creator.name}</p>
              ))
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
                .slice(0, 5)
                .map((companie, i) => (
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
