import { useContext } from "react";
import { FavouritesContext } from "../../contexts/FavouritesContext";
import USERIMAGE from "../../assets/profilepic.jpg";
import styles from "./MyProfile.module.css";

export function MyProfile() {
  const { favourites } = useContext(FavouritesContext);

  const userData = {
    name: "user1",
    id: 123456,
    numberOfFavourites: favourites.length,
    dateOfRegistration: "15.05.2024",
  };
  return (
    <div className={styles.myProfile}>
      <div>
        <img src={USERIMAGE} />
      </div>
      <div className={styles.profileData}>
        <p>Profile data</p>
        <div>Username: {userData.name}</div>
        <div>UserID: {userData.id}</div>
        <div>Number of favourites: {userData.numberOfFavourites}</div>
        <div>Date of registration: {userData.dateOfRegistration}</div>
        <div>Delete account</div>
      </div>
    </div>
  );
}
