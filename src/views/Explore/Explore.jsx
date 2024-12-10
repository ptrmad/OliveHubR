import styles from "./Explore.module.css";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";
// import { data } from "../../data/data";
import { Link } from "react-router-dom";
import { ArticleCover } from "../../components/ArticleCover/ArticleCover";
import { DataContext } from "../../contexts/dataContext";

export function Explore() {
  const { data } = useContext(DataContext);

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
            <Link to={`/${item.item_id}`}>
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
