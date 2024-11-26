import LANDSCAPE1 from "../../images/Landscape1.png";
import LANDSCAPE2 from "../../images/Landscape2.png";
import LANDSCAPE3 from "../../images/Landscape3.png";
import styles from "./Paralax.module.css";
import { HomeRanking } from "../HomeRanking/HomeRanking";
import { NewRev } from "../NewRev/NewRev";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";
import { SearchBar } from "../SearchBar/SearchBar";

export function Paralax() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.paralax}>
        <TopBar className={styles.topbar} />
        <img className={styles.landscape3} src={LANDSCAPE3} alt="" />
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
        <img className={styles.landscape2} src={LANDSCAPE2} alt="" />

        <img className={styles.landscape1} src={LANDSCAPE1} alt="" />
        <div className={styles.olives}>
          <div className={styles.gradient}>
            <NewRev />
          </div>
          <HomeRanking />
        </div>
      </div>
      <Footer />
    </div>
  );
}
