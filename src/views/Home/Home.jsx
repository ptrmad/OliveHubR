import { Paralax } from "../../components/Paralax/Paralax";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.home}>
      <Paralax />
    </div>
  );
}
