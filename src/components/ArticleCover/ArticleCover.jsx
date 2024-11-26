import styles from "./ArticleCover.module.css";

export function ArticleCover({
  imgSource,
  isMain,
  oliveName,
  oliveBrand,
  oliveRev,
}) {
  return (
    <div className={`${isMain ? styles.articleCover : styles.articleCoverSub}`}>
      <img className={styles.image} src={imgSource} />
      {isMain ? (
        <div className={styles.text}>
          <p className={styles.name}>{oliveName}</p>
          <p className={styles.brand}>{oliveBrand}</p>
          <p className={styles.revTeaser}>{oliveRev}[...]</p>
        </div>
      ) : (
        <div className={styles.subTextfield}>
          <p className={styles.name}>{oliveName}</p>
          <p className={styles.brand}> {oliveBrand}</p>
          <p className={styles.revTeaser}>{oliveRev}[...]</p>
        </div>
      )}
    </div>
  );
}
