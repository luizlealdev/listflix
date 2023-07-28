import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardSkeleton } from "./CardSkeleton";
//Icon
import { HiPlus } from "react-icons/hi";

//Components
import Card from "./Card";

//Styles
import styles from "./List.module.css";

function List({ title, fetchUrl, quantityItems,textLink, linkPath }) {
   const [listData, setListData] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetch(fetchUrl, {
         method: "GET",
         headers: {
            accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQxNDVjMmRhZjAyNGY0OTg1MTcwY2U5MzJkYzc1MiIsInN1YiI6IjYzYWUxOWQ4N2VmMzgxMWY4ZGNkMDYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNozGWnwBIbnaMQMQQYd688m4FQDwT_wB-sHZDvSLLg",
         },
      })
         .then((res) => res.json())
         .then((data) => {
            setListData(data);
            setIsLoading(false);
            console.log(data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <section className={styles.list}>
         <div className={styles.listHeading}>
            <h2 className={styles.listTitle}>{title}</h2>
            {textLink && (
               <Link to={linkPath} className={styles.pathLink}>
                  <HiPlus />
                  {textLink}
               </Link>
            )}
         </div>
         <div className={styles.listGrid}>
            {isLoading && <CardSkeleton cards={quantityItems} />}
            {listData.results &&
               listData.results
                  .slice(0, quantityItems)
                  .map((item) => (
                     <Card
                        id={item.id}
                        key={item.id}
                        title={item.title ? item.title : item.name}
                        year={
                           item.release_date
                              ? item.release_date.slice(0, 4)
                              : item.first_air_date.slice(0, 4)
                        }
                        image={item.poster_path}
                        type={item.release_date ? "movie" : "serie"}
                     />
                  ))}
         </div>
      </section>
   );
}
export default List;