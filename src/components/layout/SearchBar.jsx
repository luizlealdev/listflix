//Icon
import { FiSearch } from "react-icons/fi";

//Styles
import styles from "./SearchBar.module.css";

function SearchBar({ placeholder }) {
   return (
      <form className={styles.searchBar}>
         <input
            className={styles.searchBarInput}
            type="search"
            placeholder={placeholder}
         />
         <FiSearch />
      </form>
   );
}
export default SearchBar;
