import styles from './Dropdown.module.css';

export default function Dropdown(props) {
  return (
    <div className={styles.dropdown}>
      <div>
        <span className={styles.sort}>Sort by:</span>
        <span className={styles.selected}>Most Relevant</span>
      </div>
      <i className={`material-icons ${styles.icon}`}>expand_more</i>
    </div>
  );
}
