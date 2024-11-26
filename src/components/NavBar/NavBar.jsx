import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import HOME from "../../assets/home.svg";
import TOP from "../../assets/trophy.svg";
import EXPLORE from "../../assets/explore.svg";

export function NavBar() {
  return (
    <div className={styles.NavBar}>
      <NavLink to="/home" className={styles.navLink}>
        <img src={HOME} alt="" /> <p>Home</p>
      </NavLink>
      <NavLink to="../best" className={styles.navLink}>
        <img src={TOP} alt="" /> <p>Ranking</p>
      </NavLink>
      <NavLink to="../explore" className={styles.navLink}>
        <img src={EXPLORE} alt="" /> <p>Explore</p>
      </NavLink>
    </div>
  );
}
