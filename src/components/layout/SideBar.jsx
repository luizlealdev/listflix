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
   const [genreData, setGenreData] = useState({});

   const handleClick = (e) => {
      setGenreMenuState((current) => !current);
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
      <div className={styles.SideBarContainer}>
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
                  <span
                     onClick={handleClick}
                     className={`${styles.navLink} ${
                        genreMenuState ? styles.genreMenuOpened : ""
                     }`}
                  >
                     <FaRocket />
                     Categories
                     <FaChevronDown
                        className={`${styles.genreMenuIcon} ${
                           genreMenuState ? styles.opened : ""
                        }`}
                     />
                  </span>
                  <ul className={styles.genreItems}>
                     {genreData.genres &&
                        genreData.genres.map((genre) => (
                           <li key={genre.id}>
                              <Link to={`/movies/genre/${genre.id}`}>
                                 {genre.name}
                              </Link>
                           </li>
                        ))}
                  </ul>
               </li>
            </ul>
         </nav>
         <div className={styles.textGuia}>Configurations</div>
         <div className={styles.selectLanguageContainer}>
            <ul className={styles.configItems}>
               <li className={styles.configItem}>
                  <span
                     className={`${styles.configLink} ${
                        genreMenuState ? styles.languageMenuOpened : ""
                     }`}
                  >
                     <FaLanguage />
                     Language
                     <FaChevronDown
                        className={`${styles.languageMenuIcon} ${
                           genreMenuState ? styles.opened : ""
                        }`}
                     />
                  </span>
                  <ul className={styles.languageItems}>
                     <li className={styles.languageItem}>
                        <img
                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/44px-Flag_of_the_United_States.svg.png"
                           alt="United States Flag"
                           className={styles.languageFlagIcon}
                        />
                        English-US
                     </li>
                     <li className={styles.languageItem}>
                        <img
                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/44px-Flag_of_Brazil.svg.png"
                           alt="Brazil Flag"
                           className={styles.languageFlagIcon}
                        />
                        Português-BR
                     </li>
                     <li className={styles.languageItem}>
                        <img
                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/44px-Flag_of_Spain.svg.png"
                           alt="Spain Flag"
                           className={styles.languageFlagIcon}
                        />
                        Español-ES
                     </li>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   );
}
export default SideBar;
