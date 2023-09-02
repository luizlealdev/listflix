import { Link } from "react-router-dom";
import { BiSolidMovie } from "react-icons/bi";
import {
   FaHouse,
   FaVideo,
   FaRocket,
   FaChevronDown,
   FaLanguage,
} from "react-icons/fa6";

//Hooks
import { useState, useEffect } from "react";

//Styles
import styles from "./SideBar.module.css";

function SideBar() {
   const [genreMenuState, setGenreMenuState] = useState(false);
   const [languageMenuState, setLanguageMenuState] = useState(false);
   const [genreData, setGenreData] = useState({});

   const handleGenreMenu = (e) => {
      setGenreMenuState((current) => !current);
   };

   const handleMenuLanguage = () => {
      setLanguageMenuState((current) => !current);
   };

   useEffect(() => {
      fetch("https://api.themoviedb.org/3/genre/movie/list", {
         method: "GET",
         headers: {
            accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQxNDVjMmRhZjAyNGY0OTg1MTcwY2U5MzJkYzc1MiIsInN1YiI6IjYzYWUxOWQ4N2VmMzgxMWY4ZGNkMDYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNozGWnwBIbnaMQMQQYd688m4FQDwT_wB-sHZDvSLLg",
         },
      })
         .then((res) => res.json())
         .then((data) => setGenreData(data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className={styles.sideBarContainer}>
         <div className={styles.sideBarContent}>
            <p className={styles.textGuia}>Navigation</p>
            <nav>
               <ul className={styles.navItems}>
                  <li className={styles.navItem}>
                     <Link to="/" className={styles.navLink}>
                        <FaHouse />
                        Home
                     </Link>
                  </li>
                  <li className={styles.navItem}>
                     <Link to="/movies" className={styles.navLink}>
                        <FaVideo />
                        Movies
                     </Link>
                  </li>
                  <li className={styles.navItem}>
                     <Link to="/series" className={styles.navLink}>
                        <BiSolidMovie />
                        Series
                     </Link>
                  </li>
                  <li className={styles.navItem}>
                     <Link to="/categories" className={styles.navLink}>
                        <FaRocket />
                        Categories
                     </Link>
                  </li>
               </ul>
            </nav>
            <div className={styles.textGuia}>Configurations</div>
         </div>
      </div>
   );
}
export default SideBar;

