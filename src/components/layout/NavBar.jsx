//Icon
import { FaRegBell } from "react-icons/fa6";

//Components
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserPic from "../../assets/img/user-picture.jpg";

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
            <FaRegBell />
            <img className={styles.userPicture} src={UserPic} alt="User" />
         </div>
      </header>
   );
}
export default NavBar;
