import { FaXmark } from "react-icons/fa6";

//styles
import styles from "./Window.module.css";

function Window({ title, urlId, closeFunc }) {
   document.documentElement.style.overflow = "hidden";

   return (
      <>
         <div className={styles.window}>
            <div className={styles.heading}>
               <p className={styles.title}>{title}</p>
               <FaXmark className={styles.closeIcon} onClick={closeFunc} />
            </div>
            <iframe
               className={styles.player}
               src={`https://www.youtube.com/embed/${urlId}`}
               title={title}
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowfullscreen
            ></iframe>
         </div>
         <span className={styles.overlay}></span>
      </>
   );
}
export default Window;
