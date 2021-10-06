import styles from './Filter.module.css';

export default function Filter(props) {
  return (
    <div className={`${styles.filter} ${props.className}`}>
      <span>{props.children}</span>
      <i className={`material-icons ${styles.icon}`}>expand_more</i>
    </div>
  );
}
