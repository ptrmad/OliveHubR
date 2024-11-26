import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";
import styles from "./TopBar.module.css";
import PROFILE from "../../assets/profile.svg";
import FAVOURITES from "../../assets/favourite.svg";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <NavBar />
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.userIcons}>
        <NavLink to="../favourites">
          <img src={FAVOURITES} alt="" />
          <p>Favourites</p>
        </NavLink>
        <NavLink to="../profile">
          <img src={PROFILE} alt="" />
          <p>My Profile</p>
        </NavLink>
      </div>
    </div>
  );
}
