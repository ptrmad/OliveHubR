import { Link } from "react-router-dom";
import { FavouritesContext } from "../../contexts/FavouritesContext";
import styles from "../Explore/Explore.module.css";

import { useContext } from "react";
import { ArticleCover } from "../../components/ArticleCover/ArticleCover";

export function Favourites() {
  const { favourites, setFavourites } = useContext(FavouritesContext);

  function handleRemoveFromFavourites(item) {
    setFavourites(
      favourites.filter((favourite) => favourite.itemId !== item.itemId)
    );
  }
  return (
    <div className={styles.favourites}>
      <h2>Favourites</h2>
      <div className={styles.listContainer}>
        {favourites.map((item) => (
          <div key={item.id} className={styles.list}>
            <Link to={`/${item.itemId}`}>
              <ArticleCover
                isMain={false}
                key={item.id}
                imgSource={item.image}
                oliveName={item.name}
                oliveBrand={item.brand}
                oliveRev={item.review.slice(0, 100)}
                oliveRating={item.rating}
              />
            </Link>
            <button
              className={styles.removeButton}
              onClick={() => handleRemoveFromFavourites(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
