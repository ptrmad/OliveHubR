import { useContext } from "react";
import styles from "./SearchBar.module.css";
import { SearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const { setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/explore`);
        }}
      >
        <input
          placeholder="Search"
          className={styles.searchBar}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
