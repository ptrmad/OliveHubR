import styles from "./HomeRankingItem.module.css";
import DROP from "../../assets/olivedrop.png";

export function HomeRankingItem({
  imgSource,
  oliveName,
  oliveBrand,
  oliveRating,
}) {
  return (
    <div className={styles.homeRankingItem}>
      <div className={styles.textSection}>
        <p className={styles.name}>{oliveName}</p>
        <p className={styles.brand}>{oliveBrand}</p>
        <p className={styles.rating}>
          {oliveRating} <img className={styles.olivedrop} src={DROP} alt="" />
        </p>
      </div>

      <img className={styles.olivePicture} src={imgSource} alt="" />
    </div>
  );
}
