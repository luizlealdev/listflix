import PlayIcon from "../../assets/img/play.png";
//import { Link } from "react-router-dom";
import { useState } from "react";

//Styles
import styles from "./Card.module.css";

function Card({ id, title, image, year, type }) {
   const linkTitle = `/${type}/${title
      .toLowerCase()
      .replace(/\s/g, "-")}/${id}`;

   const handleClick = () => {
      window.location.href = linkTitle;
   };

   return (
      <figure className={styles.card}>
         <div className={styles.cardImgBox}>
            <div to={linkTitle} onClick={handleClick}>
               <img
                  className={styles.cardImg}
                  src={
                     image != null
                        ? `https://image.tmdb.org/t/p/w185${image}`
                        : "https://i.ibb.co/d4F5nGV/no-image.png"
                  }
                  alt={`${title} Poster`}
               />
               <img className={styles.playIcon} src={PlayIcon} alt="Play" />
               <span className={styles.cardYear}>{year}</span>
            </div>
         </div>
         <figcaption className={styles.cardTitle}>
            <p
               className={styles.cardTitleLink}
               to={linkTitle}
               onClick={handleClick}
            >
               {title}
            </p>
         </figcaption>
      </figure>
   );
}
export default Card;
