//Icon
import { FaRegBell } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

//Components
import Logo from "./Logo";
import SearchBar from "./SearchBar";

//Styles
import styles from "./NavBar.module.css";

function NavBar() {
   const toggleSearchBar = () => {
      document.getElementById("searchBar").classList.toggle("searchBarShown");
   }
   
   return (
      <header className={styles.navBar}>
         <Logo />
         <div className={styles.items}>
            <SearchBar
               action="/search"
               placeholder="Search for Movie or Series..."
               inputName="q"
               closeFunc={toggleSearchBar}
            />
            <FaRegBell className={styles.bellIcon} />
            <FiSearch className={styles.searchIcon} onClick={toggleSearchBar}/>
         </div>
      </header>
   );
}
export default NavBar;
