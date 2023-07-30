//Icon
import { FiSearch } from "react-icons/fi";

//Styles
import styles from "./SearchBar.module.css";

function SearchBar({ placeholder, action, inputName }) {
   return (
      <form
         className={styles.searchBar}
         method="GET"
         action={action ? action : ""}
      >
         <input
            className={styles.searchBarInput}
            type="search"
            placeholder={placeholder}
            name={inputName}
            id={inputName}
         />
         <FiSearch />
      </form>
   );
}
export default SearchBar;
