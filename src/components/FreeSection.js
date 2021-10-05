import styles from './FreeSection.module.css';

export default function FreeSection() {
  return (
    <div className={styles.freeSection}>
      <div>
        <div className={styles.col}>
          <span className={styles.text}>Free Standard Delivery Over £49</span>
          <span className={styles.text}>Furniture Delivery £9.95</span>
        </div>
        <div className={styles.col}>
          <span className={styles.text}>Click &amp; Collect for Free</span>
          <span className={styles.text}>In as little as 1 hour</span>
        </div>
        <div className={styles.col}>
          <span className={styles.text}>Free &amp; Flexible Returns</span>
          <span className={styles.text}>For your peace of mind</span>
        </div>
        <div className={styles.col}>
          <span className={styles.text}>This Week's Special Buys</span>
          <span className={styles.text}>Get them before they're gone</span>
        </div>
      </div>
    </div>
  );
}
