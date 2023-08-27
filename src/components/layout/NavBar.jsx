//Icon
import { FaRegBell, FaBars } from "react-icons/fa6";

//Components
import Logo from "./Logo";
import SearchBar from "./SearchBar";

//Styles
import styles from "./NavBar.module.css";

function NavBar() {
   return (
      <header className={styles.navBar}>
         <Logo />
         <div className={styles.items}>
            <SearchBar
               action="/search"
               placeholder="Search for Movie or Series..."
               inputName="q"
            />
            <FaRegBell className={styles.bellIcon} />
            <FaBars className={styles.menuIcon}/>
         </div>
      </header>
   );
}
export default NavBar;
