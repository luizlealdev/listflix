//Styles
import styles from "./Container.module.css";

function Container(props) {
   return (
      <main className={styles.container}>
         <div className={styles.spacing}>{props.children}</div>
      </main>
   );
}
export default Container;
