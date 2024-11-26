import styles from "./Explore.module.css";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";
import { data } from "../../data/data";
import { Link } from "react-router-dom";
import { ArticleCover } from "../../components/ArticleCover/ArticleCover";

export function Explore() {
  const { search } = useContext(SearchContext);
  const searchResults = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className={styles.explore}>
      <SearchBar />
      <div className={styles.listContainer}>
        {searchResults.map((item) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}
