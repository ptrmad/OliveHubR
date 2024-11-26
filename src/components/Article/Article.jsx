// import { useState } from "react";
import styles from "./Article.module.css";

export function Article({ children }) {
  // const [page, setPage] = useState(0)

  return <div className={styles.article}>{children}</div>;
}
