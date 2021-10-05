import styles from './IconButton.module.css';

export default function IconButton(props) {
  return (
    <button className={styles.iconButton}>
      <i className='material-icons'>{props.icon}</i>
      {props.children}
    </button>
  );
}
