//Icon
import { FiSearch, FiX } from "react-icons/fi";

//Styles
import styles from "./SearchBar.module.css";
import navBarStyles from "./NavBar.module.css";

function SearchBar({ placeholder, action, inputName, closeFunc }) {

   const submitForm = () => {
      const searchBar = document.querySelector("form");
      searchBar.submit();
   };

   return (
      <form
         className={`${styles.searchBar} ${navBarStyles.searchBar}`}
         id="searchBar"
         method="GET"
         action={action ? action : ""}
      >
         <FiSearch onClick={submitForm} />
         <input
            className={styles.searchBarInput}
            type="search"
            placeholder={placeholder}
            name={inputName}
            id={inputName}
         />
         <FiX className={styles.closeIcon} onClick={closeFunc}/>
      </form>
   );
}
export default SearchBar;
