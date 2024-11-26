import { Link } from "react-router-dom";
import styles from "./Error.module.css";

export function Error() {
  return (
    <div className={styles.error}>
      <h2>Something went wrong!</h2>
      <p>The page you requested was not found.</p>
      <Link to="/home">Go back to Home</Link>
    </div>
  );
}
