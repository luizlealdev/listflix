import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";

//Icon
import { FaStar } from "react-icons/fa";

//Styles
import styles from "./Reviews.module.css";

function Reviews({ fetchUrl }) {
   const [reviewsData, setReviewsData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [reviewsContent, setReviewsContent] = useState([]);

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
            setReviewsData(data.results);
            setIsLoading(false);
            const contents = data.results.map((review) => review.content);
            setReviewsContent(contents);
         })
         .catch((err) => console.log(err));
   }, []);

   const handleClick = (reviewsContentIndex) => {
      const reviewContentText = document.getElementById(
         `review-${reviewsContentIndex}`
      );
      const reviewShowBtn = document.getElementById(
         `reviewShowBtn-${reviewsContentIndex}`
      );

      const showAllAttribute = reviewContentText.getAttribute("showall");
      const showAllState = showAllAttribute === "true";

      showAllState
         ? ((reviewContentText.innerText = reviewsContent[reviewsContentIndex]),
           (reviewShowBtn.innerText = "Show less"))
         : ((reviewContentText.innerText =
              reviewsContent[reviewsContentIndex].slice(0, 250) + "..."),
           (reviewShowBtn.innerText = "Show all"));

      reviewContentText.setAttribute("showall", !showAllState);
   };

   return (
      <section className={styles.reviewsContainer}>
         <h3>Reviews</h3>
         {isLoading &&
            Array(3)
               .fill(0)
               .map((_, i) => (
                  <div key={i}>
                     <div className={styles.skeletonFlex}>
                        <Skeleton
                           circle
                           style={{
                              width: "50px",
                              height: "50px",
                              alignSelf: "flex-start",
                           }}
                        />
                        <Skeleton
                           style={{
                              position: "absolute",
                              left: "55px",
                              top: "12px",
                              width: "45%",
                           }}
                        />
                        <Skeleton
                           style={{
                              position: "absolute",
                              left: "55px",
                              top: "2.2rem",
                              height: "10px",
                              width: "50%",
                           }}
                        />
                     </div>
                     <div>
                        <Skeleton count={4} />
                     </div>
                  </div>
               ))}
         {reviewsData &&
            reviewsData.map((review, i) => (
               <div className={styles.review} key={review.id}>
                  <div className={styles.reviewAutorInforsContainer}>
                     <img
                        className={styles.reviewAutorImg}
                        src={
                           review.author_details.avatar_path != null
                              ? `https://themoviedb.org/t/p/w90_and_h90_face${review.author_details.avatar_path}`
                              : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        }
                        alt={`${review.author} Image`}
                     />
                     <div className={styles.reviewAutorInfors}>
                        <h4>
                           {`Review by ${review.author}`}
                           <span className={styles.reviewAutorVote}>
                              <FaStar />
                              {review.author_details.rating}
                           </span>
                        </h4>
                        <div className={styles.reviewAutorInforsSecundary}>
                           <span className={styles.reviewDateInfor}>
                              {`Writed by ${review.author} at
                              21 de Junho de 2023`}
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className={styles.reviewContent}>
                     <span
                        className={styles.reviewContentText}
                        id={`review-${i}`}
                        showall="true"
                     >
                        {reviewsContent[i].length >= 300
                           ? `${reviewsContent[i].slice(0, 250).toString()}...`
                           : reviewsContent[i]}
                     </span>
                     {reviewsContent[i].length >= 300 && (
                        <span
                           className={`${styles.reviewShowBtn}`}
                           id={`reviewShowBtn-${i}`}
                           onClick={() => handleClick(i)}
                        >
                           Show all
                        </span>
                     )}
                  </div>
               </div>
            ))}
      </section>
   );
}
export default Reviews;
