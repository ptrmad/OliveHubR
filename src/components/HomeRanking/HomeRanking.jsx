import { HomeRankingItem } from "../HomeRankingItem/HomeRankingItem";
import styles from "./HomeRanking.module.css";
import FIRST from "../../assets/1stplace.svg";
import SECOND from "../../assets/2ndplace.svg";
import THIRD from "../../assets/3rdplace.svg";
import { data } from "../../data/data";
import { Link } from "react-router-dom";

export function HomeRanking() {
  const sortedData = data.sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className={styles.homeRanking}>
      <h2>TOP OLIVE OILS</h2>

      <div className={styles.homeRankingFlex}>
        {sortedData.map((item, index) => (
          <div key={item.id} className={styles.podium}>
            {index < 3 && (
              <img
                className={styles.award}
                src={[FIRST, SECOND, THIRD][index]}
              />
            )}
            <Link to={`/${item.itemId}`}>
              <HomeRankingItem
                key={item.itemId}
                imgSource={item.image}
                oliveName={item.name}
                oliveBrand={item.brand}
                oliveRating={item.rating}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
